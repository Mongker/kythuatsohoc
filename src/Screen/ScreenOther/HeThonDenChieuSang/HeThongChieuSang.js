/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author monglv@bkav.com on 24/07/2022
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React, {useEffect, useRef, useState} from 'react';
import Modal from 'react-modal';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import lua from '../../../images/fram.png'
import chaynha from '../../../audio/chaynha.mp3'

import Container from "./Container";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '25px',
        backgroundColor: '#000',
        padding: '10px',
        inset: '50% auto auto 60%',
    },
};

Modal.setAppElement("#root");

let timer1;
function HeThongChieuSang() {
    const [isOpen, setIsOpen] = useState(false);
    const [isXO, setXO] = useState(false);
    const [boxes, setBoxes] = useState({
        a: { top: 650, left: 256, title: 'Hot' },
        b: { top: 5, left: 0, title: 'Home' },
    })
    console.log('boxes.a.top', boxes.a.top); // MongLV log fix bug
    React.useLayoutEffect(() => {
        if(boxes.a.top <= 257) {
            timer1 = setTimeout(() => setXO(true), 1000)
        } else {
            timer1 = setTimeout(() => setXO(false), 1000)
        }
        return () => {
            clearTimeout(timer1);
        };
    }, [boxes.a])


    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return(
        <div className={'flex hethongremthongminh show_left'}>
            <DndProvider backend={HTML5Backend}>
                <Container hideSourceOnDrag boxes={boxes} setBoxes={setBoxes} isXO={isXO} />
            </DndProvider>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                style={customStyles}
            >
                <div className={'flex justify-content_center'}>
                    <div className={'hinh_tron'} />
                </div>
                <div className={'flex justify-content_center'}>
                    <div className={'camera'} />
                </div>
                <div className={'flex mobile justify-content_center flex_column'} style={{
                    width: '275px',
                    height: window.innerHeight * 0.7,
                }}>
                    <h1 className={'text-align margin_bottom-10'}>Ứng dụng quản lý nhà thông minh</h1>
                    <h3 className={'text-align'} style={{color: 'red'}}>
                        Cảnh báo cháy nhà
                    </h3>
                    <img src={lua} />
                    <audio autoPlay src={chaynha} />
                </div>
            </Modal>
        </div>
    );
}

export default HeThongChieuSang;
