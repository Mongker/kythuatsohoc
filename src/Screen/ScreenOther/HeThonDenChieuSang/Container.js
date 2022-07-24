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

import React, { useCallback } from 'react'
import update from 'immutability-helper'
import { useDrop } from 'react-dnd'
import Box from './Box'
import ItemTypes from './ItemTypes'

const styles = {
    width: 700,
    height: 700,
    position: 'relative',
    backgroundColor: 'transparent',
    borderRadius: '15px',
}
const Container = ({ hideSourceOnDrag, boxes, setBoxes, isXO }) => {
    const moveBox = useCallback(
        (id, left, top) => {
            if(id !== 'b') {
                setBoxes(
                    update(boxes, {
                        [id]: {
                            $merge: { left, top },
                        },
                    }),
                )
            }
        },
        [boxes, setBoxes],
    )
    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop(item, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset()
                const left = Math.round(item.left + delta.x)
                const top = Math.round(item.top + delta.y)
                moveBox(item.id, left, top)
                return undefined
            },
        }),
        [moveBox],
    )
    return (
        <div ref={drop} style={styles}>
            {Object.keys(boxes).map((key) => {
                const { left, top, title } = boxes[key]
                return (
                    <Box
                        key={key}
                        id={key}
                        left={left}
                        top={top}
                        hideSourceOnDrag={hideSourceOnDrag}
                        title={title}
                        isXO={isXO}
                    >
                        {title}
                    </Box>
                )
            })}
        </div>
    )
}
export default Container;
