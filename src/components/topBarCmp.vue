<template>
    <div id="container">
        <div id="inner">
            <transition name="smooth" appear>
            <div id="logo">
                <h1>Lorem</h1>
                <img src="./../assets/exchangeSmall.png" >
            </div>
            </transition>
            <transition name="smooth" appear>
                <div id="menu">
                    <img src="./../assets/settings.png" 
                    id="cogWheel" 
                    @click="popUp()" 
                    :class="{cogWheelActive: settingPopUp}"
                    v-show="isLoggedIn"
                    >
                    <button
                    id="logout" 
                    v-show="isLoggedIn" 
                    @click="logout()"
                    >Logout</button>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import {eventBus} from "./../main";

export default {
    props:{
        isLoggedIn: Boolean,
        settingPopUp: Boolean
    },
    data(){
        return{

        }
    },
    methods:{
        logout(){
            eventBus.reset();
        },
        popUp(){
            eventBus.$emit("popUp")
        }
    }
    
}
</script>

<style scoped>
.smooth-enter-active, .smooth-leave-active{
    transition: opacity 1s;
}
.smooth-enter-active{
    transition-delay: .8s;
}
.smooth-enter, .smooth-leave-to{
    opacity: 0;
}
.smooth-leave, .smooth-enter-to{
    opacity: 1;
}



#container{
    background-color: white;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,.1);
    border-radius: 0px 0px 15px 15px;
    width: 100%;
    height: 70px;
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: center;
}
#inner{
    display:flex;
    width:100%;
    justify-content: space-between;
    align-items: center;
    max-width: 1050px;
    margin: 0px 30px 0px 30px;
}
#logo{
    color: #295596;
    display: flex;
    align-items: center;
}
img{
    padding: 5px;
    height: 44px;
    width: 44px;
}
h1{
    cursor: default;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 36px;
    line-height: 42px;
    margin-right: -10px;
}
#menu{
    display:flex;

}
#logout{
    cursor: pointer;
    border-radius: 15px;
    background-color: rgb(235, 68, 68);
    color: white;
    border: none;
    padding: 9px;
}
#logout:hover{
    background-color: rgb(211, 61, 61);
}
#cogWheel {
    cursor: pointer;
    width: 25px;
    height: 25px;
    margin-right: 8px;
    border-radius: 15px;
}
.cogWheelActive{
    background-color: lightgrey;
}
#cogWheel:hover{
    background-color: lightgrey;
}
</style>