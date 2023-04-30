<template>
    <!-- Tech Me Section -->
<section id="techstack" class="bg-gray-800 text-white py-16 mb-10">
  <div class="container mx-auto px-4 py-10">
    <h2 class="text-4xl font-bold text-white-600 text-center">Techstack</h2>
    <div class="flex flex-wrap justify-center mt-20 mb-10 max-w-5xl mx-auto">
 
      <TechCard
        img-src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
        alt-text="TypeScript"
      />

      <TechCard
        img-src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
        alt-text="Vue-Js"
      />

      <TechCard
        img-src="https://www.fathym.com/img/nuxt.png"
        alt-text="Nuxt"
      />

      <TechCard
        img-src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
        alt-text="Node.js"
      />

      <TechCard
        img-src="https://ih1.redbubble.net/image.438912065.6243/flat,1000x1000,075,f.u3.jpg"
        alt-text="Express.js"
      />

      <TechCard
        img-src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"
        alt-text="MongoDB"
      />

      <TechCard
        img-src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1-2.svg"
        alt-text="Tailwind CSS"
      />

      <TechCard
        img-src="https://user-images.githubusercontent.com/2327532/39481401-fa7d2992-4d30-11e8-886d-c4a3ee88147f.png"
        alt-text="Bootstrap"
      />

      <TechCard
        img-src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.svg"
        alt-text="Git"
      />

      <TechCard
        img-src="https://www.oomnitza.com/wp-content/uploads/2022/06/github-logo-300x300.png"
        alt-text="GitHub"
      />

      <TechCard
        img-src="https://logowik.com/content/uploads/images/postman-api-platform6643.logowik.com.webp"
        alt-text="Postman"
      />

      <TechCard
        img-src="https://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png"
        alt-text="Linux"
      />

      <TechCard
        img-src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
        alt-text="VS Code"
      />

      <TechCard
        img-src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt-text="React"
      />

      <TechCard
        img-src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg"
        alt-text="Vercel"
      />

      <TechCard
        img-src="https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png"
        alt-text="Photoshop"
      />

      
    
      <!-- outside divs -->
    </div>
  </div>
</section>
</template>


<script>
  import TechCard from '../components/TechCard.vue'

  components: { TechCard }
</script>