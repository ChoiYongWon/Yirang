/** 
 * @author : chaeeun
 * @Date : 2021-03-17 15:43:10 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-17 15:43:35
 */
import React from "react"
import ContentContainer from "../../containers/redux/pages/profile/ContentContainer"
import Header from "../../containers/redux/components/Header";


const Profile = () => {

    return (
        <>
            <Header theme={"dark"} position={"static"} />
            <ContentContainer />

        </>
    )
}

export default Profile