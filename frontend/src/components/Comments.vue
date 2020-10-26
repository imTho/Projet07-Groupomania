<template>
  <div class="Comments">
      
        <form @submit.prevent= newComment()>
            <label for="new-comment">Laisser un commentaire :</label>
            <textarea name="newComment" id="new-comment" placeholder="Laisser un commentaire..." required></textarea>
            <button type="submit" id="send-comment">Envoyer</button>
        </form>

        <h2 v-if="comments.length > 0">Commentaires :</h2>

        <div class="comments">
            <div class="comment" v-for="comment in comments" :key="comment.id">
            <div class="comment-info">Par {{comment.prenom}} {{comment.nom}} le {{dateFormat(comment.date)}} 
                <span @click="deleteComment(comment.id)" v-if="comment.userId == $user.userId || $user.admin == 1" :key="comment.id">Supprimer</span>
            </div>
            {{comment.content}}
            </div>
        </div>
        
  </div>
</template>

<script>
import axios from 'axios';

export default {
    names: 'Comments',

    data(){
        return{
            comments: []
        }
    },

    mounted(){
        this.getAllComments();
    },

    methods: {
        newComment(){
            const postId = parseInt(this.$route.params.id);
            const userId = this.$user.userId;
            const content = document.getElementById('new-comment').value;

            axios.post(`${this.$apiUrl}/posts/${postId}/comment/`,
                {
                    userId,
                    content
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.$token}`
                    }
                }
            )
            .then(this.getAllComments());
        },

        getAllComments(){
            const postId = parseInt(this.$route.params.id);

            axios.get(`${this.$apiUrl}/posts/${postId}/comments`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.$token}`
                    }
                }
            )
            .then(res => {
                this.comments = res.data;
            });
        },

        deleteComment(commentId){
            axios.delete(`${this.$apiUrl}/posts/comment/${commentId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.$token}`
                    }
                }
            )
            .then(this.getAllComments());
        },

        dateFormat(date){
            const event = new Date(date);

            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

            return event.toLocaleDateString('fr-FR', options);
        }

    }
}
</script>

<style scoped>
    .Comments{
        max-width: 800px;
        margin: 0 auto;
        padding: 30px;
    }

    label{
        text-align: left !important;
    }

    textarea{
        margin: 20px 0px 20px 0px;
        height: 70px;
        width: calc(100% - 22px);
        padding: 10px;
        resize: none;
        overflow-y: scroll;
    }

    button{
        margin-top: 20px;
        padding: 10px;
        font-size: 1.1rem;
        color: white;
        background-color: rgb(43, 42, 42);
        border: none;
        border-radius: 10px;
        transition-duration: 0.2s;
        cursor: pointer;
        margin: 0px 20px 50px 20px;
    }

    .comment{
        padding: 20px 20px 20px 30px;
        border-left: 5px solid rgb(43, 42, 42);
        margin-top: 20px;
        box-shadow: 0px 0px 50px -7px rgba(0,0,0,0.1);
        text-align: left;
        transition-duration: .1s;
    }

    .comment-info{
        display: flex;
        justify-content: space-between;
        color: rgb(0, 0, 0);
        font-size: .8rem;
        margin-bottom: 10px;
    }

    .comment-info span{
        cursor: pointer;
        color: rgb(255, 0, 0);
        font-weight: bold;
    }

    label{
        font-size: 0.8rem;
        font-weight: bold;
        color: rgb(109, 109, 109);
        text-align: left;
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
</style>