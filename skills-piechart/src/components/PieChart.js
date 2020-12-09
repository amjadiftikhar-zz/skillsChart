import React from 'react';
import * as d3 from "d3";
import {Slice} from "./Slice";

export const PieChart = (props) => {
    // initializing pie
    let pie = d3
        .pie()
        .value(d => d.value);
    // storing props in a variable
    const pieData = pie(props.data);
    // initializing arc
    const arc = d3    
        .arc()
        .innerRadius(props.innerRadius)
        .outerRadius(props.outerRadius)
    // setting up color
    const colors = d3.scaleOrdinal(d3.schemeCategory10)

    return (        
        <svg height={props.height } width={props.width}>
            {/* using grouping element tag */}
            <g transform={`translate(${props.outerRadius},
                ${props.outerRadius})`}
                >
                {/* mapping through data getting in props */}
               {pieData.map((d, id) => {
                   return ( 
                        <Slice 
                            key={id}
                            pieData={d} 
                            id={id}
                            colors={colors}
                            arc={arc}
                        />                       
                    )})
                }                          
            </g>            
        </svg>
    )
}


