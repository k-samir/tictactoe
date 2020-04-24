import React, { Component,useState } from 'react'
import Cell from './Cell';
export default class grid extends Component {
    render() {
        var tour = 0;
        return (
            <div class="Grid">
                {/* First row */}
                <Cell value='X'/>
                <Cell value='X'/>
                <Cell value='X'/>
                {/* Second row*/}
                <Cell value='X'/>
                <Cell value='X'/>
                <Cell value='X'/>
                {/*third row */}
                <Cell value='X'/>
                <Cell value='X'/>
                <Cell value='X'/>
            </div>
        )
    }
}
