// import React, {useCallback} from 'react';
// import wrapper from "../../../store/configureStore";
// import client from "../../../lib/api/client";
// import {END} from "redux-saga";
// import {getNotice} from "../../../store/startupCalendar/notice";
//
//
// import styles from '../../../public/assets/styles/board/board.module.css';
// import classnames from "classnames/bind"
// import {useDispatch, useSelector} from "react-redux";
// import moment from "moment";
// import {Upload} from "antd";
// import Link from "next/link";
// import qs from "query-string";
// import {fileDownload} from "../../../store/file/file";
// import {useRouter} from "next/router";
// import parse from 'html-react-parser';
//
//
// const cx = classnames.bind(styles);
//
//
// export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
//
//     const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
//     client.defaults.headers.Cookie = cookie;
//
//     context.store.dispatch(getNotice(context.params.noticeId));
//     context.store.dispatch(END);
//     await context.store.sagaTask.toPromise();
// })
//
// const NoticeView = () => {
//     const router = useRouter();
//     const dispatch = useDispatch();
//
//
//     const {view,user} = useSelector(({notice,auth, loading}) => ({
//         user:auth.user,
//         view: notice.view,
//     }))
//
//
//     const handleFileDownload = useCallback(({fileId}) => {
//         if (fileId != undefined) {
//             dispatch(fileDownload(fileId))
//         }
//     }, [])
//
//     return (
//         view.notice != null && (
//             <section className={cx("container")}>
//                 <div className={cx("sub_container", "board_view")}>
//                     <h1 className={cx("sub_top_title")}>공지사항</h1>
//                     <p className={cx("sub_top_txt")}>공지사항 입니다</p>
//
//                     <div className={cx("bbs_view")}>
//                         <div className={cx("topTitleArea")}>
//                             <h2>{view.notice.title}</h2>
//                             <span className={cx("date")}>{moment(view.notice.regDate).format("YYYY.MM.DD HH:MM")}</span>
//                         </div>
//
//                         <div className={cx("bbs_viewCont")}>
//                             <div className={"ql-editor"} dangerouslySetInnerHTML={{__html: view.notice.content}}/>
//                         </div>
//                         {view.files.length > 0 && (
//                             <div className={cx("bbs_attach_file")}>
//                                 <Upload
//                                     listType="picture-card"
//                                     fileList={view.files.map((file) => {
//                                         return {
//                                             uid: file.fileName,
//                                             name: file.fileOriginName,
//                                             status: 'done',
//                                             fileId: file.fileId
//                                         }
//                                     })}
//                                     showUploadList={{
//                                         showPreviewIcon: false,
//                                         showRemoveIcon: false,
//                                         showDownloadIcon: true
//                                     }}
//                                     onDownload={handleFileDownload}
//                                 >
//                                 </Upload>
//                             </div>
//                         )}
//
//                         <div className={cx("txt_c")}>
//                             <Link href={`/introduce/notice/list?${qs.stringify({
//                                 ...router.query
//                             })}`}><a className={cx("basic-btn04", "btn-black-bd")}>목록보기</a></Link>
//                         </div>
//
//                         <div className={cx("prev_next")}>
//                             <ul>
//                                 {view.next != null && (
//                                     <li>
//                                         <span className={cx("title")}>다음글</span>
//                                         <Link
//                                             href={`/introduce/notice/${view.next.noticeId}`}><a>{view.next.title}</a></Link>
//                                         <span
//                                             className={cx("date")}>{moment(view.next.regDate).format("YYYY.MM.DD")}</span>
//                                     </li>
//                                 )}
//                                 {view.prev != null && (
//                                     <li>
//                                         <span className={cx("title")}>이전글</span>
//                                         <Link
//                                             href={`/introduce/notice/${view.prev.noticeId}`}><a>{view.prev.title}</a></Link>
//                                         <span
//                                             className={cx("date")}>{moment(view.prev.regDate).format("YYYY.MM.DD")}</span>
//                                     </li>
//                                 )}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         )
//     );
// };
//
// export default NoticeView;
