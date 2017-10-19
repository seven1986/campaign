## campaign.core.game

### Install
```
npm install campaign.core.game --save
```


#### In your angular2+ project:

```typescript
// app.module.ts
import { CampaignCoreGameClient } from 'campaign.core.game';
@NgModule({
    providers: [ CampaignCoreGameClient ],
})
export class AppModule { }


// demo.ts
import { Component, OnInit } from '@angular/core';
import { CampaignCoreGameClient } from 'campaign.core.game/index';
@Component({
  selector: 'demo',
})
export class DemoComponent implements OnInit {

  constructor(private api:CampaignCoreGameClient) { }

  ngOnInit() {
  }
}
```  