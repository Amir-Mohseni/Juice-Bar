<template>
  <div class="card mx-1 my-3 juice-card shadow" tabindex="3">
    <div class="card-body relative">
      <div class="card-title">
        <div class="text-section">

            <div class="top-title">

                <h4>{{ name }}</h4>
                <p class="juice-count bg-primary rounded-full ml-3">{{ count }}</p>

            </div>

            <div class="contains">

                <div
                  v-for="contain in contains"
                  :key="contain"
                  class="card-subtitle mt-2 rounded relative"
                  @click="removeIngredient( contain )"
                >
                    <span>
                    {{ contain }}
                    </span>
                </div>

            </div>

        </div>
        <img :src="'images/' + name + '.png'" alt="">
      </div>
      <button
        class="btn bg-white rounded-full trash-btn absolute"
        type="button"
        @click="deleteJuice()"
      >
        <svg
          class="bi bi-trash-fill"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
          />
        </svg>
      </button>

      <button
        class="btn bg-white rounded-full edit-btn absolute"
        type="button"
        @click="editJuice()"
      >
        <svg class="bi bi-brush" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.213 1.018a.572.572 0 0 1 .756.05.57.57 0 0 1 .057.746C15.085 3.082 12.044 7.107 9.6 9.55c-.71.71-1.42 1.243-1.952 1.596-.508.339-1.167.234-1.599-.197-.416-.416-.53-1.047-.212-1.543.346-.542.887-1.273 1.642-1.977 2.521-2.35 6.476-5.44 7.734-6.411z"/>
          <path d="M7 12a2 2 0 0 1-2 2c-1 0-2 0-3.5-.5s.5-1 1-1.5 1.395-2 2.5-2a2 2 0 0 1 2 2z"/>
        </svg>

      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    },
    contains: {
      required: true,
      type: Array
    },
    count: {
      required: true,
      type: Number
    },
    index: {
      required: true,
      type: Number
    },
  },
  methods: {
    deleteJuice(){

      this.$store.commit( 'DeleteUserJuice' , this.index )

    },
    removeIngredient( ingredient ){

      let index = this.index

      this.$store.commit( 'RemoveUserJuiceIngredient' , { index , ingredient } )

    },
    editJuice(){

      this.$store.commit( 'InitiateEditingJuice' , this.index )

    }
  }
};
</script>
