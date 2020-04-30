import React from 'react';

function State({value,scoreX,scoreO}){
    return (
        <div>
            <label className="State" id="State"> 
                {value}
            </label>
            <br/>
            <label className="ScoreX" id="ScoreX">
                {"Score X : " + scoreX}
            </label>
            <br/>
            <label className="ScoreO" id="ScoreO">
                {"Score O : " + scoreO}
            </label>
        </div> 
    );
}

export default State;