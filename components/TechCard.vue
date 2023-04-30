<template>
    <div class="bg-white rounded-lg shadow-md p-4 mx-2 my-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
      <img :src="imgSrc" :alt="altText" class="w-24 h-24 mx-auto mb-2 rounded-full">
    </div>
  </template>
  
  
  
  <script setup>
  const props = defineProps({
    imgSrc: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      required: true
    },
  });
  </script>
  