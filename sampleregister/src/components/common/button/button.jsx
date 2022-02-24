import Button  from '@mui/material/Button';
import React from "react";
export default function MaterialButton(props){
return(
    <Button variant={props.variant}
    value={props.value}
    onClick={props.onClick}
    size={props.size} 
    className={props.name}
    style={props.style}
    >{props.message}</Button>

)
}