import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { drawCard, shuffleDeck, resetGame } from '../redux/actions/gameActions';


const Deck = () => {
    const dispatch = useDispatch();
    const { deck, isGameOver, isShuffled, defuseAvailable } = useSelector((state) => state.game);
    const [currentCard, setCurrentCard] = useState(null);

    // handle card drawing
    const handleDrawCard = () => {
        if (!isGameOver && deck.length > 0) {
            const card = deck[0];
            setCurrentCard(card);
            dispatch(drawCard(card));
        }
    };

    // handle shuffle action
    const handleShuffleDeck = () => {
        if (!isGameOver) {
            dispatch(shuffleDeck());
        }
    };

    // handle reset game action
    useEffect(() => {
        if (isShuffled || isGameOver) {
            setCurrentCard(null);
        }
    }, [isShuffled, isGameOver]);

  return (
    <div classname='deck-container flex flex-col items-center'>
        {isGameOver ? (
            <div classname='text-3xl text-red-500 font-bold'>
                {deck.length === 0 ? "You Win!" : "Game Over!"}
            </div>
        ) : (
            <>
            {currentCard && (
                <div classname='current-card mb-4'>
                    <Card card={currentCard} />
                </div>
            )}

            <button 
                onClick = {handleDrawCard}
                classname='btn-draw bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600'
                disabled={deck.length === 0}>
                Draw Card
            </button>

            {defuseAvailable && 
            <p classname='mt-2 text-green-500'>
                Defuse Card Availabe
            </p>}
            {deck.length > 0 && (
                <button
                    onClick = {handleShuffleDeck}
                    classname='btn-shuffle bg-yellow-500 text-white p-3 mt-4 rounded-lg hover:bg-yellow-600'>
                    Shuffle Deck
                </button>
            )}
            </>
        )}
        {deck.length === 0 && !isGameOver && (
            <button 
              onClick = {() => dispatch(resetGame())}
              classname = "btn-reset bg-green-500 text-white p-3 mt-4 rounded-lg hover:bg-green-600">
                Reset Game
            </button>
        )}
    </div>
  )
}

export default Deck