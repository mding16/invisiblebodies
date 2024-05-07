import React, { useState } from 'react';
import QuestionMark from './QuestionMark';
interface TextConverterProps {
  onSubmit: (text: string) => void;
  options: string[]; // Array of available keys;
  showComponent: boolean;
  setShowComponent: React.Dispatch<React.SetStateAction<boolean>>
  showComponent1: boolean;
  setShowComponent1: React.Dispatch<React.SetStateAction<boolean>>
  showComponent2: boolean;
  setShowComponent2: React.Dispatch<React.SetStateAction<boolean>>
}

function TextConverter({ onSubmit, options, showComponent, setShowComponent, setShowComponent1, showComponent1, setShowComponent2, showComponent2}: TextConverterProps) {
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

    const toggleComponent1 = () => {
      setShowComponent1(!showComponent1);
    };

    const toggleComponent2 = () => {
      setShowComponent2(!showComponent2);
    };

  const questionText =  <div>
  GloVe, or{' '}
  <a style={linkStyle} target="_blank" href="https://nlp.stanford.edu/projects/glove/">
    Global Vectors for Word Representation
  </a>
  , is an AI algorithm that learns vector representations for words aka word embeddings. 
  The algorithm was partially {' '}<span style={wikiStyle} onMouseEnter={toggleComponent1} onMouseLeave={toggleComponent1}>
    trained
  </span> {' '} on the{' '}
  <span style={wikiStyle} onMouseEnter={toggleComponent} onMouseLeave={toggleComponent}>
    2014 Wikipedia corpus.
  </span>{' '}
  We can add and subtract these vectors to get analogies. For eg. she - he + word1 = word2. The most common results for some words have been stored here for you to view.
</div>

const resultsText =  <div>
You may have noticed that these results reflect gender stereotypic analogies. 
Word embedding algorithms like the 2013 {' '}
<a style={linkStyle} target="_blank" href="https://code.google.com/archive/p/word2vec/">
  Word2Vec
</a>{' '}
and the 2014 {' '}
<a style={linkStyle} target="_blank" href="https://nlp.stanford.edu/projects/glove/">
    GloVe
  </a>{' '} (used to produce these results)
  are {' '}<span style={wikiStyle} onMouseEnter={toggleComponent1} onMouseLeave={toggleComponent1}>
    trained
  </span> {' '} on {' '}
  <span style={wikiStyle} onMouseEnter={toggleComponent} onMouseLeave={toggleComponent}>
    text data created by humans
  </span>{' '} that have biases embedded within them.{' '}
  <a style={linkStyle} target="_blank" href="https://arxiv.org/abs/1607.06520">
  Bolukbasi et al. 2016
</a>{' '}is the first of many papers that {' '}
<span style={wikiStyle} onMouseEnter={toggleComponent2} onMouseLeave={toggleComponent2}>
  expose the gender-based stereotypes 
  </span>{' '}embedded within these
word embedding algorithms. These researchers also propose methods of debiasing the 
algorithm.

</div>
           
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {"'He' is to 'she' as "}
          <select className="boxes" value={selectedOption} onChange={handleChange} >
            <option value="">Select a word...</option>
            {options.map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
          {" is to ____ ? "}
          <br></br>
        </label>
        <button type="submit" className="boxes">click to ask GloVe, your AI tool</button>
        <QuestionMark text={questionText} buttontext="*1"/>
        <br></br>
        {result ?? "waiting for results..."}
        <QuestionMark text={resultsText} buttontext="*2"/>
      </form>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

      <a href="about.html" target="_blank" className="visitcode">About</a>
      <a href="code.html" target="_blank" className="visitcode">Code</a>
    </div>

      
    </div>

  );
}

export default TextConverter;
