import React, { useState } from 'react';
import './CommentBox.css'

function CommentBox({ onAdd }) {
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');

    const handleInputChange = (e) => {
        setCommentInput(e.target.value);
    };

    const handleAddComment = () => {
        if (commentInput.trim() !== '') { // 입력된 텍스트가 공백이 아닐 경우에만 추가
            setComments([...comments, commentInput]);
            setCommentInput('');
            onAdd() //댓글 추가 알림
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') { // Enter 키가 눌렸을 때
            handleAddComment(); // 댓글 추가
            e.preventDefault(); // 기본 동작(여기서는 줄바꿈) 방지
        }
    }

    return (
        <div>
            <textarea
                type="text"
                value={commentInput}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                // Enter 키 처리를 위한 핸들러 추가
                placeholder="댓글을 남겨주세요"
            />

            {comments.map((comment, index) => (
                <div classname="COT" key={index} className="commentContainer">
                    <img className="num10photo" src="/images/cutty.png" alt="프로필" />
                     <b>HappyQa_ </b>: {comment}
                </div>
            ))}
           <div className='bef'>
                <br /><br /><br /><br /><br /><br />
                <hr width="100%"></hr>
                <br></br>
                <img src="/images/체크1.png" width="20%"/>
                <h1>모두 확인했습니다.</h1> 
                <p className='middle1'>최근 7일 동안 새롭게 올라온 게시물을 모두 확인했습니다.</p>
                <p className='blue'>이전 게시물 보기</p>
                <hr width="100%"></hr>
            </div>
        </div>
    );
}

export default CommentBox;