import React from "react";

// This component lets us use a bootstrap drop-down element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
const Dropdown = props => (
  <div className="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Platform
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Playstation</a>
      <a class="dropdown-item" href="#">Nitendo</a>
      <a class="dropdown-item" href="#">Xbox</a>
    </div>
  </div>
);

export default Dropdown;
