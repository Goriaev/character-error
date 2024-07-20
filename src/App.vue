<template>
  <header
    class="md:h-10 mb-5 bg-black flex items-center py-10 px-20 gap-10 justify-start flex-col md:flex-row"
  >
    <router-link
      to="/"
      class="text-black text-xl px-2 py-1 bg-white rounded-2xl hover:bg-slate-800 hover:text-white transition-all duration-1000"
      >Главная</router-link
    >

    <router-link
      to="/about"
      class="text-black text-xl px-2 py-1 bg-white rounded-2xl hover:bg-slate-800 hover:text-white transition-all duration-1000"
      >Обо мне</router-link
    >

    <router-link
      to="/character"
      class="text-black text-xl px-2 py-1 bg-white rounded-2xl hover:bg-slate-800 hover:text-white transition-all duration-1000"
      >персонажи
    </router-link>

    <router-link
      to="/describe"
      class="text-black text-xl px-2 py-1 bg-white rounded-2xl hover:bg-slate-800 hover:text-white transition-all duration-1000"
      >Описание</router-link
    >

    <router-link
      to="/news"
      class="text-black text-xl px-2 py-1 bg-white rounded-2xl hover:bg-slate-800 hover:text-white transition-all duration-1000"
      >Новости</router-link
    >

    <router-link
      to="/flexbox"
      class="text-black text-xl px-2 py-1 bg-white rounded-2xl hover:bg-slate-800 hover:text-white transition-all duration-1000"
      >Flex Box</router-link
    >
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>
<script setup></script>

<style scoped></style>
