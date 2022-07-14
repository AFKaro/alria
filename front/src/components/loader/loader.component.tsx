import { CircularProgress } from "@mui/material";
import { LoadingWrapper } from "./loader.styles";

interface LoaderProps {
    width: number;
    height: number;
    isSuspense?: boolean;
}

function Loader({ width, height, isSuspense }: LoaderProps) {
    return (
        <LoadingWrapper isSuspense={isSuspense} width={width} height={height}>
            <CircularProgress disableShrink />
        </LoadingWrapper>
    );
}

export default Loader;

Loader.defaultProps = {
    isSuspense: false,
};
