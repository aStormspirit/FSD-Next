import clsx from "clsx";
import Link from "next/link";

export type UiButtonProps = {} & Parameters<typeof Link>[0];

export function UiLink({ className, ...props }: UiButtonProps) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "py-1 text-teal-500 cursor-pointer hover:text-teal-600",
      )}
    ></Link>
  );
}
