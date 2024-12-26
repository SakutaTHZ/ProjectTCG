import React from "react";
import PropTypes from "prop-types";
import CardContainer from "./CardContainer";
import GameButton from "./GameButton";

const PlayerDeckContainer = ({ customClass = "" }) => {
  const [rotationAngle, setRotationAngle] = React.useState(0);

  const rotate = () => {
    setRotationAngle(rotationAngle + 120); // Rotate 120 degrees for each click
  };

  return (
    <>
      <div
        className={`grid grid-cols-3 gap-5 min-h-32 min-w-96 rounded border-dotted border-2 p-2 ${customClass}`}
      >
        <div
          className="characters w-52 relative border flex justify-center items-center aspect-square rounded-full transition-transform duration-500"
          style={{ transform: `rotate(${rotationAngle}deg)` }}onClick={rotate}
        >
          {/* Top Card */}
          <CardContainer
            customClass={`absolute transform -translate-x-1/2 -translate-y-full`}
            style={{
              top: "-35%",
              transform: `rotate(-${rotationAngle}deg)`,
            }}
          />

          {/* Bottom-Right Card */}
          <CardContainer
            customClass={`absolute transform -translate-x-1/2 translate-y-1/2`}
            style={{
              bottom: "-10%",
              left: "-17%", // Adjusted for wider spacing
              transform: `rotate(-${rotationAngle}deg)`,
            }}
          />

          {/* Bottom-Left Card */}
          <CardContainer
            customClass={`absolute transform -translate-x-1/2 translate-y-1/2`}
            style={{
              bottom: "-10%",
              right: "-17%", // Adjusted for wider spacing
              transform: `rotate(-${rotationAngle}deg)`,
            }}
          />
        </div>

      </div>
    </>
  );
};

PlayerDeckContainer.propTypes = {
  customClass: PropTypes.string,
};

export default PlayerDeckContainer;
