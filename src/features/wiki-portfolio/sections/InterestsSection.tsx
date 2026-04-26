import { SectionHeading } from "@/components/wiki/SectionHeading";

export function InterestsSection() {
  return (
    <>
      <SectionHeading id="hobbies">Personal interests</SectionHeading>
      <p className="mb-2.5 text-sm leading-[1.65] text-[var(--wiki-text)]">
        Outside of professional work, Tamerlan has long-standing interests in
        piano, speedcubing, chess, history, intellectual shows, and fitness.
        These interests reflect both discipline and curiosity.
      </p>
      <p className="mb-2.5 text-sm leading-[1.65] text-[var(--wiki-text)]">
        He has played piano for about five years, follows chess developments,
        and maintains a consistent fitness routine. He also enjoys learning
        through history and strategic problem-solving.
      </p>
    </>
  );
}
