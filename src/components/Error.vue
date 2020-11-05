<template>
    <div class="error-bg absolute shadow text-center" v-if="show">

        <div class="error-card relative">

            <button class="btn rounded-full absolute close-error" @click="$emit('closeError')">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="50" height="50"
                    viewBox="0 0 172 172"
                    style=" fill:#000000;"><g transform=""><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e74c3c"><path d="M86,6.88c-43.63156,0 -79.12,35.48844 -79.12,79.12c0,43.63156 35.48844,79.12 79.12,79.12c43.63156,0 79.12,-35.48844 79.12,-79.12c0,-43.63156 -35.48844,-79.12 -79.12,-79.12zM116.43594,119.39219h-11.00531l-17.34781,-26.14937h-0.7525l-17.64344,26.14937h-10.38719l23.005,-34.14469l-22.76312,-33.71469h11.13969l17.3075,26.47187h0.79281l17.58969,-26.47187h10.535l-23.38125,34.05062z"></path></g><path d="" fill="none"></path></g></g></svg>
            </button>

            <h6>{{ message }}</h6>

            <button class="btn rounded bg-secondary absolute error-ok" @click="$emit('closeError')">
                Ok
            </button>

        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {

  props:{
      show:{
          required: true,
          type: Boolean
      },
      message:{
          required: true,
          type: String
      }
  }
}
</script>

<style>

</style>