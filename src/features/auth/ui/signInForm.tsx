import { ROUTES } from "@/shared/constants/route";
import { UiButton } from "@/shared/ui/button";
import { UiLink } from "@/shared/ui/link";
import { UiTextField } from "@/shared/ui/textField";
import useSignInForm from "../model/useSignInForm";

export function SignInForm() {
  const { handleSubmit, isLoading, register, errorMessage } = useSignInForm();

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
        Sign In
      </UiButton>
      <UiLink href={ROUTES.SIGN_UP}>Sing Up</UiLink>
      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}
    </form>
  );
}
