<template>
	<div>
		<div class="header-top">
			<h1>Coin Currencies</h1>
		</div>
		<div class="total-value">
			<span>$00.000</span>
			<p>21 October, 2019</p>
		</div>	

		<div class="send-money-box">
			<div class="dropdown">
				<div class="account-infos">
					<p>Selected Account</p>
					<h3>0000 0000 0000 0000</h3>
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
export default {
	name: 'SendMoney',
	data() {
		return {

		}
	},
	computed: {
		dropdown: function() {
			
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


.total-value {
	text-align: center;
	position: relative;
	top: 120px;
}
.total-value span {
	font-size: 34px;
	color: #00fbaa;
	letter-spacing: 2px;
}

.total-value p {
	color: #ccc;
}


.send-money-box {
	width: 84%;
	margin-left: 8%;
	border-radius: 10px;
	background-color: #1b1638;
	height: 320px;
	position: absolute;
	top: 32%;
	display: flex;
	justify-content: space-between;
}

.dropdown {
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 20px;
	height: 80px;
	border-bottom: 2px solid #524e68;
	width: 90%;
	margin-left: 5%;
}



.account-infos p {
	color: #ccc;
}

.account-infos h3 {
	color: #00fbaa;
	font-weight: 500;
	letter-spacing: 1px;
}

.account-infos span {

}


</style>