import UiPageSpinner from "@/shared/ui/pageSpinner";
import { PropsWithChildren, ReactElement } from "react";
import { useRouter } from "next/router";
import { ROUTES } from "@/shared/constants/route";
import { useSessionQuery } from "@/entities/session";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();
    const { isError, isLoading } = useSessionQuery();

    if (isLoading) {
      return <UiPageSpinner />;
    }

    if (isError) {
      router.replace(ROUTES.SIGN_IN);
    }
    return <Component {...props} />;
  };
}
