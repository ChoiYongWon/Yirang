import NotificationPool from "../../../containers/redux/components/NotificationPool/";
import _ from "../../../config/env";

/**
 * @description 개별 피봉사자 등록
 * @method POST
 * @request @headers YAT token, Index-Type
 * @request @body data{title , content , region , nor , dov , tov , dod}
 */

const postSeniorToServer = (data) => {
    let payloadData = JSON.stringify(data);
    payloadData = payloadData.replace(/"sex":"남성"/g,'"sex":"male"') //남자 영문으로 전환
    payloadData = payloadData.replace(/"sex":"여성"/g,'"sex":"female"') //여자 영문으로 전환
    payloadData = payloadData.replace(/노력봉사/g,'work') //노력봉사 영문으로 전환
    payloadData = payloadData.replace(/말벗봉사/g,'talk') //말벗봉사 영문으로 전환

    return fetch(`${_.SERVER_URL}:8080/v1/apis/seniors`,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
        },
        body: payloadData
    }).then(res=>{
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
    }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from post_senior",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from post_senior\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
}

export default postSeniorToServer