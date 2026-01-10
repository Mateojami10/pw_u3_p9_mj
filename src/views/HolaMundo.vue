<template>
  <h2>Hola mundo</h2>
  <h1>Consultando los datos del estudiante</h1>
  <h3>{{ idEstudiante }}</h3>
  <button @click="mostrarId">Mostrar ID</button>
</template>

<script>
export default {
    data() {
        return {
            idEstudiante: null,
        };
    },
    created() {
        console.log(this.$route.params.id);
        console.log(this.$route.query);
        //this.idEstudiante = this.$route.params.id;
    },
    methods: {
        //boton que al momento de dar click haga this.idEstudiante = this.$route.params.id;
        mostrarId() {
            this.idEstudiante = this.$route.params.id;
        }
    }

}
</script>

<style>

</style>