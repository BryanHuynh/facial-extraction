import * as api from '../api/index'

export const fetch = async() => {
    try{
        const res = await api.fetch();
        return res;
    }catch(error){
        console.log(error.message)
    }
}

export const post = async(post) => {
    try{
        const res = await api.post(post);
        return res;
    }catch(error){
        console.log(error.message)
    }
}