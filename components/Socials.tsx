import Link from "next/link";
import { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/yusuken1121",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/yusuke-nagaoka",
  },
];

type SocialsProps = {
  containerStyles: string;
  iconStyles: string;
};
const Socials: FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, idx) => {
        return (
          <Link key={idx} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
