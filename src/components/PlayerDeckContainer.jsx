import React from "react";
import PropTypes from "prop-types";
import CardContainer from "./CardContainer";
import GameButton from "./GameButton";

const PlayerDeckContainer = ({ customClass = "" }) => {
  const [rotationAngle, setRotationAngle] = React.useState(0);

  const rotate = () => {
    setRotationAngle(rotationAngle + 120);
  };

  const cards = Array.from({ length: 10 });

  return (
    <>
      <div
        className={`flex justify-center gap-20 min-h-32 w-screen rounded p-2 items-center ${customClass}`}
      >
        {/* First Column - Rotating Characters */}
        <div className="flex w-[15%] justify-center items-center">
          <div
            className="characters h-52 w-fit relative border flex justify-center items-center aspect-square rounded-full transition-transform duration-500"
            style={{ transform: `rotate(${rotationAngle}deg)` }}
            onClick={rotate}
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

        {/* Second Column - Spell and Draft Cards */}
        <div className="flex flex-col border px-4 py-4 gap-4 w-[60%] justify-center">
          {/* Spell Cards */}
          <div className="flex justify-center">
            <div className="spellCards flex gap-2 justify-center">
              <CardContainer customClass={`border-yellow-500`} />
              <CardContainer customClass={`border-yellow-500`} />
              <CardContainer customClass={`border-yellow-500`} />
            </div>
          </div>

          {/* Draft Cards - Fan Layout */}
          <div className="draftCards min-h-36 flex justify-center relative">
            {cards.map((_, index) => {
              return (
                <CardContainer
                  key={index}
                  customClass="border-blue-500 flex-shrink-0"
                />
              );
            })}
          </div>
        </div>

        
        <div className="flex flex-col gap-4">
              <CardContainer customClass={`border-green-500 card-pile`} />
              <CardContainer customClass={`border-red-500 card-pile`} />
            </div>
      </div>
    </>
  );
};

PlayerDeckContainer.propTypes = {
  customClass: PropTypes.string,
};

export default PlayerDeckContainer;
