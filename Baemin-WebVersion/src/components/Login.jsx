import "./style/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

const Login = ({ switchJoin }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.id === id && u.password === password);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      nav("/");
    } else {
      setError("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  console.log(id);

  return (
    <div>
      <div className="input_sub">
        <p>아직 회원이 아니신가요?</p>
        <Button
          onClick={() => switchJoin("signup")}
          text={"회원가입하기"}
          type={"join_subBtn"}
        />
      </div>
      <div className="input_id">
        <Input
          onChange={(e) => setId(e.target.value)}
          type={"text"}
          label={"아이디를 입력해주세요"}
        />
      </div>
      <div className="input_password">
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type={"password"}
          label={"비밀번호를 입력해주세요"}
        />
      </div>
      <Button onClick={handleLogin} text={"로그인"} type={"join_mainBtn"} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
