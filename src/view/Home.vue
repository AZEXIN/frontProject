<template>
  <div class="home">
    <img src="../assets/logo.png"/>
     
    <HelloWord></HelloWord>
  </div>
</template>

<script>

import HelloWord from '../components/HelloWorld.vue'

export default {
  name:'name',
  components: {
      HelloWord
  },
  props: {},
  data() {
    return {
        
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>

</style>