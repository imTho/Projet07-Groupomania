<template>
    <div>
        <img src="/assets/img/icon-above-font.svg" alt="Groupomania logo">
        <nav><span>Se connecter</span> | <span>S'inscrire</span></nav>
        <form @submit.prevent = login()>
            <label for="email">Email</label>
            <input id="login-email" type="text" placeholder="Email" required>
            
            <label for="password">Mot de passe</label>
            <input id="login-password" type="password" placeholder="Mot de passe" required>

            <button id="login-btn" type="submit">Connexion</button>

            <div class="error-message">{{message}}</div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginForm',

    data() {
        return {
            message: "",
        };
    },

    methods: {

        login(){
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            axios.post('http://localhost:3000/api/auth/login',
                {
                    email,
                    password
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data));
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    this.message = "Email ou mot de passe invalide.";
                }
                if (error.response.status === 500) {
                    this.message = "Erreur serveur.";
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    div{
        max-width: 800px;
        form{

        }
    }
    
</style>