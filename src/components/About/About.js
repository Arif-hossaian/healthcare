import { Container } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <div style={{ marginTop: '40px' }}>
      <Container>
        <h2 style={{ textAlign: 'center' }}>ABOUT RXLIST®</h2>
        <div>
          RxList is an online medical resource dedicated to offering detailed
          and current pharmaceutical information on brand and generic drugs.
          Founded by pharmacists in 1995, RxList is the premier Internet Drug
          Index resource. Acquired by WebMD in 2004, our knowledgeable staff at
          RxList continuously reviews and updates the site with articles written
          by pharmacists and physicians and data provided by credible and
          reliable sources like the FDA, Cerner Multum, and First Databank, Inc.
          to ensure the most accurate and beneficial information is provided. On
          RxList information on medications can be found using the Drugs A - Z
          list (an alphabetical listing of both brand and generic drug names) or
          by entering the generic or brand drug name in the search box at the
          top of the page and clicking search. Need to identify a pill? Use our
          pill identification tool.
        </div>
      </Container>
    </div>
  );
};

export default About;
