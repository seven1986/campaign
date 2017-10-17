import * as models from './models';
export interface PagingResultCommentModel {
    dataArray?: Array<models.CommentModel>;
    total?: number;
    skip?: number;
    errcode?: number;
    errmsg?: string;
}
