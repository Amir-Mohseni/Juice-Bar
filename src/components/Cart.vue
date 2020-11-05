<template>
  <div class="cart-component mr-5">
    <button
      class=" btn bg-primary rounded-full absolute cart-btn"
      @click="CartClicked()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        style=" fill:#ffffff;"
      >
        <path
          d="M 6 3 A 1 1 0 0 0 5 4 A 1 1 0 0 0 5.140625 4.5097656 L 5.1386719 4.5117188 L 5.15625 4.5371094 A 1 1 0 0 0 5.1660156 4.5527344 L 8 8.6875 L 8.9121094 18.095703 C 8.9621094 18.608703 9.3932031 19 9.9082031 19 L 20.064453 19 C 20.590453 19 21.0275 18.591406 21.0625 18.066406 L 21.734375 8 L 23 8 C 23.56503 8 24 8.4349698 24 9 L 24 13 A 1.0001 1.0001 0 1 0 26 13 L 26 9 C 26 7.3550302 24.64497 6 23 6 L 21.867188 6 L 21.994141 4.1015625 L 21.994141 4.0996094 A 1 1 0 0 0 22 4 A 1 1 0 0 0 21 3 L 6 3 z M 18 7 C 18.552 7 19 7.448 19 8 C 19 8.552 18.552 9 18 9 C 17.448 9 17 8.552 17 8 C 17 7.448 17.448 7 18 7 z M 18 11 C 18.552 11 19 11.448 19 12 C 19 12.552 18.552 13 18 13 C 17.448 13 17 12.552 17 12 C 17 11.448 17.448 11 18 11 z M 18 15 C 18.552 15 19 15.448 19 16 C 19 16.552 18.552 17 18 17 C 17.448 17 17 16.552 17 16 C 17 15.448 17.448 15 18 15 z M 8 21 A 1 1 0 0 0 7.0507812 21.691406 A 1 1 0 0 0 7.0488281 21.691406 L 7.046875 21.701172 A 1 1 0 0 0 7.0449219 21.705078 A 1 1 0 0 0 7.0175781 21.818359 L 6.0273438 25.767578 A 1 1 0 0 0 6 26 A 1 1 0 0 0 7 27 L 23 27 A 1 1 0 0 0 24 26 A 1 1 0 0 0 23.970703 25.769531 L 23.972656 25.767578 L 23.962891 25.732422 L 22.986328 21.833984 L 22.986328 21.830078 A 1 1 0 0 0 22.957031 21.712891 L 22.951172 21.691406 L 22.949219 21.689453 A 1 1 0 0 0 22 21 L 8 21 z M 15 22 C 16.105 22 17 22.895 17 24 C 17 25.105 16.105 26 15 26 C 13.895 26 13 25.105 13 24 C 13 22.895 13.895 22 15 22 z"
        ></path>
      </svg>
    </button>

    <div
      class="absolute cart-contains-div shadow-lg"
      v-if="show && Cart.length"
      :class="{ 'slide-cart-in': slideCartIn, 'slide-cart-out': slideCartOut }"
    >
      <div class="card relative" v-for="(item, index) in Cart" :key="item.name">
        <div class="card-body">
          <div class="card-text-setion">
            <div class="card-title">
              <h6>
                {{ item.name }}
              </h6>
              <p
                v-if="item.count > 0"
                class="juice-count bg-primary rounded-full"
              >
                {{ item.count }}
              </p>
            </div>
            <div class="addons-secion">
              <div
                v-for="addon in item.includes"
                :key="addon"
                @click="removeAddon(addon, item.name)"
              >
                <span>{{ addon }}</span>
              </div>
            </div>
          </div>
          <div class="card-image">
            <img :src="'images/' + item.name + '.png'" alt="" />
          </div>
        </div>

        <button
          @click="AddToCard(item.name, index)"
          class="btn bg-dark rounded-full add-btn-cart absolute shadow"
        >
          <svg
            class="bi bi-caret-up-fill"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
            />
          </svg>
        </button>

        <button
          @click="RemoveFromCard(item.name, item.count, index)"
          v-if="item.count > 0"
          class="btn bg-dark rounded-full remove-btn-cart absolute shadow"
        >
          <svg
            class="bi bi-caret-down-fill"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      class="absolute cart-contains-div shadow-lg"
      v-if="show && !Cart.length"
      :class="{ 'slide-cart-in': slideCartIn, 'slide-cart-out': slideCartOut }"
    >
      <h5>There is no Juice in your list. Please add some!</h5>
    </div>

    <!-- <div class="background-when-cart-active" v-if="show">

        </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      show: false,
      slideCartIn: false,
      slideCartOut: false,
      countUp: false,
      countDown: false,
    };
  },
  computed: mapState(["Cart"]),
  methods: {
    CartClicked() {
      this.show = true;

      if (!this.slideCartIn && !this.slideCartOut) {
        this.slideCartIn = true;
      } else if (this.slideCartIn) {
        this.slideCartIn = false;
        this.slideCartOut = true;
      } else {
        this.slideCartIn = true;
        this.slideCartOut = false;
      }
    },
    removeAddon(addon, name) {
      this.$store.commit("RemoveAddon", { name, addon });
    },
    AddToCard(name, index) {
      this.$store.commit("IncreaseInCart", name);
    },
    RemoveFromCard(name, count, index) {
      if (count == 1) {
        this.$store.commit("RemoveFromCard", name);
      } else {
        this.$store.commit("DecreaseInCart", name);
      }
    },
  },
  created() {},
};
</script>

<style></style>
