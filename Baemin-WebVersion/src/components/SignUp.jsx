import "./style/SignUp.css";
import { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
// id
// pw
// 닉네임
// 주소
// [체크박스] 해당 회원가입 폼에 입력하신 데이터는 모두 localStorage에 저장되는 데이터입니다. 따라서 평소에 사용하지 않는 id와 pw를 사용하시길 바랍니다.

const SignUp = ({ switchJoin }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [bname, setBname] = useState("");
  const [error, setError] = useState("");
  const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");
  const [nicknameError, setNicknameError] = useState('')

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        setPostcode(data.zonecode);
        setAddress(data.address);
        setBname(data.bname);
      },
    }).open();
  };

  const handleIdChange = (e) => {
    const idValid = /^[a-zA-Z0-9]{4,}$/;
    if (!idValid.test(e.target.value)) {
      setIdError(
        "아이디는 4글자 이상의 영어 소문자·대문자, 숫자만 사용 가능합니다."
      );
    } else {
      setId(e.target.value);
      setIdError("");
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValid =
      /^(?=.*[a-z])?(?=.*[A-Z])?(?=.*[0-9])?(?=.*[@$!%*?&])?[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordValid.test(e.target.value)) {
      setPasswordError(
        "비밀번호는 6글자 이상의 영어 소문자·대문자, 숫자, 특수문자만사용 가능합니다."
      );
    } else {
      setPassword(e.target.value);
      setPasswordError("");
    }
  };

  const handlePasswordCheckChange = (e) => {
    if (e.target.value !== password) {
      setPasswordCheckError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordCheck(e.target.value);
      setPasswordCheckError("");
    }
  };

  const handleSignUp = () => {
    if (!id || !password || !nickname || !address) {
      setError("모든 정보를 입력해주세요");
      return;
    }

    if (password !== passwordCheck) {
      setError("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((user) => user.id === id)) {
      setIdError("이미 존재하는 아이디입니다. 해당 아이디로 로그인해주세요.");
      return;
    }

    if (users.some((user) => user.nickname === nickname)) {
      setNicknameError("이미 사용중인 닉네임입니다. 다른 닉네임을 입력해주세요.");
      return
    }

    const userData = { id, password, nickname, postcode, address, bname };

    users.push(userData);

    localStorage.setItem("users", JSON.stringify(users));
    alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
    switchJoin("login");
  };

  return (
    <div>
      <div className="input_sub">
        <p>이미 회원이신가요?</p>
        <Button
          onClick={() => switchJoin("login")}
          text={"로그인하기"}
          type={"join_subBtn"}
        />
      </div>
      <div className="input_main">
        <div className="input_id">
          <Input
            onChange={handleIdChange}
            type={"text"}
            label={"아이디를 입력해주세요"}
          />
        </div>
        <div className="inputValid_test_box">
          {idError ? <p style={{ color: "red" }}>{idError}</p> : <div>ㅤ</div>}
        </div>

        <div className="input_password">
          <Input
            onChange={handlePasswordChange}
            type={"password"}
            label={"비밀번호를 입력해주세요"}
          />
        </div>
        <div className="inputValid_test_box">
          {passwordError ? (
            <p style={{ color: "red" }}>{passwordError}</p>
          ) : (
            <div>ㅤ</div>
          )}
        </div>
        <div className="input_passwordCheck">
          <Input
            onChange={handlePasswordCheckChange}
            type={"password"}
            label={"비밀번호를 다시 입력해주세요"}
          />
        </div>
        <div className="inputValid_test_box">
          {passwordCheckError ? (
            <p style={{ color: "red" }}>{passwordCheckError}</p>
          ) : (
            <div>ㅤ</div>
          )}
        </div>
        <div className="input_nickname">
          <Input
            onChange={(e) => setNickname(e.target.value)}
            type={"text"}
            label={"닉네임을 입력해주세요"}
          />
        </div>
        <div className="inputValid_test_box">
          {nicknameError ? (
            <p style={{ color: "red" }}>{nicknameError}</p>
          ) : (
            <div>ㅤ</div>
          )}
        </div>
        <div className="input_addressBtn">
          <Button
            onClick={handleAddressSearch}
            text={"주소검색"}
            type={"join_addressBtn"}
          />
          <div>주소검색 버튼을 클릭해주세요</div>
        </div>
        <div className="input_address">
          <Input value={postcode} type={"text"} readOnly/>
        </div>
        <div>
          <Input value={address} type={"text"} readOnly/>
        </div>
        <div className="inputValid_test_box">
          {error ? <p style={{ color: "red" }}>{error}</p> : <div>ㅤ</div>}
        </div>
        <Button
          onClick={handleSignUp}
          text={"회원가입"}
          type={"join_mainBtn"}
        />
      </div>
    </div>
  );
};

export default SignUp;
