import { File, GlobeIcon, MailIcon } from "lucide-react";
import ThemedIcon from "./themed-icon";
import Image from "next/image";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  globe: (props: IconProps) => <GlobeIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  x: (props: IconProps) => (
    <ThemedIcon
      lightVariant="/icons/X_light.svg"
      darkVariant="/icons/X_dark.svg"
      alt="X"
      {...props}
    />
  ),
  github: (props: IconProps) => (
    <ThemedIcon
      lightVariant="/icons/github_light.svg"
      darkVariant="/icons/github_dark.svg"
      alt="GitHub"
      {...props}
    />
  ),
  linkedin: (props: IconProps) => (
    <Image
      src="/icons/linkedin.svg"
      alt="LinkedIn"
      width={16}
      height={16}
      className={props.className}
    />
  ),
  filePdf: (props: IconProps) => <File {...props} />,
};
