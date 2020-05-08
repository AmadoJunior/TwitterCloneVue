<template>
    <div id="container">
        <input type="text" class="input" placeholder="User Name" v-model="userName">
        <input type="text" class="input" placeholder="Email" v-model="email">
        <input type="text" class="input" placeholder="Password" v-model="password">
        <button id="button" @click="logIn()">Log In</button>
        <span>Sign Up</span>
    </div>
</template>

<script>
import {store} from "./../main";
export default {
    data(){
        return {
            userName: "",
            email: "",
            password: ""
        }
    },
    methods:{
        logIn(){
            store.authenticate(this.userName, this.email, this.password);
        }
    }
}
</script>

<style scoped>
    span{
        margin-bottom: 10px;
        font-size: 13px;
        color: #4b8cee;
        cursor: pointer;
    }
    #container{
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
    #button{
        padding:6px;
        background-color: #4b8cee;
        color: white;
        border-radius: 15px;
        border: none;
        margin: 15px 0px 10px 0px;
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
</style>