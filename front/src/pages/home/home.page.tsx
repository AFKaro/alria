import Logo from "../../assets/aurea.icon.svg";
import { useNavigate } from "react-router-dom";
import LinksEnum from "../../utils/enums/links.enum";
import { Stack } from "@mui/material";
import { Play, GithubLogo, LinkedinLogo} from "phosphor-react";
import { Container, ImgStyled, Title, SubTitle, IconButtonStyled, Bar } from "./home.styles";
import RoutesEnum from "../../utils/enums/routes.enum";
import ButtonStyled from "../../components/button/button.component";

function Home() {
    const navigate = useNavigate();

    return <>
        <Container>
            <Bar>
                <Stack spacing={2}>
                    <ButtonStyled 
                        onClick={() => window.open(LinksEnum.GitHub)}
                        style="secondary"
                        icon={<GithubLogo size={32} />}
                        isTooltip={false}
                        isLink={true}
                    />
                    <ButtonStyled 
                        onClick={() => window.open(LinksEnum.Linkedin)}
                        style="secondary"
                        icon={<LinkedinLogo size={32} />}
                        isTooltip={false}
                        isLink={true}
                    />
                </Stack>
            </Bar>
            
            <ImgStyled id="logo" src={Logo} alt="Logo ALRIA" />
            <Title variant="h1">ALRIA</Title>
            <SubTitle variant="h2">Literature Review Intelligent Assistent</SubTitle>

            <IconButtonStyled 
                onClick={() => navigate(RoutesEnum.LiteratureReview)}
                sx={{ "color":"#9709DA", "&:hover": { color: "white" } }}>
                {<Play size={32} />}
            </IconButtonStyled>
        </Container>
    </>
}

export default Home;

