import { Action, Mutation } from 'vuex-module-decorators';
import { VuexModule, Module } from '@/libs';
import { ContainerService, InitDataResponse } from './service';
import store from '@/store';

@Module({ store })
export class ContainerStore extends VuexModule {
    public static id: string;
    public static action: (callback: (model: any) => any) => string;

    public service: ContainerService;
    public userInfo: any;
    public accessToken: string;
    public initData: InitDataResponse;

    constructor(state: ContainerStore) {
        super(state);
        this.service = new ContainerService();
        this.userInfo = {} as any;
        this.accessToken = '';
        this.initData = new InitDataResponse();
    }

    @Action({ commit: 'consoleapiInitSuccess' })
    public async consoleapiInit(data: { payload: { code: string } }) {
        const resp = await this.service.consoleapiInit(data.payload);
        if (resp['talefun-retained-console-server']) {
            const { accessToken } = resp['talefun-retained-console-server'];
            return resp['talefun-retained-console-server'] || {};
        }
        return {
            errno: 1000,
            err: new Error('accessToken 获取失败 .'),
            errmsg: 'accessToken 获取失败 .',
        };
    }

    @Mutation
    public async consoleapiInitSuccess(data: {
        payload: { accessToken?: string };
    }) {
        this.accessToken = data.payload.accessToken || '';
    }

    @Action({ commit: 'getWeichatUserInfoSuccess' })
    public async getWeichatUserInfo(data: { payload: { code: string } }) {
        const resp = await this.service.getWeichatUserInfo({
            ...data.payload,
            accToken: this.accessToken,
        });
        if (resp['talefun-retained-console-server']) {
            const { userInfo } = resp['talefun-retained-console-server'];
            return { userInfo };
        }
        return {
            errno: 1000,
            err: new Error('accessToken 获取失败 .'),
            errmsg: 'accessToken 获取失败 .',
        };
    }

    @Mutation
    public async getWeichatUserInfoSuccess(data: { userInfo?: string }) {
        this.userInfo = data.userInfo || ({} as any);
    }

    @Action({ commit: 'initSuccess' })
    public async init() {
        return await this.service.init();
    }

    @Mutation
    public async initSuccess(data: InitDataResponse) {
        if (!data.err) {
            this.initData = data;
        }
    }
}
