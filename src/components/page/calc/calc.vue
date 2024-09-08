<template>
  <div class="pt-24 flex justify-center my-20">
    <div class="w-1/3 h-4/5 bg-white rounded-md">
      <div class="h-1/3 flex justify-center items-center">
        <div class="text-8xl">
          <span class="text-6xl">{{ count }}</span>
          <!-- vivod peremennoy count -->
        </div>
      </div>

      <div class="h-1/4 flex justify-between items-center px-10 mb-10">
        <div
          class="h-24 w-48 bg-darkblue flex items-center justify-center rounded-md"
        >
          <button
            @click="decrement"
            class="px-4 py-2 bg-blue-900 text-6xl text-white rounded"
          >
            <!-- po clicky vizivaetsya function "decrement" -->
          </button>
        </div>

        <div
          class="h-24 w-48 bg-darkblue flex items-center justify-center rounded-md"
        >
          <button
            @click="increment"
            class="px-4 py-2 bg-blue-900 text-6xl text-white rounded"
          >
            +
          </button>
          <!-- po clicky vizivaetsya increment -->
        </div>
      </div>

      <div class="flex items-center justify-center">
        <div
          class="h-24 w-4/5 bg-darkblue flex items-center justify-center rounded-md"
        >
          <button
            @click="reset"
            class="px-4 py-2 bg-blue-900 text-5xl text-white rounded"
          >
            Reset
          </button>
        </div>
      </div>

      <div class="py-10 flex justify-center items-center flex-col">
        <h1 class="mb-4">{{ title }}</h1>
        <div class="">
          <input
            type="text"
            :placeholder="myPlaceholder"
            :value="inputValue"
            class="mb-4 px-4 py-2"
            v-model="inputValue"
            @keypress="inputKeyPress"
          />
          <!-- 
          : - zamena v-bind
          placeholder - beret znachenie iz peremennoy
          value- nachalnoe znachenie perenosit v inputvalue
          @input - slushaet vse izmeneniya vnutri input, pri izmenenii vizivaet function inputChange
          @keypress - ozhidaet nazhatiya na knopku, pri nazhatii vizivaetsya function inputKeyPress
            -->

          <h2 class="mb-10">inputValue: {{ inputValue }}</h2>
          <!-- vivod peremennoy inputValue, nuzhna dlya naglyadnogo izmeneniya peremennoy -->
        </div>
      </div>

      <button
        class="px-4 py-3 bg-green text-white text-3xl mb-6"
        v-on:click="addNewNote"
      >
        Добавить
      </button>

      <div
        class="w-1/2 px-6 py-4 mb-6 border border-green flex justify-between items-center"
        v-for="(note, index) in notes"
        v-if="notes.length !== 0"
      >
        <!-- 
      sozdaetsya tsikl v-for (analog fot in v python) prohoditsya po kazhdomu elementu notes, pri kazhdoy itteracii vitaskivaet odin element i prisvaevaet ego peremennoy NOTE, takzhe vtorim znacheniem poluchaem ego INDEX
      
      V-IF - otobrazhaet block DIV tolko togda, kogda dlina masssiva NOTES ne ravnna 0, to est' esli elementov v massive net, to DIV dazhe ne otobrazitsya, eto pomozhet sozdavat modalnie okna i umenshit' kolichestvo nenuzhnih elemento.
      -->
        <p>{{ index }}. {{ note }}</p>
        <!-- 
        vivodim poryadkoviy nomer ispolzuya  INDDEX, i vizivaet function vnutri interpolyatsii, takim obrazom mozhem oprokinut' argument v function
        -->

        <button
          class="px-4 py-2 bg-red rounded-full"
          v-on:click="removeNote(index)"
        >
          <!-- po nazhatiu vizivaet function removeNote, argumentom predaem index -->
          Удалить
        </button>
      </div>
      <h1 v-else-if="notes.length === 0">Zametok net</h1>
      <!-- 
      tut obratnoe uslovie, esli v massive net elementov, to otobrazhaem h1
      -->
      <hr />
      <li class="mb-20">
        <strong>
          obshie kolichestvo zametok: {{ notes.length }} | Udvoennoe
          kolichestvo: {{ doubleCountComputed }}
        </strong>
        <!-- vivodim dlinnu massiva i ego udvoennoe znachenie. Function yavlyatsya setterom poetomu peredaem ee kak peremennuyu -->
      </li>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      title: "Список заметок",
      myPlaceholder: "Введите название заметок",
      inputValue: "",
      notes: ["Заметка 1", "Заметка 2", "Заметка 3"],
    };
  },
  // data hranit vse peremnnie
  methods: {
    increment() {
      this.count++;
    },
    // po skolku mi rabotaem s obiektami, to this obrashaetsya k polu data
    // to est this zamenyaet nam pole data, primer obrasheniya k obiektu viglyadit tak: data.count++
    // contsrutsiya this.count++ yavlyaetsya socrashennoy,
    // polnya zapis this.count = this.count + 1
    decrement() {
      this.count--;
    },
    // analogichno this.count = this.count - 1
    reset() {
      this.count = 0;
    },
    inputChange(event) {
      // console.log("metods inputChange", event.target.value);
      this.inputValue = event.target.value;
    },
    // kogda u nas slushatel takie kak @input ili @click
    // on obyazatelno peredaet event, eto obiekt imeet pole target
    // target soderzhit v sebe html obiekt, vnutri target obyazatelno est value
    // value eto kak raz vse soderzhimoe nashego input, eto vse chto mi vpisivaem

    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    // eta function vizivaetsya pri dobavlenii novogo elementa v massiv notes
    // stoit uslovie if(rhis,inputValue !== ""), proveryaet napustoe znachenie, chtobi ne mogli dobavit pustoy element
    // this.notes.push(this.inputValue); - pushim noviy element cherez metod push, prinimaem v sebya kak raz inputValue, Kotorie poluchila novie dannie v functsii inputChange

    inputKeyPress(event) {
      // console.log(event);
      if (event.key == "Enter") {
        this.addNewNote();
      }
    },
    // @keypress vizivaet function inputKeyPress, ona tozhe prinimaet EVENT
    // v dannom slushatele EVENT imeet pole key primer obrasheniye event.key
    // stoit uslovie v kotorom mi proveryaem yavlyaetsya li knopka Enter
    // esli da, to mi vizivaem function, to dolzhni obrashatsya k ney cherez this

    toChangeUppercase(item) {
      return item.toUpperCase();
    },
    // peredaem argument item i srazu vozvrashaem rezultat cherez return
    // toUpperCase() defoultnya function, chtob pouchit vse elementi v verhnem registre
    doubleCount() {
      // console.log("Double count")
      return this.notes.length * 2;
    },

    removeNote(index) {
      this.notes.splice(index, 1);
    },
    // removeNote vizivaetsya dlya udaleniya, udalenie proishodit cherez method splice
    // splice prinimaet v sebya dva arumenta index i kolichestvo elelemntov kotorie nado udalit
    // tut eto (index, 1)
  },
  computed: {
    doubleCountComputed() {
      console.log("doubleCountComputed");
      return this.notes.length * 2;
    },
  },
  // computed stout na odnom uropvne s methods i data
  // ego sut chtobi izmenuyat chisloviue znacheniya, to est vizivaetsya tolko togda kpogda this.notes.lenght, ne zatragivaya ostalnie elementi
  watch: {
    inputValue(value) {
      // console.log("Input Value", value);
    },
  },
  // watch takzhe yavlyatsya glavnim polem, otslezhivaet izmenenniya peremennih
  // osobennost v tom, chto peremennaya vizivaetsya kak function
};
</script>
<style scoped></style>
