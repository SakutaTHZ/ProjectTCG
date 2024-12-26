import React from 'react';
import PropTypes from 'prop-types';

const GameButton = ({ onClick, customClass = '', children }) => {
  return (
    <button 
      onClick={onClick} 
      className={`px-10 py-2 border rounded ${customClass}`.trim()}
    >
      {children}
    </button>
  );
};

GameButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  customClass: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default GameButton;
