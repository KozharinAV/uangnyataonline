<template>
    <div class="wrapper">
        <h2 class="video-title">{{ videoBlockTitle }}</h2>
        <div class="videos-wrapper">
            <div class="youtube"
                 :style="{ backgroundImage: youtubeImageUrl(index) }"
                 v-for="(video, index) in videos"
                 :key="index"
                 @click="videoClicked(index)">
                <iframe class="youtube"
                        width="350"
                        height="200"
                        v-if="isDownload[index]"
                        controlslist="nodownload"
                        title="YouTube video player"
                        frameborder="0"
                        allow="autoplay"
                        allowfullscreen
                        :src="video"></iframe>
            </div>

        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import { videoBlockTitle, videos, youtubeScreensWeb } from '@/common/content/video';

export default defineComponent({
    name: 'VideoBlock',

    setup() {
        const isDownload = ref([false, false, false]);
        const youtubeImageUrl = (index: number) => `url(${youtubeScreensWeb[index]})`;
        const videoClicked = (index: number) => isDownload.value[index] = true;

        return {
            youtubeImageUrl,
            videoClicked,
            isDownload,
            videoBlockTitle,
            videos
        };
    }
});
</script>

<style lang="scss" scoped>
.wrapper {
    margin: 30px auto;
}

.video-title {
    color: $main-text-color;
    text-align: center;
}

.videos-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
}

.youtube {
    width: 350px;
    height: 200px;
    cursor: pointer;
}
</style>