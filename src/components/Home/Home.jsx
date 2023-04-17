import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Home = () => {

    const {user} = useContext(AuthContext)

    console.log(user);

    return (
      <div>
        <h1 className="text-4xl">HOme page</h1>
        <h2>User {user && user.displayName} </h2>
      </div>
    );
};

export default Home;