<template>
    <div class="userContainer">
        <input type="text" class="input" placeholder="User Name" v-model="userName">
        <input type="text" class="input" placeholder="Email" v-model="email">
        <input type="password" class="input" placeholder="Password" v-model="password">
        <p v-show="error" id="errorMessage">Error</p>
        <button class="button" @click="signUp()">Sign Up</button>
        <span @click="toggle()" class="toggleSwitch">Log in</span>
    </div>
</template>

<script>
import User from "./../tools/userService";

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
        toggle(){
            this.$emit("goToLogIn");
        },
        async signUp(){
            try{
                const response = await User.signUp(this.userName, this.email, this.password);
                if(response.message === "User Succesfully Added."){
                    this.error = false;
                    this.userName = "";
                    this.email = "";
                    this.password = "";
                    this.$emit("goToLogIn");
                } else {
                    this.error = true;
                }
            } catch(err){
                this.error = true;
            }
            
        }
    }
}
</script>

<style scoped>


</style>