<template>
  <div class="w-100 add-juice-page">
    <Error :show="EmptyCartError" message="Please select at least one juice to add to your dashboard" @closeError="CloseEmptyCardError()" />
    <!-- <div class="absolute cart-opened-background" :class="{ none: showCartBackground }" @click="closeCart()"></div> -->
    <nav class="navbar navbar-dark bg-dark relative">
        <div class="container">
            <router-link class="navbar-brand" to="/" tabindex="2">Juice Bar</router-link>

            <div class="navbar-rightside-cart-page">

              <Cart />

              <ConfirmCart/>

            </div>
        </div>
    </nav>

    <div class="my-container w-100">
      <div class="w-100 juice-holder mt-5">

        <JuiceList
            v-for="juice in AvailableJuice"
            :key="juice.name"
            :name="juice.name"
            :AllAdds="juice.adds"
            :IncludeAdds="juice.included"
            :count="countJuice( juice.name )"
        />

      </div>
    </div>


  </div>
</template>

<script>

import JuiceList from '@/components/Available-Juices.vue'
import Cart from '@/components/Cart.vue'
import ConfirmCart from '@/components/ConfirmCart.vue'
import Error from '@/components/Error.vue'
import { mapState } from 'vuex'

export default {
  name: "Add-Juice",
  components:{
    JuiceList,
    Cart,
    ConfirmCart,
    Error
  },
  data(){
    return{

      // showCartBackground: true

    }
  },
  computed: mapState([
      'Cart',
      'AvailableJuice',
      'EmptyCartError',
  ]),
  methods:{
    countJuice( juice ){

      if( this.Cart ){

        let juiceInCart = this.Cart.filter( obj => obj.name == juice )


        if( juiceInCart.length && juiceInCart[0].count){

          return juiceInCart[0].count

        }

      }

      return 0;

    },
    ConfirmCart(){

      if( this.Cart.length ){

      }else{

      }

    },
    CloseEmptyCardError(){

      this.$store.state.EmptyCartError = false

    }

  },
  created(){

      // Event.$on('CartOpened' , () => this.showCartBackground = false )

  }
}
</script>

<style>

</style>