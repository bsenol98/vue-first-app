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
      <tableItem v-for="item in toDoList" :key="item" :item="item"></tableItem>
    </tbody>
  </table>
  {{ toDoList }}
</template>
<script>
import tableItem from "@/components/ToDoTableItem.vue";
export default {
  components: [tableItem],
  inject: ["toDoList"],
};
</script>
