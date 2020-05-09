<template>
    <div class="userContainer">
        <input type="text" class="input" placeholder="User Name" v-model="userName">
        <input type="text" class="input" placeholder="Email" v-model="email">
        <input type="text" class="input" placeholder="Password" v-model="password">
        <p v-show="error" id="errorMessage">Error</p>
        <button class="button" @click="logIn()">Log In</button>
        <span @click="toggle()" class="toggleSwitch">Sign Up</span>
    </div>
</template>

<script>
import {store} from "./../main";
export default {
    data(){
        return {
            userName: "",
            email: "",
            password: "",
            state: store.state,
            error: false
        }
    },
    methods:{
        logIn(){
            store.authenticate(this.userName, this.email, this.password);
            if(this.state.error){
                this.error = true;
            } else {
                this.error = false;
            }
        },
        toggle(){
            this.$emit("goToSignUp");
        }
    }
}
</script>

<style scoped>
</style>