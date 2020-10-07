<template>
    <div>
        <form @submit.prevent = signup()>
            <h2>Inscription</h2>
            <label for="nom">Nom</label>
            <input id="signup-nom" type="text" placeholder="Nom" required>
            
            <label for="prenom">Prenom</label>
            <input id="signup-prenom" type="text" placeholder="Prenom" required>

            <label for="password">Mot de passe</label>
            <input id="signup-password" type="password" placeholder="Mot de passe" required>

            <label for="password-verification">Vérification du mot de passe</label>
            <input id="signup-password-verification" type="password" placeholder="Vérifier mot de passe" required>

            <div class="error-message">{{message}}</div>

            <label for="email">Email</label>
            <input id="signup-email" type="email" placeholder="Email" required>

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
                axios.post('http://localhost:3000/api/auth/signup',
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
            }

            else{
                this.message = "Vérifier le mot de passe";
            }

            
        }
    }
}
</script>

<style>

</style>