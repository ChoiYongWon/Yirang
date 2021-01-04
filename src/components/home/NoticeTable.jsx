import React, { useState } from "react"
import { useEffect } from "react"
import _ from "../../config/env"
import getNoticeByPage from "../../service/api/get/get_notice_by_page";
import getNoticeNum from "../../service/api/get/get_notice_num";

const NoticeTable = () => {
    const [notices, setNotices] = useState([]);
    const [pagingNum, setpagingNum] = useState("0")
    const [totalPage, settotalPage] = useState("0")
    //전체 게시물 갯수 받아옴


    useEffect(() => {
        getNoticeNum()
            .then((resolve) => {
                settotalPage(Math.ceil(resolve.totalNoticeNums / 6))
            })
            .catch(error=>console.log(error))

    }, [])

    //전체 게시물 받아옴 
    useEffect(() => {
        getNoticeByPage(pagingNum)
            .then((resolve) => {
            setNotices(resolve.notices);
        }).catch(error=>console.log(error))
    }, [pagingNum])

    //게시물 여는 거 
    const SelectId = (e) => {
        console.log(e.target)
        const ID = e.target.id;
        console.log(ID)
        localStorage.setItem("SELECT_ID", ID)
        //  window.open(_.HOST_URL + '/read', 'window_name',
        //  'width=530,height=633,location=no,status=no,scrollbars=yes')
        window.open(_.HOST_URL + '/read', 'window_name',
            'width=530,height=633,location=no,status=no,scrollbars=yes')
    }
    //paging 함수들 
    const pagingClick = (e) => {
        const id = e.target.id
        console.log(id - 1)
        setpagingNum(id - 1)
        console.log(pagingNum)
    }

    const pageNumber = [];


    for (let i = 1; i <= totalPage; i++) {
        pageNumber.push(i);
    }

    return (
        <>
            <div className="notice__list">
                <table className="notice__table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>제목</th>
                            <th>봉사날짜</th>
                            <th>봉사지역</th>
                            <th>인원수</th>
                        </tr>
                    </thead>
                    {notices.map((notice) => (
                        <tbody onClick={SelectId} key={notice.id} name={notice.id}>
                            <tr >
                                <td id={notice.id}></td>
                                <td id={notice.id}> {notice.title}</td>
                                <td id={notice.id}>{notice.dov}</td>
                                <td id={notice.id}>{notice.region}</td>
                                <td id={notice.id}>{notice.nor}</td>
                            </tr>
                        </tbody>

                    ))}


                </table>

                <div className="notice__table--paging">
                    <ul className="pagination--notice">
                        {pageNumber.map((pageNum) => (
                            <li
                                key={pageNum}
                                id={pageNum}
                                className="pagination_item"
                                onClick={pagingClick}
                            > {pageNum}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </>
    )
}

export default NoticeTable