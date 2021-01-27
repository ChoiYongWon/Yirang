import jwt_decode from "jwt-decode"
import NotificationPool from "../../containers/redux/components/NotificationPool/";


let obj = {

    decode : (token) => {
        return jwt_decode(token)
    },

    exist: () => {
        return new Promise((resolve, reject)=>{
            let ACCESS_TOKEN = localStorage.getItem("YAT")
            if(ACCESS_TOKEN){
                //토큰뜯기 -> 유효기간확인 -> 유효하면 true 안하면 false
    
                //base64 디코딩
                const decodedToken = obj.decode(ACCESS_TOKEN);
                const tokenExpired = obj.IsExpiredIn(decodedToken);
                if(tokenExpired){
                    resolve(ACCESS_TOKEN)
                }else{
                    NotificationPool.api.add({
                        title : "경고",
                        content : "토큰이 만료되었습니다",
                        status : "warning",
                        duration : 5

                    })
                    reject(new Error("Token is expired"))
                }
            }
            else reject(new Error("Token is non exists"))
        })
    },

    IsExpiredIn : (decodedToken) =>{
        const expireDate = decodedToken["exp"] * 1000;
        const date = Date.now();
        return (expireDate>date) ? true : false;
    }
}

export default obj
//유효시간 확인 등등 yat에 관련된 함수 제공