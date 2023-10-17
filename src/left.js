import './left.css';

function Left() {
  return (
<div className="left_menu">

    <ul id="left_menu">
        <br/><br/>
        <div>
            &nbsp;&nbsp;<a href="http://localhost:3000/메인"><img src="/images/상단.png" width="50%"/></a>
        </div>
        <br/><br/>

        <li><a href="http://localhost:3000/메인"><img src="/images/홈.png" width="12%"/>&nbsp;&nbsp;홈</a></li>
        <li><a href="#"><img src="/images/검색.png" width="12%"/>&nbsp;&nbsp;검색</a></li>
        <li><a href="#"><img src="/images/탐색.png" width="12%"/>&nbsp;&nbsp;탐색 탭</a></li>
        <li><a href="#"><img src="/images/릴스.png" width="12%"/>&nbsp;&nbsp;릴스</a></li>
        <li><a href="#"><img src="/images/메시지.png" width="11%"/>&nbsp;&nbsp;메시지</a></li>
        <li><a href="#"><img src="/images/알림.png" width="14%"/>&nbsp;&nbsp;알림</a></li>
        <li><a href="#"><img src="/images/만들기.png" width="12%"/>&nbsp;&nbsp;만들기</a></li>
        <li><a href="#"><img src="/images/프로필.png" width="14%"/>&nbsp;&nbsp;프로필</a></li>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </ul>




</div>
  )
}

export default Left;
