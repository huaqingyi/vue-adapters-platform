import Vue from 'vue';
import { AdapterColumn } from '../../impls';
export default class extends Vue {
    get fieldNames(): {
        [x: string]: string;
    };
    columns: Array<AdapterColumn>;
    data: object;
    title: string;
    show: boolean;
    constructor();
    created(): Promise<void>;
    showPopup(): Promise<void>;
    mapData(row: any): any;
}
