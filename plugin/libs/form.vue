<template>
	<div :class="className">
		<slot />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class extends Vue {
	public isMobile: boolean;
	public get className(): string {
		if (this.platform === false) {
			return this.isMobile ? 'mobile' : 'pc';
		}
		if (typeof this.platform === 'string') return this.platform;
		else return this.isMobile ? 'mobile' : 'pc';
	}

	@Prop({
		type: [String, Boolean],
		default: false
	})
	public platform!: string | boolean;

	constructor() {
		super();
		this.isMobile = false;
	}

	public async created() {
		const userAgentInfo = navigator.userAgent;
		const mobileAgents = [
			'Android',
			'iPhone',
			'SymbianOS',
			'Windows Phone',
			'iPad',
			'iPod'
		];
		var mobile_flag = false;
		//根据userAgent判断是否是手机
		for (var v = 0; v < mobileAgents.length; v++) {
			if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
				mobile_flag = true;
				break;
			}
		}

		var screen_width = window.screen.width;
		var screen_height = window.screen.height;

		//根据屏幕分辨率判断是否是手机
		if (screen_width < 500 && screen_height < 800) {
			mobile_flag = true;
		}
		this.isMobile = mobile_flag;
	}
}
</script>

<style lang="less">
.mobile {
	:global {
		.el-form--inline {
			display: flex;
			flex-direction: column;
			.el-form-item {
				position: relative;
				display: flex;
				padding: 0.75rem 0;
				margin: 0;
				box-sizing: border-box;
				width: 100%;
				padding: 10px 16px;
				overflow: hidden;
				color: #323233;
				font-size: 14px;
				line-height: 24px;
				background-color: #fff;
				&:last-child {
					&::after {
						border: none;
					}
				}
				.el-form-item {
					&::after {
						border: none;
					}
				}
				&::after {
					display: initial;
					position: absolute;
					box-sizing: border-box;
					content: ' ';
					pointer-events: none;
					right: 0;
					bottom: 0;
					left: 16px;
					border-bottom: 1px solid #ebedf0;
					-webkit-transform: scaleY(0.5);
					transform: scaleY(0.5);
				}
				.el-form-item__label {
					text-align: left;
				}
				.el-form-item__content {
					flex: 1;
					.el-select {
						width: 100%;
					}
					.el-input__inner,
					.el-textarea__inner {
						border: none;
					}
					.el-form-item__error {
						position: initial;
						color: #ee0a24;
						font-size: 12px;
						text-align: left;
					}
					.el-checkbox-group {
						display: flex;
						flex-wrap: wrap;
					}
					.el-radio-group {
						display: flex;
						flex-wrap: wrap;
						.el-radio {
							padding: 0.75rem 0;
						}
					}
				}
				&.btn {
					&.center {
						justify-content: center;
						&::before {
							flex: initial;
						}
						.el-form-item__content {
							display: flex;
							flex-wrap: wrap;
							.btn-item {
								min-width: 50%;
								.van-button {
									width: 100%;
									height: 100%;
								}
							}
						}
					}
					&::before {
						display: initial;
						flex: 1;
					}
				}
				&::after {
					display: initial;
					flex: 1;
				}
			}
		}
	}
}

.pc {
	:global {
		.el-form--inline {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			.el-form-item__label {
				text-align: left;
			}
			.el-form-item {
				min-width: 375px;
				width: 25%;
				text-align: left;
				display: flex;
				flex-direction: column;
				.el-form-item__content {
					.el-select {
						width: 100%;
					}
				}
				&.btn {
					&.center {
						justify-content: center;
						.el-form-item__content {
							display: flex;
							flex-wrap: wrap;
							&::before {
								display: initial;
								flex: 1;
							}
							&::after {
								display: initial;
								flex: 1;
							}
							.btn-item {
								padding: 0 0.75rem;
							}
						}
					}
					&::before {
						display: initial;
						flex: 1;
					}
				}
				&::after {
					display: initial;
					flex: 1;
				}
				&.group {
					.el-form-item__content {
						display: flex;
						flex-wrap: wrap;
					}
				}
			}
			&.search-form {
				justify-content: left;
				.el-form-item {
					&.search {
						min-width: inherit;
						flex: 1;
						&:after {
							display: table;
							flex: initial;
						}
						.el-form-item__content {
							&:after {
								display: table;
								flex: initial;
							}
						}
					} // &:nth-child(odd) {
					// }
				}
			}
		}
	}
}

.el-drawer {
	&.btt {
		.el-drawer__body {
			// overflow: auto;
			position: relative;
			.el-card {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				display: flex;
				flex-direction: column;
				.el-card__body {
					overflow: auto;
				}
			}
		}
	}
}
</style>