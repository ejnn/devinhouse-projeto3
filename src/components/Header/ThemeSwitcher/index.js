import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, themeSelector } from "redux/slices/theme";

import { SThemeSwither } from './ThemeSwitcher.styled';

export default function ThemeSwither() {

  const theme = useSelector(themeSelector());
  const dispatch = useDispatch();

  

  return (
    <SThemeSwither onClick={() => {
      console.log(theme);
      dispatch(toggleTheme())
    }}>
      { (theme.theme == "lightTheme")
      ?'🌛'
      :'🌞'
      }
    </SThemeSwither>
  )
}
