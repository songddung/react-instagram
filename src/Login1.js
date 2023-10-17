import React, { useState } from 'react';
import './HClogin.css'

function Login1() {
    const [id, setId] = useState(''); 
    const [password, setPassword] = useState(''); 

    const handleApp2Click = (e) => {
        e.preventDefault();
        if (id.length === 0 || password.length === 0) {
            alert('아이디와 비밀번호를 모두 입력해주세요.'); 
        } else {
            window.location.href = '/메인'; 
        }
    };

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    
    
    return (
        <div className='mainbox'>
            <div className="main-container">
                <header className="logo">
                    <div>
                        <img className="logoPicture" src="/images/instagram.png" alt="인스타 로고" />
                    </div>
                </header>
                <div className="login-container">
                    
                    <input type="text" className="id" placeholder="전화번호,사용자 이름 또는 이메일" onChange={handleIdChange} />
                    
                    <input type="password" className="password" placeholder="비밀번호" onChange={handlePasswordChange} />
                    <a className='Nounder' href=''><button className="loginBtn"  onClick={handleApp2Click}><strong>로그인</strong></button></a>
                </div>
                <div>
                    <div className="OR_line"><strong>또는</strong></div>
                    <div className="Fbook_login_wrapper">
                        <div className="Fbook_login">
                            <img src="/images/icons8-facebook-48.png" alt="" style={{ width: '7%' }} />
                            <strong>Facebook으로 로그인</strong>
                        </div>
                        <div className="pwwrong">비밀번호를 잊으셨나요 ?</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login1;










