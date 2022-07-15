import { Button, IconButton, Stack } from "@mui/material";
import { Container, ImgStyled, Title, SubTitle, IconButtonStyled, Bar } from "./home.styles";
import Logo from "../../assets/aurea.icon.svg";
import { Play, GithubLogo, LinkedinLogo} from "phosphor-react";
import LinksEnum from "../../utils/enums/links.enum";

function Home() {
    return <>
        <Container>
            <Bar>
                <Stack spacing={2}>
                    <IconButton size="medium" 
                        onClick={() => window.open(LinksEnum.GitHub)}
                        sx={{ "color":"black", "&:hover": { color: "#9709DA" } }}>
                        {<GithubLogo size={32} />}
                    </IconButton>
                    <IconButton size="medium" 
                        onClick={() => window.open(LinksEnum.Linkedin)}
                        sx={{ "color":"black", "&:hover": { color: "#9709DA" } }}>
                        {<LinkedinLogo size={32} />}
                    </IconButton>
                </Stack>
            </Bar>
            
            <ImgStyled id="logo" src={Logo} alt="Logo ALRIA" />
            <Title variant="h1">ALRIA</Title>
            <SubTitle variant="h2">Literature Review Intelligent Assistent</SubTitle>
            <IconButtonStyled size="medium" 
                sx={{ "color":"#9709DA", "&:hover": { color: "white" } }}>
                {<Play size={32} />}
            </IconButtonStyled>
        </Container>
    </>
}

export default Home;
