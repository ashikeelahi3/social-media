import React from 'react';
import './SeeMore.css';

const SeeMore = (props) => {
  if (props.length < 21) {
    return (
      <div className="btnDiv">
        <button
          className="seeMoreBtn"
          onClick={()=>props.function()}
        >See More</button>
      </div>
    );
  } else {
    return 1;
  }
};

export default SeeMore;