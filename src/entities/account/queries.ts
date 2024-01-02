import {
  accountControllerGetAccount,
  accountControllerPatchAccount,
} from "@/shared/api/generated";
import { queryClient } from "@/shared/api/query-client";
import { useMutation, useQuery } from "@tanstack/react-query";

const accountKey = ["account"];

export function useAccountQuery() {
  return useQuery({
    queryKey: accountKey,
    queryFn: accountControllerGetAccount,
  });
}

export function useUpdateAccountMutation() {
  return useMutation({
    mutationFn: accountControllerPatchAccount,
    async onSettled() {
      await queryClient.invalidateQueries({ type: "all" });
    },
  });
}
