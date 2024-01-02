import { useForm } from "react-hook-form";
import { useAddBlockItemMutation } from "@/entities/blockList";
import { AddBlockItemDtoType } from "@/shared/api/generated";
export function useBlockItemForm() {
  const { handleSubmit, register, watch, reset } = useForm<{
    type: AddBlockItemDtoType;
    data: string;
  }>();

  const addBlockItemMutation = useAddBlockItemMutation();

  const type = watch("type");

  return {
    handleSubmit: handleSubmit((data) => {
      addBlockItemMutation.mutate(data, {
        onSuccess: () => {
          reset();
        },
      });
    }),
    isLoading: addBlockItemMutation.isPending,
    register,
    type,
  };
}
