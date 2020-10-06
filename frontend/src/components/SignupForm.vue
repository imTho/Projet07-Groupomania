<template>
    <div>
        <h2>Inscription</h2>
        <label for="nom">Nom</label>
        <input id="nom" type="text" required>
        
        <label for="prenom">Prenom</label>
        <input id="prenom" type="text" required>

        <label for="password">Mot de passe</label>
        <input id="password" type="password" required>

        <label for="email">Email</label>
        <input id="email" type="email" required>

        <button id="signup-btn" @click= signup()>S'inscrire</button>
    </div>
</template>

<script>
export default {
    name: 'SignupForm',

    methods: {

        signup(){
            const nom = document.getElementById("nom").value;
            const prenom = document.getElementById("prenom").value;
            const password = document.getElementById("password").value;
            const email = document.getElementById("email").value;

            const user = {
                nom,
                prenom,
                password,
                email
            }

            //Sending Order(POST)
            const options = {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {'Content-Type': 'application/json'}
            }

            fetch('http://localhost:3000/api/auth/signup', options)
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }
}
</script>

<style>

</style>