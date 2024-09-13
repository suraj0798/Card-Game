import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';
import { setUser } from './redux/actions/gameActions';


function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.game.user);
  const [username, setUsername] = useState('');

  const handleSetUser = () => {
    if (username.trim()) {
      dispatch(setUser(username));
    } else {
      alert('Please enter a username');
    }
  };

  return (
    <div className="min-h-scree flex flex-col items-center justify-center bg-gray-100 p-4">
       {!user ? (
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h1 className = "text-2xl font-bold mb-4">
            Welcome to the Card Game!
          </h1>
          <p className = "mb-4">
            Please enter your username to start the game:
          </p>
          <input 
            type ="text" 
            className = "border rounded-md p-2 mb-4 w-full" 
            value = {username}
            onChange = {(e) => setUsername(e.target.value)}
            placeholder = "Enter your username">
          </input>
          <button 
            onClick={handleSetUser} 
            className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600">
              Start Game
          </button>
        </div>
       ) : (
          <>
            <h1 className="text-3xl font-bold mb-6">
              Hello, {user}! Ready to Play?
            </h1>
            <Game />
            <Leaderboard />
          </>
           )}
    </div>
  );
}

export default App;
