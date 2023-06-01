<template>
  <div>
    <div class="container">
      <div class="row align-items-start">
        <div class="col">
          <img style="max-height:400px" :src="urlImage"/></div>
        <div class="col">
          <div class="row align-items-start">
            <div class="col"><h1>{{ platoEncontrado.nombre }}</h1></div>
          </div>
          <div class="row align-items-start">
            <div class="col"><h2>$ {{ platoEncontrado.precio }}</h2></div>
          </div>
          <div class="row align-items-start">
            <div class="col"><h2>{{ platoEncontrado.rubro }}</h2></div>
          </div>
          <div class="row align-items-start">
            <div class="col"><b>Ingredientes:</b></div>
          </div>
          <div class="row align-items-start">
            <div class="col"><li
                v-for="(ingrediente, index) in platoEncontrado.ingredientes"
                :key="index"
              >
                {{ ingrediente.nombre }} {{ ingrediente.cantidad }} {{ ingrediente.unidadMedida }}
              </li>
            </div>
          </div>
          <div class="row align-items-start">
            <div class="col"><a href="/" class="btn btn-success">VOLVER</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetallePlato",
  components: {},
  mounted() {
    this.getPlatoXId();
  },
  updated(){
    if(String(this.platoEncontrado.imagenPath).indexOf("http") >= 0){
      this.urlImage = this.platoEncontrado.imagenPath;
    }else{
      this.urlImage = '/assets/images/' + this.platoEncontrado.imagenPath;
    }
  },
  data() {
    return {
        urlImage: String,
        platoEncontrado: []
    };
  },
  methods: {
    async getPlatoXId() {
      const parametroId = this.$route.params.id;
      const res = await fetch(
        "http://localhost:8081/api/platoxid/" + parametroId
      );
      const resJson = await res.json();
      this.platoEncontrado = resJson;
      console.log(this.platoEncontrado);
    }
  }
};
</script>
