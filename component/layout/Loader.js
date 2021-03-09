import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

import styles from '../../public/assets/styles/loader.module.css';
import classnames from "classnames/bind"
const cx = classnames.bind(styles);


const Loader = () => {
    return (
        <div className={cx("loader_box")}>
            <Spin indicator={antIcon} className={cx("loader")}/>
        </div>
    );
};

export default Loader;
