// 需要配置angular4+ inersector使用
import {Injectable }  from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CampaignCoreGameClient {
    public basePath:string = '/game';
    constructor(protected http: HttpClient){
    }

    public apiFaceRecognitionFaceComparison(model:any): Observable<any> {
      const path = `${this.basePath}/api/FaceRecognition/FaceComparison`;
      return this.http.post(path, model); 
    }

    public apiFaceRecognitionComment(model:any): Observable<any> {
      const path = `${this.basePath}/api/FaceRecognition/Comment`;
      return this.http.post(path, model); 
    }

    public apiFaceRecognitionComments(comparisonId?,take?,skip?): Observable<any> {
      const path = `${this.basePath}/api/FaceRecognition/Comments`;
      let requestParams = new HttpParams();
      if (comparisonId !== undefined) { requestParams = requestParams.set('comparisonId', <any>comparisonId);}
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiFaceRecognitionComparison(comparisonId?): Observable<any> {
      const path = `${this.basePath}/api/FaceRecognition/Comparison`;
      let requestParams = new HttpParams();
      if (comparisonId !== undefined) { requestParams = requestParams.set('comparisonId', <any>comparisonId);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiFaceRecognitionComparisonList(take?,skip?): Observable<any> {
      const path = `${this.basePath}/api/FaceRecognition/ComparisonList`;
      let requestParams = new HttpParams();
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiPosterGet(): Observable<any> {
      const path = `${this.basePath}/api/Poster`;
      return this.http.get(path); 
    }

    public apiPosterPost(model:any): Observable<any> {
      const path = `${this.basePath}/api/Poster`;
      return this.http.post(path, model); 
    }

    public apiWechatUserInfo(appTag?,code?): Observable<any> {
      const path = `${this.basePath}/api/Wechat/UserInfo`;
      let requestParams = new HttpParams();
      if (appTag !== undefined) { requestParams = requestParams.set('appTag', <any>appTag);}
      if (code !== undefined) { requestParams = requestParams.set('code', <any>code);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiWechatCustomShare(appTag?,url?): Observable<any> {
      const path = `${this.basePath}/api/Wechat/CustomShare`;
      let requestParams = new HttpParams();
      if (appTag !== undefined) { requestParams = requestParams.set('appTag', <any>appTag);}
      if (url !== undefined) { requestParams = requestParams.set('url', <any>url);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public AdminGamePost(model:any): Observable<any> {
      const path = `${this.basePath}/Admin/Game/Post`;
      return this.http.post(path, model); 
    }

    public AdminGameDelete(gameId?): Observable<any> {
      const path = `${this.basePath}/Admin/Game/Delete`;
      let requestParams = new HttpParams();
      if (gameId !== undefined) { requestParams = requestParams.set('gameId', <any>gameId);}
      let options = { params: requestParams }
      return this.http.delete(path, options); 
    }

    public AdminGameEdit(model:any): Observable<any> {
      const path = `${this.basePath}/Admin/Game/Edit`;
      return this.http.put(path, model); 
    }

    public AdminGameEditInstance(model:any): Observable<any> {
      const path = `${this.basePath}/Admin/Game/Instance`;
      return this.http.put(path, model); 
    }

    public AdminGamePostInstance(model:any): Observable<any> {
      const path = `${this.basePath}/Admin/Game/Instance`;
      return this.http.post(path, model); 
    }

    public AdminGameDeleteInstance(instanceId?): Observable<any> {
      const path = `${this.basePath}/Admin/Game/Instance`;
      let requestParams = new HttpParams();
      if (instanceId !== undefined) { requestParams = requestParams.set('instanceId', <any>instanceId);}
      let options = { params: requestParams }
      return this.http.delete(path, options); 
    }

    public AdminGameInstance(instanceId?): Observable<any> {
      const path = `${this.basePath}/Admin/Game/Instance`;
      let requestParams = new HttpParams();
      if (instanceId !== undefined) { requestParams = requestParams.set('instanceId', <any>instanceId);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public AdminGameEditImage(model:any): Observable<any> {
      const path = `${this.basePath}/Admin/Game/Image`;
      return this.http.put(path, model); 
    }

    public AdminGamePostImage(model:any): Observable<any> {
      const path = `${this.basePath}/Admin/Game/Image`;
      return this.http.post(path, model); 
    }

    public AdminGameDeleteImage(imageId?): Observable<any> {
      const path = `${this.basePath}/Admin/Game/Image`;
      let requestParams = new HttpParams();
      if (imageId !== undefined) { requestParams = requestParams.set('imageId', <any>imageId);}
      let options = { params: requestParams }
      return this.http.delete(path, options); 
    }

    public AdminGameImage(instanceId?,take?,skip?): Observable<any> {
      const path = `${this.basePath}/Admin/Game/Image`;
      let requestParams = new HttpParams();
      if (instanceId !== undefined) { requestParams = requestParams.set('instanceId', <any>instanceId);}
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public AdminGameGet(appId?,appSecret?,gameType?,take?,skip?): Observable<any> {
      const path = `${this.basePath}/Admin/Game/Get`;
      let requestParams = new HttpParams();
      if (appId !== undefined) { requestParams = requestParams.set('appId', <any>appId);}
      if (appSecret !== undefined) { requestParams = requestParams.set('appSecret', <any>appSecret);}
      if (gameType !== undefined) { requestParams = requestParams.set('gameType', <any>gameType);}
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiGeneralGameInstanceDetails(appId?,appSecret?,gameId?,instanceId?,shareUserId?,platForm?): Observable<any> {
      const path = `${this.basePath}/api/General/GameInstanceDetails`;
      let requestParams = new HttpParams();
      if (appId !== undefined) { requestParams = requestParams.set('appId', <any>appId);}
      if (appSecret !== undefined) { requestParams = requestParams.set('appSecret', <any>appSecret);}
      if (gameId !== undefined) { requestParams = requestParams.set('gameId', <any>gameId);}
      if (instanceId !== undefined) { requestParams = requestParams.set('instanceId', <any>instanceId);}
      if (shareUserId !== undefined) { requestParams = requestParams.set('shareUserId', <any>shareUserId);}
      if (platForm !== undefined) { requestParams = requestParams.set('platForm', <any>platForm);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiGeneralIndividualRanking(gameId?,instanceId?,userId?,platForm?,nickname?,headImgUrl?): Observable<any> {
      const path = `${this.basePath}/api/General/IndividualRanking`;
      let requestParams = new HttpParams();
      if (gameId !== undefined) { requestParams = requestParams.set('gameId', <any>gameId);}
      if (instanceId !== undefined) { requestParams = requestParams.set('instanceId', <any>instanceId);}
      if (userId !== undefined) { requestParams = requestParams.set('userId', <any>userId);}
      if (platForm !== undefined) { requestParams = requestParams.set('platForm', <any>platForm);}
      if (nickname !== undefined) { requestParams = requestParams.set('nickname', <any>nickname);}
      if (headImgUrl !== undefined) { requestParams = requestParams.set('headImgUrl', <any>headImgUrl);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiGeneralGetComment(gameId?,instanceId?,shareUserId?,platForm?,skip?,take?): Observable<any> {
      const path = `${this.basePath}/api/General/Comment`;
      let requestParams = new HttpParams();
      if (gameId !== undefined) { requestParams = requestParams.set('gameId', <any>gameId);}
      if (instanceId !== undefined) { requestParams = requestParams.set('instanceId', <any>instanceId);}
      if (shareUserId !== undefined) { requestParams = requestParams.set('shareUserId', <any>shareUserId);}
      if (platForm !== undefined) { requestParams = requestParams.set('platForm', <any>platForm);}
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiGeneralComment(model:any): Observable<any> {
      const path = `${this.basePath}/api/General/Comment`;
      return this.http.post(path, model); 
    }

    public apiGeneralGetDailyLimit(gameId?,instanceId?,userId?,platForm?,limit?): Observable<any> {
      const path = `${this.basePath}/api/General/DailyLimit`;
      let requestParams = new HttpParams();
      if (gameId !== undefined) { requestParams = requestParams.set('gameId', <any>gameId);}
      if (instanceId !== undefined) { requestParams = requestParams.set('instanceId', <any>instanceId);}
      if (userId !== undefined) { requestParams = requestParams.set('userId', <any>userId);}
      if (platForm !== undefined) { requestParams = requestParams.set('platForm', <any>platForm);}
      if (limit !== undefined) { requestParams = requestParams.set('limit', <any>limit);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiGeneralEditDailyLimit(model:any): Observable<any> {
      const path = `${this.basePath}/api/General/DailyLimit`;
      return this.http.put(path, model); 
    }

    public apiGeneralPostDailyLimit(model:any): Observable<any> {
      const path = `${this.basePath}/api/General/DailyLimit`;
      return this.http.post(path, model); 
    }

    public apiGeneralDailyLimitShared(gameId?,instanceId?,userId?,platForm?): Observable<any> {
      const path = `${this.basePath}/api/General/DailyLimitShared`;
      let requestParams = new HttpParams();
      if (gameId !== undefined) { requestParams = requestParams.set('gameId', <any>gameId);}
      if (instanceId !== undefined) { requestParams = requestParams.set('instanceId', <any>instanceId);}
      if (userId !== undefined) { requestParams = requestParams.set('userId', <any>userId);}
      if (platForm !== undefined) { requestParams = requestParams.set('platForm', <any>platForm);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiGeneralImage(model:any): Observable<any> {
      const path = `${this.basePath}/api/General/Image`;
      return this.http.post(path, model); 
    }

    public ApiFaceRecognitionFaceSetPost(model:any): Observable<any> {
      const path = `${this.basePath}/api/FaceRecognition/FaceSet`;
      return this.http.post(path, model); 
    }

    public ApiFaceRecognitionFaceAddPost(model:any): Observable<any> {
      const path = `${this.basePath}/api/FaceRecognition/FaceAdd`;
      return this.http.post(path, model); 
    }

    public ApiFaceRecognitionFaceDetectPost(model:any): Observable<any> {
      const path = `${this.basePath}/api/FaceRecognition/FaceDetect`;
      return this.http.post(path, model); 
    }

    public apiGeneralUserInfo(platForm?,userId?,wechatAppTag?,weChatCode?): Observable<any> {
      const path = `${this.basePath}/api/General/UserInfo`;
      let requestParams = new HttpParams();
      if (platForm !== undefined) { requestParams = requestParams.set('platForm', <any>platForm);}
      if (userId !== undefined) { requestParams = requestParams.set('userId', <any>userId);}
      if (wechatAppTag !== undefined) { requestParams = requestParams.set('wechatAppTag', <any>wechatAppTag);}
      if (weChatCode !== undefined) { requestParams = requestParams.set('weChatCode', <any>weChatCode);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiGeneralStatisticData(model:any): Observable<any> {
      const path = `${this.basePath}/api/General/StatisticData`;
      return this.http.post(path, model); 
    }

    public apiGeneralGeneralRanking(gameId?,instanceId?,skip?,take?): Observable<any> {
      const path = `${this.basePath}/api/General/GeneralRanking`;
      let requestParams = new HttpParams();
      if (gameId !== undefined) { requestParams = requestParams.set('gameId', <any>gameId);}
      if (instanceId !== undefined) { requestParams = requestParams.set('instanceId', <any>instanceId);}
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiGeneralPostGeneralRanking(model:any): Observable<any> {
      const path = `${this.basePath}/api/General/GeneralRanking`;
      return this.http.post(path, model); 
    }

    public AdminGameApp(gameType?,take?,skip?): Observable<any> {
      const path = `${this.basePath}/Admin/Game/App`;
      let requestParams = new HttpParams();
      if (gameType !== undefined) { requestParams = requestParams.set('gameType', <any>gameType);}
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public AdminGameInstances(gameId?,take?,skip?): Observable<any> {
      const path = `${this.basePath}/Admin/Game/Instances`;
      let requestParams = new HttpParams();
      if (gameId !== undefined) { requestParams = requestParams.set('gameId', <any>gameId);}
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public AdminGameAttachment(model:any): Observable<any> {
      const path = `${this.basePath}/Admin/Game/Attachment`;
      return this.http.post(path, model); 
    }
 }