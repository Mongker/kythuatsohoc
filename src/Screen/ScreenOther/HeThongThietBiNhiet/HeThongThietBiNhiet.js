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
import img from '../../../images/2-phong-cach-thiet-ke.jpg';
import {number} from "prop-types";
import {tr} from "faker/lib/locales";


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
function HeThongThietBiNhiet() {
    const [isOpen, setIsOpen] = useState(false);
    const [ngoaiTroi, setNgoaiTroi] = useState(30);
    const [trongNha, setTrongNha] = useState(25);
    const [isAI, setIsAI] = useState(true);
    useEffect(() => {
        if(ngoaiTroi > 25 && ngoaiTroi < 200) {
            setTrongNha(27);
        } else if (ngoaiTroi <= 25) {
            setTrongNha(25);
        }
    }, [ngoaiTroi, isAI])
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
            <div className={'margin_bottom-10 nhiet_do-gia-su'}>
                <div className={'flex justify-content_center margin_bottom-10'}>
                    <div className={'flex flex_column justify-content_space-around'}>
                        <div className={'nhiet_do-text'}>Nhiệt độ ngoài trời: {ngoaiTroi} °C</div>
                    </div>
                </div>
                <div className={'flex flex_column justify-content_center margin_bottom-10 a'}>
                    <div className={'flex flex_row justify-content_space-around'}>
                        <div className={'nhiet_do-text'}>Giả sử nhiệt độ ngoài trời</div>
                    </div>
                    <div className={'flex flex_row justify-content_space-between'}>
                        <button className={'button-19 backgroundColor_42a600 margin_bottom-10'} style={{
                            backgroundColor: 'red'
                        }} onClick={() => setNgoaiTroi((number) => number + 5)}>(+) Tăng 5 nhiệt độ</button>
                        <button className={'button-19 backgroundColor_42a600 margin_bottom-10'} onClick={() => setNgoaiTroi((number) => number - 5)}>(-) Giảm 5 nhiệt độ</button>
                    </div>
                </div>
            </div>
            <div className={'flex justify-content_center flex_column margin_bottom-10'}>
                <img src={img} height={'70%'}/>
                <div className={'nhiet_do flex justify-content_center'}>
                    <div className={'hinh_tron_nhiet_do flex justify-content_center align-items_center margin_bottom-10'}><h3 style={{color: '#fff'}}>{trongNha} °C</h3></div>
                    {
                        isAI && <marquee direction="right">
                            <div style={{
                                backgroundColor: 'rgba(22,4,181,0.68)',
                                padding: '10px',
                                borderRadius: '12px',
                                width: 'fit-content',
                            }}>
                                <h3 style={{marginTop: '25px', color: '#fff'}}>
                                    {trongNha} °C là nhiệt độ phù hợp được AI lựa chọn
                                </h3>
                            </div>
                        </marquee>
                    }

                </div>
            </div>
            <div className={'flex justify-content_center'}>
                <div className={'flex flex_column justify-content_space-around'}>
                    <button onClick={() => {
                        setIsOpen(true);
                    }} className={`button-19 margin_bottom-10 ${isAI ? 'background' : 'background-ative'}`}>
                        Sử dụng điện thoại điều chỉnh
                    </button>
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
                }}>
                    <h1 className={'text-align margin_bottom-10'}>Ứng dụng quản lý nhà thông minh</h1>
                    <h3 className={'text-align'}>
                        Điều chỉnh nhiệt độ trong nhà
                    </h3>
                    <div className={'flex flex_column justify-content_center margin_bottom-10 a'}>
                        <div className={'flex flex_row justify-content_center'}>
                            <h1>{trongNha}</h1>
                        </div>
                        <div className={'flex flex_row justify-content_space-between'}>
                            <button className={'button-19 backgroundColor_42a600 margin_bottom-10'} style={{
                                backgroundColor: 'red'
                            }} onClick={() => {
                                setTrongNha((number) => number + 1)
                                setIsAI(false)
                            }}>(+)</button>
                            <button className={'button-19 backgroundColor_42a600 margin_bottom-10'} onClick={() => {
                                setTrongNha((number) => number - 1)
                                setIsAI(false)
                            }}>(-)</button>
                        </div>
                        <button onClick={() => setIsAI(!isAI)} className={`button-19 margin_bottom-10 ${!isAI ? 'background1' : 'background-ative'}`}>
                            Sử dụng AI điều chỉnh
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default HeThongThietBiNhiet;
