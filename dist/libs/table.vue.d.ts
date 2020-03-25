import Vue from 'vue';
import { AdapterColumn } from '../impls';
export default class extends Vue {
    get isMobile(): boolean;
    columns: Array<AdapterColumn>;
    dataSource: () => Promise<Array<any>>;
    loading: boolean;
    finished: boolean;
    collapses: Array<string | number>;
    firestField?: string;
    data: Array<any>;
    visibleSearch: boolean;
    constructor();
    freashTable(): Promise<void>;
    created(): Promise<void>;
    showSlot(field: string): boolean;
    showSearch(): void;
}
