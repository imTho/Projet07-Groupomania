<template>
    <div class="wrapper">
        <form @submit.prevent = signup()>
            <img src="/assets/img/groupomania-logo.png" alt="Groupomania logo">
            <nav><router-link to="/">Se connecter</router-link> | <router-link to="/signup" class="active">S'incrire</router-link></nav>
            <input id="signup-nom" type="text" placeholder="Nom" required>
            
            <input id="signup-prenom" type="text" placeholder="Prenom" required>

            <input id="signup-password" type="password" placeholder="Mot de passe" required>

            <input id="signup-password-verification" type="password" placeholder="Vérifier mot de passe" required>

            <input id="signup-email" type="email" placeholder="Email" required>

            <div class="error-message">{{message}}</div>

            <button id="signup-btn" type="submit">S'inscrire</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SignupForm',

    data() {
        return {
            message: "",
        };
    },

    methods: {
        signup(){
            const nom = document.getElementById("signup-nom").value;
            const prenom = document.getElementById("signup-prenom").value;
            const password = document.getElementById("signup-password").value;
            const passwordVerif = document.getElementById("signup-password-verification").value;
            const email = document.getElementById("signup-email").value;

            if(password === passwordVerif){
                axios.post(`${this.$apiUrl}/auth/signup`,
                    {
                        nom,
                        prenom,
                        password,
                        email
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
                .then( res =>{
                        console.log(res);
                        location.href = "/";
                    }
                )
            }

            else{
                this.message = "Vérifier le mot de passe";
            }   
        }
    }
}
</script>

<style scoped>
    .wrapper{
        max-width: 500px;
        margin: 90px auto;
    }

    img{
        width: 100%;
    }

    nav{
        font-size: 1.05rem;
        margin: 20px;
    }

    .active{
        color: rgb(255, 2, 2);
        font-weight: bold;
    }

    form{
        display: flex;
        flex-direction: column;
    }

    form label{
        color: rgba(0, 0, 0, .5);
        margin: 10px;
    }

    .error-message{
        background-color: rgba(255, 0, 0, 0.301);
    }

    form input{
        font-size: 1.05rem;
        padding: 10px;
        margin-bottom: 15px;
        text-align: center;
    }

    #signup-btn{
        padding: 10px;
        font-size: 1.1rem;
        color: white;
        background-color: rgb(43, 42, 42);
        border: none;
        border-radius: 10px;
        transition-duration: 0.2s;
        cursor: pointer;
    }

    #signup-btn:hover{
        transform: scale(1.025);
    }
    
</style>