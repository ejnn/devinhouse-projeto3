import { useSelector } from "react-redux";
import { themeSelector } from "redux/slices/theme.js";
import { ThemeProvider } from "styled-components";

function App() {
    const theme = useSelector(themeSelector());

    return (
	<ThemeProvider theme={theme}>
	    <div> ~ Shopee ~ </div>
	</ThemeProvider>
    );
}

export default App;
