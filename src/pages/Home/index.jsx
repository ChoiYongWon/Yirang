import React, {memo} from "react"
import Header from "../../containers/redux/components/Header/index";
import ContentContainer from "../../containers/redux/pages/home/ContentContainer";

const Home = () => (
    <>
        <Header position={"absolute"} theme={"dark"}/>
        <ContentContainer></ContentContainer>
    </>
)

export default memo(Home)