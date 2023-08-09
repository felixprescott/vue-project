<template>
  <div>
    Counter: {{ counter }}
    <span v-if="counter % 2 === 0">(Odd)</span>
    <span v-else>(Even)</span>
  </div>
  <div>Month name: {{ monthName }}</div>
  <div>
    <label for="amount">Amount: </label>
    <input
      id="amount"
      type="number"
      v-on:change="changeAmount"
      v-bind:value="amount"
    />
    <button @click="inc">inc</button>
    <button @click="dev">dec</button>
  </div>
  <div>
    <ul>
      <li v-for="(user, i) in usersList" :key="`user-${i}`">
        {{ i }}. {{ user }}
      </li>
    </ul>
  </div>
  <div>New user name: {{ customUser }}</div>
  <div>
    <input type="text" v-model="customUser" />
    <button @click="addUser">add</button>
  </div>
</template>

<script setup>
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

import { ref, reactive, computed } from 'vue';

const counter = ref(1);
const amount = ref(1);
const customUser = ref(null);
const usersList = reactive(['Bob', 'Tom', 'John']);

const changeAmount = (e) => {
  amount.value = Number(e.target.value);
};
const inc = () => {
  counter.value += amount.value;
};
const dev = () => {
  counter.value -= amount.value;
};
const addUser = () => {
  usersList.push(customUser.value);
};

const monthName = computed(() => {
  const monthNum = (counter.value - 1) % 12;
  return MONTHS[monthNum];
});
</script>

<style>
body,
input,
button {
  font-size: 30px;
  font-family: monospace;
}
</style>
