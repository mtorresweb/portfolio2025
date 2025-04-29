import {
  BookOpenIcon,
  BriefcaseIcon,
  IdCard,
  ContactIcon,
  File,
  GlobeIcon,
  HomeIcon,
  MailIcon,
  MessageSquareIcon,
  UserIcon,
  ShieldCheck,
  FolderOpen,
} from "lucide-react";
import ThemedIcon from "./themed-icon";
import Image from "next/image";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  globe: (props: IconProps) => <GlobeIcon {...props} />,
  shield: (props: IconProps) => <ShieldCheck {...props} />,
  folder: (props: IconProps) => <FolderOpen {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  home: (props: IconProps) => <HomeIcon {...props} />,
  user: (props: IconProps) => <UserIcon {...props} />,
  work: (props: IconProps) => <BriefcaseIcon {...props} />,
  education: (props: IconProps) => <BookOpenIcon {...props} />,
  projects: (props: IconProps) => <MessageSquareIcon {...props} />,
  certifications: (props: IconProps) => <IdCard {...props} />,
  contact: (props: IconProps) => <ContactIcon {...props} />,
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
  githubInverted: (props: IconProps) => (
    <ThemedIcon
      darkVariant="/icons/github_light.svg"
      lightVariant="/icons/github_dark.svg"
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
