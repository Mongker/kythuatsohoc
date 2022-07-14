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

import React from 'react';
import img1 from "../images/home1.jpg";

function Screen1({nexScreen}) {
    return(
        <div className="Screen-Container">
            <img className={'Screen-Image'} src={img1} alt={'home'} onClick={() => nexScreen(2)} />
            <div className={'Screen-Text'}>
                Click vào hình ngôi nhà để vào nhà
            </div>
        </div>
    );
}

export default Screen1;
