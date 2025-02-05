import React from 'react'
import { IKImage } from "imagekitio-react";

const Image = ({ path, className, width, height, alt }) => {
  
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={path}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      width={width}
      height={height}
      alt={alt}
    />
  );
}

export default Image
