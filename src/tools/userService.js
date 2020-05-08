import axios from "axios"

class User{
    static async getToken(userName, email, password){
        const data = {
            userName: userName,
            email: email,
            password: password
        }
        const response = await axios.post("api/user/login/", data);
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