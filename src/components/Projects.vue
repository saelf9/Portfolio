<template>
  <section id="projects" class="projects-section text-white">
    <div class="container">
      <h2 class="text-center mb-5">Projects</h2>

      <!-- Carousel Section -->
      <div id="featuredProjectsCarousel" class="carousel slide mb-5" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div
              v-for="(project, index) in featuredProjects"
              :key="index"
              class="carousel-item"
              :class="{ active: index === 0 }"
          >
            <div class="d-flex flex-column align-items-center justify-content-center p-5 bg-secondary rounded">
              <h3 class="mb-3">{{ project.title }}</h3>
              <p class="mb-3">{{ project.description }}</p>
              <p class="mb-3 text-info">{{ project.stack }}</p>
              <div class="d-flex gap-3">
                <a :href="project.github" target="_blank" class="btn btn-outline-light">
                  <i class="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#featuredProjectsCarousel"
            data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#featuredProjectsCarousel"
            data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!-- Grid Section -->
      <div class="row">
        <div
            v-for="(project, index) in otherProjects"
            :key="index"
            class="col-md-6 col-lg-4 mb-4"
        >
          <div class="card bg-secondary text-white h-100">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <p class="text-info">{{ project.stack }}</p>
              <div class="d-flex gap-2">
                <a :href="project.github" target="_blank" class="btn btn-outline-light btn-sm">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Projects",
  data() {
    return {
      featuredProjects: [
        {
          title: "Portfolio.js",
          description: "A small JS library for clear and succinct data presentation.",
          stack: "Node.js, JavaScript, HTML, CSS, Vue.js",
          github: "https://github.com/example",
        },
        {
          title: "UFood website",
          description: "A Flask/Vue.js-based application for managing school homework.",
          stack: "JavaScript, HTML, CSS, Vue.js, MongoDB",
          github: "https://github.com/example",
        },
        {
          title: "Intergalactic coachella",
          description: "A self-learning A.I. that solves complex mazes using a genetic algorithm.",
          stack: "Java, SQL",
          github: "https://github.com/example",
        },
        {
          title: "Restalo",
          description: "ORM system for managing logs from microservices.",
          stack: "Node.js, Vue.js, MongoDB",
          github: "https://github.com/example",
        },
      ],
      otherProjects: [
        {
          title: "Task Tracker",
          description: "A simple web-based task tracker.",
          stack: "React.js, Firebase",
          github: "https://github.com/example",
        },
        {
          title: "car plaque recognition system",
          description: "A multi-vendor e-commerce platform.",
          stack: "Django, React.js, PostgreSQL",
          github: "https://github.com/example",
        },
        {
          title: "Weather App",
          description: "A weather application using an open weather API.",
          stack: "Vue.js, Axios",
          github: "https://github.com/example",
        },
        {
          title: "Fake Reddit",
          description: "A weather application using an open weather API.",
          stack: "Vue.js, Axios",
          github: "https://github.com/example",
        },
      ],
    };
  },
};
</script>
<style scoped>
.projects-section {
  background-color: #0a192f;
}

.carousel-inner .carousel-item {
  min-height: 300px;
  align-items: center;
  justify-content: center;
  transition: transform 0.6s ease-in-out;
}

.card {
  border: none;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px); /* Slight hover effect for cards */
}
</style>
