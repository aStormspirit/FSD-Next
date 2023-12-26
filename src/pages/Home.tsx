import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { UiButton } from "@/shared/ui/button";
import UiHeader from "@/shared/ui/header";
import { UiLink } from "@/shared/ui/link";
import UiPageSpinner from "@/shared/ui/pageSpinner";
import { UiSelectField } from "@/shared/ui/selectField";
import UiSpinner from "@/shared/ui/spinner";
import { UiTextField } from "@/shared/ui/textField";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <>
      <main className="min-h-screen">
        <UiHeader right={<div>Hello</div>} />
        <UiButton variant="primary">hey</UiButton>
        <UiButton variant="secondary">hey</UiButton>
        <UiButton variant="outlined">Sign In</UiButton>
        <UiButton disabled variant="outlined">
          Sign Up
        </UiButton>
        <UiTextField
          label="Email"
          inputProps={{ placeholder: "enter email" }}
        />
        <UiTextField
          error="Email"
          inputProps={{ placeholder: "enter email" }}
        />
        <UiTextField inputProps={{ placeholder: "enter email" }} />
        <UiSelectField
          selectProps={{}}
          options={[{ value: "1", label: "options" }]}
        />
        <UiLink href={"/"}>Sign In</UiLink>
        <UiSpinner className="text-teal-600 w-10 h-10" />
        {/* <UiPageSpinner /> */}
      </main>
    </>
  );
}
