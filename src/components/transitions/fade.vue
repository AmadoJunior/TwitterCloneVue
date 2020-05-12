<template>

    <transition name="fade">
        <slot></slot>
    </transition>
    
</template>
<script>
export default {
    
}
</script>
<style>
    .fade-enter-active, .fade-leave-active{
        transition: opacity .4s;
    }
    .fade-enter-active{
        transition-delay: .4s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    .fade-enter-to, .fade-leave {
        opacity: 1;   
    }
</style>