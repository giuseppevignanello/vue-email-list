const { createApp } = Vue

createApp({
    data() {
        return {
            numberOfEmail: 0,
            emailGenerator: "https://flynn.boolean.careers/exercises/api/random/mail",
            emails: [], 
            errorMessage: null, 
            allEmailGenerated: false,  
        }
    },
    methods: { 
        generateEmail() {
        for (let i = 0; i < this.numberOfEmail; i++) {
            axios
                .get(this.emailGenerator)
                .then(response => {
                    this.emails.push(response.data.response); 
                    if (i === this.numberOfEmail - 1) {
                        allEmailGenerated = true
                        
                    }
                }
                )
                .catch(error => {
                    console.error(error.message),
                    this.errorMessage = error.message
                }
                )
        }
    },
}
}).mount('#app')
