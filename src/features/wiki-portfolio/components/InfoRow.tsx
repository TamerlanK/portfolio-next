import type { ReactNode } from "react";

type InfoRowProps = {
  label: string;
  value: ReactNode;
};

export function InfoRow({ label, value }: InfoRowProps) {
  return (
    <tr>
      <th className="w-[90px] border-t border-[var(--wiki-border)] bg-[var(--wiki-page-bg)] px-2.5 py-1 text-left align-top text-[12.5px] font-bold">
        {label}
      </th>
      <td className="border-t border-[var(--wiki-border)] px-2.5 py-1 text-[12.5px]">
        {value}
      </td>
    </tr>
  );
}
