import './right.css';

function Right() {
    const handleReactionClick =() =>{
        console.log('Reaction');
        window.location.href = '/Reaction'
    }
    return (
        <ul id="right_menu">
            <br /><br /><br /><br />
            <li className="up">
                <a href="#"><img src="/images/더보기.png" width="12%" />&nbsp;&nbsp;더보기</a>
                <ul>
                    <li><a href="#">&nbsp;&nbsp;<img src="/images/설정.png" width="12%" />&nbsp;&nbsp;설정</a></li>
                    <li><a href="http://localhost:3000/반응" onClick={handleReactionClick}>&nbsp;&nbsp;<img src="/images/내 활동.png" width="12%" />&nbsp;&nbsp;내 활동</a></li>
                    <li><a href="#">&nbsp;&nbsp;<img src="/images/저장됨.png" width="12%" />&nbsp;&nbsp;저장됨</a></li>
                    <li><a href="#">&nbsp;&nbsp;<img src="/images/모드 전환.png" width="12%" />&nbsp;&nbsp;모드 전환</a></li>
                    <li><a href="#">&nbsp;&nbsp;<img src="/images/문제 신고.png" width="12%" />&nbsp;&nbsp;문제 신고</a></li>
                    <hr />
                    <li><a href="#">&nbsp;&nbsp;계정 전환</a></li>

                    <li><a href="#">&nbsp;&nbsp;로그아웃</a></li>
                </ul>
            </li>
        </ul>
    );
}

export default Right;





