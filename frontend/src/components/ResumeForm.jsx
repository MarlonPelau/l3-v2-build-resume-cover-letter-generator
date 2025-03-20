import React from "react";

const ResumeForm = () => {
  return (
    <div>
      <h2>AI Resume & Cover Letter Generator</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" name="phone" />
        </label>
        <br />
        <label>
          Work Experience:
          <textarea name="experience"></textarea>
        </label>
        <br />
        <label>
          Education:
          <textarea name="education"></textarea>
        </label>
        <br />
        <label>
          Job Preferences:
          <textarea name="preferences"></textarea>
        </label>
        <br />
        <button type="submit">Generate Resume & Cover Letter</button>
      </form>
    </div>
  );
};

export default ResumeForm;
