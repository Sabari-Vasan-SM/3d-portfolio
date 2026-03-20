declare module "gsap-trial/SplitText" {
  export interface SplitTextVars {
    type?: string;
    linesClass?: string;
    [key: string]: unknown;
  }

  export class SplitText {
    constructor(targets: string | Element | Element[] | NodeList | (string | Element)[], vars?: SplitTextVars);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }
}
