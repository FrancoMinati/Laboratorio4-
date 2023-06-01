<template>
  <p style="text-align: left; padding-left: 200px" class="d-flex gap-5">
    <a
      class="btn btn-danger px-3 mt-5"
      :href="'/instrumentos/formulario/0'"
      role="button"
      >Agregar instrumento</a
    >
    <button
      class="btn btn-dark px-3 mt-5"
      role="button"
      @click="postListOfInstrumentos"
    >
      Agregar lista predeterminada
    </button>
  </p>
  <div class="container">
    <div class="row" style="padding-bottom: 20px">
      <div class="col-3 d-flex gap-3">
        <label for="" class="fw-bold">Precio Minimo</label>
        <input
          type="number"
          v-model="filter.minPrice"
          placeholder="Min price"
          class="form-control"
        />
      </div>
      <div class="col-3 d-flex gap-3">
        <label for="" class="fw-bold">Precio Maximo</label>
        <input
          type="number"
          v-model="filter.maxPrice"
          placeholder="Max price"
          class="form-control"
        />
      </div>
      <div class="col-2 d-flex gap-3">
        <button class="btn btn-secondary" @click="filterInstruments">
          Filtrar
        </button>

        <button class="btn btn-warning" @click="removeFilter">
          Remover Filtro
        </button>
      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Instrumento</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Imagen</th>
          <th>Precio</th>
          <th>Costo Envio</th>
          <th>Cantidad Vendida</th>
          <th>Descripción</th>
          <th>Modificar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="instrumento in instrumentosData"
          :key="instrumento.id"
          class="table-row-hover"
        >
          <td>{{ instrumento.id }}</td>
          <td>{{ instrumento.instrumento }}</td>
          <td>{{ instrumento.marca }}</td>
          <td>{{ instrumento.modelo }}</td>
          <td>{{ instrumento.imagen }}</td>
          <td>{{ instrumento.precio }}</td>
          <td>{{ instrumento.costoEnvio }}</td>
          <td>{{ instrumento.cantidadVendida }}</td>
          <td>
            {{
              instrumento.descripcion
                ? instrumento.descripcion.slice(0, 50) + "..."
                : ""
            }}
          </td>
          <td>
            <a
              class="btn btn-success"
              :href="'/instrumentos/formulario/' + instrumento.id"
              role="button"
              >Editar</a
            >
          </td>
          <td>
            <button
              type="button"
              @click="deleteInstrumento(instrumento.id)"
              class="btn btn-danger"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import type Instrumento from "@/entidades/Instrumento";
import { defineComponent, onMounted, reactive, ref } from "vue";
import jsonData from "../../data.json";
export default defineComponent({
  name: "GrillaInstrumentos",
  components: {},
  setup() {
    const instrumentosData = ref<Instrumento[]>([]);
    const filter = reactive({
      minPrice: 0,
      maxPrice: 0,
    });
    onMounted(async () => {
      const res = await fetch("http://localhost:8080/instrumentos", {
        method: "GET",
      });
      const resJson = await res.json();
      console.log(resJson);
      instrumentosData.value = await resJson;
    });
    return {
      instrumentosData,
      filter,
    };
  },
  methods: {
    filterInstruments: function () {
      this.instrumentosData = this.instrumentosData.filter((instrumento) => {
        let price = parseFloat(instrumento.precio);
        return price >= this.filter.minPrice && price <= this.filter.maxPrice;
      });
    },
    removeFilter: function () {
     window.location.reload();

    },
    deleteInstrumento: async function (id: number) {
      let urlServer = "http://localhost:8080/instrumentos/" + id;
      let result = await fetch(urlServer, {
        method: "DELETE",
      });
      window.location.reload();
    },
    postListOfInstrumentos: async function () {
      let urlServer = "http://localhost:8080/instrumentos/save-list";

      let result = await fetch(urlServer, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });
      window.location.reload();
    },
  },
});
</script>

<style></style>
