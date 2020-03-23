<template>
  <div class="hello">
   <g-button :round="true" type="normal">按钮</g-button>
  </div>
</template>

<script>

import Vue from 'vue';
/* 打包前的组件测试 */
import GuoUI from '@/plugin/index.js';
/* 打包后的组件测试(打包后，会在项目根目录生成dist文件夹) */
// import GuoUI from '../../dist/index.js';
Vue.use(GuoUI);

export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>