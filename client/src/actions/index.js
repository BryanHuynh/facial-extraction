import * as api from '../api/index'

export const fetch_faces = async(base64) => {
    try{
        const option = {
          method: "POST",
          url: "http://localhost:5000/recognition",
          headers: {},
          data: {
            base64: base64,
          }
        }
        const res = await api.get_faces(option);
        console.log(res);
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
