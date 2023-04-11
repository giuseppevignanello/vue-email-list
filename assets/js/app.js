const { createApp } = Vue

createApp({
    data() {
        return {
            emailGenerator: "https://flynn.boolean.careers/exercises/api/random/mail",
            emails: []
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
        }


    }
}).mount('#app')
