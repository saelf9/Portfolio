<template>
  <nav class="navbar fixed-top text-white shadow-sm">
    <div class="container d-flex justify-content-between align-items-center">
      <!-- Logo -->
      <a href="#" class="navbar-brand text-white">Safae Elfattahi</a>

      <!-- Navigation Links -->
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link text-white" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #0a192f;
  z-index: 1030;
  font-size: 1rem; /* Increase the navbar font size */
}

.navbar .nav-link {
  font-size: 1.2rem; /* Increase font size for navigation links */
}

.navbar .nav-item {
  margin-left: 15px;
}

.navbar .nav-item .nav-link {
  padding: 15px; /* Increase the padding around nav links for better spacing */
}

.navbar i {
  font-size: 1.5rem; /* Increase icon size */
  transition: transform 0.2s ease-in-out;
}

.navbar i:hover {
  transform: scale(1.1); /* Slightly enlarge the icons on hover */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.flex.space-x-6 a {
  padding: 1px;
}

.flex.space-x-4 a {
  font-size: 2rem;
  padding: 0 5px;
}
</style>
