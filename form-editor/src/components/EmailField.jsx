import React, { useState } from "react"; 

const EmailField = ({ email, setEmail }) => {
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <label>Email:</label>
      <input type="email" value={email} onChange={handleEmailChange} />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default EmailField;
