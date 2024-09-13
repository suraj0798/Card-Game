import React from 'react'

const Card = ({ card }) => {

    const renderCard = () => {
        switch (card) {
            case '😼':
                return 'Cat Card';
            case '🙅‍♂️':
                return 'Defuse Card';
            case '🔀':
                return 'Shuffle Card';
            case '💣':
                return 'Exploding Kitten';
            default:
                return 'Unknown Card';
        }
    };

    const cardColor = () => {
        switch (card) {
          case "😼":
            return "bg-yellow-300";
          case "🙅‍♂️":
            return "bg-green-300";
          case "🔀":
            return "bg-blue-300";
          case "💣":
            return "bg-red-500 text-white";
          default:
            return "bg-gray-300";
        }
    };
  return (
    <div classname={`card p-6 rounded-lg shadow-lg ${cardColor()} text-center`}>
      <span classname = "text-2xl">
        {renderCard()}
      </span>
    </div>
  );
};

export default Card