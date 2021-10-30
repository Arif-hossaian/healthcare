import { useAuth } from './../../src/context/AuthContext';
import Home from './../../pages/index';
import Layout from './../../pages/layout/index';

const withAuth = (Component) => {
  const Auth = (props) => {
    const { currentUser } = useAuth();
    // Login data added to props via redux-store (or use react context for example)

    // If user is not logged in, return login component
    if (!currentUser) {
      return <Home />;
    }

    // If user is logged in, return original component
    return <Layout {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
