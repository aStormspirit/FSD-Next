import { useBlockItemForm } from "@/features/blockList/model/useBlockItemForm";
import { BlockItemDtoType } from "@/shared/api/generated";
import { UiButton } from "@/shared/ui/button";
import { UiSelectField } from "@/shared/ui/selectField";
import { UiTextField } from "@/shared/ui/textField";

const typeOption = [
  { label: "WebSite", value: BlockItemDtoType.Website },
  { label: "KeyWord", value: BlockItemDtoType.KeyWord },
];

export function AddBlockItemForm() {
  const { handleSubmit, isLoading, register, type } = useBlockItemForm();
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <UiSelectField
        className="grow min-w-[200px]"
        selectProps={{ ...register("type") }}
        options={typeOption}
      />
      <UiTextField
        className="grow"
        inputProps={{
          placeholder: type === "KeyWord" ? "Enter KeyWord" : "Enter WebSite",
          ...register("data"),
        }}
      />
      <UiButton variant="primary" disabled={isLoading}>
        Add Block Item
      </UiButton>
    </form>
  );
}
