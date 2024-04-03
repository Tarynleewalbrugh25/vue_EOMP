<template>
    <footer class="footer container-fluid fixed-bottom">
      <div class="row">
        <p>Taryn-lee Walbrugh Portfolio&copy; {{ currYear }}</p><br><i class="bi bi-telephone-fill">0682714785</i><i class="bi bi-github"></i>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComp',
    data() {
      return {
        currYear: new Date().getFullYear()
      }
    }
  }
  </script>
  
  <style>
.footer {
  background-color: grey;
  color: aliceblue;
  position: relative;
  bottom: 0;
}
 /* footer section start */
*{
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
  -o-box-sizing:border-box;
  -ms-box-sizing:border-box;
  box-sizing:border-box;
}
body{
  font-size:14px;
  background: #fff;
    max-width:1920px;
    margin:0 auto;
  overflow-x:hidden;
  font-family: poppins;
  

}

.social-links h2{
  padding-bottom: 15px;
  font-size: 20px;
    font-weight: 600;
}
.social-links img{
  padding-bottom: 25px;
}

.social-icons a:hover{
  color:blue;
}


.address h2{
  padding-bottom: 15px;
  font-size: 20px;
    font-weight: 600;
}
.address img{
  padding-bottom: 15px;
}
.address-links li a{
  color: #303030;
    font-size: 15px;
    font-weight: 500;
  color: #777777;

}
.address-links li i{
  font-size: 16px;
    padding-right: 8px;
  color: #82074a;

}
.address-links li i:nth-child(1){
  padding-top: 9px;
}
.address-links .address1{
  font-weight: 500;
    font-size: 15px;
  display: flex;
}
.address-links{
      line-height: 32px;
    color: #777777;
}
.copy-right-sec{
  padding: 1.8rem;
    background: #82074a;
    color: #fff;
    text-align: center;
}
.copy-right-sec a{
  color: #fcd462;
    font-weight: 500;
}
a{
  text-decoration:none;
}

  </style>