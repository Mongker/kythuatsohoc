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

// kenh
import off from '../../images/kenh/off.png'

Modal.setAppElement("#root");
let timer1;
const itemIdsCamera = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function HeThongAnNinh() {
    const [channel, setChannel] = useState(null);

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
            <div>
                <div className={'flex justify-content_center'}>
                    <div className={'hinh_tron'} />
                </div>
                <div className={'flex justify-content_center'}>
                    <div className={'camera'} />
                </div>
                <div className={'flex mobile flex_column'} style={{
                    width: '275px',
                    height: window.innerHeight * 0.7,
                    overflowY: 'auto',
                    paddingTop: 25,
                    border: '5px solid #131212 !important',
                }}>
                    <h3 className={'text-align'}>
                        Quan sát camera
                    </h3>
                    <div className={'flex flex_column justify-content_center align-items_center'} style={{
                        backgroundColor: 'black',
                        width: '100%',
                    }}>
                        <div
                            className={'flex justify-content_center align-items_center'}
                            style={{
                                width: 190,
                                height: 120,
                                color: '#fff'
                            }}
                        >
                            <p style={{
                                textAlign: 'center',
                            }}>
                                Quan sát Camera {channel + 1}
                            </p>
                        </div>
                    </div>
                    <div className={'grid-container'}>
                        {
                            itemIdsCamera.map((item, index) =>
                                <div
                                    key={item}
                                    className={'camera-x cursor_pointer'}
                                    onClick={() => setChannel(index)}
                                    style={{
                                        backgroundColor: channel === index ? 'red' : 'black',
                                    }}
                                >
                                    Camera {item}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

HeThongAnNinh.propTypes = {};

HeThongAnNinh.defaultProps = {};

export default HeThongAnNinh;
