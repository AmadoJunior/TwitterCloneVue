<template>

    <transition name="fade" appear>
        <slot></slot>
    </transition>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .fade-leave-active{
        transition-property: opacity;
        transition-duration:.5s;
    }
    .fade-enter-active{
        transition-property: opacity;
        transition-duration: .5s;
        transition-delay: .5s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    .fade-enter-to, .fade-leave {
        opacity: 1;   
    }
</style>