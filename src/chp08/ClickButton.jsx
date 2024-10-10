import {useState} from 'react';
// 기본적인 클릭이벤트 처리
// 버튼을 클릭하면 알림창이 표시되게 합니다.

function ClickButton() {
    // const [isToggleOn, setIsToggleOn] = useState(true);
    function handleClick() {
        alert("버튼을 클릭하였습니다.");
    }

    return (
        <button onClick={handleClick}>
            클릭해보세요~
        </button>
    )
}
export default ClickButton;