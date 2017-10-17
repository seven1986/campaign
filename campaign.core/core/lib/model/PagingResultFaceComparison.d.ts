import * as models from './models';
export interface PagingResultFaceComparison {
    dataArray?: Array<models.FaceComparison>;
    total?: number;
    skip?: number;
    errcode?: number;
    errmsg?: string;
}
