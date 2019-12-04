<template>
	<div>
		<div class="header-top">
			<h1>Send to:</h1>
		</div>

		<div class="find-box">
			<p>Add new friends</p>
			<h2>Find people nearby</h2>
			<span>X</span>
		</div>

		<h2 class="title">Your Friends: </h2>

		<div class="all-users">
			
			<div class="users">
				<div class="user-image"></div>
				<div class="user-info">
					<p>Name Surname</p>
					<span>+00 123 456 789</span>
				</div>
				<div class="go-icon">X</div>
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
	name: 'Sendto',
	data() {
		return {

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


.find-box {
	width: 90%;
	margin-left: 5%;
	height: 150px;
	background-color: #1b1638;
	position: absolute;
	top: 20%;
	border-radius: 5px;
}
.find-box p {
	color: #ccc;
	text-align: center;
	padding: 15px 0;
	font-size: 18px;
}

.find-box h2 {
	color: #fff;
	text-align: center;
}
.find-box span {
	margin-left: 48%;
	color: #00fbaa;
	font-size: 28px;
	line-height: 60px;
}
.title {
	position: absolute;
	top: 50%;
	margin-left: 5%;
	color: #f2f2f2;
	letter-spacing: 1px;
}

.users {
	position: absolute;
	top: 60%;
	width: 90%;
	margin-left: 5%;
	height: 70px;
	background-color: #1b1638;
	border-radius: 5px;
	padding: 5px;
	display: flex;
	align-items: center;
}


.user-image {
	width: 50px;
	height: 50px;
	background-color: #f4f4f4;
	border-radius: 25px;
	margin-left: 10px;
}

.user-info {
	padding: 0 10px;
	text-align: center;
}
.user-info p {
	color: #fff;
	font-weight: 500;
}
.user-info span {
	color: #555;
}
.go-icon {
	color: #00fbaa;
	font-size: 30px;
	position: absolute;
	right: 0;
	padding-right: 25px;
}
</style>