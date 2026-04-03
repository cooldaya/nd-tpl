<template>
  <div class="nd-wh-full grid grid-cols-2 gap-1">
    <pro-card v-for="card in cards" :key="card.header" :header="card.header">
      {{ card.content }}
    </pro-card>
  </div>
</template>

<script setup lang="ts">
definePage({
  name: 'work-station',
  meta: {
    title: '工作台',
    white: true,
  },
})

const cards = [
  {
    header: '未读消息',
    content: 'content',
  },
  {
    header: '新闻发布',
    content: 'content1',
  },
  {
    header: '信息发布',
    content: 'content2',
  },
  {
    header: '公告发布',
    content: 'content3',
  },
]
</script>
