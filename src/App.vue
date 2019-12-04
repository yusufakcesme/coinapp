<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Homepage from './components/Homepage.vue';
import SignIn from './components/SignIn.vue';
import Payment from './components/Payment.vue';
import Expenses from './components/Expenses.vue';
import Coins from './components/Coins.vue';
import SendMoney from './components/SendMoney.vue';
import Sendto from './components/Sendto.vue';

export default {
  name: 'app',
  components: {
    Homepage,
    SignIn,
    Payment,
    Expenses,
    Coins,
    SendMoney,
    Sendto
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

body {
  background: #2e2951;
  font-family: Arial;
}


footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #1b1638;
  padding: 0 5%;
}

.footer-elements {
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  justify-content: space-between;
  position: relative;
}

.footer-elements button {
  color: #524e68;
  font-size: 1.4rem;
  background-color: #1b1638;
  border: 0;
  cursor: pointer;
}

.active {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  border-radius: 50%;
  padding: 15px;
  transition: 0.2s;
}
.active:hover {
  bottom: 15%;
}
</style>
