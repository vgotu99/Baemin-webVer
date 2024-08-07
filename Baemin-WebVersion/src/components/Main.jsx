import MainItem from "./MainItem"
import MainEvent from "./MainEvent"

const Main = () => {
    return (
        <div>
            {/* 이벤트 내용 */}
            <MainEvent />
            {/* 메뉴별 카테고리 */}
            <MainItem />
        </div>
    )
}

export default Main