<template>
  <div v-if="isEditing" class="fixed edit-user-modal flex just-center align-center">

    <Error :show="err" message="Amount should be at Least 1" @closeError="CloseEmptyAmountError()" />

      <div class="edit-form-wrapper-div bg-white shadow relative">

          <button class="btn rounded-full absolute close-modal text-center" @click="closeModal()">

              <svg class="bi bi-x" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
              </svg>

          </button>

          <form class="w-100 px-5 py-4" @submit.prevent="EditSubmitted()">

            <div class="flex-col just-bet align-center form-group">

                <h6 class="mt-3 mb-4">Edit {{ EditingUser.name }}</h6>

                <div class="w-100 flex just-start align-start">

                    <div class="ingredients flex wrap">

                        <div
                            v-for="ing in JuiceIncludes"
                            :key="ing"
                            class="card-subtitle rounded mt-2"
                            :class="{ 'included': isIncluded( ing ) }"
                            @click="ToggleIng( ing )"
                        >
                            {{ ing }}
                        </div>


                    </div>

                    <div class="image-box">
                        <img :src="`images/${EditingUser.name}.png`" :alt="EditingUser.name">
                    </div>

                </div>

            </div>


            <div class="amount w-100 mt-4 flex just-bet align-center">

                <div class="w-50 flex just-start align-center">
                    <p>Amount:</p>
                </div>

                <div class="flex align-center count-area">

                    <button @click=" EditingUser.count > 0 ? countDown() : null"
                        class="btn bg-primary rounded-full decrease-btn flex just-center align-center " type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="1.3em" height="1.3em"
                        viewBox="0 0 172 172"
                        style=" fill:#fff"><g stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none" fill-rule="nonzero"></path><g fill="current" fill-rule="evenodd"><path d="M14.33333,78.83333v14.33333h143.33333v-14.33333z"></path></g></g></svg>
                    </button>

                    <span class="count-num "> {{ EditingUser.count }}</span>

                    <button @click="countUp()"
                        class="btn bg-primary rounded-full increase-btn flex just-center align-center" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="1.3em" height="1.3em"
                        viewBox="0 0 172 172"
                        style=" fill:#fff"><g stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none" fill-rule="nonzero"></path><g fill="current" fill-rule="evenodd"><path d="M78.83333,14.33333v64.5h-64.5v14.33333h64.5v64.5h14.33333v-64.5h64.5v-14.33333h-64.5v-64.5z"></path></g></g></svg>
                    </button>

                </div>

            </div>

            <div class="w-100 flex just-center update-area align-center">

                <button class="btn submit-btn bg-primary" type="submit">
                    Update
                </button>

            </div>

          </form>
      </div>

      <div class="edit-user-modal-bg fixed"></div>
  </div>
</template>

<script>
import Error from '@/components/Error.vue'
import { mapState } from 'vuex'

export default {
    components:{
        Error
    },
    data(){
        return{

            err: false
        }
    },
    computed: {

        isEditing(){

            return Object.keys(this.EditingUser).length;

        },
        includes(){
            return this.EditingUser.includes
        },
        index(){
            return this.EditingUser.index
        },
        count(){
            return this.EditingUser.count
        },
        JuiceIncludes(){

            var index = this.AvailableJuice.findIndex( data => data.name == this.EditingUser.name )

            return this.AvailableJuice[index].adds

        },
        ...mapState([
            'EditingUser',
            'AvailableJuice'
        ]),
    },
    methods:{
        EditSubmitted(){

            if( this.count > 0 ){

                this.$store.commit( 'UpdateUserJuice' )

            }else{

                this.err = true
            }
        },
        CloseEmptyAmountError(){

            this.err = false
        },
        closeModal(){

            this.$store.state.EditingUser = {}

        },
        isIncluded( ing ){

            return this.includes.includes( ing )
        },
        ToggleIng( ing ){

            if( this.includes.includes(ing) ){

                this.$store.state.EditingUser.includes = this.EditingUser.includes.filter( data => data != ing)

                // this.$store.commit('RemoveAddon', { name, addon } )

            }else{

                this.$store.state.EditingUser.includes.push( ing )

                // this.$store.commit('IncludeAddon', { name, addon } )

            }

        },
        countDown(){

            this.$store.state.EditingUser.count--
        },
        countUp(){

            this.$store.state.EditingUser.count++
        },

    }

}
</script>

<style>

</style>