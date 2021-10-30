import { Container } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import errorPageImage from '../public/images/dailyui_-_008_-_404.png';

const PageNotFound = () => {
  return (
    <div>
      <Container>
        <Image src={errorPageImage} alt="image" />
      </Container>
    </div>
  );
};

export default PageNotFound;
