<template>
    <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden py-6">
      <div class="px-6 py-4">
        <h3 class="font-bold text-xl mb-2">{{ title }}</h3>
        <p class="text-gray-600 text-base">{{ description }}</p>
      </div>
      <div class="px-6 pb-4">
        <a :href="codeUrl" target="_blank" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md">View Code</a>
      </div>
    </div>
  </template>
  
  <script setup>
    const props = defineProps({
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      codeUrl: {
        type: String,
        required: true
      },
    })
  </script>
  
  <style scoped>
    .max-w-sm:hover {
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
    }
  </style>
  