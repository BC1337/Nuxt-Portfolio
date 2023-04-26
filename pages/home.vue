<template>
  <div class="bg-gray-100">
    <!-- Hero Section -->
    <section class="bg-gray-800 py-16" id="home">
      <div class="container mx-auto px-4 py-10">
        <h1 class="text-5xl font-bold text-white text-center">Welcome to My Portfolio</h1>
        <p class="text-xl text-gray-300 text-center mt-4">I'm a Fullstack Web Developer</p>
        <div class="flex justify-center mt-12">
          <a href="#" class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md">View Portfolio</a>
        </div>
      </div>
    </section>

    <!-- About Me Section -->
    <section class="bg-white py-16" id="home">
      <div class="container mx-auto px-4 py-10">
        <h2 class="text-4xl font-bold text-gray-800 text-center">About Me</h2>
        <p class="text-xl text-gray-600 text-center mt-4 max-w-2xl mx-auto">I'm a passionate Fullstack Web Developer with experience in building modern web applications using cutting-edge technologies. I love to create meaningful and interactive user experiences.</p>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="bg-gray-100 py-16" id="projects">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-800 text-center">Projects</h2>
        <div class="flex justify-center mt-8">

          <!-- Project Card 1 -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img class="w-full h-40 object-cover" src="/project1.jpg" alt="Project 1">
              <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2">Project 1</h3>
                <p class="text-gray-600 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut orci mi. Phasellus at odio risus.</p>
              </div>
              <div class="px-6 py-4">
                <a href="#" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md">View Details</a>
              </div>
            </div>

            <!-- Project Card 2 -->
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img class="w-full h-40 object-cover" src="/project2.jpg" alt="Project 2">
              <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2">Project 2</h3>
                <p class="text-gray-600 text-base">Vestibulum feugiat sem eget ligula volutpat tincidunt. Donec scelerisque vulputate diam, at fermentum ex hendrerit id.</p>
              </div>
              <div class="px-6 py-4">
                <a href="#" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md">View Details</a>
              </div>
            </div>

            <!-- project card 3 -->
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img class="w-full h-40 object-cover" src="/project3.jpg" alt="Project 2">
              <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2">Project 3</h3>
                <p class="text-gray-600 text-base">Vestibulum feugiat sem eget ligula volutpat tincidunt. Donec scelerisque vulputate diam, at fermentum ex hendrerit id.</p>
              </div>
              <div class="px-6 py-4">
                <a href="#" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md">View Details</a>
              </div>
            </div>

            <!-- Project Card 4 -->
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-4 my-4">
              <img class="w-full h-40 object-cover" src="/project4.jpg" alt="Project 4">
              <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2">Project 4</h3>
                <p class="text-gray-600 text-base">Vestibulum feugiat sem eget ligula volutpat tincidunt. Donec scelerisque vulputate diam, at fermentum ex hendrerit id.</p>
              </div>
              <div class="px-6 py-4">
                <a href="#" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        <!-- Contact Section -->
        <section class="bg-gray-300 py-32" id="contact">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-6">Contact</h2>
            <p class="text-center text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper orci a ipsum facilisis, nec tincidunt metus cursus.</p>
            <form class="max-w-lg mx-auto mt-8 " action="http://localhost:3001" method="post">
              <div class="flex flex-wrap -mx-4">
                <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                  <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
                  <input type="text" id="name" class="w-full rounded-md py-2 px-4 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50" placeholder="John Doe">
                </div>
                <div class="w-full md:w-1/2 px-4">
                  <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                  <input type="email" id="email" class="w-full rounded-md py-2 px-4 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50" placeholder="johndoe@example.com">
                </div>
              </div>
              <div class="mt-4">
                <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" class="w-full rounded-md py-2 px-4 border-gray-300 h-32 resize-none focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50" placeholder="Your message"></textarea>
              </div>
              <div class="mt-6">
                <button type="submit" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md">Send Message</button>
              </div>
            </form>
          </div>
        </section>

</div>
</template>

<style scoped>
section {
  position: relative;
  overflow: hidden;
}
section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>
