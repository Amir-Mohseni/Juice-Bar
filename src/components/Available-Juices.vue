<template>
  <div class="card select-juice-card mx-4 my-3 shadow" tabindex="3"
  :class="{ 'count-up': countUp, 'count-down': countDown }">
      <div class="card-body relative"
      >
          <span v-if=" count > 0" class="juice-count bg-primary rounded-full absolute">{{ count }}</span>
          <div class="card-title">
              <div class="image-box">
                <img :src="`images/${name}.png`" :alt="name">
              </div>
              <h3>{{ name }}</h3>
          </div>

          <div class="addition-stuff text-center">

              <!-- <h5 >Click on Addons to add them</h5> -->
              <span v-for="stuff in AllAdds" :key="stuff"
              class="card-subtitle mt-2 rounded relative"
              :class="{ 'included': IncludeAdds.includes( stuff ) }"
              @click="toggleAddon( stuff )">
                    {{ stuff }}
              </span>

          </div>

          <button @click="AddToCard" class="btn bg-white rounded-full add-btn absolute shadow">
            <svg class="bi bi-caret-up-fill" width="1.25em" height="1.25em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
            </svg>
          </button>

          <button @click="RemoveFromCard" v-if="count > 0" class="btn bg-white rounded-full remove-btn absolute shadow">
            <svg class="bi bi-caret-down-fill" width="1.25em" height="1.25em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </button>

      </div>
  </div>
</template>

<script>
export default {
    props:{
        name: {
            required: true,
            type: String
        },
        AllAdds:{
            required: true,
            type: Array
        },
        count:{
            required: true,
            type: Number
        },
        IncludeAdds:{
            required: true,
            type: Array
        }
    },
    data(){
        return{
            countUp: false,
            countDown: false,
        }
    },
    methods:{
        included( addon ) {

            let index = this.IncludeAdds.findIndex( i => i == addon )

            return index > -1

        },
        toggleAddon( addon ){

            if( !this.IncludeAdds.includes( addon ) ){

                // this.IncludeAdds.push( addon )

                var name = this.name

                this.$store.commit('IncludeAddon', { name, addon } )

            }else{

                // this.IncludeAdds = this.IncludeAdds.filter( data => data != addon )

                var name = this.name

                this.$store.commit('RemoveAddon', { name, addon } )

            }

        },
        AddToCard(){

            this.countUp = true

            if( this.count == 0 ){

                // this.count += 1

                this.$store.commit('AddToCart', this.name )

            }else{

                // this.count += 1

                this.$store.commit('IncreaseInCart', this.name )

            }

            setTimeout( () => this.countUp = false , 305)

        },
        RemoveFromCard(){

            this.countDown = true

            if( this.count == 1 ){

                // this.count -= 1

                this.$store.commit('RemoveFromCard', this.name )

            }else{

                // this.count -= 1

                this.$store.commit('DecreaseInCart', this.name )

            }


            setTimeout( () => this.countDown = false , 305)

        }

    }
}
</script>
