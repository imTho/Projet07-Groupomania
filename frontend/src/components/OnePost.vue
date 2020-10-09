<template>
    <div class="onePost">
        <div class="post-wrapper" v-if="!modify">
            <h2 class="post-title">{{this.post.title}}</h2>
            <div class="post-content">{{this.post.content}}</div>
        </div>

        <div class="modify-wrapper" v-if="modify">
            <input type="text" class="modify-title" v-model="this.post.title">
            <textarea class="modify-content" v-model="this.post.content"></textarea>
        </div>

        <button v-if="authorized && !modify" @click="modify = true">Modifier</button>
        <button v-if="modify">Publier les modifications</button>
        <button v-if="modify" class="delete-btn" @click="deleteOnePost()">Supprimer le post</button>
    </div>
    
</template>

<script>
import axios from 'axios';

export default {
    name: 'OnePost',

    data(){
        return{
            post: [],
            authorized: false,
            modify: false
        }
    },

    mounted(){
        this.getOnePost();
    },

    methods: {
        getOnePost(){
            const postId = this.$route.params.id;
            
            axios.post(`${this.$apiUrl}/posts/getOnePost`,
                {
                    postId,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.$token}`
                    }
                }
            )
            .then(res => {
                this.post = res.data[0];

                if(this.$user.userId === this.post.userId){
                    this.authorized = true;
                 }

                else{
                    this.authorized = false;
                }
            })
        },

        deleteOnePost(){
            const postId = this.$route.params.id;
            
            axios.post(`${this.$apiUrl}/posts/deleteOnePost`,
                {
                    postId,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.$token}`
                    }
                }
            )
            .then(location.href = "/");
        }
    }
}
</script>

<style scoped>
    /* Post style */
    .post-wrapper{
        margin: 50px auto;
        padding: 30px;
        max-width: 800px;
        text-align: left;
        box-shadow: 0px 0px 50px -7px rgba(0,0,0,0.1);
        border-bottom: solid red 5px;
    }

    .post-title {
        margin: 0;
        color: red;
        font-size: 2rem;
    }

    .post-content{
        margin-top: 20px;
    }

    /* Modify style */

    .modify-wrapper{
        display: flex;
        flex-direction: column;
        margin: 50px auto;
        padding: 30px;
        max-width: 800px;
        text-align: left;
        box-shadow: 0px 0px 50px -7px rgba(0,0,0,0.1);
        border-bottom: solid red 5px;
    }

    .modify-title {
        margin: 0;
        color: red;
        font-size: 2rem;
    }

    .modify-content{
        margin-top: 20px;
        height: 200px;
        width: calc(100% - 22px);
        padding: 10px;
        resize: none;
        overflow-y: scroll;
    }

    .onePost button{
        margin-top: 20px;
        padding: 10px;
        font-size: 1.1rem;
        color: white;
        background-color: rgb(43, 42, 42);
        border: none;
        border-radius: 10px;
        transition-duration: 0.2s;
        cursor: pointer;
        margin: 0px 20px 0px 20px;
    }

    .delete-btn{
        background-color: red !important;
    }
</style>