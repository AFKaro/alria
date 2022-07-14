import { CSSProperties } from "react";
import { createTheme } from "@mui/material";

const headersFontsize = [40, 24, 18, 16, 14, 12];
const headersVariants: CSSProperties = {
    marginBottom: 0,
    color: "#333333",
    fontWeight: "bold",
    fontFamily: "Ubuntu",
};

const theme = createTheme({
    palette: {
        common: {
            black: "#000000",
            white: "#FFFFFF",
        },
        primary: {
            main: "#461D7B",
        },
        secondary: {
            main: "#51D591",
        },
        background: {
            default: "#FFFFFF",
        },
        success: {
            main: "#2E7D32",
            light: "#4CAF50",
            dark: "#1B5E20",
        },
        error: {
            main: "#D32F2F",
            light: "#EF5350",
            dark: "#B52424",
        },
        text: {
            primary: "#333333",
            secondary: "#C2C9D1",
        },
        grey: {
            "200": "#f2f2f2",
            "300": "#dfdfdf",
            "400": "#C2C9D1",
            "500": "#aba6a6",
            "600": "#686A6C",
        },
    },
    typography: {
        fontSize: 16,
        htmlFontSize: 16,
        fontFamily: ["Ubuntu", "sans-serif"].join(","),
        body1: {
            fontSize: 16,
            fontWeight: 500,
        },
        h1: {
            ...headersVariants,
            fontSize: headersFontsize[0],
        },
        h2: {
            ...headersVariants,
            fontSize: headersFontsize[1],
        },
        h3: {
            ...headersVariants,
            fontSize: headersFontsize[2],
        },
        h4: {
            ...headersVariants,
            fontSize: headersFontsize[3],
        },
        h5: {
            ...headersVariants,
            fontSize: headersFontsize[4],
        },
        h6: {
            ...headersVariants,
            fontSize: headersFontsize[5],
        },
        button: {
            textTransform: "none",
        },
    },
    components: {
        MuiSelect: {
            defaultProps: {
                size: "small",
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    width: "100%",
                    borderRadius: "4px",
                },
            },
        },
        MuiModal: {
            styleOverrides: {
                root: {
                    "& .MuiDialogContent-root": {
                        padding: "24px",
                    },
                    "&.alertDialog .MuiDialogContent-root": {
                        padding: "35px 40px 24px 40px",
                    },
                    "&.alertDialog .MuiDialogActions-root": {
                        padding: "16px 24px 24px",
                    },
                    "& .MuiPaper-root:not(.MuiDialog-paperFullScreen)": {
                        borderRadius: "8px",
                    },
                },
            },
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    "&": {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "24px",
                        fontWeight: 700,
                        fontSize: "20px",
                    },
                },
            },
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    "&": {
                        padding: "16px 40px",
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    width: "100%",
                    borderRadius: "4px",
                },
            },
        },
        MuiButton: {
            defaultProps: {
                fullWidth: true,
                variant: "contained",
                color: "secondary",
            },
            styleOverrides: {
                root: {
                    borderRadius: "5px",
                    "&.Mui-disabled": {
                        background: "#F5F5F5",
                        color: "#909294",
                    },
                    "&.MuiButton-sizeLarge": {
                        height: "48px",
                    },
                    "&.MuiButton-sizeMedium": {
                        height: "42px",
                    },
                },
            },
        },
    },
});

export default theme;