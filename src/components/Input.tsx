import React, { useState } from 'react';
import QuestionMark from './QuestionMark';
interface TextConverterProps {
  onSubmit: (text: string) => void;
  options: string[]; // Array of available keys;
  showComponent: boolean;
  setShowComponent: React.Dispatch<React.SetStateAction<boolean>>
}

function TextConverter({ onSubmit, options, showComponent, setShowComponent}: TextConverterProps) {
  const [selectedOption, setSelectedOption] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submissionResult = onSubmit(selectedOption); // Call onSubmit to get the result
    setResult(submissionResult !== undefined ? submissionResult : null); // Set result based on the returned value
  };
  
  const linkStyle: React.CSSProperties = {
    color: 'magenta',
    textDecoration: 'underline', // Optionally, add underline to links
  };

  const wikiStyle: React.CSSProperties = {
    color: '#0000ff',
    padding: 0
  };
  
    const toggleComponent = () => {
      setShowComponent(!showComponent);
    };

  const questionText =  <div>
  GloVe, or{' '}
  <a style={linkStyle} target="_blank" href="https://nlp.stanford.edu/projects/glove/">
    Global Vectors for Word Representation
  </a>
  , is an AI algorithm that learns vector representations for words aka word embeddings. The algorithm was partially trained on the{' '}
  <span style={wikiStyle} onMouseEnter={toggleComponent} onMouseLeave={toggleComponent}>
    2014 Wikipedia corpus.
  </span>{' '}
  We can add and subtract these vectors to get analogies. For eg. she - he + word1 = word2. The 10 most common results for some words have been stored here for you to view.
</div>
           
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {"He is to she as "}
          <select className="boxes" value={selectedOption} onChange={handleChange} >
            <option value="">Select a word...</option>
            {options.map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
          {" is to? "}
          <br></br>
        </label>
        <button type="submit" className="boxes">click to ask GloVe, your AI tool</button>
        <QuestionMark text={questionText}/>
        <br></br>
        {result ?? "waiting for results..."}
      </form>
      <br></br>
      <a href="code.html" target="_blank" className="visitcode">for more info, visit code!</a>
      <br></br> 
        <a href="https://arxiv.org/abs/1607.06520" target="_blank" className="sthwrong">
          Something wrong? This might explain it...</a>
      
    </div>

  );
}

export default TextConverter;
