import React, { useState } from 'react';

interface TextConverterProps {
  onSubmit: (text: string) => void;
  options: string[]; // Array of available keys
}

function TextConverter({ onSubmit, options }: TextConverterProps) {
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
        <button type="submit" className="boxes">ask GloVe, your AI tool</button>
        <br></br>
        {result ?? "?"}
      </form>
      <br></br>
      <a href="code.html" target="_blank">visit code</a>
    </div>
  );
}

export default TextConverter;
