import "./styles/global.css";
import theme from "./styles/theme";
import Routes from "./routes/routes";
import { ThemeProvider } from "@mui/material/styles";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    );
}

export default App;

