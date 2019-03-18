<template>
  <div class="p-html2canvas p">
    <div class="p_bg"></div>
    <div class="p_share-btn" @click="onShare">分享</div>
    
    <v-popup ref="myPopup">
      <img
        class="block-img"
        :src="imgSrc" 
        alt=""
      >
    </v-popup>
  </div>
</template>

<script>
import vPopup from '@/components/popup';
import html2canvas from 'html2canvas';
import canvs2Image from '@/util/canvas2image';

export default {
  name: 'Html2Canvas',
  components: {
    vPopup
  },
  data() {
    return {
      imgSrc: ''
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
    },
    onShare() {
      const oPage = document.querySelector('.p');
      const self = this;
      html2canvas(oPage)
        .then(canvas => {
          const img = canvs2Image.getImage(canvas);
          self.imgSrc = img;
          self.$refs.myPopup.show();
        })
        .catch(err => {
          console.log('获取失败', err);
        });
    }
  },
}
</script>

<style lang="scss" scoped>
.p {
  width: 100%;
  height: 100%;
}
.p_bg {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/img/bird.jpg');
  background-repeat: no-repeat;
  background-size: contain;
}
.p_share-btn {
  position: absolute;
  width: 60px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color:#fff;
  background-color:#C32617;
  border-radius: 5px;
  top: 10px;
  right: 10px;
  font-size: 14px;
  letter-spacing: 1px;
}

.block-img {
  display: block;
  width: 100%;
  height: auto;
}
</style>

