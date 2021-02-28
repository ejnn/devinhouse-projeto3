const lightTheme = {
  colors: {
    primary: "#8000FF",
    fainted: "#EBD7FF",
    darkGray: "#9E9E9E",
    gray: "#E5E5E5",
    lightGray: "#F4F4F4",
    text: "#000",
    background: "#FFF",
    secondLayer: "#FFF"
  }
}

const initialState = {
  theme: "light",
  currentTheme: lightTheme,
};

const themeReducer = (state = initialState, action) => {

  switch (action.type) {

    default:
      return state;

  }
};

const themeSelector = () => (state) => state.theme.currentTheme;

export { themeSelector };

export default themeReducer;
