import React from 'react'

function Cell({id,value,onclick}){
    return (
        <button class="Cell">
            {value}
        </button>
    );
}
export default Cell;

