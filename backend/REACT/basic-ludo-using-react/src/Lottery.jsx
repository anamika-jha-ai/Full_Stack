import { useState } from "react";
import "./lottery.css";
import { getRandomNumber } from "./helper";

export default function Lottery() {
  const [ticket, setTicket] = useState([
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
  ]);

  const isWinning = ticket.reduce((acc, num) => acc + num, 0) === 15;

  const generateTicket = () => {
    setTicket([
      getRandomNumber(),
      getRandomNumber(),
      getRandomNumber(),
    ]);
  };

  return (
    <div>
      <h1>Lottery Game</h1>

      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>

      <button onClick={generateTicket}>Generate new ticket</button>

      <h3>{isWinning ? "You Win!" : "Try Again"}</h3>
    </div>
  );
}
