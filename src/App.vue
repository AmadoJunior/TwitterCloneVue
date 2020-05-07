<template>
  <div id="app">
    <profileCmp/>
    <div id="posts">
      <postCmp v-for="post in posts" 
      :key="post.userName" 
      :userName="post.userName" 
      :postMessage="post.postMessage" 
      />
    </div>
  </div>
</template>

<script>
import postCmp from "./components/postCmp";
import profileCmp from "./components/profileCmp";

export default {
  name: 'App',
  components: {
    postCmp,
    profileCmp
  },
  data(){
    return{
      posts:[
        {
          userName: "Jest",
          postMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi erat, vestibulum vel egestas at, porttitor eget leo. Curabitur id consectetur eros. Fusce vel ex eget urna viverra lobortis. Pellentesque hendrerit purus at nulla malesuada, vel ultricies metus tincidunt. Aenean ac neque sed diam malesuada consectetur nec quis libero. Aliquam erat volutpat. Nam sodales, sapien eget maximus fermentum, diam mauris malesuada eros, vel condimentum nisi nulla ac velit. Curabitur id consectetur eros. Fusce vel ex eget urna viverra lobortis. Pellentesque hendrerit purus at nulla malesuada, vel ultricies metus tincidunt. Aenean ac neque sed diam malesuada consectetur nec quis libero. Aliquam erat volutpat. Nam sodales, sapien eget maximus fermentum, diam mauris malesuada eros, vel condimentum nisi nulla ac velit."
        },
        {
          userName: "Ford",
          postMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi erat, vestibulum vel egestas at, porttitor eget leo. Curabitur id consectetur eros. Fusce vel ex eget urna viverra lobortis. Pellentesque hendrerit purus at nulla malesuada, vel ultricies metus tincidunt. Aenean ac neque sed diam malesuada consectetur nec quis libero. Aliquam erat volutpat. Nam sodales, sapien eget maximus fermentum, diam mauris malesuada eros, vel condimentum nisi nulla ac velit. #Loremipsum"
        },
        {
          userName: "Sparkling",
          postMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi erat, vestibulum vel egestas at, porttitor eget leo."
        },
        {
          userName: "Cal",
          postMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi erat, vestibulum vel egestas at, porttitor eget leo. Curabitur id consectetur eros. Fusce vel ex eget urna viverra lobortis. Pellentesque hendrerit purus at nulla malesuada, vel ultricies metus tincidunt. Aenean ac neque sed diam malesuada consectetur nec quis libero. Aliquam erat volutpat. Nam sodales, sapien eget maximus fermentum, diam mauris malesuada eros, vel condimentum nisi nulla ac velit. Pellentesque hendrerit purus at nulla malesuada, vel ultricies metus tincidunt. Aenean ac neque sed diam malesuada consectetur nec quis libero. Aliquam erat volutpat. Nam sodales, sapien eget maximus fermentum, diam mauris malesuada eros, vel condimentum nisi nulla ac velit."
        },
      ]
    }
  }
}
</script>

<style>
body{
  margin: 0px;
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
