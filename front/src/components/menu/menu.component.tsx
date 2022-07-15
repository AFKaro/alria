import { useNavigate } from "react-router-dom";
import RoutesEnum from "../../utils/enums/routes.enum";
import { IconButtonStyled, Container } from "./menu.styles";
import { MenuItem, MenuList, Paper, Tooltip } from "@mui/material";
import { Book, Brain, Info, Quotes } from "phosphor-react";

const options = [
    {
        icon: <Book color="white" size={32} />,
        path: RoutesEnum.LiteratureReview,
        tooltip: "Tools for Literature Reviews",
    },
    {
        icon: <Brain color="white" size={32} />,
        path: RoutesEnum.ScientificResearch,
        tooltip: "Tools for Scientific Research",
    },
    {
        icon: <Info color="white" size={32} />,
        path: RoutesEnum.Info,
        tooltip: "Tips and information",
    },
    {
        icon: <Quotes color="white" size={32} />,
        path: RoutesEnum.Cite,
        tooltip: "Cite",
    },
];


function Menu() {
    const navigate = useNavigate();

    return <Paper>
                <Container>
                    <MenuList>
                        {options.map(option => (
                            <Tooltip
                                key={option.path}
                                title={option.tooltip}
                            >
                                <IconButtonStyled
                                    size="medium"
                                    onClick={() =>
                                        navigate(option.path)
                                    }
                                >
                                    {option.icon}
                                </IconButtonStyled>
                            </Tooltip>
                        ))}
                    </MenuList>
                </Container>
            </Paper>;
}

export default Menu;
