console.log('ciao vue', Vue);

const app = Vue.createApp({

    data() { //metodo data

        return {
            message: 'hello!'
        }
    }
});

app.mount("#h1");