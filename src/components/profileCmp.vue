<template>
    <div id="profileContainer">
        <div id="topContainer">
            <img src="./../assets/tempProfile.png">
            <h3>{{state.userData.userName}}</h3>
        </div>

        <div id="stats">
            <div class="statContainer">
                <span>
                    5000
                </span>
                <span>
                    FOLLOWERS
                </span>
            </div>
            <div class="statContainer">
                <span>
                    50
                </span>
                <span>
                    POSTS
                </span>
            </div>
            <div class="statContainer">
                <span>
                    400
                </span>
                <span>
                    FOLLOWING   
                </span>
            </div>
        </div>

        <textarea type="text" 
        placeholder="Write a new Post ..." 
        class="postInput" 
        @focus="toggleExpand()" 
        @blur="toggleExpand()" 
        v-model="postMessage" >
        </textarea>
        <button id="postButton" 
        :class="{writing: isWriting, inactive: isInactive}"
        @click="post()"
        >Post</button>
        
    </div>
</template>

<script>
import Post from "./../tools/postService";
import {store} from "./../main";

export default {
    data(){
        return{
            isWriting: false,
            isInactive: true,
            postMessage: "",
            state: store.state
        }
    },
    methods:{
        toggleExpand(){
            setTimeout(()=>{
                this.isWriting = !this.isWriting;
                this.isInactive = !this.isInactive;
            }, 200);
        },
        post(){
            Post.sendPost(this.state.userData.userName, this.postMessage);
            this.postMessage = "";
        }
    }
}
</script>

<style scoped>
    img{
        height: 70px;
        width: 70px;
        margin: 15px;
    }
    h3{
        margin-top: 0px;
    }
    #profileContainer{
        position: relative;
        background-color: white;
        border-radius: 15px;
        border: solid 1px #c1c1c1;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 15px;
        max-height: 400px;
        width: 300px;
    }
    #topContainer{
        border-radius: 15px;
        background-color: #77abfa;
        display:flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        margin: -1px;
    }
    .postInput{
        resize: none;
        border-radius: 15px;
        background-color: #f0f0f0;
        background-color: #f0f0f0;
        padding: 10px;
        height: 15px;
        transition: 1s;
        margin: -1px;
    }
    .postInput:focus{
        height: 150px;
    }
    #postButton{
        position: absolute;
        bottom: 10px;
        left: 50%;
        width: 80px;
        margin-left: -40px;
        padding:6px;
        background-color: #4b8cee;
        color: white;
        border-radius: 15px;
        border: none;
        cursor: pointer;
    }
    .writing{
        display: static;
    }
    .inactive{
        display:none;
    }
    #stats{
        display:flex;
        justify-content: center;
    }
    .statContainer{
        margin: 18px 10px 18px 10px;
        display:flex;
        flex-direction:column;
        align-items: center;
        font-size: 12px;
    }

</style>