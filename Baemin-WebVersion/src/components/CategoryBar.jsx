import "./style/CategoryBar.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";

const CategoryBar = ({ switchView, curView }) => {
  const settings = {
    dots: true,
    infinity: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="categoryBar">
      <Slider {...settings}>
        <div>
          <Button
            onClick={() => switchView("per1")}
            type={"categoryBar"}
            nowCategory={curView === "per1" ? "per1" : ""}
            text={"1인분"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("bossam")}
            type={"categoryBar"}
            nowCategory={curView === "bossam" ? "bossam" : ""}
            text={"족발·보쌈"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("jjigae")}
            type={"categoryBar"}
            nowCategory={curView === "jjigae" ? "jjigae" : ""}
            text={"찜·탕·찌개"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("sushi")}
            type={"categoryBar"}
            nowCategory={curView === "sushi" ? "sushi" : ""}
            text={"돈까스·회·일식"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("pizza")}
            type={"categoryBar"}
            nowCategory={curView === "pizza" ? "pizza" : ""}
            text={"피자"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("meat")}
            type={"categoryBar"}
            nowCategory={curView === "meat" ? "meat" : ""}
            text={"고기·구이"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("night")}
            type={"categoryBar"}
            nowCategory={curView === "night" ? "night" : ""}
            text={"야식"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("pasta")}
            type={"categoryBar"}
            nowCategory={curView === "pasta" ? "pasta" : ""}
            text={"양식"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("chicken")}
            type={"categoryBar"}
            nowCategory={curView === "chicken" ? "chicken" : ""}
            text={"치킨"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("jjajang")}
            type={"categoryBar"}
            nowCategory={curView === "jjajang" ? "jjajang" : ""}
            text={"중식"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("asian")}
            type={"categoryBar"}
            nowCategory={curView === "asian" ? "asian" : ""}
            text={"아시안"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("rice")}
            type={"categoryBar"}
            nowCategory={curView === "rice" ? "rice" : ""}
            text={"백반·죽·국수"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("lunchbox")}
            type={"categoryBar"}
            nowCategory={curView === "lunchbox" ? "lunchbox" : ""}
            text={"도시락"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("tteokbokki")}
            type={"categoryBar"}
            nowCategory={curView === "tteokbokki" ? "tteokbokki" : ""}
            text={"분식"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("cafe")}
            type={"categoryBar"}
            nowCategory={curView === "cafe" ? "cafe" : ""}
            text={"카페"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("fastfood")}
            type={"categoryBar"}
            nowCategory={curView === "fastfood" ? "fastfood" : ""}
            text={"패스트푸드"}
          />
        </div>
      </Slider>
      <div className="categoryBar_goToMain">
      <Button
        onClick={() => switchView("main")}
        type={"goToMain"}
        text={"< 돌아가기"}
      />
      </div>
    </div>
  );
};

export default CategoryBar;
