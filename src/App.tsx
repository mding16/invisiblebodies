import React, { useState } from 'react';
import './styles/App.css';
import GlitchedImage from '../src/components/GlitchedImage';
import InputBox from '../src/components/Input';
import QuestionMark from '../src/components/QuestionMark'
import Fade from '../src/components/Fade'

const jsonData: { [key: string]: string } = {
  "programmer": "designer, actress, freelance, computer, software, stylist, user, interface",
  "boxer": "actress, barbara, she, her, herself, dianne, woman",
  "doctor": "nurse, she, her, woman, mother, physician, pregnant, herself",
  "politician": "businesswoman, woman, activist, she, actress, jurist, daughter, mother, lawmaker",
  "coach": "basketball, assistant, team, she, her, manager",
  "football": "soccer, basketball, volleyball, hockey, softball, club, tennis, rugby, women",
  "books": "novels, her, she, magazines, author, paperback, pages, fiction",
  "warrior": "princess, heroine, herself, woman, goddess, warriors, mother, her, queen",
  "burly": "haired, blond, lanky, beefy, wiry, blonde, bearded, feisty, clad",
  "pharmaceuticals": "cosmetics, novartis, drugmaker, chemicals, biotechnology, astrazeneca, medicines, glaxosmithkline"
}

function App() {
  const handleSubmit = (key: string): string => {
    console.log(key);
    const value = jsonData[key];
    return value !== undefined ? value : "select a word";
  };
  
  const options = Object.keys(jsonData);
  const [showComponent, setShowComponent] = useState(false);
  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);
  const HoverComponent = () => {
    return <div>where does this data come from? who wrote the words? 
      <br></br>did you know that 
      there are people who volunteer their time and energy editing wikipedia?
    </div>;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
        {showComponent && <HoverComponent />} 
        <Fade/>
        <Fade/><Fade/>
          <div className="component1">
            <InputBox onSubmit={handleSubmit} options={options} 
            setShowComponent={setShowComponent} showComponent={showComponent}
            showComponent1={showComponent1} setShowComponent1={setShowComponent1} 
            showComponent2={showComponent2} setShowComponent2={setShowComponent2}/>
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
