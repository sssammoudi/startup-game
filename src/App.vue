<template>
  <div class="Game">
    <Overview></Overview>
    <Upgrades></Upgrades>
  </div>
</template>

<script>
import Overview from './components/Overview.vue'
import Upgrades from './components/Upgrades.vue'
export default {
  name: 'App',
  components: {
    Overview,
    Upgrades
  },
  methods: {
    Coding() {
      this.$store.commit('incrementB', this.$store.state.BperPrs)
    },
    Loop() {
      this.$store.commit('BperSecs')
      this.levelManager()
      requestAnimationFrame(this.Loop)
    },
    levelManager(){
      if(this.$store.getters.nextLvl<=0){
        this.$store.commit('levelUp')
      }
    },
  },
  created () {
    this.Loop()
    window.onload = ()=>{
      document.querySelector('.overview').addEventListener('mousedown', this.Coding)
    }
  },
  destroyed () {
    window.addEventListener('keypress', this.Coding)
  },
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'montserret', sans-serif;
}
</style>
