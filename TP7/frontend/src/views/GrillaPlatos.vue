<template>
  <p style="text-align: left; padding-left: 200px;">
      <a class="btn btn-primary" :href="'/formulario/0'" role="button">Nuevo</a>
  </p>  
  <div class="container">
      <div class="row">
        <div class="col">
        <b>ID</b>
        </div>
        <div class="col">
        <b>Nombre</b>
        </div>
        <div class="col">
        <b>Rubro</b>
        </div>
        <div class="col">
        <b>Precio</b>
        </div>
        <div class="col">
        <b>Modificar</b>
        </div>
        <div class="col">
        <b>Eliminar</b>
        </div>
    </div>
    <div class="row" v-for="plato in platosData" :key="plato.id"  style="padding-top: 5px;">
        <div class="col">
        {{ plato.id }}
        </div>
        <div class="col">
        {{ plato.nombre }}
        </div>
        <div class="col">
        {{ plato.rubro }}
        </div>
        <div class="col">
        {{ plato.precio }}
        </div>
        <div class="col">
        <a class="btn btn-primary" :href="'/formulario/'+plato.id" role="button">Modificar</a>
        </div>
        <div class="col">
        <button type="button" @click="deletePlato(plato.id)"  class="btn btn-danger" >Eliminar</button>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Plato from '@/entidades/Plato';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'GrillaPlatos',
  components: {},
  /*//V2
  mounted() {
    this.getPlatos();
  }, 
  */
  setup() { //setup se encargará de dispararse en la fase de inicialización del componente, al construir el componente, equivalente a created de V2
    const platosData = ref<Plato[]>([]) //ref es el equivalente en react de useState, indico que la variable sera reactiva
    //V3
    onMounted(async () => {
                const res = await fetch(
                  "http://localhost:8081/api/platos", {
                  method: 'GET',
                  headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin':'*'
                  },
                  mode: 'cors'
                });
                const resJson = await res.json();
                console.log(resJson);
                platosData.value = await resJson;
            });
    return {
      platosData
    };
  },
  methods:{
      /*async getPlatos() {
      const res = await fetch(
        "http://localhost:8081/api/platos", {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        },
        mode: 'cors'
      });
      const resJson = await res.json();
      console.log(resJson);
      this.platosData = resJson;
    },*/
    deletePlato: async function (idPlato:number) {
        let urlServer = 'http://localhost:8081/api/delete/'+idPlato;
        console.log(urlServer);
        let result = await fetch(urlServer, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            mode: 'cors'
	    });
        window.location.reload();

    }
    
  }
});
</script>

<style>

</style>