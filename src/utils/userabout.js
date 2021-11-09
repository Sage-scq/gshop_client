import { v4 as uuidv4 } from 'uuid';
// 该函数无参数，调用时会返回一个由uuid生成的独特临时标识
function getUserTempId() {
    let userTempId = localStorage.getItem('USERTEMPID_KEY')
    if (!userTempId) {
        userTempId = uuidv4()
        localStorage.setItem('USERTEMPID_KEY', userTempId)
    }
    return userTempId;
}
function setToken(token) {
    localStorage.setItem('TOKEN_KEY', token)
}
function getToken() {
    return localStorage.getItem('TOKEN_KEY')
}
function removeToken() {
    localStorage.removeItem('TOKEN_KEY')
}
export {
    getUserTempId,
    setToken,
    getToken,
    removeToken
}