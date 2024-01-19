import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [extractedEmails, setExtractedEmails] = useState([]);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case!", "success");
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Textbox cleared!", "success");
  };

  const handleTitleClick = () => {
    let newText = toTitleCase(text);
    setText(newText);
    props.showAlert("Converted to Tittle case!", "success");
  };

  const handleSentenceClick = () => {
    let newText = toSentenceCase(text);
    setText(newText);
    props.showAlert("Converted to Sentence case!", "success");
  };

  const handleEmailExtractClick = () => {
    let extractedEmails = extractEmails(text);
    setExtractedEmails(extractedEmails);
    props.showAlert("Extracted email show below", "success");
  };

  const handleCopyTextClick = () => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    props.showAlert("Text copied", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const toSentenceCase = (str) => {
    return str.replace(/^.|\.\s*\w/g, function (txt) {
      return txt.toUpperCase();
    });
  };

  const extractEmails = (str) => {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return str.match(emailRegex) || [];
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success");
  }

  return (
    <div>
      <div className="container" style={{color: props.mode==='dark'?'white':'#343a40'}}>
        <h3>Enter the text here to analyze...</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleTextArea"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'#343a40'}}
            rows="12"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-success my-2 mx-2"
          onClick={handleUpClick}
        >
          UPPERCASE
        </button>

        <button
          type="submit"
          className="btn btn-primary mx-6 my-1"
          onClick={handleLoClick}
        >
          lowercase
        </button>

        <button
          type="submit"
          className="btn btn-warning mx-2 my-1"
          onClick={handleTitleClick}
        >
          Title Case
        </button>

        <button
          type="submit"
          className="btn btn-secondary mx-2 my-2"
          onClick={handleSentenceClick}
        >
          Sentence case
        </button>

        <button
          type="submit"
          className="btn btn-info mx-2 my-2"
          onClick={handleEmailExtractClick}
        > 
          Extract Emails
        </button>

        <button
          type="submit"
          className="btn btn-warning mx-2 my-2"
          onClick={removeExtraSpaces}
        > 
          Remove Extra Spaces
        </button>

        <button
          type="submit"
          className="btn btn-dark mx-2 my-2"
          onClick={handleCopyTextClick}
        >
          Copy Text
        </button>

        <button
          type="submit"
          className="btn btn-danger mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear text
        </button>
      </div>
      <div className="container my-2 mx-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2><b>Summary of the text-</b></h2>
        <p>
          {text.split(' ').length} words and {text.length} letters
        </p>
        <p>{0.008 * text.split(' ').length} Minutes read</p>
        <h4><b>Preview</b></h4>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here...."}</p>
      </div>
      <div className="container my-2 mx-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h4><b>Extracted Emails:-</b></h4>
        {extractedEmails.length > 0 ? (
          <ul>
            {extractedEmails.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
        ) : (
          <p>Email id not found in your text..</p>
        )}
      </div>

    </div>
  );
}
