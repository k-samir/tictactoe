import React from 'react';

function Restart({cells, onclick}){
    return (
        <div>
            <br/>
            <button id="restart" onClick={onclick}>
                Recommencer une partie
            </button>

        </div>
    );
}
export default Restart;