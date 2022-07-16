import ButtonStyled from '../button/button.component';
import { CardContent, Typography } from '@mui/material';
import { CardStyled, CardActionAreaStyled } from './tool-card.styles';

interface ToolCardProps {
    onClick: () => void,
    title: string,
    icon: any,
    abstract: string
}

function ToolCard(props: ToolCardProps) {
  return (
    <CardStyled>
        <CardActionAreaStyled>
            <ButtonStyled
                icon={props.icon}
                style={"primary"}
                hoverDisabled={true}
                onClick={props.onClick}
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.abstract}
                </Typography>
            </CardContent>
        </CardActionAreaStyled>
    </CardStyled>
  );
}

export default ToolCard;

ToolCard.defaultProps = {
    onClick: () => null,
    title: "",
    icon: null,
    abstract: ""
};