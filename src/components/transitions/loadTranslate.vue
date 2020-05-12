<template>
    <transition-group 
    name="postCard" 
    tag="div" 
    appear
    >
        <slot></slot>
    </transition-group>
</template>

<style>
.postCard-enter-active, .postCard-leave-active{
    transition: all .5s;
}
.postCard-enter, .postCard-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
.postCard-move{
    transition: all .5s;
}
</style>