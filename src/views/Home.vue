<template>
  <div class="w-100 home">
    <nav class="navbar navbar-dark bg-dark relative">
      <div class="my-container">
        <router-link class="navbar-brand" to="/" tabindex="2"
          >Juice Bar</router-link
        >

        <router-link
          tabindex="0"
          class="btn bg-primary rounded-full plus-btn absolute"
          to="/add"
        >
          <svg
            class=""
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
            />
            <path
              fill-rule="evenodd"
              d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
            />
          </svg>
        </router-link>
      </div>
    </nav>

    <div class="my-container w-100">
      <div class="w-100 juice-holder mt-5" v-if="UserJuices.length">
        <JuiceBox
          v-for="(juice, index) in UserJuices"
          :key="juice.name + juice.count + juice.includes[0]"
          :name="juice.name"
          :contains="juice.includes"
          :count="juice.count"
          :index="index"
        />
      </div>
      <div class="w-100 mt-5 no-juices">
        <h1>There is no juice in your juiceBox</h1>
        <router-link tabindex="0" class="btn bg-primary" to="/add">
          Add One
        </router-link>
      </div>
    </div>

    <EditModal />
  </div>
</template>

<script>
import JuiceBox from "@/components/juice-box.vue";
import EditModal from "@/components/EditUserModal.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    JuiceBox,
    EditModal,
  },
  data() {
    return {};
  },
  computed: mapState(["UserJuices"]),
};
</script>

<style lang="scss" scoped>
.no-juices {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 32px;
    font-weight: 700;
  }

  a {
    display: flex;
    margin-top: 10px;
    padding: 8px 10px;
    border-radius: 8px;
    font-size: 18px;
    border: none;
    outline: none;
    color: #ffffff;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
