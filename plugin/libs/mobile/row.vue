<template>
    <div>
        <van-cell is-link @click="showPopup" icon="label-o">{{data[title]}}</van-cell>
        <van-popup class="content" v-model="show" position="right">
            <div class="info">
                <div class="info-msg">
                    <vxe-table :data="mapData(data)">
                        <vxe-table-column field="field" />
                        <vxe-table-column field="value" />
                    </vxe-table>
                </div>
                <div class="info-btns">
                    <slot />
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { AdapterColumn } from '../../impls';
import { map } from 'lodash';

@Component({
    components: {}
})
export default class extends Vue {

    public get fieldNames(): {
        [x: string]: string;
    } {
        if (this.columns && this.columns.length) {
            const fieldNames: {
                [x: string]: string;
            } = {};
            map(this.columns, col => fieldNames[col.field] = col.title);
            return fieldNames;
        }
        return {};
    }

    @Prop({
        type: Array,
        default: []
    })
    public columns!: Array < AdapterColumn > ;

    @Prop({
        type: Object,
        default: () => ({})
    })
    public data!: object;

    @Prop({
        type: String,
        default: ''
    })
    public title!: string;

    public show: boolean;

    constructor() {
        super();
        this.show = false;
    }

    public async created() {

    }

    public async showPopup() {
        this.show = true;
    }

    public mapData(row: any) {
        return map(row, (value, field) => ({
            field: this.fieldNames[field],
            value
        }));
    }

}
</script>

<style scoped>
.content {
    width: 80%;
    height: 100%;
}

.info {
    display: flex;
    height: 100%;
    flex-direction: column;
}

.info .info-msg {
    flex: 1;
}

.info .info-btns {
    padding-bottom: 2.5rem;
}
</style>