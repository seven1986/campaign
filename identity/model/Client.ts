/**
 * Campaign.Core.Identity
 * Swagger document
 *
 * OpenAPI spec version: 0.0.2
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

import * as models from './models';

export interface Client {
    id?: number;

    enabled?: boolean;

    clientId?: string;

    normalizedClientId?: string;

    protocolType?: string;

    clientSecrets?: Array<models.ClientSecret>;

    requireClientSecret?: boolean;

    clientName?: string;

    description?: string;

    clientUri?: string;

    logoUri?: string;

    requireConsent?: boolean;

    allowRememberConsent?: boolean;

    alwaysIncludeUserClaimsInIdToken?: boolean;

    allowedGrantTypes?: Array<models.ClientGrantType>;

    requirePkce?: boolean;

    allowPlainTextPkce?: boolean;

    allowAccessTokensViaBrowser?: boolean;

    redirectUris?: Array<models.ClientRedirectUri>;

    postLogoutRedirectUris?: Array<models.ClientPostLogoutRedirectUri>;

    frontChannelLogoutUri?: string;

    frontChannelLogoutSessionRequired?: boolean;

    backChannelLogoutUri?: string;

    backChannelLogoutSessionRequired?: boolean;

    allowOfflineAccess?: boolean;

    allowedScopes?: Array<models.ClientScope>;

    identityTokenLifetime?: number;

    accessTokenLifetime?: number;

    authorizationCodeLifetime?: number;

    consentLifetime?: number;

    absoluteRefreshTokenLifetime?: number;

    slidingRefreshTokenLifetime?: number;

    refreshTokenUsage?: number;

    updateAccessTokenClaimsOnRefresh?: boolean;

    refreshTokenExpiration?: number;

    accessTokenType?: number;

    enableLocalLogin?: boolean;

    identityProviderRestrictions?: Array<models.ClientIdPRestriction>;

    includeJwtId?: boolean;

    claims?: Array<models.ClientClaim>;

    alwaysSendClientClaims?: boolean;

    prefixClientClaims?: boolean;

    allowedCorsOrigins?: Array<models.ClientCorsOrigin>;

    properties?: Array<models.ClientProperty>;

}
