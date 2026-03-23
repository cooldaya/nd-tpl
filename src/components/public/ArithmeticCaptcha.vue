<script setup lang="ts">
import { ref, onMounted } from 'vue'
const props = defineProps({
  width: {
    type: Number,
    default: 150,
  },
  height: {
    type: Number,
    default: 50,
  },
})

const captchaCanvas = ref<HTMLCanvasElement | null>(null)
const errorMsg = ref('错苏我')

const captchaText = ref('')
const operators = ['+', '-', '×', '/']

let correctAnswer = 0

const handles = {
  generateCaptcha() {
    let num1 = Math.floor(Math.random() * 10) + 1
    let num2 = Math.floor(Math.random() * 10) + 1
    const operator = operators[Math.floor(Math.random() * operators.length)]

    let answer = 0
    switch (operator) {
      case '+':
        answer = num1 + num2
        break
      case '-': {
        if (num1 < num2) {
          num1 = Math.floor((num1 + num2) * 1.8)
        }
        answer = num1 - num2
        break
      }
      case '×':
        answer = num1 * num2
        break
      case '/':
        num2 = Math.floor(Math.random() * 4) + 1
        if (num1 % num2 !== 0) {
          num1 = Math.floor(num1 * num2 * Math.floor(Math.random() * 2 + 1))
          answer = num1 / num2
        } else {
          answer = num1 / num2
        }
        break
    }

    captchaText.value = `${num1} ${operator} ${num2} = ?`
    correctAnswer = answer
    handles.drawCanvas()
    errorMsg.value = ''
  },
  genNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },
  drawCanvas() {
    const canvas = captchaCanvas.value
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const width = canvas.width
    const height = canvas.height

    ctx.fillStyle = '#f0f0f0'
    ctx.fillRect(0, 0, width, height)

    ctx.save()
    ctx.translate(width / 2, height / 2)
    const angle = (Math.random() - 0.5) * 0.4
    ctx.rotate(angle)

    const colors = ['#2c3e50', '#e74c3c', '#3498db', '#9b59b6', '#1abc9c']
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)] as string
    ctx.font = `bold ${handles.genNumberInRange(16, height / 2)}px Arial`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(captchaText.value, 0, 0)
    ctx.restore()

    ctx.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.4)`
    ctx.lineWidth = 1
    for (let i = 0; i < 3; i++) {
      ctx.beginPath()
      ctx.moveTo(Math.random() * width, Math.random() * height)
      ctx.bezierCurveTo(
        Math.random() * width,
        Math.random() * height,
        Math.random() * width,
        Math.random() * height,
        Math.random() * width,
        Math.random() * height,
      )
      ctx.stroke()
    }

    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.7)`
      ctx.beginPath()
      ctx.arc(Math.random() * width, Math.random() * height, 1, 0, Math.PI * 2)
      ctx.fill()
    }

    for (let i = 0; i < 20; i++) {
      ctx.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.3)`
      ctx.beginPath()
      ctx.moveTo(Math.random() * width, Math.random() * height)
      ctx.lineTo(Math.random() * width, Math.random() * height)
      ctx.stroke()
    }
  },

  validate(userInputValue: number) {
    const isPass = Number(userInputValue) === correctAnswer
    errorMsg.value = isPass ? '' : '不正确，请重试!'
    return isPass
  },
}

onMounted(() => {
  handles.generateCaptcha()
})

defineExpose({
  validate: handles.validate,
  generateCaptcha: handles.generateCaptcha,
})
</script>

<template>
  <div class="flex flex-col items-center leading-none">
    <canvas
      ref="captchaCanvas"
      :width="width"
      :height="height"
      class="cursor-pointer rounded"
      @click="handles.generateCaptcha"
    ></canvas>
    <!-- <p v-if="errorMsg" class="text-red-500 text-sm float-end">{{ errorMsg }}</p> -->
  </div>
</template>
