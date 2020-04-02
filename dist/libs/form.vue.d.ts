import Vue from 'vue';
export default class extends Vue {
    isMobile: boolean;
    get className(): string;
    platform: string | boolean;
    constructor();
    created(): Promise<void>;
}
