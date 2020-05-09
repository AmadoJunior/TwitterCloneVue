import Vue from 'vue'
import App from './App.vue'

import User from "./tools/userService";

Vue.config.productionTip = false

export const store = {
  state:{
    loggedIn: false,
    token: null,
    userData: null,
    error: false
  },
  async authenticate(userName, email, password){
    try{
      const data = await User.getToken(userName, email, password);
      this.state.error = false;
      this.state.token = data.token;
      this.state.userData = data.userData;
      this.state.loggedIn = true;
      setTimeout(() =>{
        this.state.loggedIn = false;
        this.state.token = null;
        this.state.userData = null;
      }, 10000000000)
    } catch(err) {
      console.log(err);
      this.state.error = true;
    }
    
  }
}
new Vue({
  render: h => h(App),
}).$mount('#app')
