import React, { useState } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const collectData = () => {
    console.log(name, email, password, mobile, address);
  };

  return (
    <div className="register">
      <h1>Create a New Account</h1>
      <input
        className="inputBox"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Name"
      />
      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <input
        className="inputBox"
        type="tel"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Enter Mobile"
      />
      <input
        className="inputBox"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter Email"
      />
      <input
        className="inputBox"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        type="text"
        placeholder="Enter Address"
      />
      <button onClick={collectData} className="register-button">
        Save
      </button>
    </div>
  );
};
export default Signup;
