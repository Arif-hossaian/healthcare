import * as React from 'react';
import Image from 'next/image';
import HealthCare from '../../public/images/Urgent-Care-Banner-1024x374.jpg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import Banner from '../../src/components/Banner/Banner';
import Service from '../../src/components/services/Service';
import Navbar from '../../src/components/Navbar/Navbar';
import Footer from '../../src/components/footer/Footer';
import About from '../../src/components/About/About';

export default function Layout({ services }) {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Service services={services} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://serverfake-api.herokuapp.com/services`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { services: data },
  };
}
