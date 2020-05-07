<template>
    <div id="profileContainer">
        <div id="topContainer">
            <img src="./../assets/tempProfile.png">
            <h3>Joselyn Flores</h3>
        </div>

        <div id="stats">
            <div class="statContainer">
                <span>
                    5000
                </span>
                <span>
                    FOLLOWERS
                </span>
            </div>
            <div class="statContainer">
                <span>
                    50
                </span>
                <span>
                    TWEETS
                </span>
            </div>
            <div class="statContainer">
                <span>
                    400
                </span>
                <span>
                    FOLLOWING   
                </span>
            </div>
        </div>

        <input type="text" placeholder="Write a new Tweet ..." class="input">

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    img{
        height: 70px;
        width: 70px;
        margin: 15px;
    }
    h3{
        margin-top: 0px;
    }
    #profileContainer{
        background-color: white;
        border-radius: 15px;
        border: solid 1px #c1c1c1;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 15px;
        max-height: 300px;
    }
    #topContainer{
        border-radius: 15px;
        background-color: #4b8cee;
        display:flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
    }
    .input{
        border-radius: 15px;
        border: solid 1px #c1c1c1;
        background-color: #f0f0f0;
        background-color: #f0f0f0;
        padding: 10px;
    }
    #stats{
        display:flex;
        justify-content: center;
    }
    .statContainer{
        margin: 18px 10px 18px 10px;
        display:flex;
        flex-direction:column;
        align-items: center;
        font-size: 12px;
    }

</style>