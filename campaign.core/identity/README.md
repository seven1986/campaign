## campaign.core.identity

### Install
```
npm install campaign.core.identity --save
```


#### In your angular2 project:

```typescript
// app.module.ts
import { ApiResourceApi,ClientApi,IdentityResourceApi,RoleApi,UserApi } from 'campaign.core.identity/index';
@NgModule({
    providers: [ ApiResourceApi,ClientApi,IdentityResourceApi,RoleApi,UserApi ],
})
export class AppModule { }


// demo.ts
import { Component, OnInit } from '@angular/core';
import { ApiResourceApi,ClientApi,IdentityResourceApi,RoleApi,UserApi } from 'campaign.core.identity/index';
@Component({
  selector: 'demo',
})
export class DemoComponent implements OnInit {

  constructor(private apires:ApiResourceApi,
  private client:ClientApi,
  private idres:IdentityResourceApi,
  private role:RoleApi,
  private user:UserApi) { }

  ngOnInit() {

    this.apires.configuration.apiKey='{subKey}';

    // request staging Environment, default is production
    // this.apires.defaultHeaders.set('Ocp-Apim-Environment','staging')

  }
}
```  