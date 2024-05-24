import { useNavigate } from "react-router-dom";
import React ,{useEffect} from "react";
const Login = () => {
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const collectData = async () => {
    let result = await fetch("http://localhost:3000/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert(result.result);
    }
  };
  return (
    <div className="login">
      <input
        className="inputBox"
        type="email"
        placeholder="Enter Your Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <input
        className="inputBox"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
        value={password}
      ></input>
      <button onClick={collectData} className="register-button">
        Login
      </button>
    </div>
  );
};
export default Login;
