<template>
    <div>
        <PokemonImagen v-if="pokemonGanador" :pokemonId="pokemonGanador.id" />
        <PokemonOpciones @seleccionado="evaluarGanador($event)" :listaPokemons="pokemonArr" />
        
        <div v-if="mostrarResultado">
            <h1>{{ esGanador ? 'Ganador' : 'Perdedor' }}</h1>
        </div>

    </div>

    
    <button @click="destruir">Destruir</button>
</template>

<script>
import PokemonImagen from '../components/PokemonImagen.vue';
import PokemonOpciones from '../components/PokemonOpciones.vue';   
import { obtenerPokemonFachada, obtenerAleatorioFachada } from '../clients/PokemonClient.js';
export default {
    components: {
        PokemonImagen,
        PokemonOpciones
    },
    data() {
        return {
            pokemonArr: [],
            pokemonGanador: null,
            mostrarResultado: false,
            esGanador: false,
            mostrar: true
            
        };
    },
    /*Crea el componente */
    beforeCreate(){
        console.log("beforeCreate: apenas inicia la instancia del componente");

    },
    created(){
        console.log("created: ya se resolvieron data, computed, methods, watch, una vez ejecutado eso se ejecuta el create");

    },

    /*Montaje del componente: cuando ya se renderiza o se visualiza el componente */
    beforeMount(){
        console.log("beforeMount: justo antes de renderizar el primer elemento html");
    },
    mounted() {
        console.log('Componente montado: el componente ya esta renderizado');
        this.iniciarJuego();
    },

    /*Actualizacion de un componente */
    beforeUpdate(){
        console.log("beforeUpdate: se ejecuta cuando hubo un cambio en data o props de un componente y vue esta por renderizar el cambio (justo antes de renderizar) ");
    },
    updated(){
        console.log("updated: justo despues de actualizar, osea despues de la re-renderizacion");
    },

    /*Desmontaje de un componente */
    beforeUnmount(){
        console.log("beforeUnmount: justo antes de eliminar un componente");
    },
    unmounted(){
        console.log("unmounted: justo despues de eliminar un componente, fue removido del DOM");
    },

    methods: {
        async iniciarJuego(){
            this.pokemonArr = await obtenerPokemonFachada();

            const idAleatorio = obtenerAleatorioFachada(0,3);
            this.pokemonGanador = this.pokemonArr[idAleatorio];


        },
        evaluarGanador(idGanador){
            this.mostrarResultado = true;
            this.esGanador = idGanador === this.pokemonGanador.id;
        },
        destruir(){
            this.pokemonGanador = null;
        }
    }
}
</script>

<style scoped>
div h1 {
    text-align: center;
    font-size: 48px;
    margin-top: 30px;
    padding: 20px;
    background-color: yellow;
    border: 3px solid black;
    color: black;
}
</style>