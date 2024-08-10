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
            nowCategory={curView}
            text={"1인분"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("bossam")}
            type={"categoryBar"}
            nowCategory={curView}
            text={"족발·보쌈"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("jjigae")}
            type={"categoryBar"}
            nowCategory={curView}
            text={"찜·탕·찌개"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("sushi")}
            type={"categoryBar"}
            text={"돈까스·회·일식"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("pizza")}
            type={"categoryBar"}
            text={"피자"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("meat")}
            type={"categoryBar"}
            text={"고기·구이"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("night")}
            type={"categoryBar"}
            text={"야식"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("pasta")}
            type={"categoryBar"}
            text={"양식"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("chicken")}
            type={"categoryBar"}
            text={"치킨"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("jjajang")}
            type={"categoryBar"}
            text={"중식"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("asian")}
            type={"categoryBar"}
            text={"아시안"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("rice")}
            type={"categoryBar"}
            text={"백반·죽·국수"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("lunchbox")}
            type={"categoryBar"}
            text={"도시락"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("tteokbokki")}
            type={"categoryBar"}
            text={"분식"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("cafe")}
            type={"categoryBar"}
            text={"카페"}
          />
        </div>
        <div>
          <Button
            onClick={() => switchView("fastfood")}
            type={"categoryBar"}
            text={"패스트푸드"}
          />
        </div>
      </Slider>
    </div>
  );
};

export default CategoryBar;
