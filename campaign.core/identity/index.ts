// 需要配置angular4+ inersector使用
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CampaignCoreIdentityClient {
    public basePath: string = '/ids';
    constructor(protected http: HttpClient) {
    }

    public ApiResourceGet(skip?, take?): Observable<any> {
        const path = `${this.basePath}/ApiResource`;
        let requestParams = new HttpParams();
        if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip); }
        if (take !== undefined) { requestParams = requestParams.set('take', <any>take); }
        let options = { params: requestParams }
        return this.http.get(path, options);
    }

    public ApiResourcePut(model: any): Observable<any> {
        const path = `${this.basePath}/ApiResource`;
        return this.http.put(path, model);
    }

    public ApiResourcePost(model: any): Observable<any> {
        const path = `${this.basePath}/ApiResource`;
        return this.http.post(path, model);
    }

    public ApiResourceDetail(id?): Observable<any> {
        const path = `${this.basePath}/ApiResource/${id}`;
        return this.http.get(path);
    }

    public ApiResourceDelete(id?): Observable<any> {
        const path = `${this.basePath}/ApiResource/${id}`;
        return this.http.delete(path);
    }

    public ClientGet(skip?, take?): Observable<any> {
        const path = `${this.basePath}/Client`;
        let requestParams = new HttpParams();
        if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip); }
        if (take !== undefined) { requestParams = requestParams.set('take', <any>take); }
        let options = { params: requestParams }
        return this.http.get(path, options);
    }

    public ClientPut(model: any): Observable<any> {
        const path = `${this.basePath}/Client`;
        return this.http.put(path, model);
    }

    public ClientPost(model: any): Observable<any> {
        const path = `${this.basePath}/Client`;
        return this.http.post(path, model);
    }

    public ClientDetail(id?): Observable<any> {
        const path = `${this.basePath}/Client/${id}`;
        return this.http.get(path);
    }

    public ClientDelete(id?): Observable<any> {
        const path = `${this.basePath}/Client/${id}`;
        return this.http.delete(path);
    }

    public IdentityResourceGet(skip?, take?): Observable<any> {
        const path = `${this.basePath}/IdentityResource`;
        let requestParams = new HttpParams();
        if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip); }
        if (take !== undefined) { requestParams = requestParams.set('take', <any>take); }
        let options = { params: requestParams }
        return this.http.get(path, options);
    }

    public IdentityResourcePut(model: any): Observable<any> {
        const path = `${this.basePath}/IdentityResource`;
        return this.http.put(path, model);
    }

    public IdentityResourcePost(model: any): Observable<any> {
        const path = `${this.basePath}/IdentityResource`;
        return this.http.post(path, model);
    }

    public IdentityResourceDetail(id?): Observable<any> {
        const path = `${this.basePath}/IdentityResource/${id}`;
        return this.http.get(path);
    }

    public IdentityResourceDelete(id?): Observable<any> {
        const path = `${this.basePath}/IdentityResource/${id}`;
        return this.http.delete(path);
    }

    public RoleGet(skip?, take?): Observable<any> {
        const path = `${this.basePath}/Role`;
        let requestParams = new HttpParams();
        if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip); }
        if (take !== undefined) { requestParams = requestParams.set('take', <any>take); }
        let options = { params: requestParams }
        return this.http.get(path, options);
    }

    public RolePut(model: any): Observable<any> {
        const path = `${this.basePath}/Role`;
        return this.http.put(path, model);
    }

    public RolePost(model: any): Observable<any> {
        const path = `${this.basePath}/Role`;
        return this.http.post(path, model);
    }

    public RoleDetail(id?): Observable<any> {
        const path = `${this.basePath}/Role/${id}`;
        return this.http.get(path);
    }

    public RoleDelete(id?): Observable<any> {
        const path = `${this.basePath}/Role/${id}`;
        return this.http.delete(path);
    }

    public UserGet(skip?, take?): Observable<any> {
        const path = `${this.basePath}/User`;
        let requestParams = new HttpParams();
        if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip); }
        if (take !== undefined) { requestParams = requestParams.set('take', <any>take); }
        let options = { params: requestParams }
        return this.http.get(path, options);
    }

    public UserPut(model: any): Observable<any> {
        const path = `${this.basePath}/User`;
        return this.http.put(path, model);
    }

    public UserPost(model: any): Observable<any> {
        const path = `${this.basePath}/User`;
        return this.http.post(path, model);
    }

    public UserDetail(id?): Observable<any> {
        const path = `${this.basePath}/User/${id}`;
        return this.http.get(path);
    }

    public UserDelete(id?): Observable<any> {
        const path = `${this.basePath}/User/${id}`;
        return this.http.delete(path);
    }

    public ImagePost(model: any): Observable<any> {
        const path = `${this.basePath}/Image`;
        return this.http.post(path, model);
    }
}