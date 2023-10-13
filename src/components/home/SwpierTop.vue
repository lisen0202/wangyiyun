<template>
    <div id="swiperTop">
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in state.images" :key="image">
                <img :src="image.pic" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
import { getBanner } from '@/request/api/home'
import { onMounted, reactive, ref } from 'vue';
export default {
    setup() {
        let state = reactive({
            images: [
                'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
            ]
        })

        onMounted(async () => {
            // axios.get('http://localhost:3000/banner?type=2').then((res) => {
            //     state.images = res.data.banners;
            // })
            let res = await getBanner({ type: '2' });
            // console.log(res);
            state.images = res.data.banners
        })
        return { state };
    },
};
</script>
<style lang="less" scoped>
#swiperTop {
    .van-swipe {
        width: 100%;
        height: 3rem;

        .van-swipe-item {
            padding: 0 .2rem;

            img {
                width: 100%;
                height: 3rem;
                border-radius: .2rem;
            }
        }

        :deep(.van-swipe__indicator--active) {
            background-color: rgb(219, 130, 130);
        }
    }
}
</style>