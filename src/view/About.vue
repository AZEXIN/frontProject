<template>
  <div class="about">
        <img  src="../assets/logo.png"/>
        
        <HelloWord></HelloWord>
  </div>

</template>

<script>

import HelloWord from '../components/HelloWorld.vue'

export default {
    name:"about",
    components:{
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
}
</script>

<style>
    .about{
        margin: left 20px; ;
    }
</style>