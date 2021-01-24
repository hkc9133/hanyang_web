import React,{useEffect} from 'react'
import styled from 'styled-components'
import Portal from "./Portal";
import CloseImage from '../../public/assets/image/popup_close.gif';


// import styles from '../../public/assets/styles/common/modal.module.css.module.css';
// import classnames from "classnames/bind"


// const cx = classnames.bind(styles);

function Modal({className,onClose,maskClosable,closable,visible, children,cx}) {
    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(e)
        }
    }

    const close = (e) => {
        if (onClose) {
            onClose(e)
        }
    }


    useEffect(() => {
        // document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
        document.body.style.cssText = `top: -${window.scrollY}px`
        return () => {
            const scrollY = document.body.style.top
            document.body.style.cssText = `position: ""; top: "";`
            window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }
    }, [])

    return (
        <>
            {/*<Portal elementId="modal-root">*/}
            {/*    <div className={cx("popup")} visible={visible}>*/}
            {/*        <div className={cx("popup-content")}>*/}
            {/*            <div className={cx("popup_inner")}>*/}
            {/*                {children}*/}
            {/*            </div>*/}
            {/*            <button type="button" className={cx("popup_close")}>팝업닫기</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Portal>*/}

            <Portal elementId="modal-root">
                <ModalOverlay visible={visible} />
                <ModalWrapper
                    className={cx !== undefined ? cx(className) : className}
                    onClick={maskClosable ? onMaskClick : null}
                    tabIndex="-1"
                    visible={visible}
                >
                    <ModalInner tabIndex="0" className={`${cx !== undefined && cx("inner")} modal-inner`}>
                        {closable && <CloseBtn className="modal-close" onClick={close} >X</CloseBtn>}
                        {children}
                    </ModalInner>
                </ModalWrapper>
            </Portal>
        </>
    )
}


const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  outline:none;
`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
  outline:none;
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  max-width:90%; width:680px; max-height:90vh;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 20px 30px;
  outline:none;
`

const CloseBtn = styled.button`
  position:absolute;
  right:10px;
  top:10px;
  width:40px;
  height:40px;
  background:url(${CloseImage}) no-repeat center center;
  display:block;
  text-indent:-9999px; 
`

export default Modal
