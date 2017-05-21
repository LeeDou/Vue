<template>
  <div id="app">
    Count is {{ $store.state.count }}
    <button @click="increment">+3</button>
    <button @click="decrement">-2</button>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
  name: 'app',
  computed: mapGetters([]),
  methods: mapActions([
    'increment',
    'decrement'
    ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
