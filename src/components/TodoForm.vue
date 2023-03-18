<template>
  <div class="card">
    <div class="card-header">Yeni İş Ekle</div>
    <div class="card-body">
      <div class="row bg-white">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="title" class="form-label">Başlık</label>
            <input type="text" class="form-control" id="title" />
          </div>
          <div class="mb-3">
            <label for="date" class="form-label">Tarih</label>
            <input type="date" class="form-control" id="date" />
          </div>
          <div class="mb-3">
            <label for="tags" class="form-label">Etiketler</label>
            <SelectTwo :settings="{ tags: true, multiple: true }"></SelectTwo>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="detail" class="form-label">Açıklama</label>
            <ckeditor
              :editor="editor"
              v-model="editorData"
              :config="editorConfig"
            ></ckeditor>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer d-flex flex-row-reverse">
      <button type="submit" class="btn btn-primary">Save</button>
      <router-link to="/" class="btn btn-secondary mx-1">Turn List</router-link>
    </div>
  </div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
};
</script>
