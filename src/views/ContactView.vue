<template>
  <div>
    <h2 class="display-2 d-flex justify-content-center text-black">Reach Me</h2>
  </div>
  <div class="container d-flex justify-content-center">
    <form id="contactForm" action="https://formspree.io/f/xpzgvddd" method="post" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control text-sm" id="firstName" name="firstName" placeholder="First Name">
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control text-sm" id="lastName" name="lastName" placeholder="Last Name">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control text-sm" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputMessage">Message</label>
        <textarea type="text" class="form-control text-sm" id="exampleInputMessage" name="message" placeholder="Message" cols="30" rows="4"></textarea>
      </div>
      <button type="submit" class="btn btn-primary text-sm">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubmit() {
      // Show the thank you message in a pop-up
      alert('Thank you for reaching out!');
    }
  }
}
</script>

<style scoped>
.text-sm {
  font-size: 0.875rem; /* Adjust the font size as needed */
}
</style>
