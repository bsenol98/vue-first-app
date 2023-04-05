<template>
  <div class="card" v-if="visible">
    <!-- <div class="card-header"></div> -->
    <div class="card-body">
      <h2 class="card-title">{{ item.jobTitle }}</h2>
      <p
        style="min-height: 60px; max-height: 100px; overflow-y: auto"
        v-html="item.job"
      ></p>
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center" style="font-size: 0.8rem">
          <i class="fa-solid fa-tag"></i>&nbsp;
          <div
            v-for="(tag, k) in item.tags"
            :key="k"
            class="badge rounded-pill bg-secondary text-white"
            style="margin-right: 2px"
          >
            {{ tag }}
          </div>
        </div>
        <div class="d-flex align-items-center" style="font-size: 0.8rem">
          <i class="fa-solid fa-list-check"></i>&nbsp;
          <div class="badge rounded-pill" :class="this.status.class">
            {{ this.status.text }}
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer d-flex align-items-center justify-content-between">
      <span style="font-size: 0.7rem"
        ><i class="fa-solid fa-calendar"></i> <b>{{ item.date }}</b></span
      >
      <span class="d-flex flex-row-reverse">
        <div class="btn-group">
          <button
            class="btn btn-primary dropdown-toggle btn-sm"
            type="button"
            id="todoStatus"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-solid fa-gear"></i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="todoStatus">
            <li>
              <a class="dropdown-item" href="#" @click="changeStatus(item, 1)"> Wait</a>
            </li>
            <li>
              <a class="dropdown-item" href="#" @click="changeStatus(item, 2)">
                Processing
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#" @click="changeStatus(item, 3)">
                Complete
              </a>
            </li>
          </ul>
          <router-link
            :to="{ path: `/update-to-do/${item.id}` }"
            class="btn btn-warning btn-sm"
          >
            <i class="fa-sharp fa-regular fa-pen-to-square"></i>
          </router-link>
          <div @click="todoDelete(item.id)" class="btn btn-danger btn-sm">
            <i class="fa-solid fa-trash"></i>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["item"],
  data() {
    return {
      visible: true,
      status: {
        class: "",
        text: "",
      },
    };
  },
  methods: {
    getStatus(status) {
      return [1, 2, 3].includes(status)
        ? {
            1: { class: "bg-warning text-dark", text: "Waiting" },
            2: { class: "bg-info text-white", text: "Processing" },
            3: { class: "bg-success text-white", text: "Completed" },
          }[status]
        : { class: "secondary", text: "undefined" };
    },
    todoDelete(id) {
      if (confirm("Silmek istediğinize emin misiniz?")) {
        const url = `http://localhost:8080/todo/${id}.json`;
        axios.delete(url).then((r) => {
          console.log("result", r);
          this.visible = false;
        });
      }
    },
    changeStatus(item, status) {
      const changedTodo = { ...item, status: status };
      const url = `http://localhost:8080/todo/${changedTodo.id}.json`;
      delete changedTodo["id"];
      axios.put(url, changedTodo).then(() => {
        this.status = this.getStatus(status);
      });
    },
  },
  created() {
    this.status = this.getStatus(this.item.status);
  },
};
</script>
