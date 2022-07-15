import { Content } from "./default.styles";
import Menu from "../../components/menu/menu.component";
import { Stack } from "@mui/material";

interface DefaultLayoutProps {
    children: React.ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>
            <Stack direction="row">
                <Menu />
                {children}
            </Stack>
        </>
    );
}

export default DefaultLayout;
