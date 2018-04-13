<template>
    <div>
        <p>{{msg}}</p>
        <p>{{message}}</p>
        <p v-for="item in filterGender(0)">
            <span v-text="item.name"></span>
        </p>
        <div>
            <span>{{count}}</span>
            <button @click="add">+2</button>
            <button @click="addCount({num:1})">+1</button>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      msg: this.$store.state.storeMsg
    };
  },
  computed: {
    ...mapState({
      count: "count",
      message: "storeMsg"
      //message: state => state.storeMsg
    }),
    ...mapGetters(["filterGender"])
  },
  methods: {
    add() {
      this.$store.commit({ type: "addCount", num: 2 });
    },
    ...mapMutations(["addCount"])
  }
};
</script>