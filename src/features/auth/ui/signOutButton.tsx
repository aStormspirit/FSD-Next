import { UiButton } from "@/shared/ui/button";
import useSignOut from "../model/useSignOut";

export function SignOutButton() {
  const { isLoading, signOut } = useSignOut();
  return (
    <UiButton
      variant="outlined"
      disabled={isLoading}
      onClick={() => signOut({})}
    >
      sign Out
    </UiButton>
  );
}
