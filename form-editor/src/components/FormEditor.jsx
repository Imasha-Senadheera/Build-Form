import React, { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import EmailField from "./EmailField";
import "../styles/FormEditor.css";

const FormEditor = () => {
  const [title, setTitle] = useState("Welcome to our form");
  const [description, setDescription] = useState(
    "This is a description of the form"
  );
  const [buttonText, setButtonText] = useState("Start");
  const [email, setEmail] = useState("");
  const [activeStep, setActiveStep] = useState("welcome");
  const [showWelcomeEditor, setShowWelcomeEditor] = useState(false);
  const [showEmailEditor, setShowEmailEditor] = useState(false);
  const [tempTitle, setTempTitle] = useState(title);
  const [tempDescription, setTempDescription] = useState(description);
  const [tempButtonText, setTempButtonText] = useState(buttonText);

  const handleStepChange = (step) => {
    setActiveStep(step);
    if (step === "welcome") {
      setShowWelcomeEditor(true);
      setShowEmailEditor(false);
    } else if (step === "email") {
      setShowEmailEditor(true);
      setShowWelcomeEditor(false);
    }
  };

  const handleSaveWelcomeScreen = () => {
    setTitle(tempTitle);
    setDescription(tempDescription);
    setButtonText(tempButtonText);
    setShowWelcomeEditor(false);
  };

  const handleCloseWelcomeEditor = () => {
    setShowWelcomeEditor(false);
    setTempTitle(title);
    setTempDescription(description);
    setTempButtonText(buttonText);
  };

  const handleCloseEmailEditor = () => {
    setShowEmailEditor(false);
    setEmail("");
  };

  return (
    <div className="form-editor-container">
      <div className="form-editor-sidebar">
        <h3>Steps</h3>
        <ul>
          <li onClick={() => handleStepChange("welcome")}>Welcome Screen</li>
          <li onClick={() => handleStepChange("email")}>Email Field</li>
          <li>End Screen</li>
        </ul>

        {activeStep === "welcome" && showWelcomeEditor && (
          <div className="editor-fields">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Settings</h4>
              <button
                onClick={handleCloseWelcomeEditor}
                style={{ cursor: "pointer" }}
              >
                X
              </button>
            </div>
            <div className="field">
              <label>Title: </label>
              <input
                type="text"
                value={tempTitle}
                onChange={(e) => setTempTitle(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Description: </label>
              <input
                type="text"
                value={tempDescription}
                onChange={(e) => setTempDescription(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Button Text: </label>
              <input
                type="text"
                value={tempButtonText}
                onChange={(e) => setTempButtonText(e.target.value)}
              />
            </div>
            <div className="field">
              <button className="upload-button">
                <span role="img" aria-label="upload">
                  ⬆️
                </span>{" "}
                Upload
              </button>
            </div>
            <div className="actions">
              <button onClick={handleSaveWelcomeScreen} className="save-button">
                Save
              </button>
              <button
                onClick={handleCloseWelcomeEditor}
                className="discard-button"
              >
                Discard
              </button>
            </div>
          </div>
        )}

        {activeStep === "email" && showEmailEditor && (
          <div className="editor-fields">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Edit Email Field</h4>
              <button
                onClick={handleCloseEmailEditor}
                style={{ cursor: "pointer" }}
              >
                X
              </button>
            </div>
            <div className="field">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="actions">
              <button className="save-button">Save</button>
              <button
                onClick={handleCloseEmailEditor}
                className="discard-button"
              >
                Discard
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="form-editor-main">
        {activeStep === "welcome" && (
          <WelcomeScreen
            title={title}
            description={description}
            buttonText={buttonText}
          />
        )}

        {activeStep === "email" && (
          <EmailField email={email} setEmail={setEmail} />
        )}
      </div>
    </div>
  );
};

export default FormEditor;
