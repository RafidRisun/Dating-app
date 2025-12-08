import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
	theme: Theme;
	setTheme: (t: Theme) => Promise<void>;
	toggleTheme: () => Promise<void>;
	/** Remove saved preference and revert to system color scheme */
	resetThemeToSystem: () => Promise<void>;
	isHydrated: boolean;
};

const STORAGE_KEY = 'user_theme_preference';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [theme, setThemeState] = useState<Theme>(() => {
		const sys = Appearance.getColorScheme();
		return (sys === 'dark' ? 'dark' : 'light') as Theme;
	});
	const [isHydrated, setHydrated] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const stored = await AsyncStorage.getItem(STORAGE_KEY);
				if (stored === 'light' || stored === 'dark') {
					setThemeState(stored);
				}
			} catch {
				// ignore
			} finally {
				setHydrated(true);
			}
		})();
	}, []);

	const setTheme = async (t: Theme) => {
		try {
			await AsyncStorage.setItem(STORAGE_KEY, t);
		} catch {
			// ignore
		}
		setThemeState(t);
	};

	const toggleTheme = async () => {
		await setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	const resetThemeToSystem = async () => {
		try {
			await AsyncStorage.removeItem(STORAGE_KEY);
		} catch {
			// ignore
		}
		const sys = Appearance.getColorScheme();
		setThemeState(sys === 'dark' ? 'dark' : 'light');
	};

	return (
		<ThemeContext.Provider
			value={{ theme, setTheme, toggleTheme, resetThemeToSystem, isHydrated }}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
	return ctx;
};

export default ThemeContext;
