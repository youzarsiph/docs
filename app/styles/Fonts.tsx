/**
 * Fonts
 */

import { Fira_Code, JetBrains_Mono, Noto_Sans } from "next/font/google";

const FiraCode = Fira_Code({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  fallback: ["ui-monospace", "monospace"],
});

const JetBrainsMono = JetBrains_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  fallback: ["ui-monospace", "monospace"],
});

const NotoSans = Noto_Sans({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

const Fonts = {
  sans: {
    "Noto Sans": NotoSans,
  },
  code: {
    "Fira Code": FiraCode,
    "JetBrains Mono": JetBrainsMono,
  },
};

export default Fonts;
