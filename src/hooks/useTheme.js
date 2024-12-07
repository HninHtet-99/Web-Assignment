import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function useTheme() {
  let contexts = useContext(ThemeContext);
  // console.log("contexts", contexts);
  if (contexts === undefined) {
    new Error("Context api should be used in context component");
  }
  return contexts;
}
