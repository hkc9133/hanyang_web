import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styles from '../.././public/assets/styles/pagination.module.css';
import classnames from "classnames/bind"
import Link from "next/link";
import Image from "next/image";

const cx = classnames.bind(styles);


const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        i += step;
    }

    return range;
};

class Pagination extends Component {
    constructor(props) {
        super(props)

        const { totalRecords = null, pageLimit = 30, pageNeighbours = 0,currentPage } = props;

        this.pageLimit = typeof pageLimit === "number" ? pageLimit : 30;
        this.totalRecords = typeof totalRecords === "number" ? totalRecords : 0;

        this.pageNeighbours =
            typeof pageNeighbours === "number"
                ? Math.max(0, Math.min(pageNeighbours, 4))
                : 0;

        this.totalPages = Math.ceil(totalRecords / pageLimit);
        this.currentPage = currentPage;

        // this.state = { currentPage: 1 };
    }

    // componentDidMount() {
    //     this.setState({ key: Math.random() });
    // }
    // componentDidUpdate(prevProps, prevState){
    //     // if(prevProps.totalRecords != prevState.totalRecords){
    //     //     this.fetchPageNumbers();
    //     // }
    // }

    shouldComponentUpdate(nextProps, nextState){
        // console.log(nextProps)
        // console.log(nextState)
        const { totalRecords = null, pageLimit = 30, pageNeighbours = 0,currentPage } = nextProps;

        this.pageLimit = typeof pageLimit === "number" ? pageLimit : 30;
        this.totalRecords = typeof totalRecords === "number" ? totalRecords : 0;

        this.pageNeighbours =
            typeof pageNeighbours === "number"
                ? Math.max(0, Math.min(pageNeighbours, 4))
                : 0;

        this.totalPages = Math.ceil(totalRecords / pageLimit);
        this.currentPage = currentPage;
        return true;
    }

    gotoPage = page => {
        const { onPageChanged = f => f } = this.props;
        const currentPage = Math.max(0, Math.min(page, this.totalPages));
        onPageChanged(currentPage)
    };

    handleClick = (page, evt) => {
        evt.preventDefault();
        this.gotoPage(page);
    };

    handleMoveLeft = evt => {
        evt.preventDefault();
        this.gotoPage(this.currentPage - this.pageNeighbours * 2 - 1);
    };

    handleMoveRight = evt => {
        evt.preventDefault();
        this.gotoPage(this.currentPage + this.pageNeighbours * 2 + 1);
    };

    fetchPageNumbers = () => {
        const totalPages = this.totalPages;
        const currentPage = this.currentPage;
        const pageNeighbours = this.pageNeighbours;

        const totalNumbers = this.pageNeighbours * 2 + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {
            let pages = [];

            const leftBound = currentPage - pageNeighbours;
            const rightBound = currentPage + pageNeighbours;
            const beforeLastPage = totalPages - 1;

            const startPage = leftBound > 2 ? leftBound : 2;
            const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

            pages = range(startPage, endPage);

            const pagesCount = pages.length;
            const singleSpillOffset = totalNumbers - pagesCount - 1;

            const leftSpill = startPage > 2;
            const rightSpill = endPage < beforeLastPage;

            const leftSpillPage = LEFT_PAGE;
            const rightSpillPage = RIGHT_PAGE;

            if (leftSpill && !rightSpill) {
                const extraPages = range(startPage - singleSpillOffset, startPage - 1);
                pages = [leftSpillPage, ...extraPages, ...pages];
            } else if (!leftSpill && rightSpill) {
                const extraPages = range(endPage + 1, endPage + singleSpillOffset);
                pages = [...pages, ...extraPages, rightSpillPage];
            } else if (leftSpill && rightSpill) {
                pages = [leftSpillPage, ...pages, rightSpillPage];
            }

            return [1, ...pages, totalPages];
        }

        return range(1, totalPages);
    };

    render() {
        if (!this.totalRecords) return null;
        if (this.totalPages === 1) return null;

        const { currentPage,totalRecords } = this.props;
        const pages = this.fetchPageNumbers();

        return (
            <div className={cx("paging")}>
                {pages.map((page, index) => {
                    if (page === LEFT_PAGE)
                        return (
                            <button key={page} onClick={this.handleMoveLeft}>
                                <Image src="/assets/image/admin/page_prev.gif" width={40} height={40} alt="page_prev"/>
                            </button>
                        );
                    if (page === RIGHT_PAGE)
                        return (
                            <button key={page} onClick={this.handleMoveRight}>
                                <Image src="/assets/image/admin/page_next.gif" width={40} height={40} alt="page_next"/>
                            </button>
                        );
                    return (
                        <button key={page} onClick={e => this.handleClick(page, e)} className={cx({on:currentPage === page})}>
                            {page}
                        </button>
                    );
                })}
            </div>
        );
    }
}

Pagination.propTypes = {
    totalRecords: PropTypes.number.isRequired,
    pageLimit: PropTypes.number,
    pageNeighbours: PropTypes.number,
    currentPage: PropTypes.number,
    onPageChanged: PropTypes.func,
};

export default Pagination;
