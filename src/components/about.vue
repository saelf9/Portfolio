<template>
  <section id="about" class="about-section py-20 text-white">
    <div class="container mx-auto flex flex-col lg:flex-row items-start gap-12">
      <!-- Text Content -->
      <div class="about-text flex-1">
        <h2 class="text-4xl font-bold mb-4 text-left">About me</h2>
        <p class="text-lg leading-relaxed mb-4 text-left">
          I am currently a Software Engineering student at Laval University.
        </p>
        <p class="text-lg leading-relaxed mb-4 text-left">
          Here are some technologies I have been working with:
        </p>
        <ul class="grid grid-cols-2 gap-x-8 gap-y-2 text-accent list-disc pl-5">
          <li>Python</li>
          <li>Vue.js</li>
          <li>Java</li>
          <li>JavaScript ES6+</li>
          <li>C++</li>
          <li>MATLAB</li>
        </ul>
        <p class="text-lg leading-relaxed mt-4 text-left">
          Outside of work, I’m interested in following the developments of science. I also play a lot of video games. And make TikToks.
        </p>
      </div>

      <!-- Image Section -->
      <div class="about-image flex-1">
        <img
            src="@/assets/pixel-avatar.png"
            alt="Profile Picture"
            class="rounded-lg shadow-lg mx-auto lg:mx-0"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: #0a192f;
  color: #ccd6f6;
  padding: 4rem 2rem;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
}

.about-text {
  flex: 1;
  max-width: 600px;
}

.about-image img {
  max-width: 300px;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.text-accent {
  color: #ccd6f6;
}

ul {
  margin-top: 1rem;
  list-style-type: disc;
  padding-left: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem 1.5rem;
}

ul li {
  color: #ccd6f6;
}
</style>
