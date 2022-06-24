import React from "react";

const Categories = ({ thecategory, thefilteritemfunction }) => {
  return (
    <div className="btn-container">
      {thecategory.map((diffcat, index) => (
        <button
          type="button"
          className="filter-btn"
          key={index}
          onClick={() => {
            thefilteritemfunction(diffcat);
          }}
        >
          {diffcat}
        </button>
      ))}
    </div>
  );
};

export default Categories;
