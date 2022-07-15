import styled from "styled-components";
import theme from "../../styles/theme";
import { Grid, Box, Divider, IconButton } from "@mui/material";

export const Container = styled(Grid)`
    padding: 16px 24px 16px 24px;
    max-height: 80px;
    background-color: ${theme.palette.primary.main};

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;


export const IconButtonStyled = styled(IconButton)`
    &.MuiIconButton-root {
        margin-right: 16px;
    }
`;
