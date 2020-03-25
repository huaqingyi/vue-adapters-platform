<template>
    <div>
        <div v-if="isMobile">
            <van-list :value="loading" :finished="finished" finished-text="没有更多了">
                <mcol v-for="(item, i) in data" :columns="columns" :data="item" :title="firestField" :key="i">
                    <slot name="option" v-bind:option="item"/>
                </mcol>
            </van-list>
        </div>
        <div v-else>
            <vxe-table :data="data">
                <vxe-table-column :loading="loading" v-for="(item, i) in columns" v-bind="item" :key="i"></vxe-table-column>
                <vxe-table-column title="操作" show-overflow>
                    <template v-slot="{ row }" show-overflow>
                        <slot name="option" v-bind:option="row"/>
                    </template>
                </vxe-table-column>
            </vxe-table>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { AdapterColumn } from '../impls';
import mcol from './mobile/row.vue';
import { map } from 'lodash';

@Component({
    components: {
        mcol
    }
})
export default class extends Vue {

    public get isMobile(): boolean {
        const userAgentInfo = navigator.userAgent;
        const mobileAgents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
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
        return mobile_flag;
    }

    @Prop({
        type: Array,
        default: []
    })
    public columns!: Array < AdapterColumn > ;

    @Prop({
        type: Function,
        default: () => ({})
    })
    public dataSource!: () => Promise < Array < any >> ;

    @Prop({
        type: Boolean,
        default: false
    })
    public loading!: boolean;

    @Prop({
        type: Boolean,
        default: false
    })
    public finished!: boolean;

    public collapses: Array < string | number > ;
    public firestField ? : string;
    public data: Array < any > ;

    constructor() {
        super();
        this.collapses = [0];
        this.data = [];
    }

    @Watch('loading')
    public async freashTable() {
        this.data = await this.dataSource();
    }

    public async created() {
        this.firestField = this.columns[0].field;
        this.data = await this.dataSource();
    }

}
</script>

<style scoped>
.table {
    display: flex;
}
</style>