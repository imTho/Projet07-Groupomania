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

            let token = '';

            const login = {
                email,
                password
            }

            //Sending User(POST)
            const options = {
                method: 'POST',
                body: JSON.stringify(login),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                    }
            }

            fetch('http://localhost:3000/api/auth/login', options)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('user', JSON.stringify(data));
                    token = data.token;
                }); 
        }
    }
}
</script>

<style>

</style>