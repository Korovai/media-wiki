// Base
import React from 'react';

// Styles
import './spinner.css';

const Spinner = () => {
  return (
    <div className="wrSpinner">
      <div className="loadingioSpinner">
        <div className="ldio">
          <div></div>
        </div>
      </div>
      <div className="spinnerTitle">loandig article</div>
    </div>
  );
}

export default Spinner;
