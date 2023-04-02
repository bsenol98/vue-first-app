<template>
  <div v-if="undefinedTodo === false" class="card">
    <div class="card-header">Yeni İş Ekle</div>
    <div class="card-body">
      <div class="row bg-white">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="title" class="form-label">Başlık</label>
            <input type="text" v-model="todo.jobTitle" class="form-control" id="title" />
          </div>
          <div class="mb-3">
            <label for="date" class="form-label">Tarih</label>
            <input type="date" v-model="todo.date" class="form-control" id="date" />
          </div>
          <div class="mb-3">
            <label for="tags" class="form-label">Etiketler</label>
            <SelectTwo
              v-model="todo.tags"
              :settings="{ tags: true, multiple: true }"
              :options="todo.tags"
            ></SelectTwo>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="detail" class="form-label">Açıklama</label>
            <ckeditor
              :editor="editor"
              v-model="todo.job"
              :config="editorConfig"
            ></ckeditor>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer d-flex flex-row-reverse">
      <button
        v-if="this.todoIdForUpdate === false"
        @click="Add()"
        class="btn btn-primary"
      >
        Add
      </button>
      <button v-else @click="Save()" class="btn btn-primary">Save</button>
      <router-link to="/" class="btn btn-secondary mx-1">Turn List</router-link>
    </div>
  </div>
  <div v-else class="alert alert-warning">Düzenlemek istediğiniz veri bulunamadı!</div>
</template>
<script>
import axios from "axios";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      undefinedTodo: false,
      todoIdForUpdate: false,
      todo: {
        jobTitle: "",
        job: "",
        status: 1,
        tags: [],
        date: "",
      },
      editor: ClassicEditor,
    };
  },
  methods: {
    Add() {
      const url = "http://localhost:8080/todo.json";
      axios.post(url, this.todo).then((r) => {
        console.log("response", r);
      });
    },
    Save() {
      const url = `http://localhost:8080/todo/${this.todoIdForUpdate}.json`;
      axios.put(url, this.todo).then(() => this.$router.push({ path: "/" }));
    },
  },
  mounted() {
    this.todoIdForUpdate = this.$route.params?.id;
    if (typeof this.todoIdForUpdate != "undefined") {
      const url = `http://localhost:8080/todo/${this.todoIdForUpdate}.json`;
      axios.get(url).then((r) => {
        if (r.data === null) return (this.undefinedTodo = true);
        this.todo = r.data;
      });
    } else {
      this.todoIdForUpdate = false;
    }
  },
};
</script>

<style scoped>
.ck-editor .ck-editor__main .ck-content {
  min-height: 500px;
}
</style>
