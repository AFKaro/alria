import { IconButton, Tooltip } from "@mui/material";

interface ButtonProps {
    onClick: () => void,
    isLink: boolean,
    title: string,
    icon: any,
    isTooltip: boolean,
    style: "primary" | "secondary",
    hoverDisabled: boolean
}

function ButtonStyled(props: ButtonProps) {

    function getStyle(){
        let color = "";
        let hoverColor = "";
        
        if(props.style=="primary"){
            color = "#8650CB";
            hoverColor = "white";
        } else if (props.style=="secondary"){
            color = "black";
            hoverColor = "#8650CB";
        }

        let hoverOption = props.hoverDisabled ? { backgroundColor: 'transparent' } : { color: hoverColor };

        return { "color": color, "&:hover": hoverOption };
    }

    if(props.isTooltip){
        return <Tooltip
                title={props.title}
            >
                <IconButton
                    size="medium"
                    onClick={props.onClick}
                    sx={getStyle()}
                >
                    {props.icon}
                </IconButton>
            </Tooltip>
    } else {
        return <IconButton
                    size="medium"
                    onClick={props.onClick}
                    sx={getStyle()}
                >
                    {props.icon}
            </IconButton>
    }
}

export default ButtonStyled;

ButtonStyled.defaultProps = {
    onClick: () => null,
    title: "",
    isLink: false,
    icon: null,
    isTooltip: true,
    style: "primary",
    hoverDisabled: false
};
