// 需要配置angular4+ inersector使用
import {Injectable }  from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CampaignCoreIdentityClient {
    public basePath:string = '/ids';
    constructor(protected http: HttpClient){
    }

    public ApiResourcePut(model:any): Observable<any> {
      const path = `${this.basePath}/ApiResource`;
      return this.http.put(path, model); 
    }

    public ApiResourcePost(model:any): Observable<any> {
      const path = `${this.basePath}/ApiResource`;
      return this.http.post(path, model); 
    }

    public ApiResourceGet(asc?,skip?,take?,q_Name?,orderby?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/ApiResource`;
      let requestParams = new HttpParams();
      if (asc !== undefined) { requestParams = requestParams.set('asc', <any>asc);}
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      if (q_Name !== undefined) { requestParams = requestParams.set('q.Name', <any>q_Name);}
      if (orderby !== undefined) { requestParams = requestParams.set('orderby', <any>orderby);}
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public ApiResourceDetail(id?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/ApiResource/${id}`;
      let requestParams = new HttpParams();
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public ApiResourceDelete(id?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/ApiResource/${id}`;
      let requestParams = new HttpParams();
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.delete(path, options); 
    }

    public ClientPut(model:any): Observable<any> {
      const path = `${this.basePath}/Client`;
      return this.http.put(path, model); 
    }

    public ClientPost(model:any): Observable<any> {
      const path = `${this.basePath}/Client`;
      return this.http.post(path, model); 
    }

    public ClientGet(asc?,skip?,take?,q_ClientID?,q_ClientName?,orderby?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/Client`;
      let requestParams = new HttpParams();
      if (asc !== undefined) { requestParams = requestParams.set('asc', <any>asc);}
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      if (q_ClientID !== undefined) { requestParams = requestParams.set('q.ClientID', <any>q_ClientID);}
      if (q_ClientName !== undefined) { requestParams = requestParams.set('q.ClientName', <any>q_ClientName);}
      if (orderby !== undefined) { requestParams = requestParams.set('orderby', <any>orderby);}
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public ClientDetail(id?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/Client/${id}`;
      let requestParams = new HttpParams();
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public ClientDelete(id?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/Client/${id}`;
      let requestParams = new HttpParams();
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.delete(path, options); 
    }

    public IdentityResourcePut(model:any): Observable<any> {
      const path = `${this.basePath}/IdentityResource`;
      return this.http.put(path, model); 
    }

    public IdentityResourcePost(model:any): Observable<any> {
      const path = `${this.basePath}/IdentityResource`;
      return this.http.post(path, model); 
    }

    public IdentityResourceGet(asc?, skip?, take?,q_Name?,orderby?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/IdentityResource`;
      let requestParams = new HttpParams();
      if (asc !== undefined) { requestParams = requestParams.set('asc', <any>asc);}
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      if (q_Name !== undefined) { requestParams = requestParams.set('q.Name', <any>q_Name);}
      if (orderby !== undefined) { requestParams = requestParams.set('orderby', <any>orderby);}
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public IdentityResourceDetail(id?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/IdentityResource/${id}`;
      let requestParams = new HttpParams();
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public IdentityResourceDelete(id?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/IdentityResource/${id}`;
      let requestParams = new HttpParams();
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.delete(path, options); 
    }

    public RoleGet(apiVersion?): Observable<any> {
      const path = `${this.basePath}/Role`;
      let requestParams = new HttpParams();
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public RolePut(model:any): Observable<any> {
      const path = `${this.basePath}/Role`;
      return this.http.put(path, model); 
    }

    public RolePost(model:any): Observable<any> {
      const path = `${this.basePath}/Role`;
      return this.http.post(path, model); 
    }

    public RoleDetail(id?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/Role/${id}`;
      let requestParams = new HttpParams();
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public RoleDelete(id?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/Role/${id}`;
      let requestParams = new HttpParams();
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.delete(path, options); 
    }

    public UserPut(model:any): Observable<any> {
      const path = `${this.basePath}/User`;
      return this.http.put(path, model); 
    }

    public UserPost(model:any): Observable<any> {
      const path = `${this.basePath}/User`;
      return this.http.post(path, model); 
    }

    public UserGet(q_Role?, asc?, skip?, take?, q_PhoneNumber?, q_Name?,q_Email?,orderby?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/User`;
      let requestParams = new HttpParams();
      if (q_Role !== undefined) { requestParams = requestParams.set('q.Role', <any>q_Role);}
      if (asc !== undefined) { requestParams = requestParams.set('asc', <any>asc);}
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      if (q_PhoneNumber !== undefined) { requestParams = requestParams.set('q.PhoneNumber', <any>q_PhoneNumber);}
      if (q_Name !== undefined) { requestParams = requestParams.set('q.Name', <any>q_Name);}
      if (q_Email !== undefined) { requestParams = requestParams.set('q.Email', <any>q_Email);}
      if (orderby !== undefined) { requestParams = requestParams.set('orderby', <any>orderby);}
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public UserDetail(id?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/User/${id}`;
      let requestParams = new HttpParams();
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public UserDelete(id?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/User/${id}`;
      let requestParams = new HttpParams();
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.delete(path, options); 
    }

    public ImagePost(model:any): Observable<any> {
      const path = `${this.basePath}/Image`;
      return this.http.post(path, model); 
    }

    public UserApplyFor(model:any): Observable<any> {
      const path = `${this.basePath}/User/ApplyFor`;
      return this.http.post(path, model); 
    }

    public UserVerifyPhoneNumber(model:any): Observable<any> {
      const path = `${this.basePath}/User/VerifyPhoneNumber`;
      return this.http.post(path, model); 
    }

    public FilePost(model:any): Observable<any> {
      const path = `${this.basePath}/File`;
      return this.http.post(path, model); 
    }

    public UserVerifyEmailAddress(model:any): Observable<any> {
      const path = `${this.basePath}/User/VerifyEmailAddress`;
      return this.http.post(path, model); 
    }

    public TenancyGet(asc?, skip?, take?,q_Host?,orderby?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/Tenancy`;
      let requestParams = new HttpParams();
      if (asc !== undefined) { requestParams = requestParams.set('asc', <any>asc);}
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      if (q_Host !== undefined) { requestParams = requestParams.set('q.Host', <any>q_Host);}
      if (orderby !== undefined) { requestParams = requestParams.set('orderby', <any>orderby);}
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public TenancyPut(model:any): Observable<any> {
      const path = `${this.basePath}/Tenancy`;
      return this.http.put(path, model); 
    }

    public TenancyPost(model:any): Observable<any> {
      const path = `${this.basePath}/Tenancy`;
      return this.http.post(path, model); 
    }

    public TenancyDetail(id?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/Tenancy/${id}`;
      let requestParams = new HttpParams();
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public TenancyDelete(id?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/Tenancy/${id}`;
      let requestParams = new HttpParams();
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.delete(path, options); 
    }

    public UserHead(PhoneNumber?,apiVersion?): Observable<any> {
      const path = `${this.basePath}/User/Head`;
      let requestParams = new HttpParams();
      if (PhoneNumber !== undefined) { requestParams = requestParams.set('PhoneNumber', <any>PhoneNumber);}
      if (apiVersion !== undefined) { requestParams = requestParams.set('api-version', <any>apiVersion);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }
 }