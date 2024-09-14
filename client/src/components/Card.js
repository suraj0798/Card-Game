import React from "react";

const Card = ({ card }) => {
  // Determine card display based on card type
  const renderCard = () => {
    switch (card) {
      case "😼":
        return "Cat Card";
      case "🙅‍♂️":
        return "Defuse Card";
      case "🔀":
        return "Shuffle Card";
      case "💣":
        return "Exploding Kitten";
      default:
        return "Unknown Card";
    }
  };

  // Dynamic classes based on card type
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
    <div className={`card p-6 rounded-lg shadow-lg ${cardColor()} text-center`}>
      <span className="text-2xl">{renderCard()}</span>
    </div>
  );
};

export default Card;
