<template>
   <div class="bg"></div>
   <div class="bg bg2"></div>
   <div class="bg bg3"></div>
  <div class="container">
    <div class="row  d-block d-flex justify-content-center">
      <div class="col-12">
        <h4 class="display-4 text-center text-white">Education</h4>
        <div class="card-container d-flex flex-wrap justify-content-center gap-2">
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <p class="card-text">2019<br>Princeton High School</p>
                </div>
                <div class="card-back">
                  <p class="card-text">National Senior Certificate</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <p class="card-text">2020<br>North Link College</p>
                </div>
                <div class="card-back">
                  <p class="card-text">N1 & N2 Certificate</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <p class="card-text">2023<br>North Link College</p>
                </div>
                <div class="card-back">
                  <p class="card-text">N3 Certificate</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <p class="card-text">2023-2024<br>Life Choices</p>
                </div>
                <div class="card-back">
                  <p class="card-text">Certificate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h4 class="display-4 text-center text-white">Skills</h4>
        <div class="card-container d-flex flex-wrap justify-content-center gap-2">
          <div class="card mb-3">
            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <p class="card-text">Html</p>
                </div>
                <div class="card-back">
                  <p class="card-text text-sm">I have acquired lots of knowledge from html and im fully confident in understanding both the meaning and uses of the tags.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <p class="card-text">Css</p>
                </div>
                <div class="card-back">
                  <p class="card-text text-sm"></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <p class="card-text">Javascript</p>
                </div>
                <div class="card-back">
                  <p class="card-text text-sm"></p>
                </div>
              </div>
            </div>
          </div><br>
          <div class="card mb-3">
            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <p class="card-text">Vuejs</p>
                </div>
                <div class="card-back">
                  <p class="card-text text-sm"></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <p class="card-text">Mysql</p>
                </div>
                <div class="card-back">
                  <p class="card-text text-sm"></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <p class="card-text">Nodejs</p>
                </div>
                <div class="card-back">
                  <p class="card-text text-sm"></p>
                </div>
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
  background-color:#83c5be ;
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
  background-color:#006d77;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #006d77;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(0deg);
}

.card-back {
  background-color:#83c5be;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #83c5be;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(180deg);
}
@media (max-width: 576px) {
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