<template>
  <header
    class="h-10 bg-black flex items-center py-10 px-20 gap-10 justify-start"
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
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>
<script setup></script>

<style scoped></style>
