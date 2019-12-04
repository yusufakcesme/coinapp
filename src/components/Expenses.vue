<template>
	<div>

		<div class="header-top">
			<h1>Welcome, Your Name</h1>
		</div>


		<div class="total-value">
			<span>$35.340</span>
			<p>21 October, 2019</p>
		</div>

		<div class="chart-graphic">
		</div>


		<div class="expenses">
			
			<div class="expense-box">
				<div class="left-side">
					<span>Transport</span>
					<p>Lorem ipsum</p>
				</div>

				<div class="right-side">
					<span>-$15.45</span>
					<p>21/10/2019 - 9:15 am</p>
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
	name: 'Expenses'
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


.expenses {
	width: 90%;
	height: 200px;
	background-color: #1b1638;
	position: absolute;
	margin-left: 5%;
	border-radius: 10px;
	top: 40%; 
}

.expense-box {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 0;
	border-bottom: 2px solid #524e68;
	width: 90%;
	margin-left: 5%;
}

.left-side span {
	color: #524e68;
	font-size: 14px;
}
.left-side p {
	color: #fff;
	font-weight: 600;
	padding-top: 5px;
}

.right-side {
	text-align: right;
}

.right-side span {
	color: #00fbaa;
	font-weight: 500;
	letter-spacing: 1px;
}
.right-side p {
	color: #524e68;
	font-size: 15px;
	padding-top: 5px;
}




</style>