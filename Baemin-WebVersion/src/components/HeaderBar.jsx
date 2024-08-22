import "./style/HeaderBar.css";

const HeaderBar = ({ onSearch }) => {
  const address = JSON.parse(localStorage.getItem("currentUser")) || {address: '주소를 설정하세요.'};

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;

    if (searchTerm.trim() === "") {
      alert("검색어를 입력해주세요");
    } else {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="headerBar">
      <div className="adress">{address.address}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="원하시는 메뉴 혹은 가게명을 검색해주세요"
        />
        <button type="submit">
          <img src="/search.png" />
        </button>
      </form>
    </div>
  );
};

export default HeaderBar;
