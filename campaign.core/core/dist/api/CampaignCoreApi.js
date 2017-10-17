"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
require('rxjs/add/operator/map');
var variables_1 = require('../variables');
var configuration_1 = require('../configuration');
var CampaignCoreApi = (function () {
    function CampaignCoreApi(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://openapis.ixingban.com/core';
        this.defaultHeaders = new http_1.Headers();
        this.configuration = new configuration_1.Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    CampaignCoreApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    CampaignCoreApi.prototype.apiFaceRecognitionComment = function (commentModel, extraHttpRequestParams) {
        return this.apiFaceRecognitionCommentWithHttpInfo(commentModel, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    CampaignCoreApi.prototype.apiFaceRecognitionComments = function (comparisonId, take, skip, extraHttpRequestParams) {
        return this.apiFaceRecognitionCommentsWithHttpInfo(comparisonId, take, skip, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    CampaignCoreApi.prototype.apiFaceRecognitionComparison = function (comparisonId, extraHttpRequestParams) {
        return this.apiFaceRecognitionComparisonWithHttpInfo(comparisonId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    CampaignCoreApi.prototype.apiFaceRecognitionComparisonList = function (take, skip, extraHttpRequestParams) {
        return this.apiFaceRecognitionComparisonListWithHttpInfo(take, skip, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    CampaignCoreApi.prototype.apiFaceRecognitionFaceComparison = function (userId, openId, nickName, headerImgUrl, country, comparisonId, confidence, commentCount, ranking, img1Url, img2Url, errcode, errmsg, extraHttpRequestParams) {
        return this.apiFaceRecognitionFaceComparisonWithHttpInfo(userId, openId, nickName, headerImgUrl, country, comparisonId, confidence, commentCount, ranking, img1Url, img2Url, errcode, errmsg, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    CampaignCoreApi.prototype.apiGeneralGetRanking = function (partition, skip, take, extraHttpRequestParams) {
        return this.apiGeneralGetRankingWithHttpInfo(partition, skip, take, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    CampaignCoreApi.prototype.apiGeneralInsertRanking = function (appuserid, openid, nickname, headimgurl, score, partition, extraHttpRequestParams) {
        return this.apiGeneralInsertRankingWithHttpInfo(appuserid, openid, nickname, headimgurl, score, partition, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    CampaignCoreApi.prototype.apiPosterGet = function (extraHttpRequestParams) {
        return this.apiPosterGetWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    CampaignCoreApi.prototype.apiPosterPost = function (statisticDataEntity, extraHttpRequestParams) {
        return this.apiPosterPostWithHttpInfo(statisticDataEntity, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    CampaignCoreApi.prototype.apiWechatCustomShare = function (appTag, url, extraHttpRequestParams) {
        return this.apiWechatCustomShareWithHttpInfo(appTag, url, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    CampaignCoreApi.prototype.apiWechatUserInfo = function (appTag, code, extraHttpRequestParams) {
        return this.apiWechatUserInfoWithHttpInfo(appTag, code, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    CampaignCoreApi.prototype.apiFaceRecognitionCommentWithHttpInfo = function (commentModel, extraHttpRequestParams) {
        var path = this.basePath + "/api/FaceRecognition/Comment";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        var consumes = [
            'application/json',
            'text/json',
            'application/json-patch+json'
        ];
        var produces = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: commentModel == null ? '' : JSON.stringify(commentModel),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    CampaignCoreApi.prototype.apiFaceRecognitionCommentsWithHttpInfo = function (comparisonId, take, skip, extraHttpRequestParams) {
        var path = this.basePath + "/api/FaceRecognition/Comments";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (comparisonId !== undefined) {
            queryParameters.set('comparisonId', comparisonId);
        }
        if (take !== undefined) {
            queryParameters.set('take', take);
        }
        if (skip !== undefined) {
            queryParameters.set('skip', skip);
        }
        var consumes = [];
        var produces = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    CampaignCoreApi.prototype.apiFaceRecognitionComparisonWithHttpInfo = function (comparisonId, extraHttpRequestParams) {
        var path = this.basePath + "/api/FaceRecognition/Comparison";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (comparisonId !== undefined) {
            queryParameters.set('comparisonId', comparisonId);
        }
        var consumes = [];
        var produces = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    CampaignCoreApi.prototype.apiFaceRecognitionComparisonListWithHttpInfo = function (take, skip, extraHttpRequestParams) {
        var path = this.basePath + "/api/FaceRecognition/ComparisonList";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (take !== undefined) {
            queryParameters.set('take', take);
        }
        if (skip !== undefined) {
            queryParameters.set('skip', skip);
        }
        var consumes = [];
        var produces = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    CampaignCoreApi.prototype.apiFaceRecognitionFaceComparisonWithHttpInfo = function (userId, openId, nickName, headerImgUrl, country, comparisonId, confidence, commentCount, ranking, img1Url, img2Url, errcode, errmsg, extraHttpRequestParams) {
        var path = this.basePath + "/api/FaceRecognition/FaceComparison";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (userId !== undefined) {
            queryParameters.set('userId', userId);
        }
        if (openId !== undefined) {
            queryParameters.set('openId', openId);
        }
        if (nickName !== undefined) {
            queryParameters.set('nickName', nickName);
        }
        if (headerImgUrl !== undefined) {
            queryParameters.set('headerImgUrl', headerImgUrl);
        }
        if (country !== undefined) {
            queryParameters.set('country', country);
        }
        if (comparisonId !== undefined) {
            queryParameters.set('comparisonId', comparisonId);
        }
        if (confidence !== undefined) {
            queryParameters.set('confidence', confidence);
        }
        if (commentCount !== undefined) {
            queryParameters.set('commentCount', commentCount);
        }
        if (ranking !== undefined) {
            queryParameters.set('ranking', ranking);
        }
        if (img1Url !== undefined) {
            queryParameters.set('img1Url', img1Url);
        }
        if (img2Url !== undefined) {
            queryParameters.set('img2Url', img2Url);
        }
        if (errcode !== undefined) {
            queryParameters.set('errcode', errcode);
        }
        if (errmsg !== undefined) {
            queryParameters.set('errmsg', errmsg);
        }
        var consumes = [];
        var produces = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    CampaignCoreApi.prototype.apiGeneralGetRankingWithHttpInfo = function (partition, skip, take, extraHttpRequestParams) {
        var path = this.basePath + "/api/General/WechatBasedRanking";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (partition !== undefined) {
            queryParameters.set('partition', partition);
        }
        if (skip !== undefined) {
            queryParameters.set('skip', skip);
        }
        if (take !== undefined) {
            queryParameters.set('take', take);
        }
        var consumes = [];
        var produces = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    CampaignCoreApi.prototype.apiGeneralInsertRankingWithHttpInfo = function (appuserid, openid, nickname, headimgurl, score, partition, extraHttpRequestParams) {
        var path = this.basePath + "/api/General/WechatBasedRanking";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (appuserid !== undefined) {
            queryParameters.set('appuserid', appuserid);
        }
        if (openid !== undefined) {
            queryParameters.set('openid', openid);
        }
        if (nickname !== undefined) {
            queryParameters.set('nickname', nickname);
        }
        if (headimgurl !== undefined) {
            queryParameters.set('headimgurl', headimgurl);
        }
        if (score !== undefined) {
            queryParameters.set('score', score);
        }
        if (partition !== undefined) {
            queryParameters.set('partition', partition);
        }
        var consumes = [];
        var produces = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    CampaignCoreApi.prototype.apiPosterGetWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + "/api/Poster";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        var consumes = [];
        var produces = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    CampaignCoreApi.prototype.apiPosterPostWithHttpInfo = function (statisticDataEntity, extraHttpRequestParams) {
        var path = this.basePath + "/api/Poster";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        var consumes = [
            'application/json',
            'text/json',
            'application/json-patch+json'
        ];
        var produces = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: statisticDataEntity == null ? '' : JSON.stringify(statisticDataEntity),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    CampaignCoreApi.prototype.apiWechatCustomShareWithHttpInfo = function (appTag, url, extraHttpRequestParams) {
        var path = this.basePath + "/api/Wechat/CustomShare";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (appTag !== undefined) {
            queryParameters.set('appTag', appTag);
        }
        if (url !== undefined) {
            queryParameters.set('url', url);
        }
        var consumes = [];
        var produces = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    CampaignCoreApi.prototype.apiWechatUserInfoWithHttpInfo = function (appTag, code, extraHttpRequestParams) {
        var path = this.basePath + "/api/Wechat/UserInfo";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (appTag !== undefined) {
            queryParameters.set('appTag', appTag);
        }
        if (code !== undefined) {
            queryParameters.set('code', code);
        }
        var consumes = [];
        var produces = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    CampaignCoreApi = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()),
        __param(1, core_1.Inject(variables_1.BASE_PATH)),
        __param(2, core_1.Optional()), 
        __metadata('design:paramtypes', [http_1.Http, String, configuration_1.Configuration])
    ], CampaignCoreApi);
    return CampaignCoreApi;
}());
exports.CampaignCoreApi = CampaignCoreApi;
//# sourceMappingURL=CampaignCoreApi.js.map