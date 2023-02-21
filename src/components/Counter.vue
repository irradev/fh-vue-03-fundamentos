<template>
  <h2>{{customTitle}}</h2>
  <p> {{counter}} <sup>2</sup> = {{squareCounter}}</p>
  <div>
    <button @click="increase"> +1 </button>
    <button v-on:click="decrease"> -1 </button>
  </div>

</template>

<script>
export default {
  name: 'Counter',
  // props: ['title', 'start'],
  props: {
    title: String,
    start: {
      type: Number,
      // required: true,
      default: 100,
      validator(value) {
        return value > 100
      }
    },
  },
  data() {
    return  {
      counter: this.start
    }
  },
  methods: {
    getSquareValue() {
      console.log('getSquareValue')
      return this.counter * this.counter
    },
    increase() {
      this.counter = this.counter + 1
    },
    decrease() {
      this.counter--;
    }
  },
  computed: {
    squareCounter() {
      console.log('computed squareCounter')
      return this.counter * this.counter
    },
    customTitle() {
      return this.title || 'Counter'
    }
    
  }
}
</script>
<style lang="css">
  button {
    background-color: #64BB87;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    padding: 8px 20px;
    transition: 0.3s ease-in-out;
   margin: 0 5px; 
  }

  button:hover {
    background-color: #5AA67B; 
  }
</style>