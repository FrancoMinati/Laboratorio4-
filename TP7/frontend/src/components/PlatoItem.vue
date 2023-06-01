<template>
  <div>
    <div class="card mb-2" style="max-width: 20rem; min-width: 20rem;">
      <p>
      <img :src="urlImage" class="card-img-top" style="max-height: 200px; max-width: fit-content;" alt="...">
      </p>
      <div class="card-body">
        <h5 class="card-title">{{ platoParam.nombre }}</h5>
        <p class="card-text">$ {{ platoParam.precio }}</p>
        <a :href="'/detalle/' + platoParam.id" style="width: 100%;" class="btn btn-primary">Detalle</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      urlImage: String
    };
  },
  props: ["platoParam"],
  mounted() {
    if(String(this.platoParam.imagenPath).indexOf("http") >= 0){
      this.urlImage = this.platoParam.imagenPath;
    }else{
      this.urlImage = '/assets/images/' + this.platoParam.imagenPath;
    }
  }
};
</script>

