import { authControllerSignIn } from "@/shared/api/generated";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ROUTES } from "@/shared/constants/route";

export default function useSignInForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const singInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
  });

  const errorMessage = singInMutation.error ? "Sign in failed" : undefined;
  return {
    register,
    handleSubmit: handleSubmit((data) => singInMutation.mutate(data)),
    isLoading: singInMutation.isPending,
    errorMessage,
  };
}
