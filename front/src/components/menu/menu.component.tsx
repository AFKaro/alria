import Logo from "../../assets/aurea.icon.svg";
import { useNavigate } from "react-router-dom";
import { Box, MenuList, Tooltip } from "@mui/material";
import RoutesEnum from "../../utils/enums/routes.enum";
import { Book, Brain, Info, Quotes } from "phosphor-react";
import ButtonStyled from "../button/button.component";
import { Container, PaperStyled, ImageBox } from "./menu.styles";

const options = [
    {
        icon: <Book size={32} weight="bold" />,
        path: RoutesEnum.LiteratureReview,
        tooltip: "Tools for Literature Reviews",
    },
    {
        icon: <Brain size={32} weight="bold" />,
        path: RoutesEnum.ScientificResearch,
        tooltip: "Tools for Scientific Research",
    },
    {
        icon: <Info size={32} weight="bold" />,
        path: RoutesEnum.Info,
        tooltip: "Tips and information",
    },
];


function Menu() {
    const navigate = useNavigate();

    return <Container>
                <ImageBox>
                    <ButtonStyled
                    onClick={() =>navigate(RoutesEnum.Root)}
                    icon={<img id="logo" src={Logo} alt="Logo ALRIA" />}
                    style={"primary"}
                    hoverDisabled={true}
                    /> 
                </ImageBox>
                
                {/* <ImgStyled  id="logo" src={Logo} alt="Logo ALRIA" /> */}
                <MenuList sx={{mt: 20}}>
                    <Box sx={{ml: -1, mb: 55}}>
                        {options.map(option => (
                            <ButtonStyled
                                onClick={() =>navigate(option.path)}
                                title={option.tooltip}
                                icon={option.icon}
                                style={"primary"}
                            />
                        ))}
                    </Box>
                    <Box sx={{ml: -1}}>
                        <ButtonStyled
                            onClick={() =>navigate(RoutesEnum.Cite)}
                            title={"Cite"}
                            icon={<Quotes size={32} weight="bold" />}
                            style={"primary"}
                        />
                    </Box>
                    
                </MenuList>
            </Container>;
}

export default Menu;
