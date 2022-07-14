/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author monglv@bkav.com on 14/07/2022
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React, {useState} from 'react';
import lightBulb from '../images/screen2/light-bulb.svg';

function Screen2({nexScreen}) {
    const [activeLightBulb, setActiveLightBulb] = useState(0);
    React.useLayoutEffect(
        () => {
            const clearSetInterval = setInterval(() => {
                setActiveLightBulb(prev => {
                    if(prev > 3) {
                        return prev;
                    }
                    return prev + 1
                })
            }, 1000);
            return () => {
                clearInterval(clearSetInterval);
            };
        },
        []
    );
    React.useLayoutEffect(() => {
        activeLightBulb > 3 && nexScreen(1);
    }, [activeLightBulb]);
    return(
        <div className={'Screen2-Container'} style={{width: window.innerWidth, height: window.innerHeight}}>
            <img className={'Screen2-Img'} src={lightBulb} alt={'xxx'}/>
            <h2 style={{color: '#fff'}}>Chào mừng bạn vào nhà! Đèn nhà sẽ mở sau <u>3</u> giây</h2>
            <h1 style={{color: '#fff'}}>{activeLightBulb}</h1>
        </div>
    );
}

Screen2.propTypes = {};

Screen2.defaultProps = {};

export default Screen2;
