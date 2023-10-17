import { useState } from 'react';
import './Center.css';
import Modal from './modal';

function Center() {
    const [modalOpen, setModalOpen] = useState({
        cutty: false,
        ferret: false,
        jam: false,
        mouse: false,
        moon: false
    });

    const handleModalOpen = (name) => {
        setModalOpen((prevState) => ({
            ...prevState,
            [name]: true
        }));
    };

    const handleModalClose = (name) => {
        setModalOpen((prevState) => ({
            ...prevState,
            [name]: false
        }));
    };

    return (
        <header className="top_Box">
            <ul className="firstbox">

                {/* <li className="top_photo"><a href=""><img src="/images/cutty.png" alt='cutty'></img></a>
                </li> */}

                <li className="top_photo"><a href="#" onClick={() => handleModalOpen('cutty')}><img src="/images/cutty.png" alt='cutty'></img></a>
                    {modalOpen.cutty && <Modal onClose={() => handleModalClose('cutty')} />}
                </li>

                <li className="top_photo"><a href="#" onClick={() => handleModalOpen('ferret')}><img src="/images/ferret.png" alt='ferret'></img></a>
                    {modalOpen.ferret && <Modal onClose={() => handleModalClose('ferret')} />}
                </li>

                {/* <li className="top_photo"><a href=""><img src="/images/ferret.png" alt='ferret'></img></a>
                </li> */}


                <li className="top_photo"><a href="#" onClick={() => handleModalOpen('jam')}><img src="/images/jam.png" alt='jam'></img></a>
                    {modalOpen.jam && <Modal onClose={() => handleModalClose('jam')} />}
                </li>


                {/* 
                <li className="top_photo"><a href=""><img src="/images/jam.png" alt='jam'></img></a>
                </li> */}


                <li className="top_photo"><a href="#" onClick={() => handleModalOpen('mouse')}><img src="/images/mouse.png" alt='mouse'></img></a>
                    {modalOpen.mouse && <Modal onClose={() => handleModalClose('mouse')} />}
                </li>


                {/* <li className="top_photo"><a href=""><img src="/images/mouse.png"alt='mouse'></img></a>
                </li> */}

                <li className="top_photo"><a href="#" onClick={() => handleModalOpen('moon')}><img src="/images/moon.png" alt='moon'></img></a>
                    {modalOpen.moon && <Modal onClose={() => handleModalClose('moon')} />}
                </li>


                {/* 
                <li className="top_photo"><a href=""><img src="/images/moon.png" alt='moon'></img></a>
                </li> */}


            </ul>
        </header>
    );
}


export default Center;


