<template>
    <div class="modifyPost">
        <transition name="fade">
            <div class="overlay">
                <div class="form-wrapper">
                    <span class="form-close" @click="close()">Fermer</span>
                    <form class="modifyPost-form" @submit.prevent="">
                        <label for="modifyPost-title">Modifier le titre</label>
                        <input id="modifyPost-title" type="text" placeholder="Titre de votre post..." required>
                        <label for="modifyPost-content">Modifier le contenu</label>
                        <textarea id="modifyPost-content" placeholder="Contenu de votre post..." required></textarea>
                        <div class="btn-wrapper">
                            <button id="modifyPost-btn" type="submit" >Modifier</button>
                            <button id="delete-btn" type="submit" >Supprimer</button>
                        </div>
                    </form>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ModifyPost',

    data(){
        return{
        }
    },

    props: {
        postId: {
            type: Number,
            required: true,
        }
    },

    methods:{
        
    }
}
</script>

<style scoped>
    .modify-btn{
        color: red;
        cursor: pointer;
        transition-duration: 0.2s;
    }

    .modify-btn:hover{
        color: rgb(248, 143, 143);
    }

    .overlay{
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(31, 30, 30, 0.678);
        z-index: 1;
    }

    .form-wrapper{
        box-sizing: border-box;
        background-color: white;
        display: flex;
        flex-direction: column;
        padding: 5%;
        width: 800px;
        height: 80%;
        border-radius: 30px;
    }

    .form-close{
        cursor: pointer;
        align-self: flex-end;
    }

    .modifyPost-form{
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    form input{
        font-size: 1.05rem;
        padding: 10px;
        margin-bottom: 15px;
        text-align: center;
        text-align: left;
        margin-bottom: 30px;    
    }

    form label{
        color: red;
        font-weight: bold;
        font-size: 1.3rem;
        margin-bottom: 10px;
    }

    #modifyPost-content{
        height: 200px;
        width: calc(100% - 20px);
        padding: 10px;
        resize: none;
        overflow-y: scroll;
    }

    #modifyPost-btn{
        margin-top: 20px;
        padding: 10px;
        font-size: 1.1rem;
        color: white;
        background-color: rgb(43, 42, 42);
        border: none;
        border-radius: 10px;
        transition-duration: 0.2s;
        cursor: pointer;
    }

    #delete-btn{
        margin-top: 20px;
        margin-left: 20px;
        padding: 10px;
        font-size: 1.1rem;
        color: white;
        background-color: red;
        border: none;
        border-radius: 10px;
        transition-duration: 0.2s;
        cursor: pointer;
    }

    /* Transition */
    .fade-enter-active, .fade-leave-active {
    transition: opacity .8s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
</style>