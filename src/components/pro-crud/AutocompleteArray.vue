<script setup lang="ts">
import { useAttrs } from 'vue'
import EpPlus from '~icons/ep/plus'
import EpMinus from '~icons/ep/minus'

// 定义数组 model
const model = defineModel<string[]>({
  default: [],
})

const handles = {
  add() {
    model.value = [...model.value, '']
  },
  remove(idx: number) {
    model.value = model.value.filter((_, i) => i !== idx)
  },
}

if (model.value.length < 1) {
  handles.add()
}
</script>

<template>
  <div class="w-full">
    <div v-for="(item, idx) in model" :key="item + idx" class="flex mt-1.5">
      <el-autocomplete v-bind="$attrs" class="grow" v-model="model[idx]" />
      <div class="w-30 ml-3">
        <el-button :icon="EpMinus" @click="handles.remove(idx)" v-if="model.length > 1" />
        <el-button :icon="EpPlus" @click="handles.add" v-show="model.length - 1 === idx" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
