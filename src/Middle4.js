import styles from './Middle.module.css'

function Middle4() {


const handleReactionClick =() =>{
    console.log('Reaction');
    window.location.href = '/Reaction'
}

const handleReaction2Click =() =>{
    console.log('Reaction2');
    window.location.href = '/Reaction2'
}
const handleReaction3Click =() =>{
    console.log('Reaction3');
    window.location.href = '/Reaction3'
}


const handleReaction4Click =() =>{
    console.log('Reaction4');
    window.location.href = '/Reaction4'
}

    return (
        <div className={styles.main}>
            <div className={styles.full}>
                <ul className={styles.ul}>
                    <div className={styles.myact}>
                        <div className={styles.MC}> 내 활동</div>
                    </div>
                    <hr></hr>
                    <li className={styles.list}>
                        <a href='http://localhost:3000/반응' className={styles.nondeco} onClick={handleReactionClick}>
                            <div className={styles.lidisplay}>
                                <div className={styles.img}>
                                    <img src='/images/반응.png' width="24px" height="24px"></img>
                                </div>
                                <div className={styles.text}>
                                    <span className={styles.bold}>반응</span>
                                    <span className={styles.gray}>좋아요, 댓글 및 회원님의 기타 반응을 검토하고 삭제합니다.</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.list}>
                        <a href='http://localhost:3000/사진 및 동영상' className={styles.nondeco} onClick={handleReaction2Click}>
                            <div className={styles.lidisplay}>
                                <div className={styles.img}>
                                    <img src='/images/사진.png' width="24px" height="24px"></img>
                                </div>
                                <div className={styles.text}>
                                    <span className={styles.bold}>사진 및 동영상</span>
                                    <span className={styles.gray}>공유한 사진과 동영상을 보거나 보관하거나 삭제합니다.</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.list}>
                        <a href='http://localhost:3000/계정내역' className={styles.nondeco} onClick={handleReaction3Click}>
                            <div className={styles.lidisplay}>
                                <div className={styles.img}>
                                    <img src='/images/달력.png' width="24px" height="24px"></img>
                                </div>
                                <div className={styles.text}>
                                    <span className={styles.bold}>계정 내역</span>
                                    <span className={styles.gray}>계정을 만든 이후 적용한 변경한 사항을 검토해보세요.</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.list}>
                    <a href='http://localhost:3000/다운로드' className={styles.nondeco} onClick={handleReaction4Click}>
                            <div className={styles.lidisplay}>
                                <div className={styles.img}>
                                    <img src='/images/다운로드.png' width="24px" height="24px"></img>
                                </div>
                                <div className={styles.text}>
                                    <span className={styles.bold}>내 정보 다운로드</span>
                                    <span className={styles.gray}>Istagram에 공유한 정보의 사본을 다운로드합니다.</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>




                <article className={styles.infoart}>
                    <div className={styles.down}>
                        <form method='POST' className={styles.form}>
                            <div className={styles.formdiv} >
                                <div className={styles.info1}><header>정보 사본 받기</header></div>
                                <div className={styles.info2}><p>회원님의 정보가 포함된 파일의 링크가 이메일로 전송됩니다. 더쉽게 볼 수 있는 HTML 또는 다른 서비스로 더 쉽게 가져갈 수 있는 JSON 형식으로 받을 수 있습니다.</p>
                                </div>
                                <div className={styles.info3}>
                                    <div className={styles.info3-1}>
                                      <label className={styles.info3span}>
                                        
                                        <input className={styles.input} placeholder='이메일' ></input>
                                        </label>  
                                    </div>
                                </div>
                                <div className={styles.info4}>
                                    <hr></hr>
                                    <p className={styles.html}>정보 형식</p>
                                    <fieldset className={styles.nobor}>
                                        <label className={styles.mar}>
                                            <div className={styles.between}>
                                                HTML
                                                <input name='radio' className={styles.raido} type='radio'></input>
                                            </div>
                                        </label>

                                        <label className={styles.mar}>
                                            <div className={styles.between}>
                                                JSON
                                                <input name='radio' className={styles.raido} type='radio'></input>
                                            </div>
                                        </label>

                                    </fieldset>
                                    
                                </div>

                                <div className={styles.info5}>다음</div>


                            </div>

                        </form>

                    </div>
             
                </article>
            </div>
        </div>

    )
}

export default Middle4