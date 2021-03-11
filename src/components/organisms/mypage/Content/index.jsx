/**
 * @author : chaeeun
 * @Date : 2021-02-16 23:47:36
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-02-24 16:59:07
 */

import React from 'react'
import ContentLayout from '../../../../layout/Content'
import Col from '../../../../layout/Grid/Column'
import Row from '../../../../layout/Grid/Row'
import Typo from '../../../atoms/Typography'
import UserInfo from '../../../../containers/redux/components/UserInfo'
import TableBox from "../../../atoms/TableBox"
import Button from '../../../atoms/Button'
import DateSelector from '../../../atoms/DateSelector'
import RadioBox from '../../../atoms/RadioButton'
import MypageNav from "../../../molecules/MypageNav"

const MyPageContent = ({
    //redux user information
    username,
    email,
    role,


}) => {
    console.log(username)
    console.log(email)
    const manage_basic_head = ["봉사 일시", "장소", "매칭상태", "참고"]
    const null_table_head = ["-"]
    //봉사관리 body api에서 받아오면 수정 
    const manage_hard_body = [
        { date: '2021-07-01', region: '달서구', result: '매칭 대기', refer: "참고사항" },
        { date: '2021-07-03', region: '서구', result: '매칭 완료', refer: "-" }]

    //받아오는 body가 없을 경우! 
    //const hard_body = null

    const manage_table_head = (manage_hard_body) ? manage_basic_head : null_table_head
    const manage_body_Lists = manage_hard_body || [{ date: "신청한 봉사가 없습니다. " }]


    const typeoptions = ["노력봉사", "말벗봉사"];

    const check_basic_head = ["봉사일시", "장소", "봉사분야", "기타"]

    const check_hard_body = [
        { date: '2021-07-01', region: '달서구', tpye: '재가봉사', refer: "참고사항" },
        { date: '2021-07-03', region: '서구', tpye: '재가봉사', refer: "-" }]

    const check_table_head = (check_hard_body) ? check_basic_head : null_table_head
    const check_body_Lists = check_hard_body || [{ date: "조회할 봉사가 없습니다. " }]

    return (
        <>

            <ContentLayout style={{
                margin: '3rem 4rem',
                // border: "1px solid #ccd4e0",
            }}
            >
                <Row>
                    <Col span={4}>
                        <Row>
                            <Col span={4} >
                                <Typo size={"2.3rem"} weight={'bold'}>{username}</Typo>
                            </Col>
                        </Row>
                        <Row gutter={[3, 0]}>
                            <Col span={12}>
                                <Typo size={"1.1rem"} opacity={'0.5'}>
                                    {
                                        (email) ? `${email} >` : `email을 인증해 주세요`
                                    }
                                </Typo>
                            </Col>
                        </Row>
                        <Row gutter={[15, 0]} style={{ margin: '2rem 0 0 0 ' }}>
                            <Col span={12}>
                                <Typo size={"1.2rem"} weight={"500"}>로그인 된 카카오계정</Typo>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <UserInfo></UserInfo>
                            </Col>
                        </Row>
                        <Row gutter={[15, 0]}>
                            <Col span={12}>
                                <MypageNav role={role} />
                            </Col>
                        </Row>
                        <Row gutter={[15, 0]} style={{ margin: '2.5rem 0 0 0 ' }}>
                            <Col span={4}>
                                <Typo size={"1rem"} opacity={"0.7"} weight={"500"} cursor={'pointer'} >문의하기</Typo>
                            </Col>
                            <Col span={8}>
                                <Typo size={"1rem"} opacity={"0.7"} weight={"500"} cursor={'pointer'} >업데이트 정보</Typo>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={7.5} offset={0.5}>

                        <Row>
                            <Col span={12}>
                                <Typo size={"1.2rem"} weight={"500"} > 봉사 관리</Typo>
                            </Col>


                            <Row gutter={[0, 0]}>
                                <Col span={12}>
                                    {
                                        (manage_body_Lists).map((lists) => {
                                            let data = Object.assign({
                                                date: lists.date,
                                                region: lists.region,
                                                result: lists.result,
                                                refer: lists.refer
                                            }, {})

                                            return (
                                                <>
                                                    <Row gutter={[4, 0]} align="center">
                                                        <Col span={10}>
                                                            <TableBox headList={manage_table_head} bodyList={[data]} border={"top"}></TableBox>
                                                        </Col>
                                                        <Col xs={2} sm={2} md={3} lg={2}>
                                                            <Row gutter={[0.5, 5]}>
                                                                <Col xs={1} span={12}>
                                                                    <Button block size="large" value="공고글 보기" types={"primary"}></Button>
                                                                </Col>

                                                                <Col xs={1} span={12}>
                                                                    <Button block size="large" value="신청취소" types={"primary"} ></Button>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </>
                                            )
                                        })
                                    }
                                </Col>
                            </Row>
                            <Row gutter={[0, 0]} justify={"space-between"} style={{ margin: '2.5rem 0 0 0 ' }}>
                                <Col span={6}>
                                    <Typo size={"1.2rem"} weight={"500"} > 봉사 기록 조회</Typo>
                                </Col>
                                <Col span={6} justify={"flex-end"}>
                                    <Typo size={"1.1rem"} weight={"500"} > 전체 기록 보기 {'>'}</Typo>
                                </Col>
                            </Row>

                            <Row gutter={[4, 5]} align="center" >
                                <Col span={5} justify={"space-between"} align={"center"} style={{
                                    height: "3.2rem",
                                    backgroundColor: "#f5f5f5",
                                    borderBottom: "1px solid #ccd4e0",
                                    borderRight: " 1.2px solid #000000",
                                    borderTop: " 2px solid #000000",
                                    //borderBottom: " 2px solid #000000", 이거 왜 두개 있어?
                                }}>
                                    <Row gutter={[0, 0]}>
                                        <Col span={6}>
                                            <DateSelector size={"small"} border />
                                        </Col>
                                        <Col span={6}>
                                            <DateSelector size={"small"} border />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={5} justify={"center"} align={"center"} style={{
                                    height: "3.2rem",
                                    backgroundColor: "#f5f5f5",
                                    borderBottom: "1px solid #ccd4e0",
                                    borderTop: " 2px solid #000000",
                                }}>

                                    <RadioBox name="gender" options={typeoptions} />

                                </Col>
                                <Col xs={2} sm={2} md={3} lg={2}>
                                    <Button block size="large" value="조회하기" types={"primary"}></Button>
                                </Col>
                            </Row>

                            <Row gutter={[0, 0]} align="center" style={{ margin: '0.8rem 0 0 0 ' }}>
                                <TableBox headList={check_table_head} bodyList={check_body_Lists} border={"top"}></TableBox>

                            </Row>
                        </Row>




                    </Col>


                </Row>


            </ContentLayout>
        </>
    )

}

export default MyPageContent;