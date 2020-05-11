<template>
    <div class="userContainer">
        <input type="text" class="input" placeholder="User Name" v-model="userName">
        <input type="text" class="input" placeholder="Email" v-model="email">
        <input type="password" class="input" placeholder="Password" v-model="password">
        <p v-show="error" id="errorMessage">Error</p>
        <button class="button" @click="logIn()">Log In</button>
        <span @click="toggle()" class="toggleSwitch">Sign Up</span>
    </div>
</template>

<script>
import {eventBus} from "./../main";

export default {
    data(){
        return {
            userName: "",
            email: "",
            password: "",
            error: false
        }
    },
    methods:{
        logIn(){
            eventBus.authenticate(this.userName, this.email, this.password);
        },
        toggle(){
            this.$emit("goToSignUp");
        }
    },
    created(){
        let vm = this;
        eventBus.$on("authFailed", () => {
            vm.error = true;
        })
    }
}
</script>

<style scoped>
</style>