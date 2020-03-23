import { Service } from '@/libs';
import { ResponseImpl } from '@/impls/response.impl';

export class InitDataResponse extends ResponseImpl {
    public apps: string[];
    public predictDays: string[];
    public sequentialDays: string[];
    constructor() {
        super();
        this.apps = [];
        this.predictDays = [];
        this.sequentialDays = [];
    }
}

// tslint:disable-next-line:max-classes-per-file
export class ContainerService extends Service {
    public async consoleapiInit(data: { code: string }) {
        return this.http
            .get('rts/consoleapi/init', {
                data,
            })
            .then(resp => resp.data);
    }

    public async getWeichatUserInfo(data: { accToken: string; code: string }) {
        return this.http
            .get('rts/consoleapi/getWeichatUserInfo', { data })
            .then(resp => resp.data);
    }

    public async init(): Promise<InitDataResponse> {
        return await this.http.get('rts/sys/init').then(resp => resp.data);
    }
}
