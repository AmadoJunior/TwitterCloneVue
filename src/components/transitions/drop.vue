<template>
    <transition name="drop">
        <slot>

        </slot>
    </transition>
</template>
<style scoped>
.drop-enter-active, .drop-leave-active{
    transition: .2s ease;
}

.drop-enter, .drop-leave-to{
    transform: scaleY(0.2)
}


</style>