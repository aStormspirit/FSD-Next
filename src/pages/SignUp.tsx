import { SignUpForm } from "@/features/auth";
import UiHeader from "@/shared/ui/header";
import UiFormLayout from "@/shared/ui/layouts/formLayout";

export function SignUpPage() {
  return (
    <UiFormLayout title="Sign Up" header={<UiHeader />} form={<SignUpForm />} />
  );
}
