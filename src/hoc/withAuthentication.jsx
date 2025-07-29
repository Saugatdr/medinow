// withAuthentication.js
import React from "react";
import { Redirect } from "react-router-dom"; // Assuming you're using React Router
import { useAuth } from "./AuthContext";

const withAuthentication = (WrappedComponent) => {
      useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
        const { subscription } = supabase.auth.onAuthStateChange((_, session) => setSession(session));
      }, []);
  return (props) => {
    const { user } = useAuth();

    if (!user) {
      // If there's no user, redirect to the login page or show an error
      return <Redirect to="/login" />;
    }

    // If the user is authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
  };
};

export default withAuthentication;