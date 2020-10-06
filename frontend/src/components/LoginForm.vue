<template>
    <div>
        <h2>Connexion</h2>
        <label for="email">Email</label>
        <input id="login-email" type="text" required>
        
        <label for="password">Mot de passe</label>
        <input id="login-password" type="password" required>

        <button id="login-btn" @click= login()>Connexion</button>
    </div>
</template>

<script>
export default {
    name: 'LoginForm',

    methods: {

        login(){
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            const login = {
                email,
                password
            }

            //Sending Order(POST)
            const options = {
                method: 'POST',
                body: JSON.stringify(login),
                headers: {'Content-Type': 'application/json'}
            }

            fetch('http://localhost:3000/api/auth/login', options)
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }
}
</script>

<style>

</style>