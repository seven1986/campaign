// 需要配置angular4+ inersector使用
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CampaignCoreGameClient {
    public basePath: string = '/game';
    constructor(protected http: HttpClient){
    }

    public apiFaceRecognitionFaceComparison(userId ?,platForm ?,nickName ?,headerImgUrl ?,country ?,comparisonId ?,confidence ?,commentCount ?,ranking ?,imageStringBase64 ?,img1Url ?,img2Url ?,errcode ?,errmsg ?): Observable < any > {
        const path = `${this.basePath}/api/FaceRecognition/FaceComparison`;
        let requestParams = {};
        if(userId !== undefined) { requestParams["userId"] = userId; }
      if (platForm !== undefined) { requestParams["platForm"] = platForm; }
      if (nickName !== undefined) { requestParams["nickName"] = nickName; }
      if (headerImgUrl !== undefined) { requestParams["headerImgUrl"] = headerImgUrl; }
      if (country !== undefined) { requestParams["country"] = country; }
      if (comparisonId !== undefined) { requestParams["comparisonId"] = comparisonId; }
      if (confidence !== undefined) { requestParams["confidence"] = confidence; }
      if (commentCount !== undefined) { requestParams["commentCount"] = commentCount; }
      if (ranking !== undefined) { requestParams["ranking"] = ranking; }
      if (imageStringBase64 !== undefined) { requestParams["imageStringBase64"] = imageStringBase64; }
      if (img1Url !== undefined) { requestParams["img1Url"] = img1Url; }
      if (img2Url !== undefined) { requestParams["img2Url"] = img2Url; }
      if (errcode !== undefined) { requestParams["errcode"] = errcode; }
      if (errmsg !== undefined) { requestParams["errmsg"] = errmsg; }
      let options = { body: requestParams }
      return this.http.post(path, options); 
    }

    public apiFaceRecognitionFaceComparisonWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/api/FaceRecognition/FaceComparison`;
        return this.http.post(path, { body: model }); 
    }

    public apiFaceRecognitionComment(commentModel ?): Observable < any > {
        const path = `${this.basePath}/api/FaceRecognition/Comment`;
        let requestParams = {};
        if(commentModel !== undefined) { requestParams["commentModel"] = commentModel; }
      let options = { body: requestParams }
      return this.http.post(path, options); 
    }

    public apiFaceRecognitionCommentWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/api/FaceRecognition/Comment`;
        return this.http.post(path, { body: model }); 
    }

    public apiFaceRecognitionComments(comparisonId ?,take ?,skip ?): Observable < any > {
        const path = `${this.basePath}/api/FaceRecognition/Comments`;
        let requestParams = new HttpParams();
        if(comparisonId !== undefined) { requestParams = requestParams.set('comparisonId', <any>comparisonId); }
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take); }
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip); }
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiFaceRecognitionComparison(comparisonId ?): Observable < any > {
        const path = `${this.basePath}/api/FaceRecognition/Comparison`;
        let requestParams = new HttpParams();
        if(comparisonId !== undefined) { requestParams = requestParams.set('comparisonId', <any>comparisonId); }
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiFaceRecognitionComparisonList(take ?,skip ?): Observable < any > {
        const path = `${this.basePath}/api/FaceRecognition/ComparisonList`;
        let requestParams = new HttpParams();
        if(take !== undefined) { requestParams = requestParams.set('take', <any>take); }
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip); }
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiPosterGet(): Observable < any > {
        const path = `${this.basePath}/api/Poster`;
        return this.http.get(path); 
    }

    public apiPosterPost(statisticDataEntity ?): Observable < any > {
        const path = `${this.basePath}/api/Poster`;
        let requestParams = {};
        if(statisticDataEntity !== undefined) { requestParams["statisticDataEntity"] = statisticDataEntity; }
      let options = { body: requestParams }
      return this.http.post(path, options); 
    }

    public apiPosterPostWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/api/Poster`;
        return this.http.post(path, { body: model }); 
    }

    public apiWechatUserInfo(appTag ?,code ?): Observable < any > {
        const path = `${this.basePath}/api/Wechat/UserInfo`;
        let requestParams = new HttpParams();
        if(appTag !== undefined) { requestParams = requestParams.set('appTag', <any>appTag); }
      if (code !== undefined) { requestParams = requestParams.set('code', <any>code); }
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiWechatCustomShare(appTag ?,url ?): Observable < any > {
        const path = `${this.basePath}/api/Wechat/CustomShare`;
        let requestParams = new HttpParams();
        if(appTag !== undefined) { requestParams = requestParams.set('appTag', <any>appTag); }
      if (url !== undefined) { requestParams = requestParams.set('url', <any>url); }
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public AdminGamePost(appId ?,appSecret ?,gameName ?,gameType ?,creator ?): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Post`;
        let requestParams = {};
        if(appId !== undefined) { requestParams["appId"] = appId; }
      if (appSecret !== undefined) { requestParams["appSecret"] = appSecret; }
      if (gameName !== undefined) { requestParams["gameName"] = gameName; }
      if (gameType !== undefined) { requestParams["gameType"] = gameType; }
      if (creator !== undefined) { requestParams["creator"] = creator; }
      let options = { body: requestParams }
      return this.http.post(path, options); 
    }

    public AdminGamePostWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Post`;
        return this.http.post(path, { body: model }); 
    }

    public AdminGameDelete(gameId ?): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Delete`;
        let requestParams = {};
        if(gameId !== undefined) { requestParams["gameId"] = gameId; }
      let options = { body: requestParams }
      return this.http.delete(path, options); 
    }

    public AdminGameEdit(gameId ?,gameName ?,gameType ?,creator ?): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Edit`;
        let requestParams = {};
        if(gameId !== undefined) { requestParams["gameId"] = gameId; }
      if (gameName !== undefined) { requestParams["gameName"] = gameName; }
      if (gameType !== undefined) { requestParams["gameType"] = gameType; }
      if (creator !== undefined) { requestParams["creator"] = creator; }
      let options = { body: requestParams }
      return this.http.put(path, options); 
    }

    public AdminGameEditWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Edit`;
        return this.http.put(path, { body: model }); 
    }

    public AdminGameEditInstance(instanceId ?,instanceName ?,instanceDetails ?,instanceRules ?,instanceInstruction ?,status ?,startDate ?,endDate ?,creator ?): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Instance`;
        let requestParams = {};
        if(instanceId !== undefined) { requestParams["instanceId"] = instanceId; }
      if (instanceName !== undefined) { requestParams["instanceName"] = instanceName; }
      if (instanceDetails !== undefined) { requestParams["instanceDetails"] = instanceDetails; }
      if (instanceRules !== undefined) { requestParams["instanceRules"] = instanceRules; }
      if (instanceInstruction !== undefined) { requestParams["instanceInstruction"] = instanceInstruction; }
      if (status !== undefined) { requestParams["status"] = status; }
      if (startDate !== undefined) { requestParams["startDate"] = startDate; }
      if (endDate !== undefined) { requestParams["endDate"] = endDate; }
      if (creator !== undefined) { requestParams["creator"] = creator; }
      let options = { body: requestParams }
      return this.http.put(path, options); 
    }

    public AdminGameEditInstanceWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Instance`;
        return this.http.put(path, { body: model }); 
    }

    public AdminGamePostInstance(): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Instance`;
        return this.http.post(path); 
    }

    public AdminGamePostInstanceWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Instance`;
        return this.http.post(path, { body: model }); 
    }

    public AdminGameDeleteInstance(instanceId ?): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Instance`;
        let requestParams = {};
        if(instanceId !== undefined) { requestParams["instanceId"] = instanceId; }
      let options = { body: requestParams }
      return this.http.delete(path, options); 
    }

    public AdminGameInstance(gameId ?,take ?,skip ?): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Instance`;
        let requestParams = new HttpParams();
        if(gameId !== undefined) { requestParams = requestParams.set('gameId', <any>gameId); }
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take); }
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip); }
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public AdminGameEditImage(imageId ?,imageType ?,imageName ?,imageDetails ?): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Image`;
        let requestParams = {};
        if(imageId !== undefined) { requestParams["imageId"] = imageId; }
      if (imageType !== undefined) { requestParams["imageType"] = imageType; }
      if (imageName !== undefined) { requestParams["imageName"] = imageName; }
      if (imageDetails !== undefined) { requestParams["imageDetails"] = imageDetails; }
      let options = { body: requestParams }
      return this.http.put(path, options); 
    }

    public AdminGameEditImageWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Image`;
        return this.http.put(path, { body: model }); 
    }

    public AdminGamePostImage(instanceId ?,imageType ?,imageName ?,imageDetails ?): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Image`;
        let requestParams = {};
        if(instanceId !== undefined) { requestParams["instanceId"] = instanceId; }
      if (imageType !== undefined) { requestParams["imageType"] = imageType; }
      if (imageName !== undefined) { requestParams["imageName"] = imageName; }
      if (imageDetails !== undefined) { requestParams["imageDetails"] = imageDetails; }
      let options = { body: requestParams }
      return this.http.post(path, options); 
    }

    public AdminGamePostImageWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Image`;
        return this.http.post(path, { body: model }); 
    }

    public AdminGameDeleteImage(imageId ?): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Image`;
        let requestParams = {};
        if(imageId !== undefined) { requestParams["imageId"] = imageId; }
      let options = { body: requestParams }
      return this.http.delete(path, options); 
    }

    public AdminGameImage(instanceId ?,take ?,skip ?): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Image`;
        let requestParams = new HttpParams();
        if(instanceId !== undefined) { requestParams = requestParams.set('instanceId', <any>instanceId); }
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take); }
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip); }
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public AdminGameGet(appId ?,appSecret ?,take ?,skip ?): Observable < any > {
        const path = `${this.basePath}/Admin/Game/Get`;
        let requestParams = new HttpParams();
        if(appId !== undefined) { requestParams = requestParams.set('appId', <any>appId); }
      if (appSecret !== undefined) { requestParams = requestParams.set('appSecret', <any>appSecret); }
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take); }
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip); }
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiGeneralGameInstanceDetails(appId ?,appSecret ?,gameId ?,instanceId ?,shareUserId ?,platForm ?): Observable < any > {
        const path = `${this.basePath}/api/General/GameInstanceDetails`;
        let requestParams = new HttpParams();
        if(appId !== undefined) { requestParams = requestParams.set('appId', <any>appId); }
      if (appSecret !== undefined) { requestParams = requestParams.set('appSecret', <any>appSecret); }
      if (gameId !== undefined) { requestParams = requestParams.set('gameId', <any>gameId); }
      if (instanceId !== undefined) { requestParams = requestParams.set('instanceId', <any>instanceId); }
      if (shareUserId !== undefined) { requestParams = requestParams.set('shareUserId', <any>shareUserId); }
      if (platForm !== undefined) { requestParams = requestParams.set('platForm', <any>platForm); }
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiGeneralIndividualRanking(gameId ?,instanceId ?,userId ?,platForm ?,nickname ?,headImgUrl ?): Observable < any > {
        const path = `${this.basePath}/api/General/IndividualRanking`;
        let requestParams = new HttpParams();
        if(gameId !== undefined) { requestParams = requestParams.set('gameId', <any>gameId); }
      if (instanceId !== undefined) { requestParams = requestParams.set('instanceId', <any>instanceId); }
      if (userId !== undefined) { requestParams = requestParams.set('userId', <any>userId); }
      if (platForm !== undefined) { requestParams = requestParams.set('platForm', <any>platForm); }
      if (nickname !== undefined) { requestParams = requestParams.set('nickname', <any>nickname); }
      if (headImgUrl !== undefined) { requestParams = requestParams.set('headImgUrl', <any>headImgUrl); }
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiGeneralGetComment(gameId ?,instanceId ?,shareUserId ?,platForm ?,skip ?,take ?): Observable < any > {
        const path = `${this.basePath}/api/General/Comment`;
        let requestParams = new HttpParams();
        if(gameId !== undefined) { requestParams = requestParams.set('gameId', <any>gameId); }
      if (instanceId !== undefined) { requestParams = requestParams.set('instanceId', <any>instanceId); }
      if (shareUserId !== undefined) { requestParams = requestParams.set('shareUserId', <any>shareUserId); }
      if (platForm !== undefined) { requestParams = requestParams.set('platForm', <any>platForm); }
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip); }
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take); }
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiGeneralComment(gameId ?,instanceId ?,shareUserId ?,platForm ?,userName ?,userImageUrl ?,comment ?): Observable < any > {
        const path = `${this.basePath}/api/General/Comment`;
        let requestParams = {};
        if(gameId !== undefined) { requestParams["gameId"] = gameId; }
      if (instanceId !== undefined) { requestParams["instanceId"] = instanceId; }
      if (shareUserId !== undefined) { requestParams["shareUserId"] = shareUserId; }
      if (platForm !== undefined) { requestParams["platForm"] = platForm; }
      if (userName !== undefined) { requestParams["userName"] = userName; }
      if (userImageUrl !== undefined) { requestParams["userImageUrl"] = userImageUrl; }
      if (comment !== undefined) { requestParams["comment"] = comment; }
      let options = { body: requestParams }
      return this.http.post(path, options); 
    }

    public apiGeneralCommentWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/api/General/Comment`;
        return this.http.post(path, { body: model }); 
    }

    public apiGeneralGetDailyLimit(gameId ?,instanceId ?,userId ?,platForm ?,limit ?): Observable < any > {
        const path = `${this.basePath}/api/General/DailyLimit`;
        let requestParams = new HttpParams();
        if(gameId !== undefined) { requestParams = requestParams.set('gameId', <any>gameId); }
      if (instanceId !== undefined) { requestParams = requestParams.set('instanceId', <any>instanceId); }
      if (userId !== undefined) { requestParams = requestParams.set('userId', <any>userId); }
      if (platForm !== undefined) { requestParams = requestParams.set('platForm', <any>platForm); }
      if (limit !== undefined) { requestParams = requestParams.set('limit', <any>limit); }
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiGeneralEditDailyLimit(gameId ?,instanceId ?,userId ?,platForm ?,limit ?): Observable < any > {
        const path = `${this.basePath}/api/General/DailyLimit`;
        let requestParams = {};
        if(gameId !== undefined) { requestParams["gameId"] = gameId; }
      if (instanceId !== undefined) { requestParams["instanceId"] = instanceId; }
      if (userId !== undefined) { requestParams["userId"] = userId; }
      if (platForm !== undefined) { requestParams["platForm"] = platForm; }
      if (limit !== undefined) { requestParams["limit"] = limit; }
      let options = { body: requestParams }
      return this.http.put(path, options); 
    }

    public apiGeneralEditDailyLimitWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/api/General/DailyLimit`;
        return this.http.put(path, { body: model }); 
    }

    public apiGeneralPostDailyLimit(gameId ?,instanceId ?,userId ?,limit ?): Observable < any > {
        const path = `${this.basePath}/api/General/DailyLimit`;
        let requestParams = {};
        if(gameId !== undefined) { requestParams["gameId"] = gameId; }
      if (instanceId !== undefined) { requestParams["instanceId"] = instanceId; }
      if (userId !== undefined) { requestParams["userId"] = userId; }
      if (limit !== undefined) { requestParams["limit"] = limit; }
      let options = { body: requestParams }
      return this.http.post(path, options); 
    }

    public apiGeneralPostDailyLimitWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/api/General/DailyLimit`;
        return this.http.post(path, { body: model }); 
    }

    public apiGeneralDailyLimitShared(gameId ?,instanceId ?,userId ?,platForm ?): Observable < any > {
        const path = `${this.basePath}/api/General/DailyLimitShared`;
        let requestParams = new HttpParams();
        if(gameId !== undefined) { requestParams = requestParams.set('gameId', <any>gameId); }
      if (instanceId !== undefined) { requestParams = requestParams.set('instanceId', <any>instanceId); }
      if (userId !== undefined) { requestParams = requestParams.set('userId', <any>userId); }
      if (platForm !== undefined) { requestParams = requestParams.set('platForm', <any>platForm); }
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiGeneralImage(generalUploadImageModel ?): Observable < any > {
        const path = `${this.basePath}/api/General/Image`;
        let requestParams = {};
        if(generalUploadImageModel !== undefined) { requestParams["generalUploadImageModel"] = generalUploadImageModel; }
      let options = { body: requestParams }
      return this.http.post(path, options); 
    }

    public apiGeneralImageWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/api/General/Image`;
        return this.http.post(path, { body: model }); 
    }

    public ApiFaceRecognitionFaceSetPost(): Observable < any > {
        const path = `${this.basePath}/api/FaceRecognition/FaceSet`;
        return this.http.post(path); 
    }

    public ApiFaceRecognitionFaceSetPostWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/api/FaceRecognition/FaceSet`;
        return this.http.post(path, { body: model }); 
    }

    public ApiFaceRecognitionFaceAddPost(faceToken ?): Observable < any > {
        const path = `${this.basePath}/api/FaceRecognition/FaceAdd`;
        let requestParams = {};
        if(faceToken !== undefined) { requestParams["faceToken"] = faceToken; }
      let options = { body: requestParams }
      return this.http.post(path, options); 
    }

    public ApiFaceRecognitionFaceAddPostWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/api/FaceRecognition/FaceAdd`;
        return this.http.post(path, { body: model }); 
    }

    public ApiFaceRecognitionFaceDetectPost(): Observable < any > {
        const path = `${this.basePath}/api/FaceRecognition/FaceDetect`;
        return this.http.post(path); 
    }

    public ApiFaceRecognitionFaceDetectPostWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/api/FaceRecognition/FaceDetect`;
        return this.http.post(path, { body: model }); 
    }

    public apiGeneralUserInfo(platForm ?,userId ?,wechatAppTag ?,weChatCode ?): Observable < any > {
        const path = `${this.basePath}/api/General/UserInfo`;
        let requestParams = new HttpParams();
        if(platForm !== undefined) { requestParams = requestParams.set('platForm', <any>platForm); }
      if (userId !== undefined) { requestParams = requestParams.set('userId', <any>userId); }
      if (wechatAppTag !== undefined) { requestParams = requestParams.set('wechatAppTag', <any>wechatAppTag); }
      if (weChatCode !== undefined) { requestParams = requestParams.set('weChatCode', <any>weChatCode); }
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiGeneralStatisticData(gameId ?,instanceId ?,userId ?,platForm ?,nickName ?,country ?,province ?,city ?,sex ?): Observable < any > {
        const path = `${this.basePath}/api/General/StatisticData`;
        let requestParams = {};
        if(gameId !== undefined) { requestParams["gameId"] = gameId; }
      if (instanceId !== undefined) { requestParams["instanceId"] = instanceId; }
      if (userId !== undefined) { requestParams["userId"] = userId; }
      if (platForm !== undefined) { requestParams["platForm"] = platForm; }
      if (nickName !== undefined) { requestParams["nickName"] = nickName; }
      if (country !== undefined) { requestParams["country"] = country; }
      if (province !== undefined) { requestParams["province"] = province; }
      if (city !== undefined) { requestParams["city"] = city; }
      if (sex !== undefined) { requestParams["sex"] = sex; }
      let options = { body: requestParams }
      return this.http.post(path, options); 
    }

    public apiGeneralStatisticDataWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/api/General/StatisticData`;
        return this.http.post(path, { body: model }); 
    }

    public apiGeneralGeneralRanking(gameId ?,instanceId ?,skip ?,take ?): Observable < any > {
        const path = `${this.basePath}/api/General/GeneralRanking`;
        let requestParams = new HttpParams();
        if(gameId !== undefined) { requestParams = requestParams.set('gameId', <any>gameId); }
      if (instanceId !== undefined) { requestParams = requestParams.set('instanceId', <any>instanceId); }
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip); }
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take); }
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public apiGeneralPostGeneralRanking(gameId ?,instanceId ?,userId ?,platForm ?,nickName ?,headImgUrl ?,score ?): Observable < any > {
        const path = `${this.basePath}/api/General/GeneralRanking`;
        let requestParams = {};
        if(gameId !== undefined) { requestParams["gameId"] = gameId; }
      if (instanceId !== undefined) { requestParams["instanceId"] = instanceId; }
      if (userId !== undefined) { requestParams["userId"] = userId; }
      if (platForm !== undefined) { requestParams["platForm"] = platForm; }
      if (nickName !== undefined) { requestParams["nickName"] = nickName; }
      if (headImgUrl !== undefined) { requestParams["headImgUrl"] = headImgUrl; }
      if (score !== undefined) { requestParams["score"] = score; }
      let options = { body: requestParams }
      return this.http.post(path, options); 
    }

    public apiGeneralPostGeneralRankingWithModel(model:any): Observable < any > {
        const path = `${this.basePath}/api/General/GeneralRanking`;
        return this.http.post(path, { body: model }); 
    }
}