## campaign.game

### Install
```
npm install campaign.game --save
```


#### In your angular2 project:

```typescript
// app.module.ts
import { WechatApi,PosterApi,GeneralApi,GameAdminApi,FaceRecognitionApi } from 'campaign.game/index';
@NgModule({
    providers: [ WechatApi,PosterApi,GeneralApi,GameAdminApi,FaceRecognitionApi ],
})
export class AppModule { }


// demo.ts
import { Component, OnInit } from '@angular/core';
import { WechatApi,PosterApi,GeneralApi,GameAdminApi,FaceRecognitionApi } from 'campaign.game/index';
@Component({
  selector: 'demo',
})
export class DemoComponent implements OnInit {

  constructor(private wechat:WechatApi,
  private poster:PosterApi,
  private general:GeneralApi,
  private gameAdmin:GameAdminApi,
  private faceRecognition:FaceRecognitionApi) { }

  ngOnInit() {

    this.gameAdmin.configuration.apiKey='{subKey}';

    // request staging Environment, default is production
    // this.gameAdmin.defaultHeaders.set('Ocp-Apim-Environment','staging')

  }
}
```  