import React from "react";
import TextField from "@mui/material/TextField";
export default function TextBox(props) {
  return <TextField 
  id={props.id} 
  label={props.label}
  type={props.label}
  variant={props.variant}
  value={props.value}
  name={props.name}
  className={props.className}
  size={props.size}
  inputProps={props.inputProps}
  onChange={props.onChange} />;
}
