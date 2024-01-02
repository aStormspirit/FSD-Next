import { ROUTES } from "@/shared/constants/route";
import { UiButton } from "@/shared/ui/button";
import { UiLink } from "@/shared/ui/link";
import { UiTextField } from "@/shared/ui/textField";
import useSignUpForm from "../model/useSignUpForm";

export function SignUpForm() {
  const { handleSubmit, isLoading, register, errorMessage } = useSignUpForm();

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <UiTextField
        label="Email"
        inputProps={{ type: "email", ...register("email", { required: true }) }}
      />
      <UiTextField
        label="Password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />
      <UiButton disabled={isLoading} variant="primary">
        Sign Up
      </UiButton>
      <UiLink href={ROUTES.SIGN_IN}>Sing In</UiLink>
      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}
    </form>
  );
}
