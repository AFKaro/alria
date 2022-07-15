import styled from "styled-components";
import theme from "../../styles/theme";
import { Grid, Box, Divider, IconButton, Paper } from "@mui/material";

export const Container = styled(Grid)`
    display: flex;
    padding: 16px 24px 16px 24px;
    height: 100vh;
    width: 80px;
    background-color: ${theme.palette.primary.main};
    align-items: flex-start;
    justify-content: space-between;
`;

export const PaperStyled = styled(Paper)`
    height: 100vh;
    width: 100vw;
    background-color: ${theme.palette.secondary.main};
`;

export const BoxStyled = styled(Box)`
    margin-bottom: 450px;
    margin-top: 150px;
    margin-left: -10px;
`;

export const ImageBox = styled(Box)`
    position: absolute;
    left: -15%;
    top: -11%;

    & > button > img {
        width: 500px;
        height: 200px;
    }
`;