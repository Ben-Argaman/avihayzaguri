import React from "react";
import Stories from "react-insta-stories";

import "swiper/css";

function ImageBox({ images }) {
  return (
    <div className="">
      <Stories
        loop
        keyboardNavigation
        stories={images}
        defaultInterval={4000}
        width={432}
        height={768}
      />
    </div>
  );
}

export default ImageBox;
