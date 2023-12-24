import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { UiButton } from "@/shared/ui/button";
import { UiTextField } from "@/shared/ui/textField";
import { useQuery } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });

  console.log(data);

  return (
    <>
      <h1 className="text-3xl font-bold text-red-500">Hello world!</h1>
      <UiButton variant="primary">hey</UiButton>
      <UiButton variant="secondary">hey</UiButton>
      <UiButton variant="outlined">Sign In</UiButton>
      <UiButton disabled variant="outlined">
        Sign Up
      </UiButton>
      <UiTextField label="Email" inputProps={{ placeholder: "enter email" }} />
      <UiTextField error="Email" inputProps={{ placeholder: "enter email" }} />
      <UiTextField inputProps={{ placeholder: "enter email" }} />
    </>
  );
}
