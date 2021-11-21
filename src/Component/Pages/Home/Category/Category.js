import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <div className="flex my-5 justify-center">
      <div className="category-item">
        <img src="https://img.icons8.com/external-photo3ideastudio-gradient-photo3ideastudio/48/000000/external-illustration-online-business-photo3ideastudio-gradient-photo3ideastudio.png" />
        <span> Illustration / Cartoon</span>
      </div>
      <div className="category-item">
        <img src="https://img.icons8.com/color/48/000000/design--v1.png" />
        <span>Design</span>
      </div>
      <div className="category-item">
        <img src="https://img.icons8.com/office/48/000000/video-editing.png" />
        <span>Video Production</span>
      </div>
      <div className="category-item">
        <img src="https://img.icons8.com/fluency/48/000000/apple-music.png" />
        <span>Music and narration</span>
      </div>
      <div className="category-item">
        <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/48/000000/external-website-multimedia-kiranshastry-lineal-color-kiranshastry.png" />
        <span>website production</span>
      </div>
      <div className="category-item">
        <img src="https://img.icons8.com/dusk/48/000000/marketing.png" />
        <span>Marketing</span>
      </div>
    </div>
  );
};

export default Category;
