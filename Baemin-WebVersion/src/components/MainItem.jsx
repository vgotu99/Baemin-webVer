import "./style/MainItem.css";

import Button from "./Button";

const MainItem = ({ switchView }) => {
  return (
    <div className="mainItem">
      <Button onClick={() => switchView('per1')} type={"mainItem"} text={"1인분"} imgType={"per1"} />
      <Button onClick={() => switchView('bossam')} type={"mainItem"} text={"족발·보쌈"} imgType={"bossam"} />
      <Button onClick={() => switchView('jjigae')} type={"mainItem"} text={"찜·탕·찌개"} imgType={"jjigae"} />
      <Button onClick={() => switchView('sushi')} type={"mainItem"} text={"돈까스·회·일식"} imgType={"sushi"} />
      <Button onClick={() => switchView('pizza')} type={"mainItem"} text={"피자"} imgType={"pizza"} />
      <Button onClick={() => switchView('meat')} type={"mainItem"} text={"고기·구이"} imgType={"meat"} />
      <Button onClick={() => switchView('night')} type={"mainItem"} text={"야식"} imgType={"night"} />
      <Button onClick={() => switchView('pasta')} type={"mainItem"} text={"양식"} imgType={"pasta"} />
      <Button onClick={() => switchView('chicken')} type={"mainItem"} text={"치킨"} imgType={"chicken"} />
      <Button onClick={() => switchView('jjajang')} type={"mainItem"} text={"중식"} imgType={"jjajang"} />
      <Button onClick={() => switchView('asian')} type={"mainItem"} text={"아시안"} imgType={"asian"} />
      <Button onClick={() => switchView('rice')} type={"mainItem"} text={"백반·죽·국수"} imgType={"rice"} />
      <Button onClick={() => switchView('lunchbox')} type={"mainItem"} text={"도시락"} imgType={"lunchbox"} />
      <Button onClick={() => switchView('tteokbokki')} type={"mainItem"} text={"분식"} imgType={"tteokbokki"} />
      <Button onClick={() => switchView('cafe')} type={"mainItem"} text={"카페·디저트"} imgType={"cafe"} />
      <Button onClick={() => switchView('fastfood')} type={"mainItem"} text={"패스트푸드"} imgType={"fastfood"} />
    </div>
  );
};

export default MainItem;
