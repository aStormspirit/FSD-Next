import { authControllerSignUp } from "@/shared/api/generated";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ROUTES } from "@/shared/constants/route";

export default function useSignUpForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const singUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
  });

  const errorMessage = singUpMutation.error ? "Sign up failed" : undefined;
  return {
    register,
    handleSubmit: handleSubmit((data) => singUpMutation.mutate(data)),
    isLoading: singUpMutation.isPending,
    errorMessage,
  };
}
