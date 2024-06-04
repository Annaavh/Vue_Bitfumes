<template>
  <!-- <div class="m-auto">
        <h1 class="text-2xl text-center">DC Heros {{ herosCount }} </h1>
        <h2>{{ fullName }}</h2>
        <h3>{{ fname }} {{ lname }}</h3>
        <p>{{ randC }}</p>
        <p>{{ randM() }}</p>
        <ul>
            <li class="flex justify-between" v-for="(hero, index) in dcHeros" v-bind:key="hero.name">
                <div>{{ hero.name }} </div>
                <button @click="remove(index)">x</button>
            </li>

        </ul>

        <form class="mt-10" @submit.prevent="addHero">
            <input class="border rounded" placeholder="Type Hero Name Here" v-model="newHero">
            <button type="submit">Add Hero</button>
        </form>

    </div> -->
  <div class="m-auto">
    <h1 class="text-2xl text-center">DC Heros {{ herosCount }} </h1>
    <h2>{{ fullName }}</h2>
    <h3>{{ fname }} {{ lname }}</h3>
    <p>{{ randC }}</p>
    <p>{{ randM() }}</p>
    <ul>
      <li class="flex justify-between" v-for="(hero, index) in dcHeros" v-bind:key="hero.name">
        <div>{{ hero.name }} </div>
        <button @click="remove(index)">x</button>
      </li>

    </ul>

    <!-- dinamic attribute binding 
      <input type="text" :[attribute]="newHero" /> 

       <input type="text" v-bind:value="newHero" /> 

       v-model.trim trims all spaces inside value
       v-model.lazy data is not changing while writing it's changed when we focus out of the field 
       v-model.number converts everything into number

      <button v-on:click="newHero = 'Wonder Woman'" >Add Hero</button>
       it's the same as @click 

      <button v-bind:disabled="isDisabled">Add Hero</button> 

      @submit.prevent it's preventing default action of form -->
    <form class="mt-10" @submit.prevent="addHero">
      <input ref="newHeroRef" class="border rounded" placeholder="Type Hero Name Here" v-model="newHero">
      <button type="submit">Add Hero</button>
    </form>
    <button @click="setFullname">Set FULL Name</button>
  </div>
</template>

<script >
import { ref, onMounted,computed } from "vue";
export default {

  setup() {

    const newHeroRef = ref("");
    const newHero = ref("");
    const dcHeros = ref([{ name: 'SuperGirl' }, { name: 'Flash' }, { name: 'Arrow' }, { name: "Superman" }]);

    onMounted(() => {
      newHeroRef.value.focus()
    });

    const herosCount = computed({
      get: () => dcHeros.value.length,
    });

    function remove(index) {
      dcHeros.value = dcHeros.value.filter((hero, i) => i !== index)
    }
    function addHero() {
      if (newHero.value !== "") {
        dcHeros.value.unshift({ name: newHero.value });
        newHero.value = '';
      }
    }
    return { dcHeros, newHero, remove, addHero, newHeroRef,herosCount }
  },
  // computed: {
  //   //it works when depandency changes
  //   //computed properties are cached ,
  //   //once they are computed they are not going to re-computed unless there are some changes in depandencies
  //   herosCount() {
  //     return this.dcHeros.length;
  //   },
  //   randC() {
  //     return Math.random();
  //   },

  //   fullName: {
  //     get() {
  //       return `Full name is ${this.fname} ${this.lname}`
  //     },
  //     set(fullname) {
  //       const values = fullname.split(" ");
  //       this.fname = values[0];
  //       this.lname = values[1];
  //     }

  //   }
  // },
  methods: {
    //it works on every update
    //every time there is an update the method is re-computed 
    //this should not be arrow function because arrow function does not have this and we need to catch whatever we defined in data so we need this keyword

    randM() {
      return Math.random();
    },
    setFullname() {
      this.fullName = "Vue.js Tutorial"
    },

  },
  data() {
    return {
      fname: "Sarthak",
      lname: "Walsh",
      attribute: "value",
      isDisabled: false,
    }
  }
}
</script>