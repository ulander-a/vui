<template>
  <div id="data-display">
    <p>{{ toDisplay }}</p>
  </div>
</template>

<script>
const url = "https://swapi.co/api/people/1/"
// fetch(url)
//   .then(response => response.json())
//   .then(json =>  console.log(json))


export default {
  name: "DataDisplay",
  methods: {
    getData(url) {
      this.isFetching = true
      fetch(url)
        .then(res => res.json())
        .then(json => {
          this.isFetching = false
          this.toDisplay = json
          console.log(json)
        })
        .catch(err => this.isFetching = false)
    }
  },
  data() {
      return {
          isFetching: false,
          toDisplay: 'Display here'
      }
  },
  mounted: function() {
    console.log('Mounted')
    this.getData(url)
  }
}
</script>
