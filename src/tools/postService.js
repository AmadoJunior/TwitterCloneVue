import axios from "axios"
import {eventBus} from "./../main";

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
        try{
            const response = await axios.post(url, postData, {headers: {"authorization": "Bearer " + localStorage.token}});
            console.log(response.data);
        } catch(err){
            eventBus.reset();
            console.log(err);
        }
        
    }
}
export default Post;