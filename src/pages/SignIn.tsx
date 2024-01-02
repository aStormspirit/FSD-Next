import { SignInForm } from "@/features/auth";
import UiHeader from "@/shared/ui/header";
import UiFormLayout from "@/shared/ui/layouts/formLayout";

export function SignInPage() {
  return (
    <UiFormLayout title="Sign In" header={<UiHeader />} form={<SignInForm />} />
  );
}
