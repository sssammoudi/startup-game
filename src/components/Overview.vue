<template>
  <div class="overview">
	<h3>Current Bytes: </h3>
	<div class="Bytes">{{Bytes}}</div>
	<div class="BperSec">Bytes per Second: {{BperSec}}</div>
	<div class="lvl">Current Level: {{lvl}}</div>
	<div class="next-lvl">Before Next Level: {{NextLvl}}</div>
  </div>
</template>

<script>
export default {
    computed: {
        Bytes() {
            return Math.round(this.$store.state.Bytes)
        },
        BperSec() {
            return (this.$store.state.BperSec).toFixed(1)
        },
        lvl() {
            return this.$store.state.player.level
        },
        NextLvl() {
            return this.$store.getters.nextLvl
        }
    },
}
</script>

<style>
.overvew{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
}
h3{
    color: #222;
    font-size: 24px;
    font-weight: 400px;
    margin-bottom: 15px;
    text-align: center;
}
.Bytes{
    padding: 15px 25px;
    background-color: #28a484;
    border-radius: 8px;
    color: #fff;
    font-size: 60px;
    font-weight: 900px;
    text-align: center;
    margin-bottom: 30px;
}
.BperSec, .lvl, .next-lvl {
    margin-bottom: 15px;
    color: #222;
    font-size: 18px;
    font-weight: 500px;
    font-style: italic;
    text-align: center;
}
</style>
