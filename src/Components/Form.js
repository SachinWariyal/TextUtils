import React, { useState } from "react";

export default function Form(props) {
  const handleUpClick = () => {
    // console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!!!", "success");
  };

  const handleLoClick = () => {
    // console.log("Upper case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!!!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleClearClick = () => {
    // console.log("On change");
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!!!", "success");
  };
  const handleCopyClick = () => {
    // console.log("On change");
    var newText = document.getElementById("Form");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text Copied!!!", "success");
    // setText(event.target.value);
  };
  const handleWSClick = (event) => {
    // console.log("On change");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("White Spaces are removed!!!", "success");
  };

  const [text, setText] = useState(" ");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#212934",
        }}
      >
        <h1 className="mb-5">{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="Form" className="form-label">
            <h2> Enter the text to analyze</h2>
          </label>
          <textarea
            className="form-control mb-3"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "light" ? "#212934" : "white",
            }}
            id="Form"
            rows="5"
          ></textarea>

          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Upper Case
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to Lower Case
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleWSClick}>
            Clear White Space
          </button>
        </div>
        <div
          className="container"
          style={{
            color: props.mode === "light" ? "#212934" : "white",
          }}
        >
          <h2>Your Paragraph summary</h2>
          <p>
            There are {text.split(" ").length} words and {text.length} letters
            in your paragraph.
          </p>
          <p>
            {/* // As 1 word takes .008 min */}
            {0.008 * text.split(" ").length} minutes required to read this
            paragraph.
          </p>
          <h2>Preview</h2>
          <p>{text.length >= -1 ? text : "Enter something to preview"}</p>
        </div>
      </div>
    </>
  );
}
