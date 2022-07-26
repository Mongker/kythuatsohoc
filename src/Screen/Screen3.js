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
import { Button, Drawer } from 'antd';
// import PropTypes from 'prop-types';
import smartHome from '../images/smarthome1.jpg'
import HeThongManhRem from "./ScreenOther/HeThongManhRem";
import HeThongBaoChay from "./ScreenOther/HeThonBaoChay";
import HeThongThietBiNhiet from "./ScreenOther/HeThongThietBiNhiet";
import HeThongGiaiTri from "./ScreenOther/HeThongGiaiTri";
import HeThongAnNinh from "./ScreenOther/HeThongAnNinh";
import HeThongChieuSang from "./ScreenOther/HeThonDenChieuSang";
import HeThongChuyenDoiNangLuong from './ScreenOther/HeThongChuyenDoiNangLuong';
import VideoBase from './ScreenOther/VideoBase';
import { lt } from 'lodash/lang';

const TYPE_ACTIVE_BTN = {
    1: 'Hệ thống mảnh rèm',
    2: 'Hệ thống báo động cháy',
    3: 'Hệ thống thiết bị nhiệt',
    4: 'Hệ thống nước',
    5: 'Hệ thống giải trí',
    6: 'Hệ thống chuyển đổi năng lượng',
    7: 'Hệ thống chiếu sáng',
    8: 'Hệ thống an ninh',
}
const IS_SHOW = {
    1: [true, true],
    2: [false, false],
    3: [true, true],
    4: [true, false],
    5: [true, true],
    6: [true, true],
    7: [false, true],
    8: [true, true],
}

function Screen3() {
    const [typeBtnActive, setTypeActive] = useState(TYPE_ACTIVE_BTN["1"]);
    const [isShowVideo, setShowVideo] = useState(true);
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const ComponentLeft = () => {
        let component = null;
        switch (typeBtnActive) {
            case TYPE_ACTIVE_BTN['1']:
                component = !isShowVideo ? <HeThongManhRem /> : <VideoBase type={'1'} />
             break;
            case TYPE_ACTIVE_BTN['2']:
                component = !isShowVideo ? <HeThongBaoChay /> : <VideoBase type={'2'} />
             break;
            case TYPE_ACTIVE_BTN['3']:
                component = !isShowVideo ? <HeThongThietBiNhiet /> : <VideoBase type={'3'} />
                break;
            case TYPE_ACTIVE_BTN['4']:
                component = <VideoBase type={'4'} />
                break;
            case TYPE_ACTIVE_BTN['5']:
                component = !isShowVideo ? <HeThongGiaiTri /> : <VideoBase type={'5'} />
                break;
            case TYPE_ACTIVE_BTN['6']:
                component = <HeThongChuyenDoiNangLuong />
                break;
            case TYPE_ACTIVE_BTN['7']:
                component = !isShowVideo ? <HeThongChieuSang /> : <VideoBase type={'7'} />
                break;
            case TYPE_ACTIVE_BTN['8']:
                component = !isShowVideo ? <HeThongAnNinh /> : <VideoBase type={'8'} />
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
            <div className={'root3-title'}>{typeBtnActive}</div>
            <div className={'container_3 flex justify-content_center' }>
                <div className={'container_3-item1 flex justify-content_center show_left'}>
                    {
                        ComponentLeft()
                    }
                </div>
                <div
                    className={'flex flex_row justify-content_center align-items_center'}
                    style={{
                        height: '50px',
                        position: 'fixed',
                        left: '10%',
                        right: 'auto',
                        top: '45px',
                    }}
                >
                    <button
                        className={'button-19 margin_bottom-10'}
                        style={{
                            width: '150px',
                            borderBottomRightRadius: 0,
                            borderTopRightRadius: 0,
                            marginRight: 2.5,
                            color: 'black',
                            backgroundColor: isShowVideo ? '#45b700' : '#fff',
                        }}
                        onClick={() => setShowVideo(!isShowVideo)}
                    >
                        Mô tả
                    </button>
                    <button
                        className={'button-19 margin_bottom-10'}
                        style={{
                            width: '150px',
                            borderBottomLeftRadius: 0,
                            borderTopLeftRadius: 0,
                            marginLeft: 2.5,
                            color: 'black',
                            backgroundColor: !isShowVideo ? '#45b700' : '#fff'
                        }}
                        onClick={() => setShowVideo(!isShowVideo)}
                    >
                        Mô phỏng
                    </button>
                </div>
                <Button type="primary" onClick={showDrawer}>
                    Menu
                </Button>

                <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible} width={'auto'} height={window.innerHeight}>
                    <div className={'container_3-item2 flex'} onClick={() => {
                        setVisible(false);
                    }}>
                        <div className={'container_3-item1-remote flex show_right'} onBlur={() => {
                            console.log('123', 123); // MongLV log fix bug
                            setVisible(false);
                        }}>
                            <h3>Bảng điều khiển</h3>
                            {
                                Object.values(TYPE_ACTIVE_BTN).map((item) => (
                                    <button
                                        key={item}
                                        className={'flex container_3-item1-remote-button button-19'}
                                        onClick={() => {
                                            setTypeActive(item)
                                            setShowVideo(true)
                                        }}
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
                </Drawer>
            </div>
        </div>
    );
}

Screen3.propTypes = {};

Screen3.defaultProps = {};

export default Screen3;
