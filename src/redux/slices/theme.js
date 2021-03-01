import themes from "utils/themes";

const themeKeys = Object.keys(themes);
const initialState = {
    theme: themes[themeKeys[0]],
    themeId: themeKeys[0],
};

const themeReducer = (state = initialState, action) => {

  switch (action.type) {

  case "theme/toggleTheme":

      let nextThemeIndex = themeKeys.indexOf(state.themeId) + 1;

      let newThemeId;

      if (nextThemeIndex == themeKeys.length) {
 	  newThemeId = themeKeys[0];
      } else {
 	  newThemeId = themeKeys[nextThemeIndex];
      }

      return {
 	  ...state,
 	  theme: themes[newThemeId],
 	  themeId: newThemeId,
      };

  default:
      return state;

  }
};

export const toggleTheme = () => ({
  type: "theme/toggleTheme"
});

export const themeSelector = () => (state) => state.theme.theme;

export const themeIdSelector = () => (state) => state.theme.themeId;

export default themeReducer;
