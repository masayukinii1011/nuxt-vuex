<template>
  <div>
    <p>Count:{{count}} Index:{{index}}</p>
    <button v-on:click="$store.dispatch('counter/countUp', index)">+</button>
    <button v-on:click="$store.dispatch('counter/countReset', index)">Reset</button>
  </div>
</template>

<script>
export default {
  props: {
    count: Number,
    index: Number
  }
}
</script>

<style>

</style>
