<template>
  <div class="pt-24 flex flex-col gap-10">
    <div class="flex justify-between mx-10">
      <input
        type="text"
        class="w-1/2 border border-darkblue"
        v-bind:placeholder="myPlaceHolder"
        v-bind:value="inputTetx"
        v-on:input="inputChangeText"
        @keypress="inputPress"
      />
      <h2 class="mb-10">{{ inputTetx }}</h2>
    </div>
    <div class="flex justify-between mx-10">
      <input
        type="number"
        class="w-1/2 border border-red"
        v-bind:placeholder="myPlaceHolder"
        v-bind:value="inputNum"
        v-on:input="inputChangeNum"
        @keypress="inputPress"
      />
      <h2 class="mb-10">{{ inputNum }}</h2>
    </div>

    <div class="flex justify-between mx-10">
      <input
        type="password"
        class="w-1/2 border border-green"
        v-bind:placeholder="myPlaceHolder"
        v-bind:value="inputPass"
        v-on:input="inputChangePass"
        @keypress="inputPress"
      />
      <h2 class="mb-10">{{ inputPass }}</h2>
    </div>

    <div class="flex justify-between mx-10">
      <button
        @click="multiply"
        class="text-zinc-400 h-10 w-1/2 border border-pink"
      >
        Multiply
      </button>
      <h2 class="mb-10">{{ countMult }}</h2>
    </div>

    <div class="flex justify-between mx-10">
      <button
        @click="divide"
        class="text-zinc-400 h-10 w-1/2 border border-purple"
      >
        Divide
      </button>
      <h2 class="mb-10">{{ countDivide }}</h2>
    </div>

    <div class="flex justify-between mx-10">
      <button
        @click="count"
        class="text-zinc-400 h-10 w-1/2 border border-purple"
      >
        Count all
      </button>
      <h2 class="mb-10">{{ countAll }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      countAll: "",
      countDivide: 2,
      countMult: 2,
      myPlaceHolder: "holder",
      inputTetx: "",
      inputNum: "",
      inputPass: "",
    };
  },
  methods: {
    inputChangeNum(event) {
      this.inputNum = event.target.value;
    },

    count() {
      Number(this.inputPass);
      Number(this.inputNum);
      this.countAll = this.inputPass * this.countDivide * this.countMult;
    },

    inputChangeText(event) {
      this.inputTetx = event.target.value;
    },

    inputChangePass(event) {
      this.inputPass = event.target.value;
    },
    multiply() {
      this.countMult = this.countMult * 2;
      console.log("multiply");
    },

    divide() {
      this.countDivide = this.countDivide / 2;
    },
    inputPress(event) {
      console.log(event.key);
      if (event.key == "Enter") {
        this.inputTetx = "";
      }
    },
  },
};
</script>
<style scoped></style>
