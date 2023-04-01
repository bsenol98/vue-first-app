<template>
  <div class="card">
    <!-- <div class="card-header"></div> -->
    <div class="card-body">
      <h2 class="card-title">{{ item.jobTitle }}</h2>
      <p class="mb-5" v-html="item.job"></p>
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
            <li><a class="dropdown-item" href="#">Complete</a></li>
            <li><a class="dropdown-item" href="#">Wait</a></li>
          </ul>
          <div class="btn btn-warning btn-sm">
            <i class="fa-sharp fa-regular fa-pen-to-square"></i>
          </div>
          <div class="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i></div>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
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
  },
  created() {
    this.status = this.getStatus(this.item.status);
  },
};
</script>
