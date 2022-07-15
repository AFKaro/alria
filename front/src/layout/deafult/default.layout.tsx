import { Content } from "./default.styles";
import Menu from "../../components/menu/menu.component";

interface DefaultLayoutProps {
    children: React.ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>
            <Menu />
            <Content>{children}</Content>
        </>
    );
}

export default DefaultLayout;
