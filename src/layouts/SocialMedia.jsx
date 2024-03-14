import facebook from "/images/icon/facebook.svg";
import x from "/images/icon/x.svg";
import instagram from "/images/icon/instagram.svg";
import youtube from "/images/icon/youtube.svg";
import linkedin from "/images/icon/linkedin.svg";

export const SocialMedia = () => {
  return (
    <div className="social-media flex">
      <a
        href="https://www.instagram.com/aonixpvtltd?igsh=MmR2d2R0c3kxc2x4"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} alt="" />
      </a>
      <a
        href="https://www.linkedin.com/company/aonixpvtltd/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="" />
      </a>
      <a
        href="https://twitter.com/aonixpvtltd"
        target="_blank"
        rel="noreferrer"
      >
        <img src={x} alt="" />
      </a>
      <a href="https://www.youtube.com/@Aonix" target="_blank" rel="noreferrer">
        <img src={youtube} alt="" />
      </a>
    </div>
  );
};
