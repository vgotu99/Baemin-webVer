import './style/HeaderBar.css'

const HeaderBar = () => {
    return (
        <div className='headerBar'>
            <div className='adress'>주소</div>
            <input  type="text" placeholder='🔎   원하시는 메뉴 혹은 가게명을 검색해주세요' />
        </div>
    )
}

export default HeaderBar