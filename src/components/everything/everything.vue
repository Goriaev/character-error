<template>
  <div class="w-full">
    <div class="w-4/5 mx-auto pt-5 flex gap-5 flex-col">
      <router-link to="/describe">
        <div class="h-10 w-full border border-green-600 flex items-center">
          <p class="ml-3">Describe</p>
        </div>
      </router-link>

      <router-link to="/news">
        <div class="h-10 w-full border border-green-600 flex items-center">
          <p class="ml-3">News</p>
        </div>
      </router-link>

      <router-link to="/flexbox">
        <div class="h-10 w-full border border-green-600 flex items-center">
          <p class="ml-3">FlexBox</p>
        </div>
      </router-link>

      <router-link to="/work">
        <div class="h-10 w-full border border-green-600 flex items-center">
          <p class="ml-3">Work</p>
        </div>
      </router-link>

      <router-link to="/soccer">
        <div class="h-10 w-full border border-green-600 flex items-center">
          <p class="ml-3">Soccer</p>
        </div>
      </router-link>

      <router-link to="/tailwindconfig">
        <div class="h-10 w-full border border-green-600 flex items-center">
          <p class="ml-3">tailwindconfig</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
