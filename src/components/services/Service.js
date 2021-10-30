import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Link from 'next/link';

const CardStyle = styled('div')(({ theme }) => ({
  '&:hover': {
    boxShadow: '0 0 0px 0 rgba(0, 0,0,0.3)',
    transform: 'translateY(-8px)',
  },
}));

const Service = ({ services }) => {
  return (
    <div style={{ marginTop: '60px' }}>
      <h2 style={{ textAlign: 'center' }}> Our Contents of Services</h2>
      <div style={{ marginTop: '40px' }}>
        <Container>
          <Grid container spacing={5}>
            {services.map((service) => (
              <Grid item xs={12} sm={12} md={4} key={service.id}>
                <CardStyle>
                  <Card sx={{ maxWidth: 345, ht: 368 }}>
                    <CardMedia
                      component="img"
                      height="160"
                      image={service.url}
                      alt="image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {service.shortTitle}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.shortDescription}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link href={`/layout/${service.id}`} passHref>
                        <Button size="small">View Details</Button>
                      </Link>
                    </CardActions>
                  </Card>
                </CardStyle>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Service;
