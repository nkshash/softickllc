const baseApiUrl = API_URL;
const headers = {
    'Content-Type':'application/json',
    'Accept':'application/json'
};
const method = 'POST';        

export function generateUrlencodedData(params){
    return $.param(params); 
}


export function callRestApi(url,postData={},isAuth=false){
    var url = isAuth ? setTokenToUrl(url) : baseApiUrl + url;
    let options = {};
    options.body = JSON.stringify(postData);
    if (!('headers' in options)){
        options.headers = headers;
    }
    if (!('method' in options)){
        options.method = method;
    }
    //console.log(options);
    return fetch(url,options).then(getTokenFromResponseHeader); 
}


export function callRestWithFromDataApi(url,postData={},isAuth=false){
    var url = isAuth ? setTokenToUrl(url) : baseApiUrl + url;
    let options = {};
    options.body = generateUrlencodedData(postData);
    options.headers = {
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
        'Accept':'application/json'
    };
    if (!('method' in options)){
        options.method = method;
    }
    //console.log(options);
    return fetch(url,options).then(getTokenFromResponseHeader); 
}


export function callRestWithFormDataApi(url,postData={},isAuth=false){
    var url = isAuth ? setTokenToUrl(url) : baseApiUrl + url;
    let options = {};
    options.body = postData;
    options.headers = {
        'Accept':'application/json'
    };
    if (!('method' in options)){
        options.method = method;
    }
    //console.log(options);
    //return fetch(url,options).then(getTokenFromResponseHeader);
    return fetch(url,options).then(res=>res.json());
}


export function setTokenToUrl(url){
    let token = storage.getToken();
    let newurl = baseApiUrl + url + `?token=`+token;
    return newurl;
}

const getResponse =  (data) => {
    if(data.status==101){
        return data.data[0].list;
    }
}

export const getTokenFromResponseHeader = (res) => {
    let headers = res.headers;
    if('authorization' in headers){
        var token = headers['authorization'].split('Bearer ')[1];
        storage.setToken(token);
    }
    return res.json();
}

export const generateResponse = (data=false,msg=null)=>{
    return {
        status:data ? 101:102,
        message:data ? "success" : msg,
        data:data
    };
}





