<template>
    <div class="pokemon-container">
        <img :src="srcImagen" 
        alt="No vale">

    </div>
</template>
  

<script>
export default {
    props: {
        pokemonId: {
            type: Number,
            required: true
        }
    },
    computed: {
        srcImagen() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        }
    },
    /*Desmontaje de un componente */
    beforeUnmount(){
        console.log("beforeUnmount: justo antes de eliminar un componente");
    },
    unmounted(){
        console.log("unmounted: justo despues de eliminar un componente, fue removido del DOM");
    },
    

}
</script>

<style scoped>
img{
    height: 200px;
    right:32%
}
.pokemon-container{
    height: 200px;
}

</style>