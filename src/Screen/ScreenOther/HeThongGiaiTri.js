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

// import PropTypes from 'prop-types';
import tivi_off from '../../images/tivi_off.png'
import youtube_vtv3 from '../../images/youtube_vtv3.png'
import youtube_vtc from '../../images/youtube_vtc.png'
import youtube_bili from '../../images/titi_bili.png'
import youtube_netflix from '../../images/tivi_netflix.png'
import youtube_ from '../../images/tivi_youtube.png';

// kenh
import vtv3 from '../../images/kenh/vtv3.png'
import bibili from '../../images/kenh/bibili.png'
import youtube from '../../images/kenh/youtube.jpg'
import vtc from '../../images/kenh/vtc.png'
import netflix from '../../images/kenh/netflix.png'
import {object} from "prop-types";

const TYPE_ = {
    2: 'Sử dụng điện thoại từ xa'
}
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

const dataTivi = {
    vtv3: {
        img1: youtube_vtv3,
        img2: vtv3,
    },
    vtc: {
        img1: youtube_vtc,
        img2: vtc,
    },
    youtube: {
        img1: youtube_,
        img2: youtube,
    },
    bibili: {
        img1: youtube_bili,
        img2: bibili,
    },
    netflix: {
        img1: youtube_netflix,
        img2: netflix,
    }
}
function HeThongGiaiTri() {
    const [tivi, setTive] = useState(tivi_off);
    const [channel, setChannel] = useState(tivi_off);

    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        return () => {
            clearTimeout(timer1);
        };
    }, [])

    function toggleModal() {
        setIsOpen(!isOpen);
    }


    return(
        <div className={'flex hethongremthongminh show_left'}>
            <div className={'flex justify-content_center margin_bottom-10'}>
                <img src={dataTivi[channel] ? dataTivi[channel].img1 : tivi} height={400} />
            </div>
            <div className={'flex justify-content_center'}>
                <div className={'flex flex_column justify-content_space-around'}>
                    {
                        Object.values(TYPE_).map((item) => (
                            <button key={item}
                                    onClick={() => {
                                        toggleModal()
                                    }} className={'button-19 backgroundColor_42a600 margin_bottom-10'}>
                                {item}
                            </button>
                        ))
                    }
                    {/*<button className={'button-19 backgroundColor_42a600'}>*/}
                    {/*    x*/}
                    {/*</button>*/}
                </div>
            </div>
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
                    overflowY: 'auto',
                }}>
                    <h1 className={'text-align margin_bottom-10'}>Ứng dụng quản lý nhà thông minh</h1>
                    <h3 className={'text-align'}>
                        Hiện chỉnh TIVI
                    </h3>
                    <div className={'flex flex_column justify-content_center align-items_center'}>
                        {
                            Object.keys(dataTivi).map((key) =>
                                <img
                                    key={key}
                                    src={dataTivi[key].img2}
                                    width={200}
                                    className={'cursor_pointer margin_bottom-10'}
                                    onClick={() => setChannel(key)}
                                />
                            )
                        }
                    </div>
                </div>
            </Modal>
        </div>
    );
}

HeThongGiaiTri.propTypes = {};

HeThongGiaiTri.defaultProps = {};

export default HeThongGiaiTri;
