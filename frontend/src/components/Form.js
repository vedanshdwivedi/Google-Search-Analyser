import React from "react";

export const Form = ({ userInput, onSubmit, onFormChange }) => {
  const handleChange = (event) => {
    onFormChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">Enter Keyword</label>
          <input type="text" value={userInput} class="form-control" onChange={handleChange} required />
          <div class="form-text">Enter a Keyword to analyse google trends</div>
        </div>
        <button type="submit" class="btn btn-primary">
          Analyse Keyword
        </button>
      </form>
    </div>
  );
};
