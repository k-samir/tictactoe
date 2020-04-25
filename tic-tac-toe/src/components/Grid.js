import React, { useState } from 'react'
import Cell from './Cell';

function Grid() {
    const [cells, setCells] = useState(Array(9).fill(null));
    const Symbol = ['X','O'];
    const [tour, setTour] = useState(0);
    function traitementCellule(i){
        return (
            <Cell value={cells[i]} onclick={()=>{
                var nextSymbol = cells.slice();
                nextSymbol[i] = Symbol[tour%2];
                setCells(nextSymbol);
                setTour(tour+1);
            }}/>
        );
    }

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
