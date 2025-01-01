<template>
  <section id="experience" class="section py-20 text-white">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-left text-accent">Work Experience</h2>
      <div class="mt-8">
        <h3 class="text-xl font-bold text-left">Junior Network Architect - Ministry of Cybersecurity and Digital</h3>
        <p class="text-left">January 2023 – December 2023</p>
        <ul class="list-disc pl-6 text-left">
          <li>Configured networks to ensure security and performance</li>
          <li>Collaborated on implementing network security measures</li>
          <li>Maintained network documentation and monitored network performance</li>
        </ul>

        <h3 class="text-xl font-bold mt-6 text-left">Internship - Ministry of Cybersecurity and Digital</h3>
        <p class="text-left">May 2023 – August 2023</p>
        <ul class="list-disc pl-6 text-left">
          <li>Designed network architecture and deployed network connectivity</li>
          <li>Monitored network security and managed projects</li>
        </ul>

        <h3 class="text-xl font-bold mt-6 text-left">Internship - Italian Diplomatic Academy</h3>
        <p class="text-left">2019</p>
        <ul class="list-disc pl-6 text-left">
          <li>Optimized marketing and communication strategy</li>
          <li>Managed event logistics and supported digital marketing operations</li>
        </ul>

        <h3 class="text-xl font-bold mt-6 text-left">Student Employee - RAMQ</h3>
        <p class="text-left">January 2024 - Present</p>
        <ul class="list-disc pl-6 text-left">
          <li>Organized requests and processed health insurance card applications</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Experience",
};
</script>

<style scoped>
#experience {
  background-color: #0a192f;
  padding: 4rem 2rem;
}

.text-accent {
  color:#ccd6f6;
}

#experience ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  color: white;
}

#experience ul li {
  margin-bottom: 0.5rem;
}
</style>
