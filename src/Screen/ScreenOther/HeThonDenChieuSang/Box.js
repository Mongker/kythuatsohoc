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

import React from 'react';
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'
import black from '../../../images/batden/hinh-nen-den.jpg';
import fff from '../../../images/batden/bat.jpg';
import lua from '../../../images/batden/nguoi.png';

const style = {
    position: 'absolute',
    backgroundColor: 'transparent',
    padding: '0.5rem 1rem',
    cursor: 'move',
    width: 750,
    height: 400,
}


const Box = ({ id, left, top, hideSourceOnDrag, isXO, title }) => {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: ItemTypes.BOX,
            item: { id, left, top },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [id, left, top],
    )
    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag} />
    }
    if(title === 'Home') return (
        <div
            className="box"
            ref={drag}
            style={{ ...style, left, top, padding: 'unset', borderRadius: '15px' }}
            data-testid="box"
        >
            <img src={isXO ? fff : black} width={'100%'} height={'80%'} style={{borderRadius: '15px'}}/>
        </div>
    )
    return (
        <img
            className="box"
            ref={drag}
            style={{ ...style, left, top, zIndex: 900, width: 75, height: 150 }}
            data-testid="box"
            src={lua}
        />
    )
}
export default Box;
