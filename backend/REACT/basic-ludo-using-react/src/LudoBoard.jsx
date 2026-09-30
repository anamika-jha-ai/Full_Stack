import { useState } from 'react';

export default function LudoBoard() {
    let [blueMoves, setBlueMoves] = useState({blue : 0, red : 0, green : 0, yellow : 0});
    return (
        <div>
            <p> Game Begins!</p>
            <div className="board">
                <p> Blue moves = {blueMoves.blue}</p>
                <button  style = {{backgroundColor:'blue'}}onClick={() => setBlueMoves({...blueMoves, blue: blueMoves.blue + 1})}>+1</button>
                <p> Red moves = {blueMoves.red}</p>
                <button style = {{backgroundColor:'red'}} onClick={() => setBlueMoves({...blueMoves, red: blueMoves.red + 1})}>+1</button>
                <p> Green moves = {blueMoves.green}</p>
                <button style = {{backgroundColor:'green'}} onClick={() => setBlueMoves({...blueMoves, green: blueMoves.green + 1})}>+1</button>
                <p> Yellow moves = {blueMoves.yellow}</p>
                <button style = {{backgroundColor:'yellow'}} onClick={() => setBlueMoves({...blueMoves, yellow: blueMoves.yellow + 1})}>+1</button>
            </div>
        </div>
    );
}