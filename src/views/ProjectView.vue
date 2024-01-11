<template>
   <div class="bg"></div>
   <div class="bg bg2"></div>
   <div class="bg bg3"></div>
  <div class="card-container d-flex flex-wrap justify-content-center gap-4">
   <div class="cards" style="width:18rem;" v-for="info in projects" :key="info.id">
    <div class="card red">
        <p class="tip">{{ info.title }}</p>
        <p class="second-text">{{ info.description }}</p>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch('fetchData');
}
};
</script>

<style scoped>

.cards {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.cards .red {
  background-color: #007e9e;
}

.cards .blue {
  background-color: #0062ff;
}

.cards .green {
  background-color: #18cd5e;
}

.cards .card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100px;
  width: 100px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 400ms;
}

.cards .card p.tip {
  font-size: 1em;
  font-weight: 700;
}

.cards .card p.second-text {
  font-size: .7em;
}

.cards .card:hover {
  transform: scale(1.2, 1.2);
}

.cards:hover > .card:not(:hover) {
  filter: blur(10px);
  transform: scale(0.9, 0.9);
}

</style>


 
  