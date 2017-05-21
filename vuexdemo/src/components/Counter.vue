<template>
  <div class="Counter">
    Counter is {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'Counter',
  computed: mapGetters([
    'count'
    ]),
  methods: mapActions([
    'increment',
    'decrement'
    ])
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
