export interface LoadingData {
    station : StationList;
    loading: boolean;
    error: string;
}

export interface StationList {
   pumpNo:string;
   address:string;
   landMark:string;
}