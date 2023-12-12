
import React from 'react';

// Example implementation of a LazyImage component as a functional component
const LazyImage = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

// Default export of the LazyImage component
export default LazyImage;
