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
            <li><a class="dropdown-item" href="#">All</a></li>
            <li><a class="dropdown-item" href="#">Completed</a></li>
            <li><a class="dropdown-item" href="#">Waiting</a></li>
          </ul>
          <div class="btn-group"></div>
        </div>
      </div>
    </div>

    <div class="col-md-12 mt-4 d-none d-sm-block">
      <div class="bg-white">
        <list-table />
      </div>
    </div>
    <div class="col-md-12 mt-4 d-block d-sm-none">
      <div class="bg-white">
        <list-card v-for="item in toDoList" :key="item" :item="item"></list-card>
      </div>
    </div>
  </div>
</template>
<script>
import ListTable from "@/components/TodoTableList.vue";
import ListCard from "@/components/TodoCardList.vue";

export default {
  components: {
    listTable: ListTable,
    listCard: ListCard,
  },
  provide() {
    return {
      provideData: {
        toDoList: this.toDoList,
      },
    };
  },
  data() {
    return {
      toDoList: [
        {
          id: 1,
          jobTitle:"Vue Öğren",
          job: "Vue öğreniyorum...",
          status: 1,
          tags: ["webSite","PHP","NODEJS"],
          date: "2023-03-30T22:43",
        },
      ],
    };
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
