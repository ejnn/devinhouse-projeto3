const lightTheme = {
  colors: {
    primary: "#8000FF",
    primaryGradient: "#8000FF",
    fainted: "#EBD7FF",
    background: "#E5E5E5",
    secondLayer: "#FFF",
    thirdLayer: "#F4F4F4",
    text: "#000",
    textContrast: "#FFF",
    boxShadow: "#00000080",
    placeHolder: "#9E9E9E",
  },
  theme: "lightTheme"
};

const darkTheme = {
  colors: {
    primary: "#BFDBFE",
    primaryGradient: "linear-gradient(150deg, #2980B9 0%, #BFDBFE 100%)",
    fainted: "#0000",
    background: "#111827",
    secondLayer: "#1F2937",
    thirdLayer: "#374151",
    text: "#BFDBFE",
    textContrast: "#111827",
    boxShadow: "#00000080",
    placeHolder: "#BFDBFE",
  },
  theme: "darkTheme",
}

const themes = {
  "light": lightTheme,
  "dark": darkTheme,
};

export default themes;
