<template>
  <section id="contact" class="contact-section py-5 bg-[#0a192f] text-white">
    <div class="container text-center">
      <!-- Heading -->
      <h2 class="h2 mb-4 text-white">Contact</h2>
      <p class="h5 mb-4 text-white">Feel free to reach out to me:</p>

      <!-- Social Icons -->
      <div class="social-icons mb-5">
        <a href="mailto:safaeelfattahi2002@gmail.com" class="text-white h3 mx-3 hover:text-[#64ffda]">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="https://github.com/saelf9" target="_blank" class="text-white h3 mx-3 hover:text-[#64ffda]">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/safae-elfattahi-5519a8233/" target="_blank" class="text-white h3 mx-3 hover:text-[#64ffda]">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>

      <!-- Divider Line -->
      <hr class="my-4 border-light">

      <!-- Copyright Info -->
      <p class="small text-white">© Safae Elfattahi 2025</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact-section {
  background-color: #0a192f;
}

.social-icons a {
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: orange !important;
}
</style>
