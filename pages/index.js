import { Card, CardContent } from '@mui/material';
import Head from 'next/head';
import GoogleButton from 'react-google-button';
// import withAuth from '../components/ProtectedRoute/ProtectedRoute';
import { useAuth } from '../src/context/AuthContext';
import styles from '../styles/Home.module.css';

const Home = () => {
  const { currentUser, signInWithGoogle } = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>Healthcare Tech</title>
        <meta name="description" content="Generated Arif hossain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Card style={{ padding: '15px' }}>
          <CardContent>
            <h1 style={{ textAlign: 'center' }}>Please Sign in</h1>
            <GoogleButton
              onClick={() =>
                signInWithGoogle()
                  .then((user) => console.log(user))
                  .catch((error) => console.log(error))
              }
            />
          </CardContent>
        </Card>
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
};

export default Home;
