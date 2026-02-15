import { useContext } from "react";
import { ThemeContext } from "../context/constants";

export const useTheme = () => useContext(ThemeContext);
