<script setup>
import { onMounted, reactive, nextTick, watch, onBeforeUnmount } from "vue";

const props = defineProps({
    mseUrl: {
        type: String,
        default: () => "",
    },
});

const refData = reactive({
    randId: "rs" + Math.pow(Math.random(), 8).toString(16).slice(4),
});

let palyerInstance = null;
let cWindowIndex = 0;

const handles = {
    initMsePlayer(cb) {
        if (!window.JSPlugin) {
            return console.error(
                "JSPlugin is not loade,海康h5插件资源加载失败",
            );
        }
        palyerInstance = new window.JSPlugin({
            szId: refData.randId,
            szBasePath: "/lib/hik-h5/",
            iMaxSplit: 1,
            iCurrentSplit: 1,
            openDebug: false,
            mseWorkerEnable: false,
            bSupporDoubleClickFull: false,
            oStyle: {
                borderWidth: 0,
                background: "#262626",
            },
        });
        cb && cb();
    },
    play(wsUrl) {
        if (!palyerInstance) return;
        palyerInstance.JS_Play(
            wsUrl,
            {
                playURL: wsUrl,
                mode: 0,
                PlayBackMode: 1,
                keepDecoder: 0,
                token: "",
            },
            cWindowIndex,
        );
    },
    getCapture() {
        palyerInstance.JS_CapturePicture(cWindowIndex, "img", "JPEG");
    },
    disposeHlsPlayer() {
        if (!palyerInstance) return;
        palyerInstance.JS_Stop();
        palyerInstance = null;
    },
};

let playerReady = false;
watch(
    () => props.mseUrl,
    (newUrl) => {
        if (newUrl && playerReady) {
            handles.play(newUrl);
        }
    },
);

onMounted(() => {
    nextTick(() => {
        handles.initMsePlayer(() => {
            playerReady = true;
            if (props.mseUrl) {
                handles.play(props.mseUrl);
            }
        });
    });
});

onBeforeUnmount(() => {
    handles.disposeHlsPlayer();
});

defineExpose({
    getCapture: handles.getCapture,
});
</script>

<template>
    <div :id="refData.randId" class="hik-mse-player"></div>
</template>

<style lang="scss" scoped>
.hik-mse-player {
    width: 100%;
    height: 100%;
}
</style>
