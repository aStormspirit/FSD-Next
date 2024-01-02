import { useBlockListQuery } from "@/entities/blockList";
import { useDeboundValue } from "@/shared/lib/react-std";
import { useState } from "react";

export function useBlockItems() {
  const [q, setQ] = useState("");

  const blockListQuery = useBlockListQuery({ q: useDeboundValue(q, 500) });

  const items = blockListQuery.data?.items ?? [];

  return { items, isLoading: blockListQuery.isPending, q, setQ };
}
