export interface FaceComparison {
    userId?: string;
    openId?: string;
    nickName?: string;
    headerImgUrl?: string;
    country?: string;
    comparisonId?: string;
    confidence?: number;
    commentCount?: number;
    ranking?: number;
    img1Url?: string;
    img2Url?: string;
    errcode?: number;
    errmsg?: string;
}
