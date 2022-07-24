/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author monglv@bkav.com on 23/07/2022
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import smartHome from '../images/smarthome1.jpg'
import HeThongManhRem from "./ScreenOther/HeThongManhRem";

const TYPE_ACTIVE_BTN = {
    1: 'Hệ thống mảnh rèm',
    2: 'Hệ thống báo động cháy',
    3: 'Hệ thống thiết bị nhiệt',
    4: 'Hệ thống thoát nước',
    5: 'Hệ thống giải trí',
    6: 'Hệ thống chuyển đổi năng lượng',
    7: 'Hệ thống chiếu sáng',
    8: 'Hệ thống an ninh',
}

function Screen3() {
    const [typeBtnActive, setTypeActive] = useState(TYPE_ACTIVE_BTN["1"]);

    const ComponentLeft = () => {
        let component = null;
        switch (typeBtnActive) {
            case TYPE_ACTIVE_BTN['1']:
                component = <HeThongManhRem />
             break;
            case TYPE_ACTIVE_BTN['2']:
             break;
            case TYPE_ACTIVE_BTN['3']:
                break;
            case TYPE_ACTIVE_BTN['4']:
                break;
            case TYPE_ACTIVE_BTN['5']:
                break;
            case TYPE_ACTIVE_BTN['6']:
                break;
            case TYPE_ACTIVE_BTN['7']:
                break;
            case TYPE_ACTIVE_BTN['8']:
                break;
            default:
        }
        return component;
    }

    return(
        <div className={'flex root3'} style={{
            backgroundImage: `url("${smartHome}")`,
            backgroundRepeat: 'no-repeat, repeat',
            backgroundColor: '#000',
            width: window.innerWidth,
            height: window.innerHeight,
        }}>
            <div className={'root3-title'}>Hệ thống mô phỏng nhà thông minh</div>
            <div className={'container_3 flex'}>
                <div className={'container_3-item1 flex show_left'}>
                    {
                        ComponentLeft()
                    }
                </div>
                <div className={'container_3-item2 flex'}>
                    <div className={'container_3-item1-remote flex show_right'}>
                        <h3>Bảng điều khiển</h3>
                        {
                            Object.values(TYPE_ACTIVE_BTN).map((item) => (
                                <button
                                    className={'flex container_3-item1-remote-button button-19'}
                                    onClick={() => setTypeActive(item)}
                                    style={{
                                        backgroundColor: item === typeBtnActive ? '#453ffb' : '#1899D6',
                                    }}
                                    role={'button'}
                                >
                                    {item}
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

Screen3.propTypes = {};

Screen3.defaultProps = {};

export default Screen3;
