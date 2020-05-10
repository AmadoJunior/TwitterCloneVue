<template>
  <div id="app">
    <profileCmp v-if="isLoggedIn" />
    <component v-else :is="selectedCmp" @goToLogIn="toggleLogIn()" @goToSignUp="toggleSignUp()" />
    <div id="posts">
      <postCmp v-for="post in posts" 
      :key="post._id" 
      :userName="post.userName" 
      :postMessage="post.message" 
      />
    </div>
  </div>
</template>

<script>
import postCmp from "./components/postCmp";
import profileCmp from "./components/profileCmp";
import logInCmp from "./components/logInCmp";
import signUpCmp from "./components/signUpCmp";
import {eventBus} from "./main";
import Post from "./tools/postService";

export default {
  name: 'App',
  components: {
    postCmp,
    profileCmp,
    logInCmp,
    signUpCmp
  },
  data(){
    return{
      posts:[],
      selectedCmp: "logInCmp",
      isLoggedIn: false
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
    //Get posts
    this.posts = await Post.getPosts();
    this.posts = this.posts.reverse();
    setInterval(async ()=>{
      this.posts = await Post.getPosts();
      this.posts = this.posts.reverse();
    }, 180000)

    //Listen
    let vm = this;
    if(localStorage.token !== undefined){
      vm.isLoggedIn = true;
    }else {
      vm.isLoggedIn = false;
    }

    eventBus.$on("tokenAdded", ()=>{
      vm.isLoggedIn = true;
    })
    eventBus.$on("tokenRemoved", ()=>{
      vm.isLoggedIn = false;
    })
  }
}
</script>

<style>
body{
  margin: 0px;
}
textarea, input{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 13px;
  border:solid 1px #c1c1c1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color:#f8f8f8;
  margin-top: 0px;
  padding: 10px;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items:flex-start;
}
#errorMessage{
  color:red;
  margin: 10px 0px 0px 0px;
  font-size: 12px;
}
.toggleSwitch{
  margin-bottom: 10px;
  font-size: 13px;
  color: #4b8cee;
  cursor: pointer;
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
.input{
  border-radius: 15px;
  background-color: #f0f0f0;
  padding: 10px;
  margin: 15px 15px 0px 15px;
  width: 200px;
}
.userContainer{
  background-color: white;
  border-radius: 15px;
  border: solid 1px #c1c1c1;
  margin: 15px;
  max-height: 400px;
  width: 300px;
  display:flex;
  flex-direction: column;
  align-items: center;
}
</style>
