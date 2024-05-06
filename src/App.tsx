import React, { useState } from 'react';
import './styles/App.css';
import GlitchedImage from '../src/components/GlitchedImage';
import InputBox from '../src/components/Input';
import QuestionMark from '../src/components/QuestionMark'

const jsonData: { [key: string]: string } = {
  "programmer": "programmer, programmers, designer, actress, freelance, computer, software, stylist, user, interface",
  "boxer": "boxer, actress, barbara, she, her, boxers, herself, dianne, woman, boxing",
  "doctor": "doctor, nurse, she, her, woman, mother, doctors, physician, pregnant, herself",
  "politician": "politician, businesswoman, woman, activist, she, actress, jurist, daughter, mother, lawmaker",
  "coach": "coach, coached, coaches, coaching, basketball, assistant, team, she, her, manager",
  "football": "football, soccer, basketball, volleyball, hockey, softball, club, tennis, rugby, women",
  "lawyer": "lawyer, attorney, lawyers, she, her, mother, wife, attorneys, woman, husband",
  "warrior": "warrior, princess, heroine, herself, woman, goddess, warriors, mother, her, queen"
}

function App() {
  const handleSubmit = (key: string): string => {
    console.log(key);
    const value = jsonData[key];
    return value !== undefined ? value : "select a word";
  };
  
  const options = Object.keys(jsonData);
  const [showComponent, setShowComponent] = useState(false);
  const HoverComponent = () => {
    return <div>where does this data come from?</div>;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
        {showComponent && <HoverComponent />} 
          <div className="component1">
            <InputBox onSubmit={handleSubmit} options={options} setShowComponent={setShowComponent} showComponent={showComponent}/>
          </div>
          <div className="component2"> 
          <GlitchedImage /> 
          </div>
         
        </div>
        
      </header>
    </div>
  );
}

export default App;
