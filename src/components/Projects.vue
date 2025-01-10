<template>
  <section id="projects" class="projects-section text-white py-5">
    <div class="container">
      <h2 class="text-center mb-5">Projects</h2>

      <!-- Featured Projects Section (Zigzag layout) -->
      <div class="d-flex flex-column gap-4">
        <div
            v-for="(project, index) in featuredProjects"
            :key="index"
            :class="['card text-bg-dark', index % 2 === 0 ? 'left-card' : 'right-card']"
        >
          <img :src="project.image" class="card-img" :alt="project.title" />
          <div class="card-img-overlay d-flex flex-column justify-content-center">
            <h3 class="card-title text-center">{{ project.title }}</h3>
            <p class="card-text text-center">{{ project.description }}</p>
            <p class="text-info text-center">{{ project.stack }}</p>
            <div class="text-center">
              <a
                  :href="project.github"
                  target="_blank"
                  class="btn btn-outline-light btn-lg"
              >
                <i class="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Small Cards Section -->
      <div class="d-flex justify-content-start mt-5 flex-wrap gap-4">
        <div
            v-for="(project, index) in smallProjects"
            :key="index"
            class="card small-card"
        >
          <img :src="project.image" class="card-img" :alt="project.title" />
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div class="text-center">
              <a
                  :href="project.github"
                  target="_blank"
                  class="btn btn-outline-light btn-sm"
              >
                <i class="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import portfolioImage from "@/assets/website portfolio pic.png";
import ufoodImage from "@/assets/ufood pic.png";
import intergalacticImage from "@/assets/space.jpg";
import restaloImage from "@/assets/ufood.png";
import TaskTracker from "@/assets/task tracker app.png";

export default {
  name: "Projects",
  data() {
    return {
      featuredProjects: [
        {
          title: "UFood website",
          description:
              "A responsive web application for discovering restaurants, sharing favorites, and tracking visits.",
          stack: "JavaScript, HTML, CSS, Vue.js, MongoDB",
          github: "https://github.com/saelf9/ufood-h2024",
          image: ufoodImage,
        },
        {
          title: "Portfolio.js",
          description:
              "A small JS library for clear and succinct data presentation.",
          stack: "Node.js, JavaScript, HTML, CSS, Vue.js",
          github: "https://github.com/saelf9/Portfolio",
          image: portfolioImage,
        },
        {
          title: "Intergalactic Coachella",
          description:
              "A system to manage the ultimate cosmic music festival. From ticket sales to logistics, oxygen supply, artist scheduling, and profit calculation.",
          stack: "Java",
          github: "https://github.com/saelf9/Intergalactic-coachella",
          image: intergalacticImage,
        },
        {
          title: "Restalo",
          description: "Restaurant Reservation System.",
          stack: "Node.js, Vue.js, MongoDB",
          github: "https://github.com/saelf9/Restalo",
          image: restaloImage,
        },
      ],
      smallProjects: [
        {
          title: "Task Tracker",
          description: "A simple web-based task tracker.",
          stack: "Node.js, Vue.js",
          github: "https://github.com/example",
          image: TaskTracker,
        },
        {
          title: "Checkers Game",
          description: "A simple checks game",
          stack: "Python",
          github: "https://github.com/example",
          image: portfolioImage,
        },
        {
          title: "Weather App",
          description: "A weather application using an open weather API.",
          stack: "Vue.js, Axios",
          github: "https://github.com/saelf9/Weather-app",
          image: ufoodImage,
        }, {
          title: "App",
          description: "A weather application using an open weather API.",
          stack: "Vue.js, Axios",
          github: "https://github.com/saelf9/Weather-app",
          image: ufoodImage,
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects-section {
  background-color: white;
  padding-bottom: 40px; /* Adjust padding to avoid overlap with the next section */
}

.card {
  height: 400px;
  border: none;
  width: 70%;
  margin: 0 auto; /* Center the card */
  margin-bottom: 30px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

.card-img {
  object-fit: cover;
  height: 100%;
}

.card-img-overlay {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2rem;
}

.card-title {
  font-size: 2rem;
  font-weight: bold;
}

.btn-outline-light {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-outline-light:hover {
  background-color: #fff;
  color: #000;
  transform: scale(1.05);
}

/* Zigzag styles for large cards */
.left-card {
  margin-left: 5%;
}

.right-card {
  margin-right: 5%;
}

/* Small Cards Section */
.small-card {
  width: 22%; /* Adjust width to make cards fit on one line */
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  height: 220px; /* Adjusted height to make the card shorter */
  background-color: #ccd6f6;
}

.small-card .card-img {
  height: 120px; /* Adjusted image height */
  object-fit: cover;
}

.small-card .card-body {
  padding: 1rem;
}

.small-card .card-title {
  font-size: 1.1rem;
  font-weight: bold;
}

.small-card .card-text {
  font-size: 0.9rem;
}

.small-card .btn-outline-light {
  font-size: 0.8rem;
  padding: 0.5rem;
  background-color: white;
  color: black;
}

/* Ensure no scrolling */
.d-flex {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap; /* Allow the small cards to wrap on smaller screens */
  gap: 20px; /* Space between the cards */
}
</style>
