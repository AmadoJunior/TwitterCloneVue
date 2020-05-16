<template>
  <div id="app" v-if="feedTab">
    <topBarCmp :isLoggedIn="isLoggedIn" :settingPopUp="settingPopUp" />
    <settingPopUpCmp v-if="settingPopUp"/>

    <main id="main" :class="{blur: settingPopUp}">
      <div id="sticky" >
        <fade>
          <profileCmp v-if="isLoggedIn == true"/>
          <component v-if="isLoggedIn == false" :is="selectedCmp" @goToLogIn="toggleLogIn()" @goToSignUp="toggleSignUp()" id="collection"/>
        </fade>
      </div>

      <translate>
        <postCmp 
        v-for="post in posts" 
        :key="post._id" 
        :userName="post.userName" 
        :profileImg="post.profileImg"
        :postMessage="post.message" 
        :_id="post._id"
        />
      </translate>
    </main>
  </div>
</template>

<script>
//Cmps
import postCmp from "./components/postCmp";
import profileCmp from "./components/profileCmp";
import logInCmp from "./components/logInCmp";
import signUpCmp from "./components/signUpCmp";
import topBarCmp from "./components/topBarCmp";
import settingPopUpCmp from "./components/settingPopUpCmp";
//Tools
import {eventBus} from "./main";
import Post from "./tools/postService";
//Transitions
import fade from "./components/transitions/fade";
import translate from "./components/transitions/loadTranslate";

export default {
  name: 'App',
  components: {
    postCmp,
    profileCmp,
    logInCmp,
    signUpCmp,
    fade,
    translate,
    topBarCmp,
    settingPopUpCmp
  },
  data(){
    return{
      posts:[],
      selectedCmp: "logInCmp",
      isLoggedIn: null,
      feedTab: true,
      settingPopUp: false,
      isWritting: false
    }
  },
  methods:{
    toggleLogIn(){
      this.selectedCmp = "logInCmp"
    },
    toggleSignUp(){
      this.selectedCmp = "signUpCmp"
    }
  },
  async created(){
    //Listen for Authentification
    let vm = this;
    if(localStorage.token !== undefined){
      eventBus.$on("postsLoaded", () =>{
        vm.isLoggedIn = true;
      })
    }else {
      eventBus.$on("postsLoaded", () =>{
        vm.isLoggedIn = false;
      })
    }

    eventBus.$on("tokenAdded", ()=>{
      vm.isLoggedIn = true;
    })
    eventBus.$on("tokenRemoved", ()=>{
        vm.isLoggedIn = false;
    })

    //Get posts on load and every 1 minute
    this.posts = await Post.getPosts();
    this.posts = this.posts.reverse();
    eventBus.$emit("postsLoaded");
    setInterval(async ()=>{
      this.posts = await Post.getPosts();
      this.posts = this.posts.reverse()
    }, 600000)

    //Reload posts when message added
    eventBus.$on("messagePosted", async ()=>{
      this.posts = await Post.getPosts();
      this.posts = this.posts.reverse();
    })
    eventBus.$on("postRemoved", async ()=>{
      this.posts = await Post.getPosts();
      this.posts = this.posts.reverse();
    })

    //Overlap
    eventBus.$on("isWritting", () => {
      this.isWritting = !this.isWritting
    })

    //Popup
    eventBus.$on("popUp", () => {
      this.settingPopUp = !this.settingPopUp;
    })

  }
}
</script>

<style>
body{
  margin: 0px;
  background-color:#f8f8f8;

}
textarea, input{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 13px;
  border:solid .5px #c1c1c1;
  outline-style: none;
}
@media only screen and (max-width: 800px) {
  #main{
    flex-direction: column !important;
    align-items: center !important;
    position: relative !important;
  }
  #sticky{
    position: static !important;
    display: flex;
    min-width: 330px;
    max-width: 330px;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
}
#main{
  display:flex;
  justify-content: center;
  align-items:flex-start;
  margin-top: 60px;
  padding: 15px;
  width: auto;
}
#errorMessage{
  color:red;
  margin: 10px 0px 0px 0px;
  font-size: 12px;
}
.toggleSwitch{
  margin: -5px 0px 10px 0px;
  font-size: 13px;
  color: #4b8cee;
  cursor: pointer;
  transition: .3s;
  border-radius: 15px;
  padding: 5px;
  background-color: rgba(220, 220, 220, 0);
}
.toggleSwitch:hover{
  border-radius: 15px;
  padding: 5px;
  background-color: rgba(220, 220, 220, 0.767);
}
.button{
  padding:6px;
  background-color: #4b8cee;
  color: white;
  border-radius: 15px;
  border: none;
  margin: 10px 0px 10px 0px;
  width: 70px;
  cursor: pointer;
}
.button:hover{
  background-color:rgb(47, 117, 223);
}
.input{
  border-radius: 15px;
  background-color: #f0f0f0;
  border: solid 1px rgb(219, 219, 219);
  padding: 10px;
  margin: 15px 15px 0px 15px;
  width: 200px;
  transition: .5s ease-in-out;
}
.input:focus{
  border: solid 1px #4b8cee;
}
.userContainer{
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
  margin: 15px;
  max-height: 400px;
  min-width: 300px;
  height: 265px;
  width: 300px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#sticky{
  position: sticky;
  top: 75px;
}
.blur{
  filter: blur(2px);
}

</style>
