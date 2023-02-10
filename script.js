console.log('ciao vue', Vue);

const app = Vue.createApp({

    data() { //metodo data

        return {
            message: 'hello!',
            image: 'https://static.macupdate.com/products/54025/l/visual-studio-code-logo.png?v=1671090395'
        }
    }
});

app.mount("#root");
