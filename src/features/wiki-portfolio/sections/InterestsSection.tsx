import { SectionHeading } from "@/components/wiki/SectionHeading";
import { WikiParagraph } from "@/components/wiki/WikiParagraph";

export function InterestsSection() {
  return (
    <>
      <SectionHeading id="hobbies">Personal interests</SectionHeading>
      <WikiParagraph>
        Outside of professional work, Tamerlan has long-standing interests in
        piano, speedcubing, chess, history, intellectual shows, and fitness.
        These interests reflect both discipline and curiosity.
      </WikiParagraph>
      <WikiParagraph>
        He has played piano for about five years, follows chess developments,
        and maintains a consistent fitness routine. He also enjoys learning
        through history and strategic problem-solving.
      </WikiParagraph>
    </>
  );
}
