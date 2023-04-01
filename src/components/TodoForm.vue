<template>
  <div class="card">
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
      <button @click="Save()" class="btn btn-primary">Save</button>
      <router-link to="/" class="btn btn-secondary mx-1">Turn List</router-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
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
    Save() {
      const url = "http://localhost:8080/todo.json";
      axios.post(url, this.todo).then((r) => {
        console.log("response", r);
      });
      // console.log("todo", this.todo);
      // alert("hi");
    },
  },
};
</script>

<style scoped>
.ck-editor .ck-editor__main .ck-content {
  min-height: 500px;
}
</style>
