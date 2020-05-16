<template> 
    <instantFade>
        <div id="container">
            <h4>Profile Image</h4>
            <input type="file" name="profileImg" ref="profileImg" accept="image/*" @change="handleFileUploadProfile()">
            <button @click="updateProfile()" class="btn">Update</button>
            <h4>Background</h4>
            <input type="file" name="backgroundImg" ref="backgroundImg" accept="image/*" @change="handleFileUploadBg()">
            <button @click="updateBackground()" class="btn">Update</button>
        </div>
    </instantFade>
</template>

<script>
import User from "./../tools/userService";
import {eventBus} from "./../main";
import instantFade from "./transitions/instantFade";

export default {
    components:{
        instantFade
    },
    data(){
        return {
            profileImg: null,
            backgroundImg: null
        }
    },
    methods: {
        handleFileUploadProfile(){
            this.profileImg = this.$refs.profileImg.files[0];
        },
        handleFileUploadBg(){
            this.backgroundImg = this.$refs.backgroundImg.files[0];
        },
        updateProfile(){
            let formData = new FormData();
            formData.append("profileImg", this.profileImg);
            formData.append("userName", localStorage.userName);

            User.updateProfile(formData, "profileImg");

            eventBus.$emit("popUp")

        },
        updateBackground(){
            let formData = new FormData();
            formData.append("backgroundImg", this.backgroundImg);
            formData.append("userName", localStorage.userName);

            User.updateProfile(formData, "backgroundImg");
            
            eventBus.$emit("popUp")

        }
    }
}
</script>

<style scoped>
input{
    margin-bottom: 10px;
}
h4{
    cursor: default;
}
#container{
    position: fixed;
    top: 100px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 99;
    min-width: 300px;
}
.btn{
    padding: 8px;
    background-color: #4b8cee;
    color: white;
    border-radius: 15px;
    border: none;
    cursor: pointer;
}
</style>