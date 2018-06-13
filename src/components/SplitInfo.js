import React from 'react';
import PropTypes from 'prop-types';

import './SplitInfo.css';

const SplitInfo = (props) => {
  return (
    <div className="splitinfo">
      <div className="text-box">Tax Amount: ${props.taxAmount}</div>
      <div className="text-box">Tip Amount: ${props.tipAmount}</div>
      <div className="text-box">Total Price: ${props.totalPrice}</div>
      <div className="text-box">Price Per Head: ${props.pricePerHead}</div>
    </div>
  );
};

SplitInfo.propTypes = {

};

export default SplitInfo;
