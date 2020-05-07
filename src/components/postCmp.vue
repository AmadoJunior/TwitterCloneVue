<template>
    <div id="postContainer">
        <img src="./../assets/tempProfile.png" id="profile">
        <div id="content">
            <h4>{{userName}}</h4>
            <p>{{postMessage}}</p>
            <dir id="actions">
                <img class="actions" src="./../assets/PostIcons/favoritex1.png" alt="">
                <img class="actions" src="./../assets/PostIcons/retweetx1.png" alt="">
                <img class="actions" src="./../assets/PostIcons/replyx1.png" alt="">
            </dir>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        userName: String,
        postMessage: String
    },
    data(){
        return{
        }
    }
}
</script>

<style scoped>
    h4{
        margin: 20px 0px 8px 0px;
    }
    p{
        font-size: 15px;
        margin: 0px 20px 20px 0px;
    }
    #postContainer{
        background-color: white;
        border-radius: 15px;
        border: solid 1px #c1c1c1;
        display:grid;
        grid-template-columns:1fr 12fr;
        grid-template-rows: 1fr;
        grid-template-areas: "profile content";
        max-width: 735px;
        min-width: 500px;
        height:auto;
        margin: 15px;
    }
    #profile{
        margin: 15px;
    }
    #content{
        
    }
    #actions{
        margin: 0px 0px 15px 0px;
        padding: 0px;
        display:flex;
        justify-content: flex-start;
        max-width: 300px;
    }
    .actions{
        padding: 5px;
        margin: 0px 70px 0px 0px;
        transform: scale(1.05);
    }
</style>