<template>
    <div>
        <div class="moblie-table" v-if="ism">
            <template v-if="showSlot('table-search')">
                <div @click="showSearch"><van-icon name="search" /></div>
            </template>
            <van-popup v-model="visibleSearch" closeable position="bottom" class="search-form">
                <slot name="table-search" />
            </van-popup>
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
import From from './form.vue';
import { map } from 'lodash';

@Component({
	components: {
		mcol,
		'adapter-form-warpper': From,
	}
})
export default class extends Vue {

	public isMobile: boolean;
	public get ism(): boolean {
		if (this.platform === false) {
			return this.isMobile ? true : false;
		}
		if (typeof this.platform === 'string') return this.platform === 'mobile' ? true: false;
		else return this.isMobile ? true : false;
	}

	@Prop({
		type: [String, Boolean],
		default: false
	})
	public platform!: string | boolean;

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
		this.isMobile = false;
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