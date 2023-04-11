const { createApp } = Vue

createApp({
    data() {
        return {
            emailGenerator: "https://flynn.boolean.careers/exercises/api/random/mail",
            emails: [], 
            errorMessage: null, 
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios
                .get(this.emailGenerator)
                .then(response => {
                    this.emails.push(response.data.response)
                }
                )
                .catch(error => {
                    console.error(error.message),
                    this.errorMessage = error.message
                }
                )
        }
    }, 

}).mount('#app')
