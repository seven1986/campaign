/**
 * campaign.game
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.2-preview-2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH }                                         from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class WechatApi {
    protected basePath = 'https://openapis.ixingban.com/game';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
	
	/**
     * 
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T, U>(first: T, second: U): T & U {
        let result = <T & U>{};
        for (let id in first) {
            (<any>result)[id] = (<any>first)[id];
        }
        for (let id in second) {
            if (!result.hasOwnProperty(id)) {
                (<any>result)[id] = (<any>second)[id];
            }
        }
        return result;
    }


    /**
     * Get wechat share signature
     * 
     * @param appTag 
     * @param url 
     */
    public apiWechatCustomShare(appTag?: number, url?: string, extraHttpRequestParams?: any): Observable<models.WechatCustomShare> {
        return this.apiWechatCustomShareWithHttpInfo(appTag, url, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get wechat user info
     * 
     * @param appTag 
     * @param code 
     */
    public apiWechatUserInfo(appTag?: number, code?: string, extraHttpRequestParams?: any): Observable<models.WechatUserInfo> {
        return this.apiWechatUserInfoWithHttpInfo(appTag, code, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Get wechat share signature
     * 
     * @param appTag 
     * @param url 
     */
    public apiWechatCustomShareWithHttpInfo(appTag?: number, url?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/Wechat/CustomShare`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (appTag !== undefined) {
            queryParameters.set('appTag', <any>appTag);
        }
        if (url !== undefined) {
            queryParameters.set('url', <any>url);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'text/plain', 
            'application/json', 
            'text/json'
        ];
        
        // authentication (apiKeyHeader) required
        if (this.configuration.apiKey)
        {
            headers.set('Ocp-Apim-Subscription-Key', this.configuration.apiKey);
        }
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get wechat user info
     * 
     * @param appTag 
     * @param code 
     */
    public apiWechatUserInfoWithHttpInfo(appTag?: number, code?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/Wechat/UserInfo`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (appTag !== undefined) {
            queryParameters.set('appTag', <any>appTag);
        }
        if (code !== undefined) {
            queryParameters.set('code', <any>code);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'text/plain', 
            'application/json', 
            'text/json'
        ];
        
        // authentication (apiKeyHeader) required
        if (this.configuration.apiKey)
        {
            headers.set('Ocp-Apim-Subscription-Key', this.configuration.apiKey);
        }
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
