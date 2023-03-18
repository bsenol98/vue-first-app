<template>
  <table class="table">
    <thead class="table-dark">
      <tr>
        <th class="text-center">#</th>
        <th>Job</th>
        <th class="text-center">Status</th>
        <th class="text-center">Tag</th>
        <th class="text-center">Date</th>
        <th class="text-center"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-center">#1</td>
        <td>Torbali Web site geliştirilcek...</td>
        <td class="text-center">
          <div class="badge rounded-pill bg-warning text-dark">Waiting</div>
        </td>
        <td class="text-center">
          <div class="badge rounded-pill bg-secondary text-white">torBLD</div>
        </td>
        <td class="text-center">18.03.2023</td>
        <td class="text-center">
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
        </td>
      </tr>
    </tbody>
  </table>
</template>
