<template>
    <div>
        <div class="moblie-table" v-if="isMobile">
            <van-cell is-link @click="showSearch"><van-icon name="search" /></van-cell>
            <van-popup v-model="visibleSearch" closeable position="bottom" class="search-form" />
            <van-list :value="loading" :finished="finished" finished-text="没有更多了">
                <mcol v-for="(item, i) in data" :columns="columns" :data="item" :title="firestField" :key="i">
                    <template v-for="col in columns" v-slot:[col.field]>
                        <template v-if="showSlot(col.field)">
                            <slot :name="col.field" v-bind:prop="item" v-bind:field="col.field" v-bind:value="item[col.field]" />
                        </template>
                        <template v-else>
                            {{item[col.field]}}
                        </template>
                    </template>
                    <template v-slot:table-option>
                        <slot name="table-option" v-bind:table-option="item" />
                    </template>
                </mcol>
            </van-list>
        </div>
        <div v-else>
            <slot name="table-search" />
            <vxe-table :loading="loading" :data="data">
                <vxe-table-column v-for="(item, i) in columns" v-bind="item" :key="i">
                    <template v-slot="{ row }">
                        <template v-if="showSlot(item.field)">
                            <slot :name="item.field" v-bind:prop="row" v-bind:field="item.field" v-bind:value="row[item.field]" />
                        </template>
                        <template v-else>
                            {{row[item.field]}}
                        </template>
                    </template>
                </vxe-table-column>
                <vxe-table-column title="操作" show-overflow>
                    <template v-slot="{ row }" show-overflow>
                        <slot name="table-option" v-bind:prop="row" />
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
    public visibleSearch: boolean;

    constructor() {
        super();
        this.collapses = [0];
        this.data = [];
        this.visibleSearch = false;
    }

    @Watch('loading')
    public async freashTable() {
        this.data = await this.dataSource();
    }

    public async created() {
        this.firestField = this.columns[0].field;
        this.data = await this.dataSource();
    }

    public showSlot(field: string) {
        return this.$scopedSlots[field] ? true : false;
    }

    public showSearch() {
        this.visibleSearch = true;
    }

}
</script>

<style scoped>
.moblie-table {
    position: relative;
}
.search-form{
    height: 70%;
}
</style>