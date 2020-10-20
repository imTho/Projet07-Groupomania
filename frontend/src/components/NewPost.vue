<template>
  <div class="newPost">
      <div class="newPost-create-btn" @click="visible = true">Ajouter un nouveau post</div>

    <transition name="fade">
      <div class="overlay" v-if="visible">
          <div class="form-wrapper">
            <span class="form-close"  @click="visible = false">Fermer</span>
            <form class="newPost-form" @submit.prevent="sendNewPost()">

                <label for="newPost-title">Titre</label>
                <input id="newPost-title" type="text" placeholder="Titre de votre post..." required>

                <label for="newPost-content">Contenu</label>
                
                <editor
                    apiKey="pwm5eqs0wnsqf0ip208nkercdytlgj4hyr2nx8544cd44c8k"
                    v-model="content"
                    :init="{
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link',
                        'searchreplace visualblocks code fullscreen',
                        'print preview anchor insertdatetime media',
                        'paste code help wordcount table'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic | \
                        alignleft aligncenter alignright | \
                        bullist numlist outdent indent | help'
                    }"
                >
                    <textarea id="newPost-content" placeholder="Contenu de votre post..."></textarea>
                </editor>
                

                <button id="newPost-btn" type="submit" >Publier</button>

            </form>
          </div>
      </div>
    </transition>

  </div>
</template>

<script>
import axios from 'axios';
import Editor from '@tinymce/tinymce-vue'

export default {
    name: 'NewPost',

    components: {
      editor: Editor
    },

    data(){
        return{
            visible: false,
            content: '',
        }
    },

    methods: {
        sendNewPost(){
            const title = document.getElementById("newPost-title").value;
            const content = this.content;

            console.log(content);

            axios.post(`${this.$apiUrl}/posts/newPost`,
                    {
                        userId: this.$user.userId,
                        title,
                        content
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${this.$token}`
                        }
                    }
                )
                .then( this.visible = false)
                .then(this.$root.$emit('Posts'));
        }
    }
}
</script>

<style scoped> 

    .newPost{
        padding: 20px 20px 0px 20px ;   
    }

    .newPost-create-btn{
        margin: 30px auto;
        padding: 20px;
        border-radius: 30px;
        background-color: rgb(255, 34, 34);
        color: white;
        max-width: 750px;
        font-size: 1.5rem;
        transition-duration: 0.2s;
        cursor: pointer;
    }

    .newPost-create-btn:hover{
        transform: scale(1.02);
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

    .newPost-form{
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

    #newPost-content{
        height: 200px;
        width: calc(100% - 20px);
        padding: 10px;
        resize: none;
        overflow-y: scroll;
    }

    #newPost-btn{
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

    /* Transition */
    .fade-enter-active, .fade-leave-active {
    transition: opacity .8s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
</style>