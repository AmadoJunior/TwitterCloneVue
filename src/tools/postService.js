import axios from "axios"
import {store} from "./../main";

const url = "api/post/"

class Post{
    static async getPosts(){
        const response = await axios.get(url);
        return response.data;
    }

    static async sendPost(userName, message){
        const postData = {
            userName: userName,
            message: message
        }
        const response = await axios.post(url, postData, {headers: {"authorization": "Bearer " + store.state.token}});
        console.log(response.data);
    }
}
export default Post;