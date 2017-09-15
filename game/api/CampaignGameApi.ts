/**
 * campaign.game
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.2-preview
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

import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models from '../model/models';
import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class CampaignGameApi {
    protected basePath = 'https://openapis.ixingban.com/game';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
     * 
     * Comment according to comparisonId
     * @param commentModel 
     */
    public apiFaceRecognitionComment(commentModel?: models.CommentModel, extraHttpRequestParams?: any): Observable<models.BoolResult> {
        return this.apiFaceRecognitionCommentWithHttpInfo(commentModel, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Get a list of comments according to comparisonId
     * @param comparisonId unique comparison ID
     * @param take Format - int32.
     * @param skip Format - int32.
     */
    public apiFaceRecognitionComments(comparisonId?: string, take?: number, skip?: number, extraHttpRequestParams?: any): Observable<models.PagingResultCommentModel> {
        return this.apiFaceRecognitionCommentsWithHttpInfo(comparisonId, take, skip, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Details of face comparison
     * @param comparisonId unique comparison ID
     */
    public apiFaceRecognitionComparison(comparisonId?: string, extraHttpRequestParams?: any): Observable<models.FaceComparison> {
        return this.apiFaceRecognitionComparisonWithHttpInfo(comparisonId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Get a list of face comparisons
     * @param take Format - int32.
     * @param skip Format - int32.
     */
    public apiFaceRecognitionComparisonList(take?: number, skip?: number, extraHttpRequestParams?: any): Observable<models.PagingResultFaceComparison> {
        return this.apiFaceRecognitionComparisonListWithHttpInfo(take, skip, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Submit a face comparison
     * @param userId 用户的AppUserId
     * @param openId 微信的用户OpenID
     * @param nickName 微信的用户昵称
     * @param headerImgUrl 微信的用户头像
     * @param country 微信的用户国家
     * @param comparisonId 
     * @param confidence Format - double. 相似度
     * @param commentCount Format - int32. 点评数
     * @param ranking Format - int32.
     * @param img1Url 
     * @param img2Url 
     * @param errcode Format - int32.
     * @param errmsg 
     */
    public apiFaceRecognitionFaceComparison(userId?: string, openId?: string, nickName?: string, headerImgUrl?: string, country?: string, comparisonId?: string, confidence?: number, commentCount?: number, ranking?: number, img1Url?: string, img2Url?: string, errcode?: number, errmsg?: string, extraHttpRequestParams?: any): Observable<models.FaceComparison> {
        return this.apiFaceRecognitionFaceComparisonWithHttpInfo(userId, openId, nickName, headerImgUrl, country, comparisonId, confidence, commentCount, ranking, img1Url, img2Url, errcode, errmsg, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * 成绩列表
     * @param partition 
     * @param skip Format - int32.
     * @param take Format - int32.
     */
    public apiGeneralGetRanking(partition?: string, skip?: number, take?: number, extraHttpRequestParams?: any): Observable<models.PagingResultGeneralRankingModel> {
        return this.apiGeneralGetRankingWithHttpInfo(partition, skip, take, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * 上传成绩
     * @param appuserid 
     * @param openid 
     * @param nickname 
     * @param headimgurl 
     * @param score Format - int32.
     * @param partition 
     */
    public apiGeneralInsertRanking(appuserid?: string, openid?: string, nickname?: string, headimgurl?: string, score?: number, partition?: string, extraHttpRequestParams?: any): Observable<models.BoolResult> {
        return this.apiGeneralInsertRankingWithHttpInfo(appuserid, openid, nickname, headimgurl, score, partition, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Get poster generation statistic
     */
    public apiPosterGet(extraHttpRequestParams?: any): Observable<models.IntResult> {
        return this.apiPosterGetWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Record poster generation statistic
     * @param statisticDataEntity 
     */
    public apiPosterPost(statisticDataEntity?: models.StatisticDataEntity, extraHttpRequestParams?: any): Observable<models.BoolResult> {
        return this.apiPosterPostWithHttpInfo(statisticDataEntity, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Get wechat share signature
     * @param appTag Format - int32.
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
     * 
     * Get wechat user info
     * @param appTag Format - int32.
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
     * 
     * Comment according to comparisonId
     * @param commentModel 
     */
    public apiFaceRecognitionCommentWithHttpInfo(commentModel?: models.CommentModel, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/FaceRecognition/Comment`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/json',
            'application/json-patch+json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];

        // authentication (apiKeyHeader) required
        if (this.configuration.apiKey) {
            headers.set('Ocp-Apim-Subscription-Key', this.configuration.apiKey);
        }


        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: commentModel == null ? '' : JSON.stringify(commentModel), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Get a list of comments according to comparisonId
     * @param comparisonId unique comparison ID
     * @param take Format - int32.
     * @param skip Format - int32.
     */
    public apiFaceRecognitionCommentsWithHttpInfo(comparisonId?: string, take?: number, skip?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/FaceRecognition/Comments`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (comparisonId !== undefined) {
            queryParameters.set('comparisonId', <any>comparisonId);
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
        if (this.configuration.apiKey) {
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
     * 
     * Details of face comparison
     * @param comparisonId unique comparison ID
     */
    public apiFaceRecognitionComparisonWithHttpInfo(comparisonId?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/FaceRecognition/Comparison`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (comparisonId !== undefined) {
            queryParameters.set('comparisonId', <any>comparisonId);
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
        if (this.configuration.apiKey) {
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
     * 
     * Get a list of face comparisons
     * @param take Format - int32.
     * @param skip Format - int32.
     */
    public apiFaceRecognitionComparisonListWithHttpInfo(take?: number, skip?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/FaceRecognition/ComparisonList`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
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
        if (this.configuration.apiKey) {
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
     * 
     * Submit a face comparison
     * @param userId 用户的AppUserId
     * @param openId 微信的用户OpenID
     * @param nickName 微信的用户昵称
     * @param headerImgUrl 微信的用户头像
     * @param country 微信的用户国家
     * @param comparisonId 
     * @param confidence Format - double. 相似度
     * @param commentCount Format - int32. 点评数
     * @param ranking Format - int32.
     * @param img1Url 
     * @param img2Url 
     * @param errcode Format - int32.
     * @param errmsg 
     */
    public apiFaceRecognitionFaceComparisonWithHttpInfo(userId?: string, openId?: string, nickName?: string, headerImgUrl?: string, country?: string, comparisonId?: string, confidence?: number, commentCount?: number, ranking?: number, img1Url?: string, img2Url?: string, errcode?: number, errmsg?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/FaceRecognition/FaceComparison`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (userId !== undefined) {
            queryParameters.set('userId', <any>userId);
        }
        if (openId !== undefined) {
            queryParameters.set('openId', <any>openId);
        }
        if (nickName !== undefined) {
            queryParameters.set('nickName', <any>nickName);
        }
        if (headerImgUrl !== undefined) {
            queryParameters.set('headerImgUrl', <any>headerImgUrl);
        }
        if (country !== undefined) {
            queryParameters.set('country', <any>country);
        }
        if (comparisonId !== undefined) {
            queryParameters.set('comparisonId', <any>comparisonId);
        }
        if (confidence !== undefined) {
            queryParameters.set('confidence', <any>confidence);
        }
        if (commentCount !== undefined) {
            queryParameters.set('commentCount', <any>commentCount);
        }
        if (ranking !== undefined) {
            queryParameters.set('ranking', <any>ranking);
        }
        if (img1Url !== undefined) {
            queryParameters.set('img1Url', <any>img1Url);
        }
        if (img2Url !== undefined) {
            queryParameters.set('img2Url', <any>img2Url);
        }
        if (errcode !== undefined) {
            queryParameters.set('errcode', <any>errcode);
        }
        if (errmsg !== undefined) {
            queryParameters.set('errmsg', <any>errmsg);
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
        if (this.configuration.apiKey) {
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
     * 
     * 成绩列表
     * @param partition 
     * @param skip Format - int32.
     * @param take Format - int32.
     */
    public apiGeneralGetRankingWithHttpInfo(partition?: string, skip?: number, take?: number, extraHttpRequestParams?: any): Observable<Response> {
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
        if (this.configuration.apiKey) {
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
     * 
     * 上传成绩
     * @param appuserid 
     * @param openid 
     * @param nickname 
     * @param headimgurl 
     * @param score Format - int32.
     * @param partition 
     */
    public apiGeneralInsertRankingWithHttpInfo(appuserid?: string, openid?: string, nickname?: string, headimgurl?: string, score?: number, partition?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/General/WechatBasedRanking`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
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
        if (partition !== undefined) {
            queryParameters.set('partition', <any>partition);
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
        if (this.configuration.apiKey) {
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
     * 
     * Get poster generation statistic
     */
    public apiPosterGetWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/Poster`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845


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
        if (this.configuration.apiKey) {
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
     * 
     * Record poster generation statistic
     * @param statisticDataEntity 
     */
    public apiPosterPostWithHttpInfo(statisticDataEntity?: models.StatisticDataEntity, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/Poster`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/json',
            'application/json-patch+json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];

        // authentication (apiKeyHeader) required
        if (this.configuration.apiKey) {
            headers.set('Ocp-Apim-Subscription-Key', this.configuration.apiKey);
        }


        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: statisticDataEntity == null ? '' : JSON.stringify(statisticDataEntity), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Get wechat share signature
     * @param appTag Format - int32.
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
        if (this.configuration.apiKey) {
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
     * 
     * Get wechat user info
     * @param appTag Format - int32.
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
        if (this.configuration.apiKey) {
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
