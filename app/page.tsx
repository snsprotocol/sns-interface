import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">

      <div className="inline-block max-w-xl text-center justify-center">

        <h1 className={title()}>Secure Your&nbsp;</h1>
        <h1 className={title({ color: "sonic" })}>.S&nbsp;</h1>
        <h1 className={title()}>Domain</h1>
        <br />
        <h1 className={title()}>
          and Stand Out in the Sonic
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Simple, powerful, and uniquely yours.
        </h2>
      </div>

      <div className="flex gap-3 mt-20">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-4">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            $SNS: <Code color="primary"><Link
          isExternal
          size="sm"
          color="primary"
          href={siteConfig.links.burnToMint}
        >
          wigoswap.io/burn-to-mint
        </Link></Code>
          </span>
        </Snippet>
      </div>
      
    </section>
  );
}
