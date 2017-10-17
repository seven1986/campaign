import * as models from './models';
export interface PagingResultGeneralRankingModel {
    dataArray?: Array<models.GeneralRankingModel>;
    total?: number;
    skip?: number;
    errcode?: number;
    errmsg?: string;
}
