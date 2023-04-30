<template>
<div id="home">
    <Navbar />
    
        <Hero />
    
        <About />
    
        <Techsection />
    
        <Projects />
    
        <Contact />
        
    <Footer />
</div>
</template>
  
  <script setup >
  import About from '~/pages/about.vue'
  import Techsection from '~/pages/techsection.vue'
  import Projects from '~/pages/projects.vue'
  import Contact from '~/pages/contact.vue'
  import Hero from '~/pages/hero.vue'
  </script>
  