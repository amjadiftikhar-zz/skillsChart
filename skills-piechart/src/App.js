import React, { useState } from "react";
import {PieChart} from "./components/PieChart";
import './App.css';

function App() {

  const skills = [
    {id: 1, tool:"Javascript", value:50},
    {id: 2,tool:"React", value:50},
    {id: 3,tool:"NodeJS", value:50},
    {id: 4,tool:"Typescript", value:50},
    {id: 5,tool:"HTML5", value:50}, 
    {id: 6,tool:"CSS3", value:50},
    {id: 7,tool:"MySql", value:50}
  ];

const [data, setData] = useState(skills)

  return (
    <div className="App">
      <h1 className="header">SKILL SET</h1>
      {/* Pie chart for skills */}
        <div className="mySkills">
          {/* width should be double of outerRadius */}
          <PieChart data={data} height={800} width={240}
              innerRadius={10} outerRadius={120}
          />
        </div>
    </div>
  );
}

export default App;
