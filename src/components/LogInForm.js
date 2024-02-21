import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Alert, InputAdornment, IconButton } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FTextField,
  FormProvider,
  FCheckbox,
  FMultiCheckbox,
  FRadioGroup,
  FSelect,
  FSwitch,
} from "./form";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const schema = yup
  .object({
    username: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

function LogInForm() {
  const defaultValues = {
    email: "thucvinguyen@gmail.com",
    username: "vinguyen",
    password: "vi123",
    remember: true,
    language: [],
    gender: [],
    isGoing: true,
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
    // setError("afterSubmit", { message: "Server Response Error" });
  };

  return (
    <div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} mt={5} ml={35}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}
          <FTextField
            name="email"
            label="Email Address"
            margin="normal"
            sx={{ width: "50%" }}
          />
          <FTextField
            name="username"
            label="Username"
            margin="normal"
            sx={{ width: "50%" }}
          />
          <FTextField
            name="password"
            label="Password"
            margin="normal"
            sx={{ width: "50%" }}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />

          <FMultiCheckbox
            name="language"
            options={["JS", "Python"]}
            margin="normal"
            sx={{ width: "50%" }}
          />
          <FRadioGroup
            name="gender"
            options={["Male", "Female"]}
            margin="normal"
            sx={{ width: "50%" }}
          />
          <FSelect
            name="country"
            label="Country"
            margin="normal"
            sx={{ width: "50%" }}
          >
            {[
              { code: "VN", label: "Vietnam" },
              { code: "CN", label: "China" },
            ].map((option) => (
              <option key={option.code} value={option.label}>
                {option.label}
              </option>
            ))}
          </FSelect>
          <FSwitch name="isGoing" label="Is Going" />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
          ml={35}
        >
          <FCheckbox name="remember" label="Remember Me" />
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          onClick={() => navigate(`/vinguyen`)}
          sx={{
            bgcolor: "black",
            color: "white",
            "&:hover": {
              bgcolor: "#333",
            },
          }}
        >
          Login
        </LoadingButton>
      </FormProvider>
    </div>
  );
}

export default LogInForm;
