<template>
  <div id="techstack"  class="bg-orange-400 py-24 px-24 rounded-full container mx-auto my-8">
    <p   class=" mb-10 text-4xl font-bold text-gray-800 text-center">Tech Stack</p>
    <label for="category-filter" class="ml-32">Filter by category:</label>
    <select id="category-filter" v-model="selectedCategory" class="py-2 px-4 border border-gray-400 rounded-md">
      <option value="all">All</option>
      <option value="frontend">Frontend</option>
      <option value="backend">Backend</option>
      <option value="tools">Tools</option>
    </select>

    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 justify-center">
      <div class="p-4" v-for="(tech, index) in filteredTech" :key="index">
        <TechCard :img-src="tech.imgSrc" :alt-text="tech.altText" />
      </div>
    </section>
  </div>
</template>




<script>
import TechCard from '~/components/TechCard.vue'

export default {
  components: {
    TechCard
  },
  data() {
    return {
      selectedCategory: 'all'
    }
  },
  computed: {
    filteredTech() {
      if (this.selectedCategory === 'all') {
        return this.techList
      } else {
        return this.techList.filter(tech => tech.category === this.selectedCategory)
      }
    },
    techList() {
      return [
        {
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
          altText: 'TypeScript',
          category: 'frontend'
        },
        {
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
          altText: 'Vue-Js',
          category: 'frontend'
        },
        {
          imgSrc: 'https://www.fathym.com/img/nuxt.png',
          altText: 'Nuxt',
          category: 'frontend'
        },
        {
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
          altText: 'Node.js',
          category: 'backend'
        },
        {
          imgSrc: 'https://ih1.redbubble.net/image.438912065.6243/flat,1000x1000,075,f.u3.jpg',
          altText: 'Mongoose',
          category: 'backend'
        },
        {
          imgSrc: 'https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png',
          altText: 'MongoDB',
          category: 'backend'
        },
        {
          imgSrc: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-1-2.svg',
          altText: 'Tailwind CSS',
          category: 'frontend'
        },
        {
          imgSrc: 'https://user-images.githubusercontent.com/2327532/39481401-fa7d2992-4d30-11e8-886d-c4a3ee88147f.png',
          altText: 'Bootstrap',
          category: 'frontend'
        },
        {
          imgSrc: 'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.svg',
          altText: 'Git',
          category: 'tools'
        },
        {
          imgSrc: 'https://www.oomnitza.com/wp-content/uploads/2022/06/github-logo-300x300.png',
          altText: 'GitHub',
          category: 'tools'
        },
        {
          imgSrc: 'https://logowik.com/content/uploads/images/postman-api-platform6643.logowik.com.webp',
          altText: 'Postman',
          category: 'tools'
        },
        {
          imgSrc: 'https://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png',
          altText: 'Linux',
          category: 'tools'
        },
        {
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
          altText: 'VS Code',
          category: 'tools'
        },
        {
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
          altText: 'React',
          category: 'frontend'
        },
        {
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg',
          altText: 'Vercel',
          category: 'tools'
        },
        {
          imgSrc: 'data:image/png;base64,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',
          altText: 'Express.js',
          category: 'backend'
        },
        {
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
          altText: 'JavaScript',
          category: 'frontend'
        },
        {
          imgSrc: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png',
          altText: 'HTML',
          category: 'frontend'
        },
        {
          imgSrc: 'https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-opencode-css-8.png',
          altText: 'CSS',
          category: 'frontend'
        },
        {
          imgSrc: 'https://www.gimp.org/images/frontpage/wilber-big.png',
          altText: 'GIMP',
          category: 'tools'
        }
      ]
    }
  }
}
</script>

