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
export class GameAdminApi {
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
     * Delete game
     * 
     * @param gameId 
     */
    public adminGameDelete(gameId?: string, extraHttpRequestParams?: any): Observable<models.BoolResult> {
        return this.adminGameDeleteWithHttpInfo(gameId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Delete game image
     * 
     * @param imageId 
     */
    public adminGameDeleteImage(imageId?: number, extraHttpRequestParams?: any): Observable<models.BoolResult> {
        return this.adminGameDeleteImageWithHttpInfo(imageId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Delete game instance
     * 
     * @param instanceId 
     */
    public adminGameDeleteInstance(instanceId?: number, extraHttpRequestParams?: any): Observable<models.BoolResult> {
        return this.adminGameDeleteInstanceWithHttpInfo(instanceId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Edit game
     * 
     * @param gameId 
     * @param gameName 
     * @param gameType 
     * @param creator 
     */
    public adminGameEdit(gameId?: string, gameName?: string, gameType?: number, creator?: string, extraHttpRequestParams?: any): Observable<models.BoolResult> {
        return this.adminGameEditWithHttpInfo(gameId, gameName, gameType, creator, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Edit game image
     * 
     * @param imageId 
     * @param imageType 
     * @param imageName 
     * @param imageDetails 
     */
    public adminGameEditImage(imageId?: number, imageType?: number, imageName?: string, imageDetails?: string, extraHttpRequestParams?: any): Observable<models.BoolResult> {
        return this.adminGameEditImageWithHttpInfo(imageId, imageType, imageName, imageDetails, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Edit game instance
     * 
     * @param instanceId 
     * @param instanceName 
     * @param instanceDetails 
     * @param instanceRules 
     * @param instanceInstruction 
     * @param status 
     * @param startDate 
     * @param endDate 
     * @param creator 
     */
    public adminGameEditInstance(instanceId?: number, instanceName?: string, instanceDetails?: string, instanceRules?: string, instanceInstruction?: string, status?: number, startDate?: Date, endDate?: Date, creator?: string, extraHttpRequestParams?: any): Observable<models.BoolResult> {
        return this.adminGameEditInstanceWithHttpInfo(instanceId, instanceName, instanceDetails, instanceRules, instanceInstruction, status, startDate, endDate, creator, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get Game List
     * 
     * @param appId 
     * @param appSecret 
     * @param take 
     * @param skip 
     */
    public adminGameGet(appId?: string, appSecret?: string, take?: number, skip?: number, extraHttpRequestParams?: any): Observable<models.PagingResultGameList> {
        return this.adminGameGetWithHttpInfo(appId, appSecret, take, skip, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Game image list
     * 
     * @param instanceId 
     * @param take 
     * @param skip 
     */
    public adminGameImage(instanceId?: number, take?: number, skip?: number, extraHttpRequestParams?: any): Observable<models.PagingResultGameImage> {
        return this.adminGameImageWithHttpInfo(instanceId, take, skip, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get game instances
     * 
     * @param gameId 
     * @param take 
     * @param skip 
     */
    public adminGameInstance(gameId?: string, take?: number, skip?: number, extraHttpRequestParams?: any): Observable<models.PagingResultGameInstance> {
        return this.adminGameInstanceWithHttpInfo(gameId, take, skip, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create new game
     * 
     * @param appId 
     * @param appSecret 
     * @param gameName 
     * @param gameType 
     * @param creator 
     */
    public adminGamePost(appId?: string, appSecret?: string, gameName?: string, gameType?: number, creator?: string, extraHttpRequestParams?: any): Observable<models.BoolResult> {
        return this.adminGamePostWithHttpInfo(appId, appSecret, gameName, gameType, creator, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Upload game image
     * 
     * @param instanceId 
     * @param imageType 
     * @param imageName 
     * @param imageDetails 
     */
    public adminGamePostImage(instanceId?: number, imageType?: number, imageName?: string, imageDetails?: string, extraHttpRequestParams?: any): Observable<models.BoolResult> {
        return this.adminGamePostImageWithHttpInfo(instanceId, imageType, imageName, imageDetails, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create new game instance
     * 
     * @param gameId 
     * @param instanceName 
     * @param instanceDetails 
     * @param instanceRules 
     * @param instanceInstruction 
     * @param status 
     * @param startDate 
     * @param endDate 
     * @param creator 
     */
    public adminGamePostInstance(gameId?: string, instanceName?: string, instanceDetails?: string, instanceRules?: string, instanceInstruction?: string, status?: number, startDate?: Date, endDate?: Date, creator?: string, extraHttpRequestParams?: any): Observable<models.BoolResult> {
        return this.adminGamePostInstanceWithHttpInfo(gameId, instanceName, instanceDetails, instanceRules, instanceInstruction, status, startDate, endDate, creator, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Delete game
     * 
     * @param gameId 
     */
    public adminGameDeleteWithHttpInfo(gameId?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/Admin/Game/Delete`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (gameId !== undefined) {
            queryParameters.set('gameId', <any>gameId);
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
            method: RequestMethod.Delete,
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
     * Delete game image
     * 
     * @param imageId 
     */
    public adminGameDeleteImageWithHttpInfo(imageId?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/Admin/Game/Image`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (imageId !== undefined) {
            queryParameters.set('imageId', <any>imageId);
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
            method: RequestMethod.Delete,
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
     * Delete game instance
     * 
     * @param instanceId 
     */
    public adminGameDeleteInstanceWithHttpInfo(instanceId?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/Admin/Game/Instance`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
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
            method: RequestMethod.Delete,
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
     * Edit game
     * 
     * @param gameId 
     * @param gameName 
     * @param gameType 
     * @param creator 
     */
    public adminGameEditWithHttpInfo(gameId?: string, gameName?: string, gameType?: number, creator?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/Admin/Game/Edit`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (gameId !== undefined) {
            queryParameters.set('gameId', <any>gameId);
        }
        if (gameName !== undefined) {
            queryParameters.set('gameName', <any>gameName);
        }
        if (gameType !== undefined) {
            queryParameters.set('gameType', <any>gameType);
        }
        if (creator !== undefined) {
            queryParameters.set('creator', <any>creator);
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
     * Edit game image
     * 
     * @param imageId 
     * @param imageType 
     * @param imageName 
     * @param imageDetails 
     */
    public adminGameEditImageWithHttpInfo(imageId?: number, imageType?: number, imageName?: string, imageDetails?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/Admin/Game/Image`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (imageId !== undefined) {
            queryParameters.set('imageId', <any>imageId);
        }
        if (imageType !== undefined) {
            queryParameters.set('imageType', <any>imageType);
        }
        if (imageName !== undefined) {
            queryParameters.set('imageName', <any>imageName);
        }
        if (imageDetails !== undefined) {
            queryParameters.set('imageDetails', <any>imageDetails);
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
     * Edit game instance
     * 
     * @param instanceId 
     * @param instanceName 
     * @param instanceDetails 
     * @param instanceRules 
     * @param instanceInstruction 
     * @param status 
     * @param startDate 
     * @param endDate 
     * @param creator 
     */
    public adminGameEditInstanceWithHttpInfo(instanceId?: number, instanceName?: string, instanceDetails?: string, instanceRules?: string, instanceInstruction?: string, status?: number, startDate?: Date, endDate?: Date, creator?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/Admin/Game/Instance`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (instanceId !== undefined) {
            queryParameters.set('instanceId', <any>instanceId);
        }
        if (instanceName !== undefined) {
            queryParameters.set('instanceName', <any>instanceName);
        }
        if (instanceDetails !== undefined) {
            queryParameters.set('instanceDetails', <any>instanceDetails);
        }
        if (instanceRules !== undefined) {
            queryParameters.set('instanceRules', <any>instanceRules);
        }
        if (instanceInstruction !== undefined) {
            queryParameters.set('instanceInstruction', <any>instanceInstruction);
        }
        if (status !== undefined) {
            queryParameters.set('status', <any>status);
        }
        if (startDate !== undefined) {
            queryParameters.set('startDate', <any>startDate);
        }
        if (endDate !== undefined) {
            queryParameters.set('endDate', <any>endDate);
        }
        if (creator !== undefined) {
            queryParameters.set('creator', <any>creator);
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
     * Get Game List
     * 
     * @param appId 
     * @param appSecret 
     * @param take 
     * @param skip 
     */
    public adminGameGetWithHttpInfo(appId?: string, appSecret?: string, take?: number, skip?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/Admin/Game/Get`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (appId !== undefined) {
            queryParameters.set('appId', <any>appId);
        }
        if (appSecret !== undefined) {
            queryParameters.set('appSecret', <any>appSecret);
        }
        if (take !== undefined) {
            queryParameters.set('take', <any>take);
        }
        if (skip !== undefined) {
            queryParameters.set('skip', <any>skip);
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
     * Game image list
     * 
     * @param instanceId 
     * @param take 
     * @param skip 
     */
    public adminGameImageWithHttpInfo(instanceId?: number, take?: number, skip?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/Admin/Game/Image`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (instanceId !== undefined) {
            queryParameters.set('instanceId', <any>instanceId);
        }
        if (take !== undefined) {
            queryParameters.set('take', <any>take);
        }
        if (skip !== undefined) {
            queryParameters.set('skip', <any>skip);
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
     * Get game instances
     * 
     * @param gameId 
     * @param take 
     * @param skip 
     */
    public adminGameInstanceWithHttpInfo(gameId?: string, take?: number, skip?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/Admin/Game/Instance`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (gameId !== undefined) {
            queryParameters.set('gameId', <any>gameId);
        }
        if (take !== undefined) {
            queryParameters.set('take', <any>take);
        }
        if (skip !== undefined) {
            queryParameters.set('skip', <any>skip);
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
     * Create new game
     * 
     * @param appId 
     * @param appSecret 
     * @param gameName 
     * @param gameType 
     * @param creator 
     */
    public adminGamePostWithHttpInfo(appId?: string, appSecret?: string, gameName?: string, gameType?: number, creator?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/Admin/Game/Post`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (appId !== undefined) {
            queryParameters.set('appId', <any>appId);
        }
        if (appSecret !== undefined) {
            queryParameters.set('appSecret', <any>appSecret);
        }
        if (gameName !== undefined) {
            queryParameters.set('gameName', <any>gameName);
        }
        if (gameType !== undefined) {
            queryParameters.set('gameType', <any>gameType);
        }
        if (creator !== undefined) {
            queryParameters.set('creator', <any>creator);
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
     * Upload game image
     * 
     * @param instanceId 
     * @param imageType 
     * @param imageName 
     * @param imageDetails 
     */
    public adminGamePostImageWithHttpInfo(instanceId?: number, imageType?: number, imageName?: string, imageDetails?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/Admin/Game/Image`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (instanceId !== undefined) {
            queryParameters.set('instanceId', <any>instanceId);
        }
        if (imageType !== undefined) {
            queryParameters.set('imageType', <any>imageType);
        }
        if (imageName !== undefined) {
            queryParameters.set('imageName', <any>imageName);
        }
        if (imageDetails !== undefined) {
            queryParameters.set('imageDetails', <any>imageDetails);
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
     * Create new game instance
     * 
     * @param gameId 
     * @param instanceName 
     * @param instanceDetails 
     * @param instanceRules 
     * @param instanceInstruction 
     * @param status 
     * @param startDate 
     * @param endDate 
     * @param creator 
     */
    public adminGamePostInstanceWithHttpInfo(gameId?: string, instanceName?: string, instanceDetails?: string, instanceRules?: string, instanceInstruction?: string, status?: number, startDate?: Date, endDate?: Date, creator?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/Admin/Game/Instance`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (gameId !== undefined) {
            queryParameters.set('gameId', <any>gameId);
        }
        if (instanceName !== undefined) {
            queryParameters.set('instanceName', <any>instanceName);
        }
        if (instanceDetails !== undefined) {
            queryParameters.set('instanceDetails', <any>instanceDetails);
        }
        if (instanceRules !== undefined) {
            queryParameters.set('instanceRules', <any>instanceRules);
        }
        if (instanceInstruction !== undefined) {
            queryParameters.set('instanceInstruction', <any>instanceInstruction);
        }
        if (status !== undefined) {
            queryParameters.set('status', <any>status);
        }
        if (startDate !== undefined) {
            queryParameters.set('startDate', <any>startDate);
        }
        if (endDate !== undefined) {
            queryParameters.set('endDate', <any>endDate);
        }
        if (creator !== undefined) {
            queryParameters.set('creator', <any>creator);
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

}