<template>
  <div id="app">
    <profileCmp v-if="state.loggedIn" />
    <logInCmp v-else />
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
import {store} from "./main";
import Post from "./tools/postService";

export default {
  name: 'App',
  components: {
    postCmp,
    profileCmp,
    logInCmp
  },
  data(){
    return{
      posts:[],
      state: store.state
    }
  },
  async created(){
    this.posts = await Post.getPosts();
    this.posts = this.posts.reverse();
    setInterval(async ()=>{
      this.posts = await Post.getPosts();
      this.posts = this.posts.reverse();
    }, 180000)
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
</style>
