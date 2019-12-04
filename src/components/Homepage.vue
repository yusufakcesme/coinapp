<template>
	
	<div class="homepage">
		<h1>Hello!</h1>
		<img src="../../assets/SVG/cubeAsset.svg">
		<h4>Lorem ipsum dolor sit amet,<br>consestetuer</h4>
		<button class="get-started"><a href="signin">GET STARTED</a></button>
		<p>Don't have an account?</p>
		<button class="sign-in">Sign in here</button>
	</div>	

</template>


<script type="text/javascript">
export default {
	name: 'Homepage'
};
</script>



<style type="text/css" scoped>

.homepage h1 {
	text-align: center;
	color: #fff;
	font-size: 3rem;
	margin: 5vw 0;
}

.homepage img {
	width: 8rem;
	height: 8rem;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	color: #00fbaa;
	margin-top: 1.5rem;
}
.homepage h4 {
	text-align: center;
	color: #fff;
	margin-top: 2rem;
	font-size: 1.2rem;
	font-weight: normal;
}
.get-started {
	background-color: #00fbaa;
	color: #2e2951;
	border: 2px solid #00fbaa;
	padding: 14px 28px;
	border-radius: 32px;
	font-size: 24px;
	font-weight: bold;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	margin-top: 3rem;
	cursor: pointer;
	transition: 0.3s;
}
.get-started a {
	text-decoration: none;
	color: #fff;
	letter-spacing: 2px;
}
.get-started:hover {
	background: none;
	border: 2px solid #00fbaa;
}
.homepage p {
	text-align: center;
	margin-top: 2rem;
	color: #fff;
	font-size: 1rem;
	font-weight: 400;
}

.sign-in {
	border: 0;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	margin-top: 0.7rem;
	background: none;
	color: #fff;
	font-size: 1.5rem;
	font-weight: 600;
	border-bottom: 3px solid #ddd;
	padding-bottom: 5px;
	cursor: pointer;
	transition: 0.3s;
}
.sign-in:hover {
	border-bottom: 3px solid #00fbaa;
}
</style>