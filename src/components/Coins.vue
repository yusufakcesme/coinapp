<template>
	<div>

		<div class="header-top">
			<h1>Coin Currencies</h1>
		</div>

		<div class="all-boxes">

			<div :class="{ isOpen1 }" class="coin-box">
				<div class="head-box">
					<p>BTC / USD</p>
					<span v-on:click="changeHeight(1)">+</span>
				</div>
				<div class="amount">
					<b>$ {{ info.USD.rate }}</b>
				</div>
				<div class="description">
					<h4>{{ info.USD.description }}</h4>
				</div>	
			</div>

			<div :class="{ isOpen2 }" class="coin-box">
				<div class="head-box">
					<p>BTC / EURO</p>
					<span v-on:click="changeHeight(2)">+</span>
				</div>
				<div class="amount">
					<b>€ {{ info.EUR.rate }}</b>
				</div>
				<div class="description">
					<h4>{{ info.EUR.description }}</h4>
				</div>	
			</div>




		</div>


		<!-- Footer-->
		<footer>
			<div class="footer-elements">
				<button><img src="../../assets/SVG/settings.svg" width="26" height="26"></button>
				<button><img src="../../assets/SVG/tabs.svg" width="26" height="26"></button>
				<button class="active"><img src="../../assets/SVG/cubeAsset.svg" width="50" height="50"></button>
				<div></div>
				<button><img src="../../assets/SVG/statistics.svg" width="26" height="26"></button>
				<button><img src="../../assets/SVG/more.svg" width="26" height="26"></button>
			</div>
		</footer>
	</div>
</template>


<script type="text/javascript">
import axios from "../../node_modules/axios";
export default {
	name: 'Coins',
	data() {
		return {
			info: null,
			isOpen1: false,
			isOpen2: false
		}
	},
	filters: {
		currencydecimal(value) {
			return value.toFixed(2)
		}
	},
	mounted() {
		axios
		.get('https://api.coindesk.com/v1/bpi/currentprice.json')
		.then(response => (this.info = response.data.bpi))
		.catch(error => console.log(error))
	},
	methods: {
		changeHeight: function(id) {
			id == 1 ? this.isOpen1 = !this.isOpen1 : this.isOpen2 = !this.isOpen2
		}
	}
};
</script>



<style type="text/css" scoped>
.header-top {
	width: 100%;
	height: 100px;
	background-color: #1b1638;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 12%;
	color: #fff;
	border-bottom-left-radius: 50px;
	position: absolute;
}

.header-top h1 {
	font-size: 24px;
}



.all-boxes {
	width: 90%;
	height: 300px;
	position: absolute;
	margin-left: 7%;
	top: 20%;
	padding: 10px;
}

.coin-box {
	width: 90%;
	height: 40%;
	background-color: #1b1638;
	border-radius: 10px;
	padding: 10px 15px;
	margin: 10px;
	transition: 0.3s;
	overflow: hidden;
}

.coin-box p {
	color: #fff;
	font-weight: 600;
	font-size: 20px;
	letter-spacing: 1px;
	display: inline-block;
}
.coin-box span {
	color: #524e68;
	font-size: 30px;
	cursor: pointer;
}

.head-box {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.description h4 {
	color: #f2f2f2;
	font-weight: normal;
	margin-top: 50px;
}

.amount {
	color: #00fbaa;
	margin-top: 10px;
}

.isOpen1 {
	height: 60%;
}

.isOpen2 {
	height: 60%;
}

</style>