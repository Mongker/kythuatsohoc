/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author monglv@bkav.com on 26/07/2022
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';

import dongrem from '../../video/hoatanh/dongrem.mp4';
import dieuhoa from '../../video/hoatanh/dieuhoa.mp4';
import anninh from '../../video/hoatanh/anninh.mp4';
import tuoitieu from '../../video/hoatanh/tuoitieu.mp4';
import anhsang from '../../video/hoatanh/anhsang.mp4';
import giatri from '../../video/hoatanh/giaitri.mp4';
import baochay from '../../video/hoatanh/baochay.mp4';

const data = {
    1: dongrem,
    2: baochay,
    3: dieuhoa,
    4: tuoitieu,
    5: giatri,
    6: '',
    7: anhsang,
    8: anninh,
};
function VideoBase({type}) {
    return(
        <div className={'flex hethongremthongminh show_left'}>
            <video autoPlay src={data[type]} width={1000} height={500} />
        </div>
    );
}

export default VideoBase;
