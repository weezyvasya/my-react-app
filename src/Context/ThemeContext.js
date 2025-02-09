import { createContext } from "react";

const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: function () {}
})




export { ThemeContext }