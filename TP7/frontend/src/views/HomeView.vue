<template>
    <div class="card-group">
        <div
          v-for="plato in platosData"
          :key="plato.id"
          style="margin:15px"
        >
          <plato-item v-bind:platoParam="plato"></plato-item>
        </div>
    </div>
</template> 
<script>
// @ is an alias to /src
import PlatoItemVue from '@/components/PlatoItem.vue';

export default {
  name: "HomeView",
  components: {
    "plato-item": PlatoItemVue
  },
  mounted() {
    this.getPlatos();
  }, 
  data() {
    return {
      platosData: []
    };
  },
  methods: {
    async getPlatos() {
      const res = await fetch(
        "http://localhost:8081/api/platos"
      );
      const resJson = await res.json();
      console.log(resJson);
      this.platosData = resJson;
    }
  }
};
</script>
