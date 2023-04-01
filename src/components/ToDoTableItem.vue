<template>
  <tr>
    <td class="text-center">{{item}}</td>
    <td>Vue Öğreniyorum...</td>
    <td class="text-center">
      <div class="badge rounded-pill bg-warning text-dark">Waiting</div>
    </td>
    <td class="text-center">
      <div class="badge rounded-pill bg-secondary text-white">Vue</div>
    </td>
    <td class="text-center">18.03.2023</td>
    <td class="text-center">
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
    </td>
  </tr>
</template>
<script>
// export default {
//     props:["item"]
// };
</script>
