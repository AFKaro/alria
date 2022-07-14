import styled from "styled-components";
import theme from "../../styles/theme";

export const LoadingWrapper = styled.div<{
    width: number;
    height: number;
    isSuspense?: boolean;
}>`
    background: ${theme.palette.common.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.width}%;
    height: ${props => props.height}%;
    position: ${props => (props.isSuspense ? "absolute" : "unset")};
    z-index: 99999;
    left: 0;
    top: 0;
`;
