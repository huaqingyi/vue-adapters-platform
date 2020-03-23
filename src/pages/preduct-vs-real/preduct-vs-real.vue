<template>
    <vxe-table border="none" align="center" :data="tableData">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column
            field="name"
            title="app.body.label.name"
        ></vxe-table-column>
        <vxe-table-column
            field="sex"
            title="app.body.label.sex"
        ></vxe-table-column>
        <vxe-table-column
            field="age"
            title="app.body.label.age"
        ></vxe-table-column>
    </vxe-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
    public tableData: any[];
    constructor(props: any) {
        super(props);
        this.tableData = [];
    }
}
</script>
