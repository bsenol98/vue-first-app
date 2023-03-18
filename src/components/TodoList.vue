<template>
  <div class="row">
    <div class="col-md-12 px-2">
      <div class="bg-white rounded p-2 d-flex justify-content-between align-self-center">
        <h2>To Do List</h2>
        <div class="d-flex align-self-center">
          <router-link to="/add-to-do" class="btn btn-primary mx-1">New</router-link>
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-solid fa-ellipsis-vertical"></i>&nbsp;
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
        <list-table></list-table>
      </div>
    </div>
    <div class="col-md-12 mt-4 d-block d-sm-none">
      <div class="bg-white">
        <list-card></list-card>
      </div>
    </div>

    <div class="d-none row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col">
        <div
          class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style="background-image: url('https://random.imagecdn.app/900/450')"
        >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-lbl-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-shadow-lbl">
              Short title, long jacket
            </h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="https://github.com/twbs.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill"></use>
                </svg>
                <small>Earth</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3"></use>
                </svg>
                <small>3d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div
          class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style="background-image: url('https://picsum.photos/900/450')"
        >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-lbl-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-shadow-lbl">
              Much longer title that wraps to multiple lines
            </h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="https://github.com/twbs.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill"></use>
                </svg>
                <small>Pakistan</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3"></use>
                </svg>
                <small>4d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div
          class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style="background-image: url('https://random.imagecdn.app/900/450')"
        >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-lbl-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-shadow-lbl">
              Another longer title belongs here
            </h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="https://github.com/twbs.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill"></use>
                </svg>
                <small>California</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3"></use>
                </svg>
                <small>5d</small>
              </li>
            </ul>
          </div>
        </div>
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
