<template>
  <div class="hello">
    Count is {{count}}
    <button @click='increment'>+1</button>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  computed: mapGetters(['count']),
  methods: mapActions([
    'increment'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
