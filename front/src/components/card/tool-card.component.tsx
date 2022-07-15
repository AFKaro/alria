import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ButtonStyled from '../button/button.component';
import { CardStyled } from './tool-card.styles';

interface ToolCardProps {
    onClick: () => void,
    title: string,
    icon: any,
    abstract: string
}

function ToolCard(props: ToolCardProps) {
  return (
    <CardStyled>
        <CardActionArea>
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
        </CardActionArea>
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