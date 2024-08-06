<template>
  <div class="fixed top-0">
    <div class="flex w-screen justify-between px-10 py-5">
      <div class="flex flex-auto">
        <img src="./assets/search.svg" alt="" class="h-8 w-8" />
      </div>
      <div class="flex flex-1">
        <p class="font-semibold text-3xl">Feeds</p>
      </div>
      <div class="flex flex-none h-8 gap-8">
        <img src="./assets/something.svg" alt="" class="w-8" />
        <img src="./assets/notification.svg" alt="" />
      </div>
    </div>
  </div>

  <header class="fixed bottom-0">
    <div class="flex justify-around w-screen h-16 items-center bg-white">
      <router-link
        to="/"
        class="h-7 w-7 flex flex-col justify-center items-center"
      >
        <img
          src="./assets/house.svg"
          alt=""
          class="w-full h-full object-contain hover:-translate-y-1 hover:transition-all"
        />
        <p class="text-sm text-center">Main</p>
      </router-link>
      <router-link
        to="/about"
        class="h-7 w-7 flex flex-col justify-center items-center"
      >
        <img
          src="./assets/user.svg"
          alt=""
          class="w-full h-full object-contain hover:-translate-y-1 hover:transition-all"
        />
        <p class="text-sm text-center">About</p>
      </router-link>
      <router-link
        to="/character"
        class="h-8 w-8 flex flex-col justify-center items-center"
      >
        <img
          src="./assets/brawlers.svg"
          alt=""
          class="w-full h-full object-contain hover:-translate-y-1 hover:transition-all"
        />
        <p class="text-sm text-center">Characters</p>
      </router-link>
      <!-- <router-link
        to="/describe"
        class="h-7 w-7 flex flex-col justify-center items-center"
      >
        <img
          src="./assets/describe.svg"
          alt=""
          class="w-full h-full object-contain hover:-translate-y-1 hover:transition-all"
        />
        <p class="text-sm text-center">Describe</p>
      </router-link>
      <router-link
        to="/news"
        class="h-7 w-7 flex flex-col justify-center items-center"
      >
        <img
          src="./assets/news.svg"
          alt=""
          class="w-full h-full object-contain hover:-translate-y-1 hover:transition-all"
        />
        <p class="text-sm text-center">News</p>
      </router-link>
      <router-link
        to="/flexbox"
        class="h-7 w-7 flex flex-col justify-center items-center"
      >
        <img
          src="./assets/trash.svg"
          alt=""
          class="w-full h-full object-contain hover:-translate-y-1 hover:transition-all"
        />
        <p class="text-sm text-center">Trash</p>
      </router-link>

      <router-link
        to="/work"
        class="h-7 w-7 flex flex-col justify-center items-center"
      >
        <img
          src="./assets/work.svg"
          alt=""
          class="w-full h-full object-contain hover:-translate-y-1 hover:transition-all"
        />
        <p class="text-sm text-center">Work</p>
      </router-link> -->

      <router-link
        to="/everything"
        class="h-7 w-7 flex flex-col justify-center items-center"
      >
        <img
          src="./assets/everything.svg"
          alt=""
          class="w-full h-full object-contain hover:-translate-y-1 hover:transition-all"
        />
        <p class="text-sm text-center">Everything</p>
      </router-link>
    </div>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>
<script setup></script>

<style scoped></style>
