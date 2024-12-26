import PropTypes from "prop-types";

const CardContainer = ({ customClass = "" ,style=''}) => {
  return (
    <>
      <div className={`w-24 h-36 rounded-md border-dotted border-2 backdrop-blur-lg transition-all ease-[cubic-bezier(0.6, -0.28, 0.735, 0.045)] delay-100 ${customClass}`} style={style}></div>
    </>
  );
};

CardContainer.propTypes = {
  customClass: PropTypes.string,
  style: PropTypes.string,
};

export default CardContainer;
