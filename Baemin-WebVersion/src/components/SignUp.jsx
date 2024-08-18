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
  const [nickname, setNickname] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [bname, setBname] = useState('')
  const [error, setError] = useState("");


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
        setBname(data.bname)
      },
    }).open();
  };

  const handleSignUp = () => {
    if (!id || !password || !nickname || !address) {
      setError("모든 정보를 입력해주세요");
      return;
    }

    const userData = { id, password, nickname, postcode, address, bname };
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((user) => user.id === id)) {
      setError("이미 존재하는 아이디입니다. 해당 아이디로 로그인해주세요.");
      return;
    }

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
      <div>
        <div className="input_id">
          <Input
            onChange={(e) => setId(e.target.value)}
            value={id}
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
        <div className="input_id">
          <Input
            onChange={(e) => setNickname(e.target.value)}
            value={nickname}
            type={"text"}
            label={"닉네임을 입력해주세요"}
          />
        </div>
        <Button
          onClick={handleAddressSearch}
          text={"주소검색"}
          type={"join_addressBtn"}
        />
        <div className="input_id">
          <Input value={postcode} type={"text"} />
        </div>
        <div className="input_id">
          <Input value={address} type={"text"} />
        </div>

        <Button
          onClick={handleSignUp}
          text={"회원가입"}
          type={"join_mainBtn"}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;
