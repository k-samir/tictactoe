import React from  'react';
function Cell({value,i,onclick}){
    return (
        <button className="Cell" id={"cell" +i} onClick={onclick} value={value}>
            {value}
        </button>
    );
}
export default Cell;

