import axios from "axios"

const url = "api/user/login/";

class User{
    static async getToken(userName, email, password){
        const data = {
            userName: userName,
            email: email,
            password: password
        }
        const response = await axios.post(url, data);
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
}
export default User;