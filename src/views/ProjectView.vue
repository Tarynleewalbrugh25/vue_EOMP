<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="display-2 text-center text-black">Projects</h2>
      </div>
      <div class="card-container d-flex flex-wrap justify-content-center gap-4">
        <div class="card mb-3" style="width: 15rem;">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="https://i.ibb.co/d0R9Ndz/Screenshot-2024-04-05-122244.png">
              </div>
              <div class="card-back">
            <p class="card-text text-sm text-black ">This is an pet adoption site</p>
           <a href="https://serenity-paints-ba6k-lyoed9h19-taryn-lees-projects.vercel.app" class="btn btn-info" role="button" target="_blank">Visit</a>
           </div>
            </div>
          </div>
        </div>
        <div class="card mb-3" style="width: 15rem;">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="https://i.ibb.co/nM9Bksb/Screenshot-2024-04-05-122616.png" alt="Project Image" style="width: 100%; height: auto;">
              </div>
              <div class="card-back">
                <p class="card-text text-sm text-black ">This is an pet adoption site</p>
                <a href="https://pawsbytn.web.app" class="btn btn-info" role="button" target="_blank">Visit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3" style="width: 15rem;">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="https://i.ibb.co/Lt0P0rR/Screenshot-2024-04-05-122942.png" alt="Project Image" style="width: 100%; height: auto;">
              </div>
              <div class="card-back">
                <p class="card-text text-sm text-black ">This is an inventory app</p>
                <a href="https://capstone-9ee32.firebaseapp.com/" class="btn btn-info" role="button" target="_blank">Visit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.card {
  width: 300px;
  height: 400px;
  background-color: #fff;
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

.card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color: white;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid  #fff;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(0deg);
}

.card-back {
  background-color: #fff;
  color: #fff;
  display: flex;
  flex-direction: column; /* Changed to column */
  align-items: center; /* Centered vertically */
  border: 10px solid #fff;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(180deg);
}

.card-back button {
  margin-top: 10px; /* Adjust the margin to create space between text and button */
}

@media (max-width: 576px) {
  .card {
    width: 200px; /* Adjust as needed */
    height: 300px; /* Adjust as needed */
  }

  p.text-sm {
    font-size: 14px;
  }
}

.card-text {
  margin: 0;
}

.text-sm {
  font-size: 0.875rem;
}
</style>
