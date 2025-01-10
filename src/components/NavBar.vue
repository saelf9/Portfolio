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

.navbar .nav-item {
  margin-left: 15px;
}

.navbar .nav-item .nav-link {
  padding: 15px; /* Increase the padding around nav links for better spacing */
  position: relative;
  color: white; /* Ensure the default text color is white */
  transition: color 0.3s ease !important; /* Ensure the color change happens */
}

.navbar .nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: orange; /* Line color */
  transition: width 0.3s ease;
}

.navbar .nav-link:hover {
  color: orange !important; /* Change text color on hover */
}

.navbar .nav-link:hover::after {
  width: 100%; /* Show the line under the link */
}

.navbar i {
  font-size: 1.5rem; /* Increase icon size */
  transition: transform 0.2s ease-in-out;
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
