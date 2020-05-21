<template>
    <div id="profileContainer">
        <div id="topContainer" :style="{backgroundImage: 'url(' + userData.backgroundImg +')'}">
            <div id="profile" :style="{ backgroundImage: `url('${userData.profileImg}')` }"/>
            <h3>{{userData.userName}}</h3>
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
import User from "./../tools/userService";
import {eventBus} from "./../main";

export default {
    data(){
        return{
            userData: {},
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
                Post.sendPost(this.userData.userName, this.userData.profileImg, this.postMessage);
                this.postMessage = "";
            }
            
        }
    },
    async created(){
        this.userData = await User.getUserData(localStorage.userName);

        let vm = this;
        eventBus.$on("popUp", async () => {
            vm.userData = await User.getUserData(localStorage.userName);
        })

    }
}
</script>

<style scoped>
    h3{
        margin-top: 0px;
        color: white;
    }
    #profile{
        height: 70px;
        width: 70px;
        margin: 15px;
        background-size: cover;
        background-position: center;
        border: solid 2px white;
    }
    #profileContainer{
        position: relative;
        background-color: white;
        border-radius: 15px;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 15px;
        width: 300px;
        height: auto;
        flex-shrink: 0;
    }
    #topContainer{
        background-size: cover;
        background-position: center;
        border-radius: 15px;
        background-color: #5598fd;
        display:flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        margin: -1px;
    }
    .postInput{
        resize: none;
        border-radius: 15px;
        background-color: #f0f0f0;
        padding: 10px;
        height: 15px;
        transition: 1s ease-in-out;
        margin: -1px;
    }
    .postInput:focus{
        height: 150px;
        border: solid 1px #4b8cee;
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