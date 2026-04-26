import Image from "next/image";

import { PERSON } from "@/lib/portfolio-data";

import { CvActions } from "./CvActions";
import { HireMenu } from "./HireMenu";
import { InfoRow } from "./InfoRow";

export function Infobox() {
  return (
    <table className="float-right clear-right mb-4 ml-5 w-[280px] border border-[var(--wiki-border)] border-collapse bg-[var(--wiki-page-bg)] text-[13px] leading-normal max-md:float-none max-md:ml-0 max-md:w-full">
      <thead>
        <tr>
          <th
            className="bg-[var(--wiki-accent-bg)] p-2 text-center font-[family:var(--wiki-serif)] text-[17px] font-bold"
            colSpan={2}
          >
            {PERSON.name}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="bg-[var(--wiki-page-bg)] p-2.5 text-center" colSpan={2}>
            <Image
              alt={PERSON.name}
              className="mx-auto h-[220px] w-[180px] border border-[var(--wiki-border)] bg-[var(--wiki-avatar-bg)] object-cover object-center"
              height={220}
              priority
              src="/me.jpg"
              width={180}
            />
            <div className="mt-1 text-xs text-[var(--wiki-muted-text)]">
              {PERSON.name}, 2025
            </div>
          </td>
        </tr>
        <InfoRow
          label="Born"
          value={
            <>
              {PERSON.born.date}
              <br />
              {PERSON.born.location}
            </>
          }
        />
        <InfoRow label="Nationality" value={PERSON.nationality} />
        <InfoRow label="Occupation" value={PERSON.occupation} />
        <InfoRow label="Title" value={PERSON.title} />
        <InfoRow label="Availability" value={<HireMenu />} />
        <InfoRow label="Known for" value={PERSON.knownFor} />
        <InfoRow label="Years active" value={PERSON.yearsActive} />
        <InfoRow label="CV" value={<CvActions compact />} />
        <InfoRow
          label="Alma mater"
          value={PERSON.almaMater.map((school, index) => (
            <span key={school}>
              {index > 0 && <br />}
              {school}
            </span>
          ))}
        />
        <InfoRow
          label="GitHub"
          value={
            <a
              className="text-[var(--wiki-link)] no-underline hover:text-[var(--wiki-link-hover)] hover:underline"
              href={`https://${PERSON.github}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {PERSON.github}
            </a>
          }
        />
      </tbody>
    </table>
  );
}
