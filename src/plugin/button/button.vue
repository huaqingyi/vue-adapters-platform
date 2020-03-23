<template>
  <div>
    <button
      class="guoxb-button"
      :class="['guoxb-button--' + type, 'guoxb-button--' + (round ? 'round' : '')]"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
	name: 'g-button', // *** 我们是全局注入组件，所以在后面引入我们的组件后，会使用这个命名的标签 ***
	props: {
		type: {
			type: String,
			default: 'normal'
		},
		round: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style scoped>
.guoxb-button {
	font-size: 14px;
	color: #f68;
	background: #fff;
	border: 1px solid #eee;
}
.guoxb-button--normal {
	width: 100px;
	line-height: 40px;
}
.guoxb-button--small {
	width: 80px;
	line-height: 30px;
	font-size: 12px;
}
.guoxb-button--large {
	width: 120px;
	line-height: 50px;
	font-size: 16px;
}
.guoxb-button--round {
	border-radius: 5px;
}
</style>