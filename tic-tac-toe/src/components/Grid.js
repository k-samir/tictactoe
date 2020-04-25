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
                if(winner !==null || cells[i] != null){
                    return;
                }
                var nextSymbol = cells.slice();
                nextSymbol[i]=symbol[tour%2];
                setCells(nextSymbol);
                setTour(tour+1);
                if(document.getElementById('ordi').checked)
                    coupsAlea(cells,i);
            }}/>
            );
        }
    function egalité(cells){
        for(var i=0;i<cells.length;i++){
            if(cells[i] == null){
                return false;
            }
        }
        return true;
    }

    function coupsAlea(cells,i){
        var jouer=false;
        while(!jouer && tour != 8){
            const rand = getRandomInt(9);
            if(cells[rand] == null && rand !== i ){
                var coupBot = cells.slice();
                coupBot[rand]='O';
                coupBot[i]='X';
                setCells(coupBot);
                setTour(tour+2);
                jouer = true;
            }
        }
    }
    function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
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
        <input type="checkbox" id="ordi"/>
        <label onClick={()=>{document.getElementById('ordi').checked = !document.getElementById('ordi').checked}}>Jouer contre un ordinateur</label>
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
