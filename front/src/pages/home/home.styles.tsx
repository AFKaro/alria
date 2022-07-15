import styled from "styled-components";
import theme from "../../styles/theme";
import { Box, IconButton, Typography } from "@mui/material";

export const Container = styled(Box)`
    background-color: ${theme.palette.primary.main};
    align-items: center;
    text-align: center;
    position: relative;
    height: 100vh;
    width: 100vw;
`;

export const Bar = styled(Box)`
    background-color: ${theme.palette.common.white};
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 150px;
    width: 50px;
    left: 95%;
    top: 10%;
    border: 2px solid white;
    border-radius: 25px;
`;

export const Content = styled(Box)`
    width: 100vw;
    margin-top: 23%;
`;

export const Title = styled(Typography)`
    margin-right: -50%;
    transform: translate(-50%, -50%)
    font-family: "Belleza";
    &.MuiTypography-root {
        color: ${theme.palette.common.white};
    }
`;

export const SubTitle = styled(Typography)`
    margin-right: -50%;
    transform: translate(-50%, -50%)
    color: ${theme.palette.common.white};
`;

export const ImgStyled = styled("img")`
    position: absolute;
    width: 1200px;
    height: 742px;
    left: -30px;
    top: -70px;
`;