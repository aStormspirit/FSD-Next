import { useRemoveBlockItemMutation } from "@/entities/blockList";
import { BlockItemDtoType } from "@/shared/api/generated";

export function BlockItem({
  id,
  type,
  data,
}: {
  id: number;
  type: BlockItemDtoType;
  data: string;
}) {
  const removeBlockItemMutation = useRemoveBlockItemMutation();
  const handleRemove = () => {
    removeBlockItemMutation.mutate(id);
  };
  return (
    <div className="flex gap-2">
      <div>
        <div className="text-lg">{data}</div>
        <div className="text-slate-500">{type}</div>
      </div>
      <button
        className="ml-auto text-rose-500 hover:text-rose-600 disabled:opacity-50"
        disabled={removeBlockItemMutation.isPending}
        onClick={handleRemove}
      >
        <Delete />
      </button>
    </div>
  );
}

const Delete = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926L224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512L166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"
      />
    </svg>
  );
};
