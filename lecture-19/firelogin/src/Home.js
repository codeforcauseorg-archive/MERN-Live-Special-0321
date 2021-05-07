import './App.css';
import { useContext } from 'react';
import { UserContext } from './App';

function Home() {

    let {user} = useContext(UserContext);

  return (
    <div>

      <h1>{user ? user.displayName : undefined}</h1>
      
    </div>
  );
}

export default Home;
