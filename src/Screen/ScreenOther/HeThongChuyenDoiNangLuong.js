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

import dienluoi from '../../images/hethongchuyendoidiennang/dienluoi.png';
import matdien from '../../images/hethongchuyendoidiennang/matdien.png';
import dienmattroi from '../../images/hethongchuyendoidiennang/dienmattroi.png';
import on from '../../audio/nangluongdienluoi.mp3';
import of from '../../audio/nangluongmatroi.mp3';
import load from '../../audio/chuyendoidiennang.mp3';

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

const data = {
    dienmattroi,
    dienluoi,
    matdien,
}
const dataSpeaking = {
    dienmattroi: of,
    dienluoi: on,
    matdien: load,
}

function HeThongChuyenDoiNangLuong() {
    const [channel, setChannel] = useState('dienluoi');
    const preChanelRef = useRef(channel);

    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        return () => {
            clearTimeout(timer1);
        };
    }, [])

    function onChangeUpdate(type) {
        if(type === 'dienluoi' || 'dienmattroi') {
            setChannel('matdien');
        }
        timer1 = setTimeout(() => setChannel(type), 1000)
    }
    function toggleModal() {
        setIsOpen(!isOpen);
    }

    console.log('data[channel]', data[channel]);
    return(
        <div className={'flex hethongremthongminh show_left'}>
            <div className={'flex justify-content_center margin_bottom-10'}>
                <img src={data[channel]} height={400} />
            </div>
            <audio autoPlay src={dataSpeaking[channel]} />
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
                    <h1 className={'text-align margin_bottom-10'}>QUẢN LÝ NHÀ THÔNG MINH</h1>
                    <h3 className={'text-align'}>
                        Ứng dụng chuyển đổi năng lượng
                    </h3>
                    <div className={'flex flex_column justify-content_center align-items_center'} style={{height: '200px'}}>
                        <button
                            onClick={() => onChangeUpdate('dienluoi')}
                            className={'hinh_tron2 flex justify-content_center align-items_center button-19 backgroundColor_42a600 margin_bottom-10'}
                            style={{
                                backgroundColor: channel === 'dienluoi'? '#42a600' : '#a3ec75',
                            }}
                        >
                            Điện Lưới
                        </button>
                        <button
                            onClick={() => onChangeUpdate('dienmattroi')}
                            className={'hinh_tron2 flex justify-content_center align-items_center button-19 backgroundColor_42a600 margin_bottom-10'}
                            style={{
                                backgroundColor: channel === 'dienmattroi'? '#42a600' : '#a3ec75',
                            }}
                        >
                            Điện Mặt Trời
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

HeThongChuyenDoiNangLuong.propTypes = {};

HeThongChuyenDoiNangLuong.defaultProps = {};

export default HeThongChuyenDoiNangLuong;
