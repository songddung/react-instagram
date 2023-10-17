import styles from './Middle.module.css'

function Middle2() {


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
            -               </div>
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




                <article className={styles.article}>
                    <div className={styles.artdiv}>
                        <div className={styles.good}>
                            <a href='' className={styles.a4}>
                                <div className={styles.img2}>
                                    <img src='/images/게시물.png' width='12px' height='12px' className={styles.imgimg}></img>
                                    <span className={styles.span}>게시물</span>
                                </div>
                            </a>


                            <a href='' className={styles.a4}>
                                <div className={styles.img2}>
                                    <img src='/images/릴스.png' width='12px' height='12px' className={styles.imgimg}></img>
                                    <span className={styles.span}>릴스</span>
                                </div>
                            </a>

                            <a href='' className={styles.a4}>
                                <div className={styles.img2}>
                                    <img src='/images/하이라이트.png' width='12px' height='12px' className={styles.imgimg}></img>
                                    <span className={styles.span}>하이라이트</span>
                                </div>
                            </a>

                            

                        </div>
             
                        <div className={styles.photo}>
                            <div  className={styles.new}>
                                <div className={styles.datablok}>
                                    <span className={styles.newlist}>
                                        최신순
                                    </span>
                                    <div className={styles.filter}>
                                        <div className={styles.filterin}>
                                            <span className={styles.filterspan}>정렬 및 필터</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.pick}>
                                    <span className={styles.pickspan}>선택</span>
                                </div>

                            </div>

                            <div className={styles.photos}>
                                {/* 폴더에 사진을 넣어두고 전체가 다나오게 , 스크롤 */}
                                             
                                <div className={styles.photoline}>
                                    <img src='/images/dog1.png'width="123px" height="125px"></img>
                                    <img src='/images/dog2.png'width="123px" height="125px"></img>
                                    <img src='/images/dog3.png'width="123px" height="125px"></img>
                                    <img src='/images/dog4.png'width="123px" height="125px"></img>
                                    <img src='/images/dog5.png'width="123px" height="125px"></img>
                                </div>
                                

                                

                            </div>
                        </div>   
             
             
                    </div>

             
                </article>
            </div>
        </div>

    )
}

export default Middle2