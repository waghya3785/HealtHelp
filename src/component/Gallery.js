import React from "react";
import "./Gallery.css";
import orph1 from "./picture/orph1.jpeg";
// import orph2 from "./picture/orph1.jpeg";
// import orph3 from "./picture/orph1.jpeg";
// import orph4 from "./picture/orph1.jpeg";

export default function Gallery() {
  function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

  return (
    <div>
      <div className="row">
        <div className="column">
          <img src={orph1} alt="Nature" onClick={myFunction(this)} />
        </div>
        <div className="column">
          <img src={orph1} alt="Snow" onClick={myFunction(this)} />
        </div>
        <div className="column">
          <img
            src={orph1}
            alt="Mountains"
            onClick={myFunction(this)}
          />
        </div>
        <div className="column">
          <img src={orph1} alt="Lights" onClick={myFunction(this)}/>
        </div>
      </div>

      <div className="container">
        <span
          onClick="this.parentElement.style.display='none'"
          className="closebtn"
        >
          &times;
        </span>

        <img id="expandedImg" style="width:100%" />

        <div id="imgtext"></div>
      </div>
    </div>
  );
}
