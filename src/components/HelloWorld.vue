<template>
    <div class="hello">
        <adapter-table :columns="columns" :dataSource="loadData">
            <template v-slot:option="{ option }">
                <!-- {{ option }} -->
                <adapter-button type="info" size="small">修改</adapter-button>
                <adapter-button type="danger" size="small">删除</adapter-button>
            </template>
        </adapter-table>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { AdapterColumn } from '../../dist';

@Component
export default class extends Vue {

    public columns: Array < AdapterColumn > ;

    constructor() {
        super();

        this.columns = [
            { title: '姓名', field: 'name' },
            { title: '年龄', field: 'age' },
            { title: '性别', field: 'sex' },
            { title: '电话', field: 'phone' },
            { title: '地址', field: 'address' },
        ]
    }

    public loadData() {
        return Promise.resolve([
            { name: '测试', age: 27, sex: '男', phone: '13211111111', address: '测试地址' },
            { name: '测试1', age: 27, sex: '男', phone: '13211111112', address: '测试地址2' },
        ]);
    }
}
</script>