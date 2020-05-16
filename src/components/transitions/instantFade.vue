<template>

    <transition name="fade" appear>
        <slot></slot>
    </transition>
    
</template>
<script>
export default {
    
}
</script>
<style>
    .fade-enter-active, .fade-leave-active{
        transition: opacity .5s ease-in-out;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    .fade-enter-to, .fade-leave {
        opacity: 1;   
    }
</style>