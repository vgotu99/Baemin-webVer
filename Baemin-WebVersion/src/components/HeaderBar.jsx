import './style/HeaderBar.css'

const HeaderBar = () => {
    const address = JSON.parse(localStorage.getItem('currentUser'))


    return (
        <div className='headerBar'>
            <div className='adress'>{address.address}</div>
            <input type="text" placeholder='🔎   원하시는 메뉴 혹은 가게명을 검색해주세요' />
        </div>
    )
}

export default HeaderBar