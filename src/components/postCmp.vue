<template>

    <div id="postContainer">

        <div id="profile" :style="{backgroundImage: 'url(' + profileImg +')'}" />

        <div id="content">
            <h4>{{userName}}</h4>
            <p>{{postMessage}}</p>
        </div>

        <fade>
            <img src="./../assets/arrow.png" id="optionsBtn" @click="toggle()" v-show="show" :class="{optionsActive: active}">
        </fade>

        <drop>
            <div id="dropdown"  v-show="active">
                <span class="option" @click="removePost()">Delete Post</span>
            </div>
        </drop>

    </div>

</template>

<script>
import {eventBus} from "./../main";
import Post from "./../tools/postService";
import drop from "./transitions/drop";
import fade from "./transitions/fade";

export default {
    el: "postCmp",
    created(){
        setTimeout(()=>{
            if(
                this.userName == localStorage.userName &&
                localStorage.token != undefined
            ){
                this.show = true;
            } else {
                this.show = false;
            }

            let vm = this;

            eventBus.$on("tokenRemoved", () => {

                vm.show = false;

            })
             eventBus.$on("tokenAdded", () => {
                if(
                    this.userName == localStorage.userName &&
                    localStorage.token != undefined
                ){
                    this.show = true;
                } else {
                    this.show = false;
                }
            })
        }, 125);
    },
    components:{
        drop,
        fade
    },
    props:{
        userName: String,
        profileImg: String,
        postMessage: String,
        _id: String
    },
    data(){
        return{
            show: false,
            active: false
        }
    },
    methods:{
        toggle(){
            this.active = !this.active;
        },
        removePost(){
            Post.removePost(this._id);
            eventBus.$emit("postRemoved");
            this.active = !this.active;
        }
    }
}
</script>

<style scoped>
    h4{ 
        margin: 20px 0px 8px 0px;
    }
    p{
        font-size: 15px;
        margin: 0px 20px 20px 0px;
    }
    #postContainer{
        position: relative;
        backface-visibility: hidden;
        background-color: white;
        border-radius: 15px;
        box-shadow: 0 5px 15px 0 rgba(0,0,0,.1);
        display:grid;
        grid-template-columns:1fr 12fr;
        grid-template-rows: 1fr;
        grid-template-areas: "profile content";
        max-width: 735px;
        min-width: 400px;
        height:auto;
        margin: 15px;
    }
    #profile{
        margin: 15px;
        height: 62px;
        width: 62px;
        border: solid 2px white;
        background-size: cover;
        background-position: center;
    }
    #optionsBtn{
        cursor: pointer;
        position: absolute;
        height: 17px;
        width: 17px;
        right: 15px;
        margin-top: 12px;
        padding: 2px;
        border-radius: 15px;
    }
    #optionsBtn:hover{
        background-color: lightgray;
    }
    #dropdown{
        position: absolute;
        right: 15px;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        background-color: white;
        margin-top: 33px;
        z-index: 100;
        text-align: center;
    }
    .option{
        display: block;
        padding: 8px;
        font-size: 14px;
        cursor: pointer;
        border-radius: 15px;
    }
    .optionsActive{
        background-color: lightgrey;
    }
    .option:hover{
        background-color: lightgrey;
    }
</style>