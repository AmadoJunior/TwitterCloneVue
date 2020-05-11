<template>
    <div id="profileContainer">
        <div id="topContainer">
            <img src="./../assets/tempProfile.png">
            <h3>{{userName}}</h3>
        </div>

        <div id="stats">
            <div class="statContainer">
                <span class="number">
                    5000
                </span>
                <span>
                    FOLLOWERS
                </span>
            </div>
            <div class="statContainer">
                <span class="number">
                    50
                </span>
                <span>
                    POSTS
                </span>
            </div>
            <div class="statContainer">
                <span class="number">
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

export default {
    data(){
        return{
            isWriting: false,
            isInactive: true,
            postMessage: ""
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
            if(this.postMessage.length > 1){
                Post.sendPost(this.userName, this.postMessage);
                this.postMessage = "";
            }
            
        }
    },
    computed:{
        userName(){
            return localStorage.userName;
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
        color: white;
    }
    #profileContainer{
        position: relative;
        background-color: white;
        border-radius: 15px;
        border: solid .5px #c1c1c1;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 15px;
        max-height: 400px;
        width: 300px;
        flex-shrink: 0;
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
        transition: 1s ease-in-out;
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
        transition: .2s ease-in-out;
        transition-delay: 100ms;
    }
    #postButton:hover{
        background-color: rgb(47, 117, 223);
    }
    .writing{
        visibility: visible;
        opacity: 1;
    }
    .inactive{
        visibility: hidden;
        opacity: 0;
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
    .number{
        color:#4B8CEE;
        font-size: 15px;
    }

</style>