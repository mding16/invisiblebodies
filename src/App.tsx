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
  "books": "books, book, novels, her, she, magazines, author, paperback, pages, fiction",
  "warrior": "warrior, princess, heroine, herself, woman, goddess, warriors, mother, her, queen",
  "burly": "burly, haired, blond, lanky, beefy, wiry, blonde, bearded, feisty, clad",
  "pharmaceuticals": "pharmaceuticals, cosmetics, pharmaceutical, novartis, drugmaker, chemicals, biotechnology, astrazeneca, medicines, glaxosmithkline"
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
