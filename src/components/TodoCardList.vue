<template>
  <div class="card">
    <div class="card-header">Torbali Web site geliştirilcek...</div>
    <div class="card-body">
      <div>
        Status:
        <div class="badge rounded-pill bg-warning text-dark">Waiting</div>
      </div>
      <div>
        Tags:
        <div class="badge rounded-pill bg-secondary text-white">torBLD</div>
      </div>
      <div>Date: 18.03.2023</div>
    </div>
    <div class="card-footer d-flex flex-row-reverse">
      <div class="btn-group">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          id="todoStatus"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa-solid fa-gear"></i>&nbsp;
        </button>
        <ul class="dropdown-menu" aria-labelledby="todoStatus">
          <li><a class="dropdown-item" href="#">All</a></li>
          <li><a class="dropdown-item" href="#">Completed</a></li>
          <li><a class="dropdown-item" href="#">Waiting</a></li>
        </ul>
        <div class="btn btn-warning">
          <i class="fa-sharp fa-regular fa-pen-to-square"></i>
        </div>
        <div class="btn btn-danger"><i class="fa-solid fa-trash"></i></div>
      </div>
    </div>
  </div>
</template>
