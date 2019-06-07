<template>
  <div id="data-display">
    <p>{{ toDisplay }}</p>
  </div>
</template>

<script>
const url = "https://swapi.co/api/people/1/";
fetch(url)
    .then(response => response.json())
    .then(json => console.log(json));


export default {
  name: "DataDisplay",
  data() {
      return {
          toDisplay: 'Display here'
      }
  }
};
</script>
