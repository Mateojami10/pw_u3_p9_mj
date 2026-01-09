<template>
    <div class="view-container">
        <Pregunta />
    </div>
</template>

<script>
import Pregunta from '@/components/Pregunta.vue';
export default {
    components: {
        Pregunta,
    },

};

</script>

<style scoped>
/*Centrar contenido */
.view-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
}
h2 {
    font-size: 50px;
}

</style>