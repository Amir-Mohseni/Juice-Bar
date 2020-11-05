import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    AvailableJuice:[

      {
        name: 'Bannana',
        adds: [
          'Suger',
          'Choocolate',
          'Smarties',
          'Honey',
          'Butter Cream',
          'Whipped Cream',
          'Ice',
          'Pistachio',
          'Peanuts',
          'Hazzlenut'
        ],
        included: []
      },

      {
        name: 'Blue Berry',
        adds: [
          'Suger',
          'Choocolate',
          'Smarties',
          'Ice',
        ],
        included: []
      },

      {
        name: 'Carrot',
        adds: [
          'Suger',
          'Milk',
          'Choocolate',
          'Smarties',
          'Ice',
          'Pistachio',
          'Peanuts',
          'Hazzlenut'
        ],
        included: []
      },

      {
        name: 'Celery',
        adds: [
          'Suger',
          'Ice',
        ],
        included: []
      },

      {
        name: 'Cherry',
        adds: [
          'Suger',
          'Choocolate',
          'Butter Cream',
          'Whipped Cream',
          'Ice',
          'Pistachio',
          'Peanuts',
          'Hazzlenut'
        ],
        included: []
      },

      {
        name: 'Currant',
        adds: [
          'Suger',
          'Ice',
          'Pistachio',
          'Peanuts',
          'Hazzlenut'
        ],
        included: []
      },

      {
        name: 'Grapefruit',
        adds: [
          'Suger',
          'Ice',
        ],
        included: []
      },

      {
        name: 'Kiwi',
        adds: [
          'Suger',
          'Ice',
        ],
        included: []
      },

      {
        name: 'Lemonaid',
        adds: [
          'Suger',
          'Honey',
          'Ice',
        ],
        included: []
      },

      {
        name: 'Orange',
        adds: [
          'Suger',
          'Ice',
        ],
        included: []
      },

      {
        name: 'Pear',
        adds: [
          'Suger',
          'Choocolate',
          'Smarties',
          'Ice',
        ],
        included: []
      },

      {
        name: 'Pine Apple',
        adds: [
          'Suger',
          'Choocolate',
          'Smarties',
          'Butter Cream',
          'Whipped Cream',
          'Ice',
        ],
        included: []
      },

      {
        name:'Plum',
        adds: [
          'Suger',
          'Milk',
          'Choocolate',
          'Smarties',
          'Butter Cream',
          'Whipped Cream',
          'Ice',
        ],
        included: []
      },

      {
        name: 'Rasp Berry',
        adds: [
          'Suger',
          'Milk',
          'Choocolate',
          'Butter Cream',
          'Whipped Cream',
          'Ice',
        ],
        included: []
      },

      {
        name: 'Straw Berry',
        adds: [
          'Suger',
          'Milk',
          'Choocolate',
          'Smarties',
          'Butter Cream',
          'Whipped Cream',
          'Ice',
        ],
        included: []
      },

      {
        name: 'Water Melon',
        adds:[
          'Suger',
          'Ice',
        ],
        included: []
      }
    ],
    AdditionalStuff:[
      'Suger',
      'Milk',
      'Choocolate',
      'Smarties',
      'Honey',
      'Butter Cream',
      'Whipped Cream',
      'Ice',
      'Pistachio',
      'Peanuts',
      'Hazzlenut'
    ],
    UserJuices:[],
    Cart: [],
    EmptyCartError: false,
    EditingUser: {}
  },
  getters: {
    getCart( state ){
      return state.Cart
    },
    getJuices( state ){
      return state.AvailableJuice
    }
  },
  mutations: {

    IncludeAddon( state , payload ){

      let index = state.AvailableJuice.findIndex( i => i.name == payload.name )

      state.AvailableJuice[index].included.push( payload.addon )

      let juice = state.Cart.findIndex( i => i.name == payload.name )

      if( juice != -1 && !state.Cart[ juice ].includes.includes( payload.addon ) )
        state.Cart[ juice ].includes.push( payload.addon )

      // if( Object.keys(state.EditingUser).length && state.EditingUser.name == payload.name )
      //   state.EditingUser.includes.push( payload.addon )

    },
    RemoveAddon( state , payload ){

      let index = state.AvailableJuice.findIndex( i => i.name == payload.name )

      state.AvailableJuice[index].included = state.AvailableJuice[index].included.filter( data =>
          data != payload.addon
      )

      let juice = state.Cart.findIndex( i => i.name == payload.name )

      if( juice != -1 )
        state.Cart[ juice ].includes = state.Cart[ juice ].includes.filter( data => data != payload.addon )

      // if( Object.keys(state.EditingUser).length && state.EditingUser.name == payload.name )
      //   state.EditingUser.includes = state.EditingUser.includes.filter( data =>
      //     data != payload.addon
      // )

    },

    AddToCart( state, payload ){

      let juice = state.AvailableJuice.filter( i => i.name == payload )

      state.Cart.push({
        name: juice[0].name,
        includes: juice[0].included,
        count: 1
      })

    },

    IncreaseInCart( state, payload ){

      let juice = state.Cart.findIndex( i => i.name == payload )

      state.Cart[ juice ].count += 1

    },
    RemoveFromCard( state, payload ){

      let juice = state.Cart.findIndex( i => i.name == payload )

      state.Cart[ juice ].count -= 1

      state.Cart = state.Cart.filter( i => i.name != payload )

    },
    DecreaseInCart( state, payload ){

      let juice = state.Cart.findIndex( i => i.name == payload )

      state.Cart[ juice ].count -= 1

    },
    AddCartToDashboard( state ){

        // Does User has any juice in his dashboard
        if( state.UserJuices.length ){

          let matches = [];
          // let match_in_user = [];
          let similarInUser = [];

          // Check for simillar juices and save the index in variable
          state.UserJuices.forEach( ( index , userJuiceIdx ) => {

            state.Cart.forEach( ( data , idx ) => {

                if( data.name == index.name && data.includes == index.includes ){

                    similarInUser.push( userJuiceIdx )

                    matches.push( idx )

                }
            })

          })

          // was there any similar match? then add their count to the current juice in dashboard and clear that juice from Cart
          if( matches ){

              console.log('found match');
              console.log(matches);
              console.log(similarInUser);
              // console.log('found match');

              // Adding the similar index of the Cart to user dashboard juices
              similarInUser.forEach( ( userIdx, index ) => {

                  state.UserJuices[userIdx].count += state.Cart[ matches[index] ].count

              })

              // Deleting that similar index from Cart
              state.Cart = state.Cart.filter( ( data , index ) => {

                  console.log( index )
                  console.log( matches.includes( index ) )

                  !matches.includes( index )

              })

          }
        }


        // if there is any remaining non similar item in cart, add them to user juices dashboard
        if( state.Cart.length ){

          state.Cart.forEach( data => {

            state.UserJuices.push( data )

          })

          state.Cart = []

        }

    },
    DeleteUserJuice( state , payload ){

      state.UserJuices = state.UserJuices.filter( ( data , index ) => index != payload )

    },
    RemoveUserJuiceIngredient( state , payload ){

      state.UserJuices[payload.index].includes = state.UserJuices[payload.index].includes.filter( data => data != payload.ingredient )
    },
    InitiateEditingJuice( state , payload ){

      state.EditingUser = JSON.parse(JSON.stringify( state.UserJuices[payload] ))
      state.EditingUser.index = payload

    },
    UpdateUserJuice( state ){

      Vue.set( state.UserJuices , state.EditingUser.index, JSON.parse(JSON.stringify( state.EditingUser )) )

      let index = state.AvailableJuice.findIndex( data => data.name == state.EditingUser.name )

      state.AvailableJuice[index].included = state.EditingUser.includes

      state.EditingUser = {}

    }
  },
  actions: {},
  modules: {}
});
