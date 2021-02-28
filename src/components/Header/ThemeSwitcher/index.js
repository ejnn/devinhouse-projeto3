import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, themeSelector } from "redux/slices/theme";

import { SThemeSwitcher } from './ThemeSwitcher.styled';

export default function ThemeSwitcher() {

  const dispatch = useDispatch();

  const theme = useSelector(themeSelector());

  return (
      <SThemeSwitcher onClick={() => dispatch(toggleTheme())}>
	  { (theme.theme == "lightTheme") ?'🌛' :'🌞' }
      </SThemeSwitcher>
  );
}
