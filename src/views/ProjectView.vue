<template>
   <div class="bg"></div>
   <div class="bg bg2"></div>
   <div class="bg bg3"></div>
   <div class="container">
    <div class="row">
      <div class="col-12">
        <h4 class="display-4 text-center text-white">Projects</h4>
        <div class="card-container d-flex flex-wrap justify-content-center gap-4">
          <div class="card mb-3" style="width:18rem;" v-for="info in projects" :key="info.id">
            <div class="card">
            <div class="card-content">
              <div class="card-title card-text text-white">{{ info.name }}</div>
              <p class="card-text text-sm text-white">{{ info.description }}</p>
              <a :href="info.gitHub" class="card-button btn btn-primary">GitHub</a>
              <a :href="info.vercel" class="card-button btn btn-primary">Vercel</a>
            </div>
          </div>
    </div>
     </div>
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

.card {
  width: 300px;
  height: 400px;
  background-color: #83c5be;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
}

.card:before {
  content: "";
  position: absolute;
  top: -100%;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, #006d77, #83c5be );
  transform: rotate(-45deg);
  transition: all 0.3s ease;
  z-index: -1;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
}

.card:hover:before {
  top: 0;
  left: 0;
}

.card-content {
  padding: 20px;
  text-align: center;
}

.card-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.card-description {
  font-size: 16px;
  color: #777;
  margin-bottom: 20px;
}

.card-button {
  padding: 10px 20px;
  background-color: #83c5be;
  color: #FFF;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.card-button:hover {
  background-color: #006d77;
}

.card-text {
  margin: 0; /* Remove default margin */
}

.text-sm {
  font-size: 0.875rem; /* Adjust the font size as needed */
}

</style>


 
  