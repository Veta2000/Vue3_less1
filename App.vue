<template>
    <div>
      <h2>{{ message }}</h2>
      <p>Counter: {{ counter }}</p>
      <button @click="counter++">Увеличить значение</button>
      
      
      <input type="text" v-model="inputText" placeholder="Текст">
      <p>Input Text: {{ inputText }}</p>
      
   
      <GreetingComponent />
      <MessageComponent />
    </div>
  </template>
  <script>
  import GreetingComponent from './components/GreetingComponent.vue';
  import MessageComponent from './components/MessageComponent.vue';

export default {
components: {
GreetingComponent, MessageComponent
},

  name: 'App',
  data() {
    return {
      message: ' Привет!',
      counter: 0,
      inputText: ''
    };
}
  };
  </script>

  <style>
  h2 {
    color: red;
  }
  </style>
  