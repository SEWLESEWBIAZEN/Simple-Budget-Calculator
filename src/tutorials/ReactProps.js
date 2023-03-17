import React, { useState, useEffect, useContext } from 'react';
import Toobar from './Toolbar'

const ReactProps = () =>
{
    const themes = {
        light: {
            foreground: "#000000",
            background: "#eeeeee"
        },
        dark: {
            foreground: "#ffffff",
            background: "#222222"
        }
    };
    const ThemeContext = React.createContext(themes.light);
    return (
        <ThemeContext.Provider value={themes.dark}>
            const themes = {
                light: {
                foreground: "#000000",
            background: "#eeeeee"
        },
            dark: {
                foreground: "#ffffff",
            background: "#222222"
        }
    };
            const ThemeContext = React.createContext(themes.light);
            < Toolbar />
        </ThemeContext.Provider>

    );



}
export default ReactProps;

