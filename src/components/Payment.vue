<template>
	<div>


		<div class="payment-header">
			<h1>Payment</h1>
			<!--<i class="far fa-bell"></i>-->
		</div>

		<div class="card-info">
			<div class="left-inputs">
				<p>Card Number</p>
				<input type="text" :value="number">
				<p>Name Surname</p>
				<input type="text" :value="name">
			</div>
			<div class="right-inputs">
				<p>Expires</p>
				<input type="text" :value="expires">
				<p>CVC</p>
				<input type="text" :value="cvc">
			</div>
		</div>

		<div class="spending">
			<div class="spending-row">
				<p>Green Tea <span>3x</span></p>
				<h3>12$</h3>
			</div>
		</div>

		<div class="total-amount">
			<p>Total Amount: </p> <h2>32$</h2>
		</div>


		<!-- Footer-->
		<footer>
			<div class="footer-elements">
				<button><img src="../../assets/SVG/settings.svg" width="26" height="26"></button>
				<button><a href="expenses"><img src="../../assets/SVG/tabs.svg" width="26" height="26"></a></button>
				<button class="active"><a href="payment"><img src="../../assets/SVG/cubeAsset.svg" width="50" height="50"></a></button>
				<div></div>
				<button><a href="coins"><img src="../../assets/SVG/statistics.svg" width="26" height="26"></a></button>
				<button><img src="../../assets/SVG/more.svg" width="26" height="26"></button>
			</div>
		</footer>

	</div>
</template>


<script type="text/javascript">
import json from "../../json/data.json";
export default {
	name: 'Payment',
	data() {
		return {
			number: json.number,
			name: json.name,
			expires: json.expires,
			cvc: json.cvc
		}
	}
};
</script>



<style type="text/css" scoped>

.payment-header	{
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

.payment-header h1 {
	font-size: 34px;	
}

.payment-header i {
	font-size: 38px;
}
.spending {
	width: 100%;
	min-height: 30vh;
	background-color: #1b1638;
	position: relative;
	margin-top: -10vh;
	z-index: -1;
	border-bottom-left-radius: 50px;
	padding: 0 12%;
}

.spending-row{
	width: 50vh;
	height: 40px;
	border-bottom: 3px solid #515172;
	position: absolute;
	margin-top: 15vh;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
}

.spending-row p {
	color: #fff;
	font-size: 1.2rem;
	font-weight: 600;
}
.spending-row p span {
	color: #524e68;
	padding-left: 10px;
}

.spending-row h3 {
	color: #fff;
	font-weight: 600;
}

.total-amount {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 5% 12%;
	color: #fff; 
}
.total-amount p {
	font-size: 1.2rem;
	font-weight: 600;
	letter-spacing: 1.5px;
}
.total-amount h2 {
	font-size: 2rem;
}
/*-------------------*/

.card-info {
	width: 100%;
	height: 50vh;
	background: rgb(44,163,159);
	background: linear-gradient(90deg, rgba(44,163,159,1) 20%, rgba(0,251,170,1) 100%);
	border-bottom-left-radius: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0 0 6%;
}

.left-inputs p {
	margin-top: 50px;
	color: #1b1638;
	font-weight: 600;
}

.left-inputs input {
	width: 200%;
	border: 0;
	border-bottom: 3px solid #2e2951;
	background: none;
	color: #1b1638;
	font-weight: 600;
	font-size: 1rem;
	margin-top: 5px;
}

.right-inputs input {
	width: 60%;
	border: 0;
	border-bottom: 3px solid #2e2951;
	background: none;
	color: #1b1638;
	font-weight: 600;
	font-size: 1rem;
	margin-top: 5px;

} 
.right-inputs p {
	margin-top: 50px;
	color: #1b1638;
	font-weight: 600;
}

.right-inputs {
	margin-left: 40%;
}



</style>