<template>
  <div style="max-width: 75%; padding-left: 25%;">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Nombre</label>
    <input v-model="platoEncontrado.nombre" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre" required>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput2" class="form-label">Rubro</label>
    <input v-model="platoEncontrado.rubro" type="text" class="form-control" id="exampleFormControlInput2" placeholder="Rubro" required>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput3" class="form-label">Precio</label>
    <input v-model="platoEncontrado.precio" type="number" class="form-control" id="exampleFormControlInput3" placeholder="Precio" required>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput4" class="form-label">Imagen</label>
    <input v-model="platoEncontrado.imagenPath" type="text" class="form-control" id="exampleFormControlInput4" placeholder="Imagen" required>
  </div>
  <div class="col-auto">
    <button type="button" @click="guardar(platoEncontrado)" class="btn btn-primary mb-3">Guardar</button>
  </div>
  </div>
</template>

<script lang="ts">
import Plato from '@/entidades/Plato';
import router from '@/router';
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'FormularioPlato',
  components: {},
  /*mounted() {
    this.getPlatoXId();
  }, */
  setup() {
    const route = useRoute()
    const platoEncontrado = ref<Plato>(new Plato())
    onMounted(async () => {
              const parametroId:string = route.params.id as string;
              if(parseInt(parametroId) != 0){
                const res = await fetch(
                  "http://localhost:8081/api/platoxid/" + parametroId
                );
                const resJson = await res.json();
                platoEncontrado.value = resJson;
              }
            });
    
    return {
      platoEncontrado
    };
  },
  methods:{
     /*async getPlatoXId() {
      const parametroId:string = this.$route.params.id as string;
      if(parseInt(parametroId) != 0){
        const res = await fetch(
          "http://localhost:8081/api/platoxid/" + parametroId
        );
        const resJson = await res.json();
        this.platoEncontrado = resJson;
        console.log(this.platoEncontrado);
      }
    },*/
    async guardar(plato:Plato) {
        let urlServer = 'http://localhost:8081/api/insert';
        let method = "POST";
        if(plato && plato.id > 0){
          urlServer = 'http://localhost:8081/api/update';
          method = "PUT";
        }
        await fetch(urlServer, {
          "method": method,
          "body": JSON.stringify(plato),
          "headers": {
          "Content-Type": 'application/json'
          }
        });
        router.push('/listaPlatos')
      }

    
  }
});
</script>

<style>

</style>