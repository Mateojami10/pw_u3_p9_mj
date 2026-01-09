<template>
  <div class="opciones-container">
    <ul>
        <li v-on:click="pasarPadre(pokemon.id)" v-for="pokemon in listaPokemons" :key="pokemon.id">
            {{ pokemon.nombre }}
        </li>
       
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        listaPokemons: {
            type: Array,
            required: true
        }
    },
    methods: {
        pasarPadre(id){
            console.log(id);
            this.$emit("seleccionado", id);
            
        }
    }

}
</script>

<style scoped>
    ul{
        list-style-type: none;
        
    }
    li{
        background-color: white;
        border-radius: 5px;
        border: 1px solid;
        cursor: pointer;
        width: 250px;
        margin-top: 10px;
    }
    .opciones-container{
        display: flex;
        justify-content: center;
    }

</style>