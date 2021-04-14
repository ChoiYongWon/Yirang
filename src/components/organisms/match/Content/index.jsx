import React, {memo, useMemo} from "react"
import Row from "../../../../layout/Grid/Row";
import Col from "../../../../layout/Grid/Column";
import TableBox from "../../../atoms/TableBox";
import Content from "../../../../layout/Content";
import SelectBox from "../../../atoms/SelectBox";
import UserCard from "../../../../containers/redux/components/UserCard";
import Pagination from "../../../atoms/Pagination";
import PageMenuNav from "../../../../containers/redux/components/PageNav";

const MatchContent = ({
    activityTableBody,
    activityOnClick,
    activityNum,
    activityPageData,
    currentRegion,

    activityPaginationOnClick,
    regionOnChange
  }) => {

    //const [activityList, setActivityList] = useState([])
    //const [currentPage, setCurrentPage] = useState(1)

    const activityTableHead = useMemo(()=>["지역", "날짜", "인원", "일시"],[]);
    // const noticeTableBody = [
    //     {title : "동구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "서구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "달서구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "수성구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "동구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "남구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "달성군", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "중구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "북구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "수성구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "중구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "서구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "남구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "달서구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //
    //
    //
    // ]
    const matchingResultTableHead = useMemo(()=>["피봉사자", "봉사자"],[])
    const matchingResultTableBody = useMemo(()=>[
        {a : "유정민", b : "최용원, 이채은"},
        {a : "유정민", b : "최용원, 이채은"},
        {a : "유정민", b : "최용원, 이채은"},
        {a : "유정민", b : "최용원"},
        {a : "유정민", b : "최용원, 이채은"},
        {a : "유정민", b : "최용원"},
        {a : "유정민", b : "최용원"},
        {a : "유정민", b : "최용원"},
        {a : "유정민", b : "최용원, 이채은"},
        {a : "유정민", b : "최용원, 이채은"},
        {a : "유정민", b : "최용원, 이채은"},
        {a : "유정민", b : "최용원"},
        {a : "유정민", b : "최용원, 이채은"},
        {a : "유정민", b : "최용원"},
        {a : "유정민", b : "최용원"},
        {a : "유정민", b : "최용원"},

    ],[]);

    const tooltip = useMemo(()=>({
        data : {
            a : matchingResultTableBody.map((value)=>{
                return value.a +" 입니다\n나이 : 28"
            })
        },
        position : "right"
    }),[matchingResultTableBody])

    const notMatchedVolunteerHead = useMemo(()=>["제외된 봉사자"],[]);
    const notMatchedSeniorHead = useMemo(()=>["제외된 피봉사자"],[])
    const notMatchedVolunteerBody = useMemo(()=>[
        {name : "최용원"},
        {name : "최용원"},
        {name : "최용원"},
        {name : "최용원"},
        {name : "최용원"},
        {name : "최용원"},
        {name : "최용원"},
        {name : "최용원"},
    ],[])
    const notMatchedSeniorBody = useMemo(()=>[
        {name : "유정민"},
        {name : "유정민"},
        {name : "유정민"},
        {name : "유정민"},
        {name : "최용원"},
        {name : "최용원"},
        {name : "최용원"},
        {name : "최용원"},
    ],[])

    const regionOption = useMemo(()=>["전체","수성구", "중구", "서구", "남구", "북구", "동구", "달서구", "달성군"],[])

    
    return (
        <>
            <Content style={{
                marginTop : "2rem"
            }}>
                <Row justify={"center"} gutter={[10,20]}>
                    <Col span={11}>
                        <SelectBox options={regionOption} value={currentRegion} onChange={regionOnChange} border></SelectBox>
                    </Col>
                    <Col span={5}>
                        <Row justify={"center"}>
                            <Col span={12}>
                                <TableBox headList={activityTableHead} bodyList={activityTableBody} data={activityPageData} dataOnClick={activityOnClick} border={"top"} colgroup={[25,25,25,25]}></TableBox>
                            </Col>
                            <Col span={12} justify={"center"} style={{
                                marginTop : "1rem"
                            }}>
                                <Pagination num={Math.floor(activityNum/14)} onClick={activityPaginationOnClick}></Pagination>
                            </Col>
                        </Row>
                    </Col>



                    <Col span={3}>
                        <Row justify={"space-between"}>
                            <Col span={12}>
                                <TableBox headList={matchingResultTableHead} bodyList={matchingResultTableBody} border={"top"} tooltip={tooltip} row={8} colgroup={[50,50]}></TableBox>
                            </Col>
                            <Col span={5.5} style={{
                                marginTop : "2.4rem"
                            }}>
                                <TableBox headList={notMatchedSeniorHead} bodyList={notMatchedSeniorBody} border={"top"} row={4}></TableBox>
                            </Col>
                            <Col span={5.5} style={{
                                marginTop : "2.4rem"
                            }}>
                                <TableBox headList={notMatchedVolunteerHead} bodyList={notMatchedVolunteerBody} border={"top"} row={4}></TableBox>
                            </Col>
                        </Row>

                    </Col>
                    <Col span={3}>
                        <Row>
                            <Col span={12}>
                                <PageMenuNav></PageMenuNav>
                            </Col>
                            <Col span={12} style={{
                                marginTop : "1.5rem"
                            }}>
                                <UserCard></UserCard>
                            </Col>
                        </Row>

                    </Col>

                </Row>

            </Content>

        </>
    )
}

export default memo(MatchContent)