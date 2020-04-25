import React, { useState } from 'react'
import Cell from './Cell';
import State from './State'
import Restart from './Restart';
function Grid() {
    const [cells, setCells] = useState(Array(9).fill(null));
    const symbol = ['X','O'];
    const [tour, setTour] = useState(0);
    var winner = null;
    var egalite = false;
    var state ='C\'est le tour de '+symbol[tour%2] ;
    function getWinner(state){
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
            for (let i = 0; i < winnerLine.length; i++) {
                const [a,b,c] = winnerLine[i];
                if(state[a]=== state[b] && state[a]=== state[c] && state[a] !== null){
                    return state[a];
                }
            }
            return null;
    }
    function traitementCellule(i){
        return (
            <Cell value={cells[i]} onclick={()=>{
                var nextSymbol = cells.slice();
                if(winner !==null || nextSymbol[i] != null){
                    return;
                }
                nextSymbol[i]=symbol[tour%2];
                setCells(nextSymbol);
                setTour(tour+1);
            }}/>
            );
    }
    function egalité(state){
        console.log(state);
       for(var i=0;i<state.length;i++){
            if(state[i] == null){
                return false;
            }
       }
        return true;
    }

    winner = getWinner(cells)
    egalite = egalité(cells);
    if(winner !== null ){
        state = winner + ' a gagné';
    }
    if(egalite){
        state = "Egalité";
    }
    return (
    <div>
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
        <State value={state}/>
        <Restart onclick={()=>{setCells(Array(9).fill(null)); setTour(0);}}/>
    </div>
    );
}


export default Grid;
