import Tilt from "react-parallax-tilt";
export const VR = ({ image }) => {
  return (
    <div className="vr-wrap">
      <div className="vr-image">
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};
