import React, {
    FC, createContext, useState, useEffect, useMemo, useCallback, useContext,
} from 'react';
import { isPerferDarkMode, setItemToLocalStorage, getItemFromLocalStorage } from '../utils/window';

enum ColorModeEnum {
	dark = 'dark',
	light = 'light',
}

const COLOR_MODE_STORAGE_KEY = 'colorMode';

interface ColorModeState {
	isDarkMode: boolean;
	toggleColorMode: { (): void } | null;
}
interface ColorModeState {
	isDarkMode: boolean;
	toggleColorMode: { (): void } | null;
}

const ColorModeIntialContext: ColorModeState = {
    isDarkMode: true,
    toggleColorMode: null,
};

const ColorModeContext = createContext(ColorModeIntialContext);

export const useColorMode = () => {
    const context = useContext(ColorModeContext);
    return context;
};

export const ColorModeProvider: FC = ({ children }) => {
    const [colorMode, setColorMode] = useState(ColorModeEnum.dark);
    const isDarkMode = colorMode === ColorModeEnum.dark;

    const setColorModeFromStorage = (colorModeFromStorage: string) => {
        colorModeFromStorage === ColorModeEnum.dark
            ? setColorMode(ColorModeEnum.dark)
            : setColorMode(ColorModeEnum.light);
    };

    const setPreferColorMode = () => {
        const _isPreferDarkMode = isPerferDarkMode();
        if (_isPreferDarkMode) {
            setColorMode(ColorModeEnum.dark);
            setItemToLocalStorage(JSON.parse(ColorModeEnum.dark));
        } else {
            setColorMode(ColorModeEnum.light);
            setItemToLocalStorage(JSON.parse(ColorModeEnum.dark));
        }
    };

    useEffect(() => {
        const colorModeFromStorage = getItemFromLocalStorage(COLOR_MODE_STORAGE_KEY);
        colorModeFromStorage !== null ? setColorModeFromStorage(colorModeFromStorage) : setPreferColorMode();
    }, []);

    useEffect(() => {
        setItemToLocalStorage({ key: COLOR_MODE_STORAGE_KEY, value: colorMode });
    }, [colorMode]);

    const toggleColorMode = useCallback(() => {
        setColorMode((prev) => {
            return prev === ColorModeEnum.dark ? ColorModeEnum.light : ColorModeEnum.dark;
        });
    }, []);

    const context = {
        isDarkMode,
        toggleColorMode,
    };

    return <ColorModeContext.Provider value={context}>{children}</ColorModeContext.Provider>;
};
