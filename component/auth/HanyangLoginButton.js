import React, {useEffect} from 'react';
import {initHanyang} from "../../store/auth/auth";
import {useDispatch, useSelector} from "react-redux";

const HanyangLoginButton = ({handleSocialLogin,onFormCheck}) => {

    const form = React.useRef();

    const dispatch = useDispatch();
    const {initHanyangInfo} = useSelector(({auth, loading}) => ({
        initHanyangInfo:auth.initHanyang,
    }))

    useEffect(() => {
        dispatch(initHanyang());
    },[])

    const onSubmit = () =>{
        form.current.submit();
    }
    return (
        initHanyangInfo != null && (
            <form ref={form} action={initHanyangInfo.url} method="get">
                <input type="hidden" name="client_id" value={initHanyangInfo.clientId}/>
                <input type="hidden" name="response_type" value="code"/>
                <input type="hidden" name="redirect_uri" value={initHanyangInfo.redirectUrl}/>
                <input type="hidden" name="scope" value={initHanyangInfo.scope}/>
                {/*<button type="submit">한양인 로그인</button>*/}
                <a href="#" onClick={(e) => {onSubmit();}}>
                    <span>한양인 <br/>로그인</span>
                </a>
            </form>
        )
    );
};

export default HanyangLoginButton;
