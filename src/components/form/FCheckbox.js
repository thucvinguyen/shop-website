import { Checkbox, FormControlLabel } from "@mui/material";

import { Controller, useFormContext } from "react-hook-form";

function FCheckbox({ name, ...other }) {
  const { control } = useFormContext();
  return (
    <FormControlLabel
      label="Remember Me"
      control={
        <Controller
          name="remember"
          control={control}
          render={({ field }) => <Checkbox {...field} checked={field.value} />}
        />
      }
      {...other}
    />
  );
}

export default FCheckbox;
