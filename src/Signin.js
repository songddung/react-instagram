import React, { useState } from 'react';
import './HCsignin.css'

function Signin() {
    const [phonenumemail, setPhoneNumemail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleMainClick = (e) => {
        e.preventDefault();
        if (phonenumemail.length === 0 || name.length === 0 || username.length === 0 || password.length === 0) {
            alert('모든 필드를 입력하세요.'); 
        } else {
            window.location.href = './'; 
        }
    };
    
    const buttonStyle = {
        textDecoration: 'none',
    };

    return (
        <div>
            <div className="mainbox">
                <div className="main-container">
                    <div className="logo">
                        <img className="logoPicture" src="/images/instagram.png" alt="인스타 로고" />
                        <div id="top-title">
                            <form>
                                <span>
                                    <strong>친구들의 사진과 동영상을 보려면 가입하세요.</strong>
                                </span>
                                <p>
                                    <button className="Fbook_login" type="button">
                                        <img src="/images/icons8-facebook-48.png" alt="" />
                                        <strong>Facebook으로 로그인</strong>
                                    </button>
                                </p>
                                <div className="OR_line"><strong>또는</strong></div>
                                <p>
                                    <div className="signup-container">
                                        <input
                                            type="text"
                                            className="phonenum-email"
                                            placeholder=" 휴대폰 번호 또는 이메일 주소"
                                            value={phonenumemail}
                                            onChange={(e) => setPhoneNumemail(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            className="name"
                                            placeholder=" 이름"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            className="username"
                                            placeholder=" 아이디"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        <input
                                            type="password"
                                            className="password"
                                            placeholder=" 비밀번호"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </p>
                                <div>
                                    <p className="our-service">
                                        <strong>저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. 더 알아보기</strong>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <a href='http://localhost:3000/'style={buttonStyle}>
                                            <button className="signup" type="button"  onClick={handleMainClick}>
                                                <b>가입</b>
                                            </button>
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
        <div className="sub-container">
            <p>계정이 있으신가요? <a href="http://localhost:3000">로그인</a></p>
        </div>
        <div className="appdown">
            <p>앱을 다운로드하세요.</p>
        </div>
        <div className="download-button">
            <div className="downgm"><img src="/images/googleplay.png" alt="" /><img src="/images/microsoft.png" alt="" /></div>
        </div>
        <footer className="bottomsource">
            <div>
                <ul className="horizonlist">
                    <li>Meta</li>
                    <li>소개</li>
                    <li>블로그</li>
                    <li>채용 정보</li>
                    <li>도움말</li>
                    <li>API</li>
                    <li>개인정보처리방침</li>
                    <li>약관</li>
                    <li>위치</li>
                    <li>Instagram Lite</li>
                    <li>Threads</li>
                    <li>연락처 업로드 & 비사용자</li>
                    <li>Meta Verified</li>
                </ul>
            </div>
        </footer>
    </div>
    </div>

    );
}

export default Signin;

