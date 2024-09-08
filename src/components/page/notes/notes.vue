<template>
  <div
    class="h-screen w-screen border-2 border-red pt-24 flex justify-center items-center flex-col"
  >
    <div class="py-10 flex-col">
      <h1>{{ title }}</h1>
      <div>
        <input
          type="text"
          class="border border-black rounded-md py-2 px-5"
          :placeholder="myPlaceholder"
        />
      </div>
    </div>

    <button
      class="py-2 px-6 bg-blue mb-10 rounded-full text-2xl text-white border border-black"
    >
      Add
    </button>

    <div class="text-2xl inline-flex gap-6 my-7" v-for="(note, index) in notes">
      <p>{{ index }}. {{ note }}</p>

      <button
        class="py-2 px-6 bg-darkblue rounded-full text-2xl text-white border border-black"
      >
        Delete
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Список заметок",
      myPlaceholder: "Введите название заметок",
      notes: ["Заметка 1", "Заметка 2", "Заметка 3"],
    };
  },
  methods() {},
};
</script>
<style scoped></style>
