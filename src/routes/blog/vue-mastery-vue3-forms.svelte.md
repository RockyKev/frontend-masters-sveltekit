---
title: Vue Mastery - Vue 3 Forms
created: 2021-11-14T00:00:00
summary: Vue Mastery Vue 3 Forms
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>


## Vue 3 Forms
Source: https://www.vuemastery.com/courses/vue3-forms/



### 
End result: https://github.com/Code-Pop/Vue-3-Forms/tree/l5-end

![](https://i.imgur.com/ZuKq7PO.png)

```vue

// components/BaseCheckbox.vue
<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    class="field"
  />
  <label v-if="label">{{ label }}</label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  }
}
</script>

// views/SimpleForm.vue


```