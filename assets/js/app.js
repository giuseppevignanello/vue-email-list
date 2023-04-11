const { createApp } = Vue

  createApp({
    data() {
      return {
          emailGenerator : "https://flynn.boolean.careers/exercises/api/random/mail",
          randomEmail: null
      }
    },
    mounted() {
        axios
        .get(this.emailGenerator)
        .then(response =>
           this.randomEmail = response.data.response)
    }
  }).mount('#app')
