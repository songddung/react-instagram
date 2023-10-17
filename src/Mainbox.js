import './mainbox.css';
import CommentBox from './CommentBox';
import { useState } from 'react';

function Mainbox() {
    const [counter, setCounter] = useState(4811)
    const [previousCounter, setPreviousCounter] = useState(null); // 좋아요 버튼을 누르기 전의 카운터 값을 저장하는 state
    const [liked, setLiked] = useState(false)

    const onClick = () => {
        if (liked) {
            setCounter(previousCounter); // 좋아요가 이미 눌러져 있다면, 이전 카운터 값으로 복원
        } else {
            setPreviousCounter(counter); // 아니라면, 현재 카운터 값을 기억하고
            setCounter(counter + 1); // 카운터 값을 증가시킴
        }
        setLiked(!liked);
    }
    const [countery, setCountery] = useState(0)

    const handleNewComment = () => {
        setCountery(countery+1); //새 댓글 추가시 카운터증가
    }
    
    return (
        <div className="high">
            < div className='mainbox133'>
                <ul className="middle0">
                    <li></li>
                    <li className="middle1"><a href="/메인"><img className="num0photo" src="/images/mouse.png" alt='mouse'></img></a><a href="/메인">_BonePbHr</a>
                    </li>
                    <li className="middle2"><img className="num1photo" src="/images/mouse1.png" alt='mouse1' />
                    </li>
                    <li className="middle3">
                        <img
                            className={liked ? "num0icon" : "num0icon"}
                            src={liked ? "/images/fullheart.png" : "/images/heart1.png"}
                            alt='하트'
                            onClick={onClick}
                        />
                        <img className="num1icon" src="/images/review.png" alt='리뷰'></img>
                        <img className="num1icon" src="/images/share.png" art='공유하기'></img>
                        <img className="num2icon" src="/images/bookmark.png" art='즐겨찾기'></img>
                    </li>
                    <li className="middle4"> 좋아요 {counter}개</li>
                    <li className="middle5"><strong>_BonePbHr</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;손가락이 좀 많아도 이해해주세요 ^^</li>
                    <CommentBox onAdd={handleNewComment}/>
                </ul>
               
            </div>
        </div>
    );
}

export default Mainbox;
