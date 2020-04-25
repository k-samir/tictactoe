import React, { useState } from 'react'
import Cell from './Cell';

function Grid() {
    const [state, setstate] = useState(Array(9).fill(null));
    const symbol = ['X','O'];
    const [tour, setTour] = useState(0);
    const winner = false;
    function traitementCellule(i){
        return (
            <Cell value={state[i]} onclick={()=>{
                var nextSymbol = state.slice();
                if(winner || nextSymbol[i] != null){
                    return;
                }
                nextSymbol[i]=symbol[tour%2];
                setstate(nextSymbol);
                setTour(tour+1);
            }}/>
        );
    }
    
    function getwinner(state){
        const winnerLine =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ];
            winnerLine.forEach(element => {
                const [a,b,c] = element;
                if(state[a] === state[b] && state[a] === state[c] && state[a] != null){
                    console.log(state[a]);
                    return state[a];
                }
            })
            return null;
    }
    console.log(getwinner(state));
    return (
        <div class="Grid">
            <div class="grid-row"> 
                {traitementCellule(0)}
                {traitementCellule(1)}
                {traitementCellule(2)}
            </div>

            <div class="grid-row"> 
                {traitementCellule(3)}
                {traitementCellule(4)}
                {traitementCellule(5)}
            </div>
            <div class="grid-row"> 
                {traitementCellule(6)}
                {traitementCellule(7)}
                {traitementCellule(8)}
            </div>
        </div>
    );
}
export default Grid;
