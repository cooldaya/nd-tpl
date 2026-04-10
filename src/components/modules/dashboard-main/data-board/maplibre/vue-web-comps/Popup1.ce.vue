<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({ data: String, uid: String })

const compData = JSON.parse(props.data || '{}')


// 定义 emit
const emit = defineEmits<{
  (e: 'close'): void;
}>();
const handles = {
  closePopup: () => {
    emit('close');
  },
}
</script>

<template>
  <div>
    vue组件

    <!-- 触发关闭按钮 -->
        <button
          @click="handles.closePopup"
          class="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          关闭弹出框
        </button>
  </div>
</template>

<style lang="scss" scoped></style>

<style lang="scss" scoped></style>
