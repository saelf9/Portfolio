<template>
  <section id="projects" class="projects-section text-white py-5">
    <div class="container">
      <h2 class="text-center mb-5 text-black">Projects</h2>

      <!-- Featured Projects Section (Zigzag layout for large cards) -->
      <div class="featured-projects">
        <div
            v-for="(project, index) in featuredProjects"
            :key="index"
            :class="['card text-bg-dark project-card', { 'left-card': index % 2 === 0, 'right-card': index % 2 !== 0 }]"
        >
          <img :src="project.image" class="card-img" :alt="project.title" />
          <div class="card-img-overlay d-flex flex-column justify-content-center">
            <h3 class="card-title text-center">{{ project.title }}</h3>
            <p class="card-text text-center">{{ project.description }}</p>
            <p class="text-info text-center">{{ project.stack }}</p>
            <div class="text-center">
              <a :href="project.github" target="_blank" class="btn btn-outline-light btn-lg">
                <i class="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Small Cards Section -->
      <div class="small-projects d-flex justify-content-start mt-5 flex-wrap gap-4">
        <div v-for="(project, index) in smallProjects" :key="index" class="card small-card">
          <img :src="project.image" class="card-img" :alt="project.title" />
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div class="text-center">
              <a :href="project.github" target="_blank" class="btn btn-outline-light btn-sm">
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
import UFIX from "@/assets/ufix.png";
import Chekers from "@/assets/checkers.png";
import weather from "@/assets/weather app.png";
import algo from "@/assets/algo.png";
import chalet from "@/assets/chalet.png";
import fluid from "@/assets/matlab fluid.png";
import matlab from "@/assets/matlab.png";

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
          title: "Restalo",
          description: "Restaurant Reservation System.",
          stack: "Node.js, Vue.js, MongoDB",
          github: "https://github.com/saelf9/Restalo",
          image: restaloImage,
        },
        {
          title: "Intergalactic Coachella",
          description:
              "A system to manage the ultimate cosmic music festival. From ticket sales to logistics, oxygen supply, artist scheduling, and profit calculation.",
          stack: "Java",
          github: "https://github.com/saelf9/Intergalactic-coachella",
          image: intergalacticImage,
        },
      ],
      smallProjects: [
        {
          title: "Task Tracker",
          description: "A simple web-based task tracker.",
          stack: "Node.js, Vue.js",
          github: "https://github.com/saelf9/Task-tracker",
          image: TaskTracker,
        },
        {
          title: "File System",
          description: "A basic file system inspired by UFS to handle file and directory management.",
          stack: "C++",
          github: "https://github.com/saelf9/File-system-UFIX-",
          image: UFIX,
        },
        {
          title: "Checkers Game",
          description: "A simple checks game",
          stack: "Python",
          github: "https://github.com/saelf9/Checker-game",
          image: Chekers,
        },
        {
          title: "algorithmic optimisation",
          description: "Efficient Shortest Path Algorithms for Routes on the RTC Network",
          stack: "C++",
          github: "https://github.com/saelf9/Optimisation-algorithmique",
          image: algo,
        },
        {
          title: "Weather Application",
          description: "Work in progress: A weather app using an open weather API.",
          stack: "Vue.js, Axios",
          github: "https://github.com/saelf9/Weather-app",
          image: weather,
        },
        {
          title: "Fluid Dynamics Analysis",
          description: "Numerical Methods Fluid Dynamics Analysis.",
          stack: "matlab",
          github: "https://github.com/saelf9/Numerical_Methods_Fluid_Dynamics_Analysis",
          image: fluid,
        },
        {
          title: "ChatCLT",
          description: "Work in progress: An app to customize your house build",
          stack: "java, Swing, UML",
          github: "https://github.com/saelf9/Task-tracker",
          image: chalet,
        },
        {
          title: "Wave-Equation-Modeling",
          description: "The numerical solution of the 2D wave equation",
          stack: "matlab",
          github: "https://github.com/saelf9/Wave-Equation-Modeling",
          image: matlab,
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects-section {
  background-color: white;
  padding-bottom: 40px;
}

/* Featured Projects Zigzag Layout */
.featured-projects {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Large Cards (Zigzag Layout) */
.project-card {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 80%;
  margin-bottom: 70px;
  height: 400px; /* Adjust the height for consistency */
}

/* Left Card */
.left-card {
  align-self: flex-start;
}

/* Right Card */
.right-card {
  align-self: flex-end;
}
/* Zigzag styles for large cards */
.left-card {
  margin-left: 5%;
}

.right-card {
  margin-right: 5%;
}
.card-img-overlay {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  z-index: 1; /* Keep the text above the rectangle */
}
/* Hover Effect for Large Cards */
.left-card::before, .right-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(10, 5, 155);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  z-index: 0;
}

.left-card:hover::before, .right-card:hover::before {
  transform: scaleX(1);
}

.left-card:hover, .right-card:hover {
  transform: translateY(-10px);
  box-shadow: 15px 15px 50px rgba(0, 65, 185, 0.3), -15px -15px 50px rgba(0, 0, 0, 0.1);
}

/* Small Cards Styling */
.small-projects {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

.small-card {
  width: 22%;
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  height: 250px;
  background-color: #ccd6f6;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.3s ease;
}

/* Image Styling for Small Cards */
.small-card .card-img {
  height: 95px;
  object-fit: cover;
}

/* Card Body Styling for Small Cards */
.small-card .card-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  overflow: hidden;
}

/* Title and Text Styling for Small Cards */
.small-card .card-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.small-card .card-text {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  flex-grow: 1;
  overflow: hidden;
}

/* Button Styling for Small Cards */
.small-card .btn-outline-light {
  font-size: 0.8rem;
  padding: 0.5rem;
  background-color: white;
  color: black;
  align-self: center;
  margin-top: auto;
  z-index: 1;
}
</style>
