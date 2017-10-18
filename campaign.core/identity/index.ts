import {Injectable }  from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CampaignCoreIdentityClient {
    public basePath:string = '/ids';
    constructor(protected http: HttpClient){
    }

    public ApiResourceGet(skip?,take?): Observable<any> {
      const path = `${this.basePath}/ApiResource`;
      let requestParams = new HttpParams();
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public ApiResourcePut(Id?,Enabled?,Name?,DisplayName?,Description?,Secrets?,Scopes?,UserClaims?): Observable<any> {
      const path = `${this.basePath}/ApiResource`;
      let requestParams = {};
      if (Id !== undefined) { requestParams["Id"]=Id; }
      if (Enabled !== undefined) { requestParams["Enabled"]=Enabled; }
      if (Name !== undefined) { requestParams["Name"]=Name; }
      if (DisplayName !== undefined) { requestParams["DisplayName"]=DisplayName; }
      if (Description !== undefined) { requestParams["Description"]=Description; }
      if (Secrets !== undefined) { requestParams["Secrets"]=Secrets; }
      if (Scopes !== undefined) { requestParams["Scopes"]=Scopes; }
      if (UserClaims !== undefined) { requestParams["UserClaims"]=UserClaims; }
      let options = { body: requestParams }
      return this.http.put(path, options); 
    }

    public ApiResourcePost(Id?,Enabled?,Name?,DisplayName?,Description?,Secrets?,Scopes?,UserClaims?): Observable<any> {
      const path = `${this.basePath}/ApiResource`;
      let requestParams = {};
      if (Id !== undefined) { requestParams["Id"]=Id; }
      if (Enabled !== undefined) { requestParams["Enabled"]=Enabled; }
      if (Name !== undefined) { requestParams["Name"]=Name; }
      if (DisplayName !== undefined) { requestParams["DisplayName"]=DisplayName; }
      if (Description !== undefined) { requestParams["Description"]=Description; }
      if (Secrets !== undefined) { requestParams["Secrets"]=Secrets; }
      if (Scopes !== undefined) { requestParams["Scopes"]=Scopes; }
      if (UserClaims !== undefined) { requestParams["UserClaims"]=UserClaims; }
      let options = { body: requestParams }
      return this.http.post(path, options); 
    }

    public ApiResourceDetail(id?): Observable<any> {
      const path = `${this.basePath}/ApiResource/${id}`;
      return this.http.get(path); 
    }

    public ApiResourceDelete(id?): Observable<any> {
      const path = `${this.basePath}/ApiResource/${id}`;
      return this.http.delete(path); 
    }

    public ClientGet(skip?,take?): Observable<any> {
      const path = `${this.basePath}/Client`;
      let requestParams = new HttpParams();
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public ClientPut(Id?,Enabled?,ClientId?,NormalizedClientId?,ProtocolType?,ClientSecrets?,RequireClientSecret?,ClientName?,Description?,ClientUri?,LogoUri?,RequireConsent?,AllowRememberConsent?,AlwaysIncludeUserClaimsInIdToken?,AllowedGrantTypes?,RequirePkce?,AllowPlainTextPkce?,AllowAccessTokensViaBrowser?,RedirectUris?,PostLogoutRedirectUris?,FrontChannelLogoutUri?,FrontChannelLogoutSessionRequired?,BackChannelLogoutUri?,BackChannelLogoutSessionRequired?,AllowOfflineAccess?,AllowedScopes?,IdentityTokenLifetime?,AccessTokenLifetime?,AuthorizationCodeLifetime?,ConsentLifetime?,AbsoluteRefreshTokenLifetime?,SlidingRefreshTokenLifetime?,RefreshTokenUsage?,UpdateAccessTokenClaimsOnRefresh?,RefreshTokenExpiration?,AccessTokenType?,EnableLocalLogin?,IdentityProviderRestrictions?,IncludeJwtId?,Claims?,AlwaysSendClientClaims?,PrefixClientClaims?,AllowedCorsOrigins?,Properties?): Observable<any> {
      const path = `${this.basePath}/Client`;
      let requestParams = {};
      if (Id !== undefined) { requestParams["Id"]=Id; }
      if (Enabled !== undefined) { requestParams["Enabled"]=Enabled; }
      if (ClientId !== undefined) { requestParams["ClientId"]=ClientId; }
      if (NormalizedClientId !== undefined) { requestParams["NormalizedClientId"]=NormalizedClientId; }
      if (ProtocolType !== undefined) { requestParams["ProtocolType"]=ProtocolType; }
      if (ClientSecrets !== undefined) { requestParams["ClientSecrets"]=ClientSecrets; }
      if (RequireClientSecret !== undefined) { requestParams["RequireClientSecret"]=RequireClientSecret; }
      if (ClientName !== undefined) { requestParams["ClientName"]=ClientName; }
      if (Description !== undefined) { requestParams["Description"]=Description; }
      if (ClientUri !== undefined) { requestParams["ClientUri"]=ClientUri; }
      if (LogoUri !== undefined) { requestParams["LogoUri"]=LogoUri; }
      if (RequireConsent !== undefined) { requestParams["RequireConsent"]=RequireConsent; }
      if (AllowRememberConsent !== undefined) { requestParams["AllowRememberConsent"]=AllowRememberConsent; }
      if (AlwaysIncludeUserClaimsInIdToken !== undefined) { requestParams["AlwaysIncludeUserClaimsInIdToken"]=AlwaysIncludeUserClaimsInIdToken; }
      if (AllowedGrantTypes !== undefined) { requestParams["AllowedGrantTypes"]=AllowedGrantTypes; }
      if (RequirePkce !== undefined) { requestParams["RequirePkce"]=RequirePkce; }
      if (AllowPlainTextPkce !== undefined) { requestParams["AllowPlainTextPkce"]=AllowPlainTextPkce; }
      if (AllowAccessTokensViaBrowser !== undefined) { requestParams["AllowAccessTokensViaBrowser"]=AllowAccessTokensViaBrowser; }
      if (RedirectUris !== undefined) { requestParams["RedirectUris"]=RedirectUris; }
      if (PostLogoutRedirectUris !== undefined) { requestParams["PostLogoutRedirectUris"]=PostLogoutRedirectUris; }
      if (FrontChannelLogoutUri !== undefined) { requestParams["FrontChannelLogoutUri"]=FrontChannelLogoutUri; }
      if (FrontChannelLogoutSessionRequired !== undefined) { requestParams["FrontChannelLogoutSessionRequired"]=FrontChannelLogoutSessionRequired; }
      if (BackChannelLogoutUri !== undefined) { requestParams["BackChannelLogoutUri"]=BackChannelLogoutUri; }
      if (BackChannelLogoutSessionRequired !== undefined) { requestParams["BackChannelLogoutSessionRequired"]=BackChannelLogoutSessionRequired; }
      if (AllowOfflineAccess !== undefined) { requestParams["AllowOfflineAccess"]=AllowOfflineAccess; }
      if (AllowedScopes !== undefined) { requestParams["AllowedScopes"]=AllowedScopes; }
      if (IdentityTokenLifetime !== undefined) { requestParams["IdentityTokenLifetime"]=IdentityTokenLifetime; }
      if (AccessTokenLifetime !== undefined) { requestParams["AccessTokenLifetime"]=AccessTokenLifetime; }
      if (AuthorizationCodeLifetime !== undefined) { requestParams["AuthorizationCodeLifetime"]=AuthorizationCodeLifetime; }
      if (ConsentLifetime !== undefined) { requestParams["ConsentLifetime"]=ConsentLifetime; }
      if (AbsoluteRefreshTokenLifetime !== undefined) { requestParams["AbsoluteRefreshTokenLifetime"]=AbsoluteRefreshTokenLifetime; }
      if (SlidingRefreshTokenLifetime !== undefined) { requestParams["SlidingRefreshTokenLifetime"]=SlidingRefreshTokenLifetime; }
      if (RefreshTokenUsage !== undefined) { requestParams["RefreshTokenUsage"]=RefreshTokenUsage; }
      if (UpdateAccessTokenClaimsOnRefresh !== undefined) { requestParams["UpdateAccessTokenClaimsOnRefresh"]=UpdateAccessTokenClaimsOnRefresh; }
      if (RefreshTokenExpiration !== undefined) { requestParams["RefreshTokenExpiration"]=RefreshTokenExpiration; }
      if (AccessTokenType !== undefined) { requestParams["AccessTokenType"]=AccessTokenType; }
      if (EnableLocalLogin !== undefined) { requestParams["EnableLocalLogin"]=EnableLocalLogin; }
      if (IdentityProviderRestrictions !== undefined) { requestParams["IdentityProviderRestrictions"]=IdentityProviderRestrictions; }
      if (IncludeJwtId !== undefined) { requestParams["IncludeJwtId"]=IncludeJwtId; }
      if (Claims !== undefined) { requestParams["Claims"]=Claims; }
      if (AlwaysSendClientClaims !== undefined) { requestParams["AlwaysSendClientClaims"]=AlwaysSendClientClaims; }
      if (PrefixClientClaims !== undefined) { requestParams["PrefixClientClaims"]=PrefixClientClaims; }
      if (AllowedCorsOrigins !== undefined) { requestParams["AllowedCorsOrigins"]=AllowedCorsOrigins; }
      if (Properties !== undefined) { requestParams["Properties"]=Properties; }
      let options = { body: requestParams }
      return this.http.put(path, options); 
    }

    public ClientPost(Id?,Enabled?,ClientId?,NormalizedClientId?,ProtocolType?,ClientSecrets?,RequireClientSecret?,ClientName?,Description?,ClientUri?,LogoUri?,RequireConsent?,AllowRememberConsent?,AlwaysIncludeUserClaimsInIdToken?,AllowedGrantTypes?,RequirePkce?,AllowPlainTextPkce?,AllowAccessTokensViaBrowser?,RedirectUris?,PostLogoutRedirectUris?,FrontChannelLogoutUri?,FrontChannelLogoutSessionRequired?,BackChannelLogoutUri?,BackChannelLogoutSessionRequired?,AllowOfflineAccess?,AllowedScopes?,IdentityTokenLifetime?,AccessTokenLifetime?,AuthorizationCodeLifetime?,ConsentLifetime?,AbsoluteRefreshTokenLifetime?,SlidingRefreshTokenLifetime?,RefreshTokenUsage?,UpdateAccessTokenClaimsOnRefresh?,RefreshTokenExpiration?,AccessTokenType?,EnableLocalLogin?,IdentityProviderRestrictions?,IncludeJwtId?,Claims?,AlwaysSendClientClaims?,PrefixClientClaims?,AllowedCorsOrigins?,Properties?): Observable<any> {
      const path = `${this.basePath}/Client`;
      let requestParams = {};
      if (Id !== undefined) { requestParams["Id"]=Id; }
      if (Enabled !== undefined) { requestParams["Enabled"]=Enabled; }
      if (ClientId !== undefined) { requestParams["ClientId"]=ClientId; }
      if (NormalizedClientId !== undefined) { requestParams["NormalizedClientId"]=NormalizedClientId; }
      if (ProtocolType !== undefined) { requestParams["ProtocolType"]=ProtocolType; }
      if (ClientSecrets !== undefined) { requestParams["ClientSecrets"]=ClientSecrets; }
      if (RequireClientSecret !== undefined) { requestParams["RequireClientSecret"]=RequireClientSecret; }
      if (ClientName !== undefined) { requestParams["ClientName"]=ClientName; }
      if (Description !== undefined) { requestParams["Description"]=Description; }
      if (ClientUri !== undefined) { requestParams["ClientUri"]=ClientUri; }
      if (LogoUri !== undefined) { requestParams["LogoUri"]=LogoUri; }
      if (RequireConsent !== undefined) { requestParams["RequireConsent"]=RequireConsent; }
      if (AllowRememberConsent !== undefined) { requestParams["AllowRememberConsent"]=AllowRememberConsent; }
      if (AlwaysIncludeUserClaimsInIdToken !== undefined) { requestParams["AlwaysIncludeUserClaimsInIdToken"]=AlwaysIncludeUserClaimsInIdToken; }
      if (AllowedGrantTypes !== undefined) { requestParams["AllowedGrantTypes"]=AllowedGrantTypes; }
      if (RequirePkce !== undefined) { requestParams["RequirePkce"]=RequirePkce; }
      if (AllowPlainTextPkce !== undefined) { requestParams["AllowPlainTextPkce"]=AllowPlainTextPkce; }
      if (AllowAccessTokensViaBrowser !== undefined) { requestParams["AllowAccessTokensViaBrowser"]=AllowAccessTokensViaBrowser; }
      if (RedirectUris !== undefined) { requestParams["RedirectUris"]=RedirectUris; }
      if (PostLogoutRedirectUris !== undefined) { requestParams["PostLogoutRedirectUris"]=PostLogoutRedirectUris; }
      if (FrontChannelLogoutUri !== undefined) { requestParams["FrontChannelLogoutUri"]=FrontChannelLogoutUri; }
      if (FrontChannelLogoutSessionRequired !== undefined) { requestParams["FrontChannelLogoutSessionRequired"]=FrontChannelLogoutSessionRequired; }
      if (BackChannelLogoutUri !== undefined) { requestParams["BackChannelLogoutUri"]=BackChannelLogoutUri; }
      if (BackChannelLogoutSessionRequired !== undefined) { requestParams["BackChannelLogoutSessionRequired"]=BackChannelLogoutSessionRequired; }
      if (AllowOfflineAccess !== undefined) { requestParams["AllowOfflineAccess"]=AllowOfflineAccess; }
      if (AllowedScopes !== undefined) { requestParams["AllowedScopes"]=AllowedScopes; }
      if (IdentityTokenLifetime !== undefined) { requestParams["IdentityTokenLifetime"]=IdentityTokenLifetime; }
      if (AccessTokenLifetime !== undefined) { requestParams["AccessTokenLifetime"]=AccessTokenLifetime; }
      if (AuthorizationCodeLifetime !== undefined) { requestParams["AuthorizationCodeLifetime"]=AuthorizationCodeLifetime; }
      if (ConsentLifetime !== undefined) { requestParams["ConsentLifetime"]=ConsentLifetime; }
      if (AbsoluteRefreshTokenLifetime !== undefined) { requestParams["AbsoluteRefreshTokenLifetime"]=AbsoluteRefreshTokenLifetime; }
      if (SlidingRefreshTokenLifetime !== undefined) { requestParams["SlidingRefreshTokenLifetime"]=SlidingRefreshTokenLifetime; }
      if (RefreshTokenUsage !== undefined) { requestParams["RefreshTokenUsage"]=RefreshTokenUsage; }
      if (UpdateAccessTokenClaimsOnRefresh !== undefined) { requestParams["UpdateAccessTokenClaimsOnRefresh"]=UpdateAccessTokenClaimsOnRefresh; }
      if (RefreshTokenExpiration !== undefined) { requestParams["RefreshTokenExpiration"]=RefreshTokenExpiration; }
      if (AccessTokenType !== undefined) { requestParams["AccessTokenType"]=AccessTokenType; }
      if (EnableLocalLogin !== undefined) { requestParams["EnableLocalLogin"]=EnableLocalLogin; }
      if (IdentityProviderRestrictions !== undefined) { requestParams["IdentityProviderRestrictions"]=IdentityProviderRestrictions; }
      if (IncludeJwtId !== undefined) { requestParams["IncludeJwtId"]=IncludeJwtId; }
      if (Claims !== undefined) { requestParams["Claims"]=Claims; }
      if (AlwaysSendClientClaims !== undefined) { requestParams["AlwaysSendClientClaims"]=AlwaysSendClientClaims; }
      if (PrefixClientClaims !== undefined) { requestParams["PrefixClientClaims"]=PrefixClientClaims; }
      if (AllowedCorsOrigins !== undefined) { requestParams["AllowedCorsOrigins"]=AllowedCorsOrigins; }
      if (Properties !== undefined) { requestParams["Properties"]=Properties; }
      let options = { body: requestParams }
      return this.http.post(path, options); 
    }

    public ClientDetail(id?): Observable<any> {
      const path = `${this.basePath}/Client/${id}`;
      return this.http.get(path); 
    }

    public ClientDelete(id?): Observable<any> {
      const path = `${this.basePath}/Client/${id}`;
      return this.http.delete(path); 
    }

    public IdentityResourceGet(skip?,take?): Observable<any> {
      const path = `${this.basePath}/IdentityResource`;
      let requestParams = new HttpParams();
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public IdentityResourcePut(Id?,Enabled?,Name?,DisplayName?,Description?,Required?,Emphasize?,ShowInDiscoveryDocument?,UserClaims?): Observable<any> {
      const path = `${this.basePath}/IdentityResource`;
      let requestParams = {};
      if (Id !== undefined) { requestParams["Id"]=Id; }
      if (Enabled !== undefined) { requestParams["Enabled"]=Enabled; }
      if (Name !== undefined) { requestParams["Name"]=Name; }
      if (DisplayName !== undefined) { requestParams["DisplayName"]=DisplayName; }
      if (Description !== undefined) { requestParams["Description"]=Description; }
      if (Required !== undefined) { requestParams["Required"]=Required; }
      if (Emphasize !== undefined) { requestParams["Emphasize"]=Emphasize; }
      if (ShowInDiscoveryDocument !== undefined) { requestParams["ShowInDiscoveryDocument"]=ShowInDiscoveryDocument; }
      if (UserClaims !== undefined) { requestParams["UserClaims"]=UserClaims; }
      let options = { body: requestParams }
      return this.http.put(path, options); 
    }

    public IdentityResourcePost(Id?,Enabled?,Name?,DisplayName?,Description?,Required?,Emphasize?,ShowInDiscoveryDocument?,UserClaims?): Observable<any> {
      const path = `${this.basePath}/IdentityResource`;
      let requestParams = {};
      if (Id !== undefined) { requestParams["Id"]=Id; }
      if (Enabled !== undefined) { requestParams["Enabled"]=Enabled; }
      if (Name !== undefined) { requestParams["Name"]=Name; }
      if (DisplayName !== undefined) { requestParams["DisplayName"]=DisplayName; }
      if (Description !== undefined) { requestParams["Description"]=Description; }
      if (Required !== undefined) { requestParams["Required"]=Required; }
      if (Emphasize !== undefined) { requestParams["Emphasize"]=Emphasize; }
      if (ShowInDiscoveryDocument !== undefined) { requestParams["ShowInDiscoveryDocument"]=ShowInDiscoveryDocument; }
      if (UserClaims !== undefined) { requestParams["UserClaims"]=UserClaims; }
      let options = { body: requestParams }
      return this.http.post(path, options); 
    }

    public IdentityResourceDetail(id?): Observable<any> {
      const path = `${this.basePath}/IdentityResource/${id}`;
      return this.http.get(path); 
    }

    public IdentityResourceDelete(id?): Observable<any> {
      const path = `${this.basePath}/IdentityResource/${id}`;
      return this.http.delete(path); 
    }

    public RoleGet(skip?,take?): Observable<any> {
      const path = `${this.basePath}/Role`;
      let requestParams = new HttpParams();
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public RolePut(Claims?,Id?,Name?,NormalizedName?,ConcurrencyStamp?): Observable<any> {
      const path = `${this.basePath}/Role`;
      let requestParams = {};
      if (Claims !== undefined) { requestParams["Claims"]=Claims; }
      if (Id !== undefined) { requestParams["Id"]=Id; }
      if (Name !== undefined) { requestParams["Name"]=Name; }
      if (NormalizedName !== undefined) { requestParams["NormalizedName"]=NormalizedName; }
      if (ConcurrencyStamp !== undefined) { requestParams["ConcurrencyStamp"]=ConcurrencyStamp; }
      let options = { body: requestParams }
      return this.http.put(path, options); 
    }

    public RolePost(Claims?,Id?,Name?,NormalizedName?,ConcurrencyStamp?): Observable<any> {
      const path = `${this.basePath}/Role`;
      let requestParams = {};
      if (Claims !== undefined) { requestParams["Claims"]=Claims; }
      if (Id !== undefined) { requestParams["Id"]=Id; }
      if (Name !== undefined) { requestParams["Name"]=Name; }
      if (NormalizedName !== undefined) { requestParams["NormalizedName"]=NormalizedName; }
      if (ConcurrencyStamp !== undefined) { requestParams["ConcurrencyStamp"]=ConcurrencyStamp; }
      let options = { body: requestParams }
      return this.http.post(path, options); 
    }

    public RoleDetail(id?): Observable<any> {
      const path = `${this.basePath}/Role/${id}`;
      return this.http.get(path); 
    }

    public RoleDelete(id?): Observable<any> {
      const path = `${this.basePath}/Role/${id}`;
      return this.http.delete(path); 
    }

    public UserGet(skip?,take?): Observable<any> {
      const path = `${this.basePath}/User`;
      let requestParams = new HttpParams();
      if (skip !== undefined) { requestParams = requestParams.set('skip', <any>skip);}
      if (take !== undefined) { requestParams = requestParams.set('take', <any>take);}
      let options = { params: requestParams }
      return this.http.get(path, options); 
    }

    public UserPut(ParentUserID?,LineageIDs?,Lineage?,Avatar?,IsDeleted?,Roles?,Claims?,Logins?,Tokens?,Id?,UserName?,NormalizedUserName?,Email?,NormalizedEmail?,EmailConfirmed?,PasswordHash?,SecurityStamp?,ConcurrencyStamp?,PhoneNumber?,PhoneNumberConfirmed?,TwoFactorEnabled?,LockoutEnd?,LockoutEnabled?,AccessFailedCount?): Observable<any> {
      const path = `${this.basePath}/User`;
      let requestParams = {};
      if (ParentUserID !== undefined) { requestParams["ParentUserID"]=ParentUserID; }
      if (LineageIDs !== undefined) { requestParams["LineageIDs"]=LineageIDs; }
      if (Lineage !== undefined) { requestParams["Lineage"]=Lineage; }
      if (Avatar !== undefined) { requestParams["Avatar"]=Avatar; }
      if (IsDeleted !== undefined) { requestParams["IsDeleted"]=IsDeleted; }
      if (Roles !== undefined) { requestParams["Roles"]=Roles; }
      if (Claims !== undefined) { requestParams["Claims"]=Claims; }
      if (Logins !== undefined) { requestParams["Logins"]=Logins; }
      if (Tokens !== undefined) { requestParams["Tokens"]=Tokens; }
      if (Id !== undefined) { requestParams["Id"]=Id; }
      if (UserName !== undefined) { requestParams["UserName"]=UserName; }
      if (NormalizedUserName !== undefined) { requestParams["NormalizedUserName"]=NormalizedUserName; }
      if (Email !== undefined) { requestParams["Email"]=Email; }
      if (NormalizedEmail !== undefined) { requestParams["NormalizedEmail"]=NormalizedEmail; }
      if (EmailConfirmed !== undefined) { requestParams["EmailConfirmed"]=EmailConfirmed; }
      if (PasswordHash !== undefined) { requestParams["PasswordHash"]=PasswordHash; }
      if (SecurityStamp !== undefined) { requestParams["SecurityStamp"]=SecurityStamp; }
      if (ConcurrencyStamp !== undefined) { requestParams["ConcurrencyStamp"]=ConcurrencyStamp; }
      if (PhoneNumber !== undefined) { requestParams["PhoneNumber"]=PhoneNumber; }
      if (PhoneNumberConfirmed !== undefined) { requestParams["PhoneNumberConfirmed"]=PhoneNumberConfirmed; }
      if (TwoFactorEnabled !== undefined) { requestParams["TwoFactorEnabled"]=TwoFactorEnabled; }
      if (LockoutEnd !== undefined) { requestParams["LockoutEnd"]=LockoutEnd; }
      if (LockoutEnabled !== undefined) { requestParams["LockoutEnabled"]=LockoutEnabled; }
      if (AccessFailedCount !== undefined) { requestParams["AccessFailedCount"]=AccessFailedCount; }
      let options = { body: requestParams }
      return this.http.put(path, options); 
    }

    public UserPost(ParentUserID?,LineageIDs?,Lineage?,Avatar?,IsDeleted?,Roles?,Claims?,Logins?,Tokens?,Id?,UserName?,NormalizedUserName?,Email?,NormalizedEmail?,EmailConfirmed?,PasswordHash?,SecurityStamp?,ConcurrencyStamp?,PhoneNumber?,PhoneNumberConfirmed?,TwoFactorEnabled?,LockoutEnd?,LockoutEnabled?,AccessFailedCount?): Observable<any> {
      const path = `${this.basePath}/User`;
      let requestParams = {};
      if (ParentUserID !== undefined) { requestParams["ParentUserID"]=ParentUserID; }
      if (LineageIDs !== undefined) { requestParams["LineageIDs"]=LineageIDs; }
      if (Lineage !== undefined) { requestParams["Lineage"]=Lineage; }
      if (Avatar !== undefined) { requestParams["Avatar"]=Avatar; }
      if (IsDeleted !== undefined) { requestParams["IsDeleted"]=IsDeleted; }
      if (Roles !== undefined) { requestParams["Roles"]=Roles; }
      if (Claims !== undefined) { requestParams["Claims"]=Claims; }
      if (Logins !== undefined) { requestParams["Logins"]=Logins; }
      if (Tokens !== undefined) { requestParams["Tokens"]=Tokens; }
      if (Id !== undefined) { requestParams["Id"]=Id; }
      if (UserName !== undefined) { requestParams["UserName"]=UserName; }
      if (NormalizedUserName !== undefined) { requestParams["NormalizedUserName"]=NormalizedUserName; }
      if (Email !== undefined) { requestParams["Email"]=Email; }
      if (NormalizedEmail !== undefined) { requestParams["NormalizedEmail"]=NormalizedEmail; }
      if (EmailConfirmed !== undefined) { requestParams["EmailConfirmed"]=EmailConfirmed; }
      if (PasswordHash !== undefined) { requestParams["PasswordHash"]=PasswordHash; }
      if (SecurityStamp !== undefined) { requestParams["SecurityStamp"]=SecurityStamp; }
      if (ConcurrencyStamp !== undefined) { requestParams["ConcurrencyStamp"]=ConcurrencyStamp; }
      if (PhoneNumber !== undefined) { requestParams["PhoneNumber"]=PhoneNumber; }
      if (PhoneNumberConfirmed !== undefined) { requestParams["PhoneNumberConfirmed"]=PhoneNumberConfirmed; }
      if (TwoFactorEnabled !== undefined) { requestParams["TwoFactorEnabled"]=TwoFactorEnabled; }
      if (LockoutEnd !== undefined) { requestParams["LockoutEnd"]=LockoutEnd; }
      if (LockoutEnabled !== undefined) { requestParams["LockoutEnabled"]=LockoutEnabled; }
      if (AccessFailedCount !== undefined) { requestParams["AccessFailedCount"]=AccessFailedCount; }
      let options = { body: requestParams }
      return this.http.post(path, options); 
    }

    public UserDetail(id?): Observable<any> {
      const path = `${this.basePath}/User/${id}`;
      return this.http.get(path); 
    }

    public UserDelete(id?): Observable<any> {
      const path = `${this.basePath}/User/${id}`;
      return this.http.delete(path); 
    }
 }