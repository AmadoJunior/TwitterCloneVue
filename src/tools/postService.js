import axios from "axios"
import {eventBus} from "./../main";

const url = "api/post/"

class Post{
    static async getPosts(){
        const response = await axios.get(url);
        return response.data;
    }

    static async sendPost(userName, profileImg, message){
        const postData = {
            userName: userName,
            profileImg: profileImg,
            message: message
        }
        try{
            const response = await axios.post(url, postData, {headers: {"authorization": "Bearer " + localStorage.token}});
            eventBus.$emit("messagePosted");
            console.log(response.data);
        } catch(err){
            eventBus.reset();
            console.log(err);
        }
        
    }

    static async removePost(id){
            axios.delete(url + id, {headers: {"authorization": "Bearer " + localStorage.token}})
            .then(() => {
                eventBus.$emit("postRemoved");
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
export default Post;