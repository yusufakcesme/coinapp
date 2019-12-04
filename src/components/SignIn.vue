<template>

	
	<form>

		
		<h1>Sign in</h1>
		<div class="form-input">
			<img src="../../assets/SVG/user.svg" style="margin: 7px;" width="30" height="30">
			<input v-model="username" type="text" placeholder="Username">
		</div>

		<div class="form-input">
			<img src="../../assets/SVG/lock.svg" style="margin: 7px;" width="30" height="30">
			<input v-model="password" type="password" name="" placeholder="Password">
		</div>

		<div class="forget-pass">
			<label class="container">
				Remember
				<input type="checkbox" checked="checked">
				<span class="checkmark"></span>
			</label>
			<a href="">Forget Password?</a>
		</div>

		<div class="sign-buttons">
			<button v-on:click="SignIn"  class="sign-in-button">Sign in</button>
			<button class="create-account-btn">Create Account</button>
			<a href="">Don't have an account?</a>
		</div>

	</form>

</template>


<script type="text/javascript">
import axios from "../../node_modules/axios";
import json from "../../json/data.json";
export default {
	name: 'SignIn',
	data() {
		return {
			username: '',
			password: ''
		}
	},
	methods: {
		SignIn: function() {
			if (this.username == json.username && this.password == json.password) {

				this.$router.push({ path: '/Payment' });

			} else if (this.username == json.username && this.password != json.password) {

				alert("Parola yanlış! Lütfen tekrar deneyin.")

			} else if (this.username != json.username && this.password == json.password) {

				alert("Kullanıcı adı yanlış! Lütfen tekrar deneyin")
			}

			if (this.username == "" || this.password == "") {
				
				alert("Lütfen boş bırakmayınız!");
			}
		}
	}
};
</script>



<style type="text/css" scoped>
form h1 {
	text-align: center;
	color: #fff;
	font-size: 3rem;
	margin: 5vw 0;
}

form .form-input {
	border: 2px solid #00fbaa;
	display: flex;
	text-align: center;
	width: 80%;
	border-radius: 5px;
	margin-left: 10%;
	margin-top: 20px;
}

/*
form .form-input i {
	color: #ddd;
	font-size: 32px;
	padding: 10px;
}
*/
form .form-input input {
	border: 0;
	background: none;
	font-size: 20px;
	color: #fff;
	padding: 10px;
}

form .form-input input::placeholder {
	color: #fff;
}

.forget-pass {
	display: flex;
	align-items: center;
	width: 80%;
	margin-left: 10%;
	justify-content: space-between;
	margin-top: 20px;
}

/*----------------checkbox style -----------------*/
.container {
	display: block;
	position: relative;
	padding-left: 35px;
	margin-bottom: 12px;
	cursor: pointer;
	font-size: 22px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	color: #fff;
	font-size: 18px;
}

.container input {
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
}

.checkmark {
	position: absolute;
	top: 0;
	left: 0;
	height: 25px;
	width: 25px;
	background-color: none;
	border: 1px solid #fff;
	border-radius: 2px;
}

.container:hover input ~ .checkmark {
	background-color: none;
}

.container input:checked ~ .checkmark {
	background-color: none;
}

.checkmark:after {
	content: "";
	position: absolute;
	display: none;
}

.container input:checked ~ .checkmark:after {
	display: block;
}

.container .checkmark:after {
	left: 5px;
	top: -5px;
	width: 10px;
	height: 20px;
	border: solid #00fbaa;
	border-width: 0 3px 3px 0;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
}
/*-----------------------------------------------*/


.forget-pass a {
	text-decoration: none;
	color: #ddd;
	font-size: 18px;
}

.sign-buttons {
	display: flex;
	flex-direction: column;
	width: 60%;
	margin-left: 20%;
	margin-top: 80px;
}


.sign-in-button {
	padding: 14px 0;
	font-size: 28px;
	border: 2px solid #00fbaa;
	background-color: #00fbaa;
	color: #2e2951;
	border-radius: 30px; 
	margin-top: 20px;
	transition: 0.3s;
	cursor: pointer;
}
.sign-in-button:hover {
	background: none;
	border: 2px solid #00fbaa;
	color: #fff;
}

.create-account-btn {
	padding: 14px 0;
	font-size: 28px;
	border: 2px solid #00fbaa;
	background: none;
	color: #fff;
	border-radius: 30px;
	margin-top: 20px;
	transition: 0.3s;
	cursor: pointer;
}

.create-account-btn:hover {
	background-color: #00fbaa;
	color: #2e2951;
}

.sign-buttons a {
	text-decoration: none;
	color: #ccc;
	text-align: center;
	margin-top: 15px;
}







</style>