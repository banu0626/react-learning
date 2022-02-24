import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
export function MaterialRadio(props) {
  return (
    <FormControlLabel
      value={props.value}
      control={<Radio />}
      label={props.label}
      name={props.name}
      onChange={props.onChange}
    />
  );
}
