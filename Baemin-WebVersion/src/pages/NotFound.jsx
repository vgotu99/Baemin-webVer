import "./style/NotFound.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();

  return (
    <div className="notFound">
      <div className="notFound_header">
        <div className="notFound_goToMain">
          <Button
            onClick={() => nav("/")}
            type={"goToMain"}
            text={"< 돌아가기"}
          />
        </div>
        <div className="header_text">잘못된 페이지</div>
      </div>
      <div className="notFound_img">
        <img src="/notfound.jpg" />
      </div>
      <div className="notFound_text">잘못된 접근입니다.</div>
      <div className="notFound_text">아래 버튼을 눌러 홈으로 돌아주세요</div>
      <div>
        <Button
          onClick={() => nav("/")}
          type={"join_mainBtn"}
          text={"홈으로 돌아가기"}
        />
      </div>
    </div>
  );
};

export default NotFound;
