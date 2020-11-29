import React,{useEffect} from 'react';
import Link from "next/link";
import wrapper from '../../store/configureStore';
import {useDispatch, useSelector} from "react-redux";
import {authCheck} from "../../store/auth/auth";
import {END} from 'redux-saga';



// export const getServerSideProps = wrapper.getServerSideProps(({ store }) => {
//     store.dispatch(authCheck());
//     // store.dispatch(END);
//     // store.sagaTask.toPromise();
//     // return {
//     //     props: {}, // will be passed to the page component as props
//     // };
// });

export const getServerSideProps = wrapper.getServerSideProps(
    async ({store, preview}) => {
        console.log('2. Page.getStaticProps uses the store to dispatch things');
        store.dispatch(authCheck());
        store.dispatch(END);
        console.log('getServerSideProps end');
        // saga의 비동기 이벤트 설정
        await store.sagaTask.toPromise();
    }
);

const Dashboard = () => {
    const auth = useSelector(state => state.auth);
    console.log("111")
    console.log(auth)
    console.log("111")

    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(authCheck());
    //
    // },[])

    return (
        <div>
            <Link href="/"><a>메 이동</a></Link>
            <div>
                {auth.user.login == true ? "트루" : "거짓"}
            </div>
        </div>
    );
};

export default Dashboard;
