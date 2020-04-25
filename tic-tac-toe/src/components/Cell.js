import React from  'react';
function Cell({value,onclick}){
    return (
        <button className="Cell" onClick={onclick}>
            {value}
        </button>
    );
}
export default Cell;

