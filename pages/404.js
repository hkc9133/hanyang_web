import styles from '../public/assets/styles/common/404.module.css';
import classnames from "classnames/bind"
import Link from "next/link";


const cx = classnames.bind(styles);

export default () => (
    <>
        <div className={cx("notfound")}>
            <div className={cx("notfound")}>
                <div className={cx("notfound-404")}>
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily
                    unavailable.</p>
                <Link href="/"><a href="#">Go To Homepage</a></Link>
            </div>
        </div>

    </>
)
