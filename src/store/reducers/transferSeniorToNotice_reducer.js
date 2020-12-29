import ACTION from "../actions/transferSeniorToNotice_action"

export default (state, action) => {
    if(state===undefined) { return initial}
    switch(action.type){
        case ACTION.TRANSFER_SENIOR_TO_NOTICE:
            return {
                ...state, ...action.data
            }
        default:
            return {...state}
    }
}

const initial={
    region: "",
    dov: "",
    nor: 0,
    excelData: {}
}