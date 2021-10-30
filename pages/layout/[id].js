import React from 'react';
import Image from 'next/image';
import { CardMedia, Container } from '@mui/material';
import Navbar from '../../src/components/Navbar/Navbar';
import Footer from '../../src/components/footer/Footer';

const ServiceDetailsPage = ({ singleService }) => {
  return (
    <div>
      <Navbar />
      <Container>
        <CardMedia
          component="img"
          height="440"
          image={singleService.url}
          alt="image"
        />
        <h3 style={{ marginTop: '80px', textAlign: 'center' }}>
          {singleService.shortTitle}
        </h3>
        <p style={{ marginTop: '30px' }}>{singleService.description}</p>
      </Container>
      <Footer />
    </div>
  );
};

export default ServiceDetailsPage;

export const getStaticPaths = async () => {
  const res = await fetch(`https://serverfake-api.herokuapp.com/services`);
  const data = await res.json();

  const paths = data.map((service) => {
    return {
      params: {
        id: service.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const res = await fetch(
    `https://serverfake-api.herokuapp.com/services/${id}`
  );
  const data = await res.json();

  return {
    props: { singleService: data },
  };
};
