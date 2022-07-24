import {callRestWithFromDataApi,generateResponse} from './apiHelper';

export function sendContactInfo(contactInfo={}){
    //return callRestWithFromDataApi('contact-info',contactInfo);
    return new Promise((resolve,reject)=>{
        resolve(generateResponse("ok"));
    });
}