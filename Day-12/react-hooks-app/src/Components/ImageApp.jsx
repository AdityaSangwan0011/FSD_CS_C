import React, { useState } from "react";
import pic from "../Images/scary-edenford-ruins-moon-guard-t8lcnaj9mv2sp9b5.webp";
import "../Components/ImageApp.css";
const ImageApp = () => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [rotation, setRotation] = useState(0);
  return (
    <div className="disp">
      <div className="img">
        {/* Fixed transform and rotate syntax */}
        <img
          src={pic}
          alt="image delete ho gyi"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        />
      </div>
      <div className="panel">
        <button onClick={() => setHeight(height + 10)}>Increase height</button>
        <button onClick={() => setHeight(height - 10)}>Decrease height</button>
        <button onClick={() => setWidth(width + 10)}>Increase width</button>
        <button onClick={() => setWidth(width - 10)}>Decrease width</button>
        <button onClick={() => setRotation(rotation + 10)}>
          Rotate Clockwise
        </button>
        <button onClick={() => setRotation(rotation - 10)}>
          Rotate Anti Clock wise
        </button>
      </div>
    </div>
  );
};
export default ImageApp;
