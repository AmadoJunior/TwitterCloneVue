import axios from "axios"

const url = "api/user/";

class User{
    static async getToken(userName, email, password){
        const data = {
            userName: userName,
            email: email,
            password: password
        }
        const response = await axios.post(url + "login/", data);
        return new Promise(
            (resolve, reject) => {
                try{
                    const data = response.data;
                    resolve(data);
                } catch(err){
                    reject(err);
                }
            }
        )
    }

    static async signUp(userName, email, password){
        const data = {
            userName: userName,
            email: email,
            password: password
        }
        const response = await axios.post(url + "signup/", data);
        return new Promise((resolve, reject) => {
            try{
                const data = response.data;
                resolve(data);
            } catch(err){
                reject(err);
            }
        })
    }

    static async updateProfile(formData, whichImage){
        try{
            const response = await axios.post(url + "media/" + whichImage, formData, 
            {headers:{
                "Content-Type": "multipart/form-data",
                "authorization": "Bearer " + localStorage.token
            }});
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    static async getUserData(userName){
        try{
            const response = await axios.post(url, {userName: userName} ,{headers: {"authorization": "Bearer " + localStorage.token}});
            return new Promise((resolve, reject) => {
                try{
                    const data = response.data;
                    resolve(data);
                } catch(err) {
                    reject(err);
                }
            })
        } catch(err) {
            console.log(err);
        }
    }
}
export default User;