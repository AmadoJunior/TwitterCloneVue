import Vue from 'vue'
import App from './App.vue'

import User from "./tools/userService";

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods:{
    async authenticate(userName, email, password){
      try{
        const data = await User.getToken(userName, email, password);
        localStorage.token = data.token;
        localStorage.userName = data.userData.userName;
        this.$emit("tokenAdded", data.userData);
      }catch(err){
        console.log(err);
        this.$emit("authFailed");
      }
      
    },
    reset(){
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      this.$emit("tokenRemoved");
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
