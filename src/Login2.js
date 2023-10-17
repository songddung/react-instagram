import React from 'react'
import './HClogin.css'


function Login2() {
    // const onClick =() => {
    //     window.location.href = '/App2'
    // }
    return (
        <div>
            <div className="sub-container">
                <ul>
                    <li>계정이 없으신가요? <a href = 'http://localhost:3000/회원가입'><b>가입하기</b></a></li>
                </ul>
            </div>
            <div className="appdown">앱을 다운로드 하세요.</div>
            <div className="download-button">
                <div className="downgm">
                    <img src="/images/googleplay.png" alt="" /><img src="/images/microsoft.png" alt="" />
                </div>
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
    );
}

export default Login2;