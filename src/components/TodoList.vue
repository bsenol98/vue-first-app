<template>
  <div class="row">
    <div class="col-md-12 px-2">
      <div class="bg-white rounded p-2 d-flex justify-content-between align-self-center">
        <h2>To Do List</h2>
        <div class="d-flex align-self-center">
          <router-link
            to="/add-to-do"
            class="btn btn-primary mx-1 btn-sm"
            @click="showLoader"
            >New</router-link
          >
          <button
            class="btn btn-secondary dropdown-toggle btn-sm"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#" @click="getTodoList()">All</a></li>
            <li><a class="dropdown-item" href="#" @click="getTodoList(1)">Waiting</a></li>
            <li>
              <a class="dropdown-item" href="#" @click="getTodoList(2)">Processing</a>
            </li>
            <li>
              <a class="dropdown-item" href="#" @click="getTodoList(3)">Completed</a>
            </li>
          </ul>
          <div class="btn-group"></div>
        </div>
      </div>
    </div>

    <!-- <div class="col-md-12 mt-4 d-none d-sm-block">
      <div class="bg-white">
        <list-table />
      </div>
    </div> -->
    <div class="col-md-12 mt-4">
      <div class="row">
        <div class="col-xl-4 col-md-6 mb-4" v-for="item in toDoList" :key="item">
          <list-card :item="item" />
        </div>
      </div>
    </div>
    {{ JSON.stringify(this.err) }}
  </div>
</template>
<script>
import ListCard from "@/components/TodoCardList.vue";
import axios from "axios";
export default {
  components: {
    listCard: ListCard,
  },
  data() {
    return {
      toDoList: [],
      err: "",
    };
  },
  provide() {
    return {
      provideData: {
        toDoList: this.toDoList,
      },
    };
  },
  methods: {
    getTodoList(status = -1) {
      const url = "http://localhost:8080/todo.json";
      axios
        .get(url)
        .then((r) => {
          const data = [];
          for (const key in r.data) {
            data.push({ ...r.data[key], id: key });
          }
          if (status === -1) {
            this.toDoList = data;
          } else {
            this.toDoList = data.filter((item) => item.status == status);
          }
        })
        .catch((err) => {
          this.err = err;
        });
    },
  },
  mounted() {
    this.getTodoList();
  },
};
</script>
<style scoped>
.text-shadow-lbl {
  text-shadow: 2px 2px 8px #000000;
}
.btn-absolute-groups {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
