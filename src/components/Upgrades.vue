<template>
	<div class="upgrades">
		<div class="upgrade" v-for="(upgrade, index) in upgrades" :key="index">
			<button :class="`button ${upgrade.disabled ? 'disabled':''} ${upgrade.buyable ? 'buyable':''}`" @click="()=>{buyUpgrade(index)}">
				{{upgrade.name}}{{upgrade.disabled ? `(Level: ${upgrade.unlocklvl})`:''}}
			</button>
			<div class="details">
				<div class="cost">
					Price: {{upgrade.cost}}
				</div>
				<div class="BSec">
					Money per Sec: {{upgrade.BperSec}}
				</div>
				<div class="quantity">
					Quantity: {{upgrade.quantity}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			upgrades() {
				this.$store.commit('AvailaibleBuy')
				return this.$store.getters.AvailaibleUpdate
			}
		},
		methods: {
			buyUpgrade(index) {
				this.$store.commit('buyUpgrade', {
					index,
					amount: 1
				})
			}
		},
	}
</script>

<style lang="scss">
.upgrades{
	background: #222;
	padding: 25px;
	overflow-y: scroll;
	height: 350px;
	
	.upgrade{
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0px -15px 15px;
		
		.button, .cost, .BSec, .quantity{
			color: #fff;
			margin: 0 15px;
		}

		.details{
			flex: 0 100%;
		}

		.button{
			background: none;
			border: none;
			outline: none;
			appearance: none;
			display: inline-block;
			min-width: 300px;
			padding: 15px 25px;
			background: #28a484;
			font-size: 20px;
			font-weight: 700px;
			text-align: center;
			text-transform: uppercase;
			color: #ffffff;
			cursor: pointer;

			&.disabled{
				color: #222;
				background: #CCC;
				pointer-events: none;
			}
			&.buyable{
				border: 3px solid #58ffd5;
			}
		}
	}
}
</style>