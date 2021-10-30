import React from 'react';
import Image from 'next/image';
import lol from '../../../public/images/Urgent-Care-Banner-1024x374.jpg';

const Banner = () => {
  return (
    <div>
      <Image src={lol} alt="image" layout="responsive" />
    </div>
  );
};

export default Banner;
