const app = Vue.createApp({
    data: () => ({
        portfolioData: null
    }),
    async mounted() {
        try {
            let a = await fetch("https://api.github.com/users/pizzacode-byte/repos"),
                b = await a.json();
            this.portfolioData = b
        } catch (c) {
            this.portfolioData = c
        }
    }
});
app.mount("#portfolio")