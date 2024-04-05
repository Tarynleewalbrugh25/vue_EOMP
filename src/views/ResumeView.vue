<template>
  <div class="container">
  <h2 class="display-2 d-flex justify-content-center text-black">Education</h2>
  
  <ul class="timeline">
    <li>
      <div class="direction-r">
        <div class="flag-wrapper">
          <span class="flag text-black">Life Choices</span>
          <span class="time-wrapper text-black"><span class="time">2023 - 2024</span></span>
        </div>
        <div class="desc text-black">Full Stack Program</div>
      </div>
    </li>
    
    <!-- Item 2 -->
    <li>
      <div class="direction-l">
        <div class="flag-wrapper">
          <span class="flag text-black">North Link College</span>
          <span class="time-wrapper text-black"><span class="time">2022</span></span>
        </div>
        <div class="desc text-black">N3 Civil Engerering</div>
      </div>
    </li>
  
    <!-- Item 3 -->
    <li>
      <div class="direction-r">
        <div class="flag-wrapper">
          <span class="flag text-black">North Link College</span>
          <span class="time-wrapper text-black"><span class="time">2019 - 2021</span></span>
        </div>
        <div class="desc text-black">N1-N2 Civil And Building</div>
      </div>
    </li>
    
       <!-- Item 4 -->
       <li>
      <div class="direction-l">
        <div class="flag-wrapper">
          <span class="flag text-black">Princeton High School</span>
          <span class="time-wrapper text-black"><span class="time">2015 - 2019</span></span>
        </div>
        <div class="desc text-black">Subjects Passed: Tech Mathematics, Physics & Engerering Graphics and Design.</div>
      </div>
    </li>
  </ul>
</div>
  <div class="container">
    <h2 class="display-2 d-flex justify-content-center text-black">Skills</h2>
    <div class="card-container d-flex flex-wrap justify-content-center gap-4">
      <div class="card-container d-flex flex-wrap justify-content-center gap-4">
        <div class="card mb-3" style="width: 10rem;">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="https://i.ibb.co/1qvByTj/html.png">
              </div>
           </div>
            </div>
          </div>
        <div class="card mb-3" style="width: 10rem;">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="https://i.ibb.co/W2f63rt/css.png">
              </div>
           </div>
            </div>
          </div>
        <div class="card mb-3" style="width: 10rem;">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="https://i.ibb.co/Hh6P0t1/nodejs.png">
              </div>
           </div>
            </div>
          </div>
        <div class="card mb-3" style="width: 10rem;">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="https://i.ibb.co/nDDSm6D/mysql.png">
              </div>
           </div>
            </div>
          </div>
        <div class="card mb-3" style="width: 10rem;">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="https://i.ibb.co/G2QPsSv/vuejs.png">
              </div>
           </div>
            </div>
          </div>
          <div class="card mb-3" style="width: 10rem;">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="https://i.ibb.co/87KrYtS/bootstrap.jpg">
              </div>
           </div>
            </div>
          </div>
        </div>
  </div>  
  <div class="container">
    <h2 class="display-2 d-flex justify-content-center text-black">Soft Skills</h2>
    <div class="card-container d-flex flex-wrap justify-content-center gap-4">
      <div class="card-container d-flex flex-wrap justify-content-center gap-4">
        <div class="card mb-3" style="width: 10rem;">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="https://i.ibb.co/L09KC0s/111530685-creativity-icon-vector-isolated-on-white-background-logo-concept-of-creativity-sign-on-tra.jpg">
              </div>
           </div>
            </div>
          </div>
        <div class="card mb-3" style="width: 10rem;">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="https://i.ibb.co/vBzWJ06/111557160-time-management-icon-time-management-symbol-design-from-time-managemnet-collection.jpg">
              </div>
           </div>
            </div>
          </div>
        <div class="card mb-3" style="width: 10rem;">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="https://i.ibb.co/p0rggrn/communication-icon-monochrome-simple-communication-icon-for-templates-web-design-and-infographics-2.jpg">
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
  export default {
    
  }
</script>

<style>

.timeline {
  position: relative;
  width: 660px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 1em 0;
  list-style-type: none;
}

.timeline:before {
  position: absolute;
  left: 50%;
  top: 0;
  content: ' ';
  display: block;
  width: 6px;
  height: 100%;
  margin-left: -3px;
  background: rgb(80,80,80);
  background: -moz-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(30,87,153,1)), color-stop(100%,rgba(125,185,232,1)));
  background: -webkit-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
  background: -o-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
  background: -ms-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
  background: linear-gradient(to bottom, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
  
  z-index: 5;
}

.timeline li {
  padding: 1em 0;
}

.timeline li:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.direction-l {
  position: relative;
  width: 300px;
  float: left;
  text-align: right;
}

.direction-r {
  position: relative;
  width: 300px;
  float: right;
}

.flag-wrapper {
  position: relative;
  display: inline-block;
  
  text-align: center;
}

.flag {
  position: relative;
  display: inline;
  background: rgb(248,248,248);
  padding: 6px 10px;
  border-radius: 5px;
  
  font-weight: 600;
  text-align: left;
}

.direction-l .flag {
  -webkit-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  -moz-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
}

.direction-r .flag {
  -webkit-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  -moz-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
}

.direction-l .flag:before,
.direction-r .flag:before {
  position: absolute;
  top: 50%;
  right: -40px;
  content: ' ';
  display: block;
  width: 12px;
  height: 12px;
  margin-top: -10px;
  background: #fff;
  border-radius: 10px;
  border: 4px solid BLUE;
  z-index: 10;
}

.direction-r .flag:before {
  left: -40px;
}

.direction-l .flag:after {
  content: "";
  position: absolute;
  left: 100%;
  top: 50%;
  height: 0;
  width: 0;
  margin-top: -8px;
  border: solid transparent;
  border-left-color: rgb(248,248,248);
  border-width: 8px;
  pointer-events: none;
}

.direction-r .flag:after {
  content: "";
  position: absolute;
  right: 100%;
  top: 50%;
  height: 0;
  width: 0;
  margin-top: -8px;
  border: solid transparent;
  border-right-color: rgb(248,248,248);
  border-width: 8px;
  pointer-events: none;
}

.time-wrapper {
  display: inline;
  
  line-height: 1em;
  font-size: 0.66666em;
  color: blue;
  vertical-align: middle;
}

.direction-l .time-wrapper {
  float: left;
}

.direction-r .time-wrapper {
  float: right;
}

.time {
  display: inline-block;
  padding: 4px 6px;
  background: rgb(248,248,248);
}

.desc {
  margin: 1em 0.75em 0 0;
  
  font-size: 0.77777em;
  font-style: italic;
  line-height: 1.5em;
}

.direction-r .desc {
  margin: 1em 0 0 0.75em;
}
h2.display-2 {
  margin-bottom: 45px; /* Adjust the margin between the heading and content */
  margin-top: 50px;
}
.text-sm {
  font-size: 0.875rem;
}

@media screen and (max-width: 660px) {

.timeline {
  width: 100%;
  padding: 4em 0 1em 0;
}

.timeline li {
  padding: 2em 0;
}

.direction-l,
.direction-r {
  float: none;
  width: 100%;

  text-align: center;
}

.flag-wrapper {
  text-align: center;
}

.flag {
  background: rgb(255,255,255);
  z-index: 15;
}

.direction-l .flag:before,
.direction-r .flag:before {
  position: absolute;
  top: -30px;
  left: 50%;
  content: ' ';
  display: block;
  width: 12px;
  height: 12px;
  margin-left: -9px;
  background: #fff;
  border-radius: 10px;
  border: 4px solid nblue;
  z-index: 10;
}

.direction-l .flag:after,
.direction-r .flag:after {
  content: "";
  position: absolute;
  left: 50%;
  top: -8px;
  height: 0;
  width: 0;
  margin-left: -8px;
  border: solid transparent;
  border-bottom-color: rgb(255,255,255);
  border-width: 8px;
  pointer-events: none;
}

.time-wrapper {
  display: block;
  position: relative;
  margin: 4px 0 0 0;
  z-index: 14;
}

.direction-l .time-wrapper {
  float: none;
}

.direction-r .time-wrapper {
  float: none;
}

.desc {
  position: relative;
  margin: 1em 0 0 0;
  padding: 1em;
  background: rgb(245,245,245);
  -webkit-box-shadow: 0 0 1px rgba(0,0,0,0.20);
  -moz-box-shadow: 0 0 1px rgba(0,0,0,0.20);
  box-shadow: 0 0 1px rgba(0,0,0,0.20);
  
  z-index: 15;
}

.direction-l .desc,
.direction-r .desc {
  position: relative;
  margin: 1em 1em 0 1em;
  padding: 1em;
  
  z-index: 15;
}

}

.card {
  width: 10rem;
  height: 200px; /* Adjust the height as needed */
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

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;
}

.card-front {
  width: 100%;
  height: 100%;
}

.card-front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}
</style>