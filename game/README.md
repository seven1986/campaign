## campaign.game

### Install
```
npm install campaign.game --save
```


#### In your angular2 project:

```typescript
// app.module.ts
import { CampaignGameApi } from 'campaign.game/index';
@NgModule({
    providers: [ CampaignGameApi ],
})
export class AppModule { }


// demo.ts
import { Component, OnInit } from '@angular/core';
import { CampaignGameApi } from 'campaign.game/index';
@Component({
  selector: 'demo',
})
export class DemoComponent implements OnInit {

  constructor(private api:CampaignGameApi) { }

  ngOnInit() {
  }
}
```  