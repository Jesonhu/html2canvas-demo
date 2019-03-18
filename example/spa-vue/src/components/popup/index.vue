<template>
  <div class="c-popup components">
    <!-- 遮罩层 start -->
    <div class="c-popup_mask"></div>
    <!-- 遮罩层 end -->

    <!-- 主要内容 start -->
    <div class="c-popup_container c-popup-center">
      <div class="c-popup_content">
        <slot></slot>
      </div>
    </div>
    <!-- 主要内容 end -->
    
  </div>
</template>

<script>
let ELEMENT = document.querySelector('.c-popup');

export default {
  name: 'Popup',
  methods: {
    show() {
      ELEMENT = document.querySelector('.c-popup');
      ELEMENT.style.display = 'block';
    },
    hide() {
      ELEMENT = document.querySelector('.c-popup');
      ELEMENT.style.display = 'none';
    }
  },
}
</script>


<style lang="scss">
.c-popup {
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  pointer-events: none;

  // Common Part start 
  @at-root #{&}_mask {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  @at-root #{&}_container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  // Common Part end

  // 有遮罩层 start
  @at-root #{&}_mask {
    // display: none;
    display: block;
    overflow: hidden;
    background-color: #25262d;
    opacity: .4;
    pointer-events: auto;

    &:before {
      content: ".";
      display: block;
      width: 1px;
      height: 1px;
      background-color: rgba(0,0,0,.1);
      margin-left: -10px;
    }
  }
  // 有遮罩层 start

  // 内容容器
  
  @at-root #{&}_container {
    transform: translate(100%,100%);
  }

  @at-root #{&}_content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    -webkit-transform: translate(-100%,-100%);
    transform: translate(-100%,-100%);
    pointer-events: auto;
  }
  .c-popup-center .c-popup_content {
    top: -50%;
    left: -50%;
    width: auto;
    max-width: 100%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }
  .c-popup_content {
    padding: 10px;
  }

  
  
}
</style>
