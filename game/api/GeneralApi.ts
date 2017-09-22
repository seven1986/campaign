/**
 * campaign.game
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.2-preview-2.3
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
export class GeneralApi {
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
     * Post comment (image file optional)
     * 
     * @param gameId 
     * @param instanceId 
     * @param userName 
     * @param userImageUrl 
     * @param comment 
     */
    public apiGeneralComment(gameId?: string, instanceId?: number, userName?: string, userImageUrl?: string, comment?: string, extraHttpRequestParams?: any): Observable<models.BoolResult> {
        return this.apiGeneralCommentWithHttpInfo(gameId, instanceId, userName, userImageUrl, comment, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Check if shared for daily limit
     * 
     * @param partition 
     * @param userId 
     */
    public apiGeneralDailyLimitShared(partition?: string, userId?: string, extraHttpRequestParams?: any): Observable<models.BoolResult> {
        return this.apiGeneralDailyLimitSharedWithHttpInfo(partition, userId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Edit daily limit
     * 
     * @param partition 
     * @param userId 
     * @param limit 
     */
    public apiGeneralEditDailyLimit(partition?: string, userId?: string, limit?: number, extraHttpRequestParams?: any): Observable<models.IntResult> {
        return this.apiGeneralEditDailyLimitWithHttpInfo(partition, userId, limit, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get game instance details and images
     * 
     * @param appId 
     * @param appSecret 
     * @param gameId 
     * @param instanceId 
     */
    public apiGeneralGameInstanceDetails(appId?: string, appSecret?: string, gameId?: string, instanceId?: number, extraHttpRequestParams?: any): Observable<models.GameInstanceModel> {
        return this.apiGeneralGameInstanceDetailsWithHttpInfo(appId, appSecret, gameId, instanceId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get comment list
     * 
     * @param gameId 
     * @param instanceId 
     * @param skip 
     * @param take 
     */
    public apiGeneralGetComment(gameId?: string, instanceId?: number, skip?: number, take?: number, extraHttpRequestParams?: any): Observable<models.PagingResultCommentModel> {
        return this.apiGeneralGetCommentWithHttpInfo(gameId, instanceId, skip, take, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get daily limit
     * 
     * @param partition 
     * @param userId 
     * @param limit 
     */
    public apiGeneralGetDailyLimit(partition?: string, userId?: string, limit?: number, extraHttpRequestParams?: any): Observable<models.IntResult> {
        return this.apiGeneralGetDailyLimitWithHttpInfo(partition, userId, limit, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get individual ranking
     * 
     * @param partition 
     * @param appuserid 
     * @param openid 
     * @param nickname 
     * @param headimgurl 
     */
    public apiGeneralIndividualRanking(partition?: string, appuserid?: string, openid?: string, nickname?: string, headimgurl?: string, extraHttpRequestParams?: any): Observable<models.GeneralRankingModel> {
        return this.apiGeneralIndividualRankingWithHttpInfo(partition, appuserid, openid, nickname, headimgurl, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Increase daily limit
     * 
     * @param partition 
     * @param userId 
     * @param limit 
     */
    public apiGeneralPostDailyLimit(partition?: string, userId?: string, limit?: number, extraHttpRequestParams?: any): Observable<models.IntResult> {
        return this.apiGeneralPostDailyLimitWithHttpInfo(partition, userId, limit, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Upload ranking
     * 
     * @param partition 
     * @param appuserid 
     * @param openid 
     * @param nickname 
     * @param headimgurl 
     * @param score 
     */
    public apiGeneralPostRanking(partition?: string, appuserid?: string, openid?: string, nickname?: string, headimgurl?: string, score?: number, extraHttpRequestParams?: any): Observable<models.BoolResult> {
        return this.apiGeneralPostRankingWithHttpInfo(partition, appuserid, openid, nickname, headimgurl, score, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get ranking list
     * 
     * @param partition 
     * @param skip 
     * @param take 
     */
    public apiGeneralRanking(partition?: string, skip?: number, take?: number, extraHttpRequestParams?: any): Observable<models.PagingResultGeneralRankingModel> {
        return this.apiGeneralRankingWithHttpInfo(partition, skip, take, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Post comment (image file optional)
     * 
     * @param gameId 
     * @param instanceId 
     * @param userName 
     * @param userImageUrl 
     * @param comment 
     */
    public apiGeneralCommentWithHttpInfo(gameId?: string, instanceId?: number, userName?: string, userImageUrl?: string, comment?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/General/Comment`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (gameId !== undefined) {
            queryParameters.set('gameId', <any>gameId);
        }
        if (instanceId !== undefined) {
            queryParameters.set('instanceId', <any>instanceId);
        }
        if (userName !== undefined) {
            queryParameters.set('userName', <any>userName);
        }
        if (userImageUrl !== undefined) {
            queryParameters.set('userImageUrl', <any>userImageUrl);
        }
        if (comment !== undefined) {
            queryParameters.set('comment', <any>comment);
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
            method: RequestMethod.Post,
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
     * Check if shared for daily limit
     * 
     * @param partition 
     * @param userId 
     */
    public apiGeneralDailyLimitSharedWithHttpInfo(partition?: string, userId?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/General/DailyLimitShared`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (partition !== undefined) {
            queryParameters.set('partition', <any>partition);
        }
        if (userId !== undefined) {
            queryParameters.set('userId', <any>userId);
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
     * Edit daily limit
     * 
     * @param partition 
     * @param userId 
     * @param limit 
     */
    public apiGeneralEditDailyLimitWithHttpInfo(partition?: string, userId?: string, limit?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/General/DailyLimit`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (partition !== undefined) {
            queryParameters.set('partition', <any>partition);
        }
        if (userId !== undefined) {
            queryParameters.set('userId', <any>userId);
        }
        if (limit !== undefined) {
            queryParameters.set('limit', <any>limit);
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
            method: RequestMethod.Put,
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
     * Get game instance details and images
     * 
     * @param appId 
     * @param appSecret 
     * @param gameId 
     * @param instanceId 
     */
    public apiGeneralGameInstanceDetailsWithHttpInfo(appId?: string, appSecret?: string, gameId?: string, instanceId?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/General/GameInstanceDetails`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (appId !== undefined) {
            queryParameters.set('appId', <any>appId);
        }
        if (appSecret !== undefined) {
            queryParameters.set('appSecret', <any>appSecret);
        }
        if (gameId !== undefined) {
            queryParameters.set('gameId', <any>gameId);
        }
        if (instanceId !== undefined) {
            queryParameters.set('instanceId', <any>instanceId);
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
     * Get comment list
     * 
     * @param gameId 
     * @param instanceId 
     * @param skip 
     * @param take 
     */
    public apiGeneralGetCommentWithHttpInfo(gameId?: string, instanceId?: number, skip?: number, take?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/General/Comment`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (gameId !== undefined) {
            queryParameters.set('gameId', <any>gameId);
        }
        if (instanceId !== undefined) {
            queryParameters.set('instanceId', <any>instanceId);
        }
        if (skip !== undefined) {
            queryParameters.set('skip', <any>skip);
        }
        if (take !== undefined) {
            queryParameters.set('take', <any>take);
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
     * Get daily limit
     * 
     * @param partition 
     * @param userId 
     * @param limit 
     */
    public apiGeneralGetDailyLimitWithHttpInfo(partition?: string, userId?: string, limit?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/General/DailyLimit`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (partition !== undefined) {
            queryParameters.set('partition', <any>partition);
        }
        if (userId !== undefined) {
            queryParameters.set('userId', <any>userId);
        }
        if (limit !== undefined) {
            queryParameters.set('limit', <any>limit);
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
     * Get individual ranking
     * 
     * @param partition 
     * @param appuserid 
     * @param openid 
     * @param nickname 
     * @param headimgurl 
     */
    public apiGeneralIndividualRankingWithHttpInfo(partition?: string, appuserid?: string, openid?: string, nickname?: string, headimgurl?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/General/IndividualRanking`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (partition !== undefined) {
            queryParameters.set('partition', <any>partition);
        }
        if (appuserid !== undefined) {
            queryParameters.set('appuserid', <any>appuserid);
        }
        if (openid !== undefined) {
            queryParameters.set('openid', <any>openid);
        }
        if (nickname !== undefined) {
            queryParameters.set('nickname', <any>nickname);
        }
        if (headimgurl !== undefined) {
            queryParameters.set('headimgurl', <any>headimgurl);
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
     * Increase daily limit
     * 
     * @param partition 
     * @param userId 
     * @param limit 
     */
    public apiGeneralPostDailyLimitWithHttpInfo(partition?: string, userId?: string, limit?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/General/DailyLimit`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (partition !== undefined) {
            queryParameters.set('partition', <any>partition);
        }
        if (userId !== undefined) {
            queryParameters.set('userId', <any>userId);
        }
        if (limit !== undefined) {
            queryParameters.set('limit', <any>limit);
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
            method: RequestMethod.Post,
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
     * Upload ranking
     * 
     * @param partition 
     * @param appuserid 
     * @param openid 
     * @param nickname 
     * @param headimgurl 
     * @param score 
     */
    public apiGeneralPostRankingWithHttpInfo(partition?: string, appuserid?: string, openid?: string, nickname?: string, headimgurl?: string, score?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/General/WechatBasedRanking`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (partition !== undefined) {
            queryParameters.set('partition', <any>partition);
        }
        if (appuserid !== undefined) {
            queryParameters.set('appuserid', <any>appuserid);
        }
        if (openid !== undefined) {
            queryParameters.set('openid', <any>openid);
        }
        if (nickname !== undefined) {
            queryParameters.set('nickname', <any>nickname);
        }
        if (headimgurl !== undefined) {
            queryParameters.set('headimgurl', <any>headimgurl);
        }
        if (score !== undefined) {
            queryParameters.set('score', <any>score);
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
            method: RequestMethod.Post,
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
     * Get ranking list
     * 
     * @param partition 
     * @param skip 
     * @param take 
     */
    public apiGeneralRankingWithHttpInfo(partition?: string, skip?: number, take?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/General/WechatBasedRanking`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (partition !== undefined) {
            queryParameters.set('partition', <any>partition);
        }
        if (skip !== undefined) {
            queryParameters.set('skip', <any>skip);
        }
        if (take !== undefined) {
            queryParameters.set('take', <any>take);
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
