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
import open_video from '../../video/mo_cua.mp4'
import close_video from '../../video/dong_cua.mp4'

const TYPE_ = {
    1: 'Sử dụng giọng nói:',
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
 function HeThongManhRem() {
    const [vis, setVis] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const refMount = useRef(false);
    useEffect(() => {
        return () => {
            clearTimeout(timer1);
        };
    }, [])

     function toggleModal() {
         setIsOpen(!isOpen);
     }

     function handleScreen() {
         setVis(!vis)
         // timer1 = setTimeout(() => setIsOpen(!isOpen), 3000)
     }

    return(
         <div className={'flex hethongremthongminh show_left'}>
             <div className={'flex justify-content_center margin_bottom-10'}>
                 <video src={!vis ? open_video : close_video} width={'80%'} autoPlay={refMount.current}/>
             </div>
             <div className={'flex justify-content_center'}>
                 <div className={'flex flex_column justify-content_space-around'}>
                     {
                         Object.values(TYPE_).map((item) => (
                             <button key={item}
                                 onClick={() => {
                                     refMount.current = true;
                                     if(item === TYPE_['1']) {
                                         setVis(!vis)
                                     } else {
                                         toggleModal()
                                     }
                             }} className={'button-19 backgroundColor_42a600 margin_bottom-10'}>
                                 {item} {item === TYPE_['1'] ? `'${(vis ? 'Đóng rèm' : 'Mở rèm')}'` : ''}
                             </button>
                         ))
                     }
                     {/*<button className={'button-19 backgroundColor_42a600'}>*/}
                     {/*    x*/}
                     {/*</button>*/}
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
                         Trạng thái rèm
                     </h3>
                     <div className={'flex justify-content_center'}>
                         <div
                             className={'hinh_tron2 flex justify-content_center align-items_center'}
                             onClick={handleScreen}
                             style={{
                                 backgroundColor: !vis ? 'red' : '#08c300',
                             }}
                         >
                             <h3>{vis ? 'Đóng rèm' : 'Mở Rèm'}</h3>
                         </div>
                     </div>
                 </div>
             </Modal>
         </div>
     );
 }

 HeThongManhRem.propTypes = {};

 HeThongManhRem.defaultProps = {};

 export default HeThongManhRem;
