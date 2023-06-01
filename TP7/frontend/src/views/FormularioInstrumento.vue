<template>
  <div style="max-width: 75%; padding-left: 25%">
    <h1 class="fw-bold fs-3 mt-4 text-start">Formulario Instrumento</h1>
    <div class="row pt-5">
      <div class="col-md-6">
        <div class="mb-3 d-flex flex-column">
          <label
            for="exampleFormControlInput1"
            class="form-label fw-bold text-start"
            >Nombre</label
          >
          <input
            v-model="instrumentoEncontrado.instrumento"
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Ingrese el valor..."
            required
          />
        </div>
        <div class="mb-3 d-flex flex-column">
          <label
            for="exampleFormControlInput2"
            class="form-label fw-bold text-start"
            >Modelo</label
          >
          <input
            v-model="instrumentoEncontrado.modelo"
            type="text"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="Ingrese el valor..."
            required
          />
        </div>
        <div class="mb-3 d-flex flex-column">
          <label
            for="exampleFormControlInput3"
            class="form-label fw-bold text-start"
            >Marca</label
          >
          <input
            v-model="instrumentoEncontrado.marca"
            type="text"
            class="form-control"
            id="exampleFormControlInput3"
            placeholder="Ingrese el valor..."
            required
          />
        </div>
        <div class="mb-3 d-flex flex-column">
          <label
            for="exampleFormControlInput4"
            class="form-label fw-bold text-start"
            >Precio</label
          >
          <input
            v-model="instrumentoEncontrado.precio"
            type="number"
            class="form-control"
            id="exampleFormControlInput4"
            placeholder="Ingrese el valor..."
            required
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3 d-flex flex-column">
          <label
            for="exampleFormControlInput5"
            class="form-label fw-bold text-start"
            >URL de la Imagen</label
          >
          <input
            v-model="instrumentoEncontrado.imagen"
            type="text"
            class="form-control"
            id="exampleFormControlInput5"
            placeholder="Ingrese el valor..."
            required
          />
        </div>
        <div class="mb-3 d-flex flex-column">
          <label
            for="exampleFormControlInput6"
            class="form-label fw-bold text-start"
            >Descripcion</label
          >
          <input
            v-model="instrumentoEncontrado.descripcion"
            type="text"
            class="form-control"
            id="exampleFormControlInput6"
            placeholder="Ingrese el valor..."
            required
          />
        </div>
        <div class="mb-3 d-flex flex-column">
          <label
            for="exampleFormControlInput7"
            class="form-label fw-bold text-start"
            >Cantidad Vendida</label
          >
          <input
            v-model="instrumentoEncontrado.cantidadVendida"
            type="text"
            class="form-control"
            id="exampleFormControlInput7"
            placeholder="Ingrese el valor..."
            required
          />
        </div>
        <div class="mb-3 d-flex flex-column">
          <label
            for="exampleFormControlInput8"
            class="form-label fw-bold text-start"
            >Costo Envio</label
          >
          <input
            v-model="instrumentoEncontrado.costoEnvio"
            type="text"
            class="form-control"
            id="exampleFormControlInput8"
            placeholder="Ingrese el valor..."
            required
          />
        </div>
      </div>
    </div>
    <div class="col-auto">
      <button
        type="button"
        @click="guardar(instrumentoEncontrado)"
        class="btn btn-danger mb-3 d-flex flex-column"
      >
        Guardar
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Instrumento from "@/entidades/Instrumento";
import router from "@/router";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "FormularioInstrumento",
  components: {},
  setup() {
    const route = useRoute();
    const instrumentoEncontrado = ref<Instrumento>(new Instrumento());
    onMounted(async () => {
      const parametroId: string = route.params.id as string;
      if (parseInt(parametroId) != 0) {
        const res = await fetch(
          "http://localhost:8080/instrumentos/" + parametroId
        );
        const resJson = await res.json();
        instrumentoEncontrado.value = resJson;
      }
    });

    return {
      instrumentoEncontrado,
    };
  },
  methods: {
    async guardar(instrumento: Instrumento) {
      let urlServer = "http://localhost:8080/instrumentos/save";
      let method = "POST";
      if (instrumento && instrumento.id > 0) {
        urlServer = "http://localhost:8080/instrumentos/save/"+instrumento.id;
        method = "PUT";
      }
      await fetch(urlServer, {
        method: method,
        body: JSON.stringify(instrumento),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/InstrumentosABM");
    },
  },
});
</script>

<style></style>
