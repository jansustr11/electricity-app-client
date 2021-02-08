/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.10.2.0 (NJsonSchema v10.3.4.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface IGroupsClient {
    getUserGroups(userId: string | undefined): Observable<UserGroupsDto>;
    getUserGroupTree(userId: string | undefined): Observable<GroupTreeNodeDto>;
}

@Injectable({
    providedIn: 'root'
})
export class GroupsClient implements IGroupsClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    getUserGroups(userId: string | undefined): Observable<UserGroupsDto> {
        let url_ = this.baseUrl + "/api/Groups?";
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + userId) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetUserGroups(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetUserGroups(<any>response_);
                } catch (e) {
                    return <Observable<UserGroupsDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<UserGroupsDto>><any>_observableThrow(response_);
        }));
    }

    protected processGetUserGroups(response: HttpResponseBase): Observable<UserGroupsDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = UserGroupsDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<UserGroupsDto>(<any>null);
    }

    getUserGroupTree(userId: string | undefined): Observable<GroupTreeNodeDto> {
        let url_ = this.baseUrl + "/api/Groups/tree?";
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + userId) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetUserGroupTree(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetUserGroupTree(<any>response_);
                } catch (e) {
                    return <Observable<GroupTreeNodeDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<GroupTreeNodeDto>><any>_observableThrow(response_);
        }));
    }

    protected processGetUserGroupTree(response: HttpResponseBase): Observable<GroupTreeNodeDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = GroupTreeNodeDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<GroupTreeNodeDto>(<any>null);
    }
}

export interface IPowerFactorClient {
    getOverview(intervals: (Interval | undefined)[] | null | undefined, groupIds: string[] | null | undefined): Observable<PowerFactorOverviewDto>;
}

@Injectable({
    providedIn: 'root'
})
export class PowerFactorClient implements IPowerFactorClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    getOverview(intervals: (Interval | undefined)[] | null | undefined, groupIds: string[] | null | undefined): Observable<PowerFactorOverviewDto> {
        let url_ = this.baseUrl + "/api/PowerFactor/overview?";
        if (intervals !== undefined && intervals !== null)
            intervals && intervals.forEach((item, index) => {
                for (let attr in item)
        			if (item.hasOwnProperty(attr)) {
        				url_ += "Intervals[" + index + "]." + attr + "=" + encodeURIComponent("" + (<any>item)[attr]) + "&";
        			}
            });
        if (groupIds !== undefined && groupIds !== null)
            groupIds && groupIds.forEach(item => { url_ += "GroupIds=" + encodeURIComponent("" + item) + "&"; });
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetOverview(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetOverview(<any>response_);
                } catch (e) {
                    return <Observable<PowerFactorOverviewDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<PowerFactorOverviewDto>><any>_observableThrow(response_);
        }));
    }

    protected processGetOverview(response: HttpResponseBase): Observable<PowerFactorOverviewDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = PowerFactorOverviewDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<PowerFactorOverviewDto>(<any>null);
    }
}

export interface IQuantitiesClient {
    getQuantities(groupId: string | undefined, arch: number | undefined): Observable<QuantitiesDto>;
}

@Injectable({
    providedIn: 'root'
})
export class QuantitiesClient implements IQuantitiesClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    getQuantities(groupId: string | undefined, arch: number | undefined): Observable<QuantitiesDto> {
        let url_ = this.baseUrl + "/api/Quantities?";
        if (groupId === null)
            throw new Error("The parameter 'groupId' cannot be null.");
        else if (groupId !== undefined)
            url_ += "groupId=" + encodeURIComponent("" + groupId) + "&";
        if (arch === null)
            throw new Error("The parameter 'arch' cannot be null.");
        else if (arch !== undefined)
            url_ += "arch=" + encodeURIComponent("" + arch) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetQuantities(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetQuantities(<any>response_);
                } catch (e) {
                    return <Observable<QuantitiesDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<QuantitiesDto>><any>_observableThrow(response_);
        }));
    }

    protected processGetQuantities(response: HttpResponseBase): Observable<QuantitiesDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QuantitiesDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<QuantitiesDto>(<any>null);
    }
}

export interface ISeriesClient {
    getQuantity(groupId: string | undefined, arch: number | undefined, qty: string | null | undefined, aggMeth: AggregationMethod | undefined, aggInt: number | undefined): Observable<TimeSeriesDtoOfSingle>;
}

@Injectable({
    providedIn: 'root'
})
export class SeriesClient implements ISeriesClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    getQuantity(groupId: string | undefined, arch: number | undefined, qty: string | null | undefined, aggMeth: AggregationMethod | undefined, aggInt: number | undefined): Observable<TimeSeriesDtoOfSingle> {
        let url_ = this.baseUrl + "/api/Series/quantity?";
        if (groupId === null)
            throw new Error("The parameter 'groupId' cannot be null.");
        else if (groupId !== undefined)
            url_ += "GroupId=" + encodeURIComponent("" + groupId) + "&";
        if (arch === null)
            throw new Error("The parameter 'arch' cannot be null.");
        else if (arch !== undefined)
            url_ += "Arch=" + encodeURIComponent("" + arch) + "&";
        if (qty !== undefined && qty !== null)
            url_ += "Qty=" + encodeURIComponent("" + qty) + "&";
        if (aggMeth === null)
            throw new Error("The parameter 'aggMeth' cannot be null.");
        else if (aggMeth !== undefined)
            url_ += "AggMeth=" + encodeURIComponent("" + aggMeth) + "&";
        if (aggInt === null)
            throw new Error("The parameter 'aggInt' cannot be null.");
        else if (aggInt !== undefined)
            url_ += "AggInt=" + encodeURIComponent("" + aggInt) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetQuantity(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetQuantity(<any>response_);
                } catch (e) {
                    return <Observable<TimeSeriesDtoOfSingle>><any>_observableThrow(e);
                }
            } else
                return <Observable<TimeSeriesDtoOfSingle>><any>_observableThrow(response_);
        }));
    }

    protected processGetQuantity(response: HttpResponseBase): Observable<TimeSeriesDtoOfSingle> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = TimeSeriesDtoOfSingle.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<TimeSeriesDtoOfSingle>(<any>null);
    }
}

export class UserGroupsDto implements IUserGroupsDto {
    groups?: GroupDto[] | undefined;

    constructor(data?: IUserGroupsDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["groups"])) {
                this.groups = [] as any;
                for (let item of _data["groups"])
                    this.groups!.push(GroupDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): UserGroupsDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserGroupsDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.groups)) {
            data["groups"] = [];
            for (let item of this.groups)
                data["groups"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IUserGroupsDto {
    groups?: GroupDto[] | undefined;
}

export class GroupDto implements IGroupDto {
    id?: string;
    name?: string | undefined;

    constructor(data?: IGroupDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): GroupDto {
        data = typeof data === 'object' ? data : {};
        let result = new GroupDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        return data; 
    }
}

export interface IGroupDto {
    id?: string;
    name?: string | undefined;
}

export class GroupTreeNodeDto implements IGroupTreeNodeDto {
    group?: GroupDto | undefined;
    nodes?: GroupTreeNodeDto[] | undefined;

    constructor(data?: IGroupTreeNodeDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.group = _data["group"] ? GroupDto.fromJS(_data["group"]) : <any>undefined;
            if (Array.isArray(_data["nodes"])) {
                this.nodes = [] as any;
                for (let item of _data["nodes"])
                    this.nodes!.push(GroupTreeNodeDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GroupTreeNodeDto {
        data = typeof data === 'object' ? data : {};
        let result = new GroupTreeNodeDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["group"] = this.group ? this.group.toJSON() : <any>undefined;
        if (Array.isArray(this.nodes)) {
            data["nodes"] = [];
            for (let item of this.nodes)
                data["nodes"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IGroupTreeNodeDto {
    group?: GroupDto | undefined;
    nodes?: GroupTreeNodeDto[] | undefined;
}

export class PowerFactorOverviewDto implements IPowerFactorOverviewDto {
    data?: PowerFactorOverviewIntervalData[] | undefined;

    constructor(data?: IPowerFactorOverviewDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["data"])) {
                this.data = [] as any;
                for (let item of _data["data"])
                    this.data!.push(PowerFactorOverviewIntervalData.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PowerFactorOverviewDto {
        data = typeof data === 'object' ? data : {};
        let result = new PowerFactorOverviewDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.data)) {
            data["data"] = [];
            for (let item of this.data)
                data["data"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IPowerFactorOverviewDto {
    data?: PowerFactorOverviewIntervalData[] | undefined;
}

export class PowerFactorOverviewIntervalData implements IPowerFactorOverviewIntervalData {
    interval?: Interval | undefined;
    items?: PowerFactorOverviewItem[] | undefined;

    constructor(data?: IPowerFactorOverviewIntervalData) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.interval = _data["interval"] ? Interval.fromJS(_data["interval"]) : <any>undefined;
            if (Array.isArray(_data["items"])) {
                this.items = [] as any;
                for (let item of _data["items"])
                    this.items!.push(PowerFactorOverviewItem.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PowerFactorOverviewIntervalData {
        data = typeof data === 'object' ? data : {};
        let result = new PowerFactorOverviewIntervalData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["interval"] = this.interval ? this.interval.toJSON() : <any>undefined;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IPowerFactorOverviewIntervalData {
    interval?: Interval | undefined;
    items?: PowerFactorOverviewItem[] | undefined;
}

export class Interval implements IInterval {
    start?: Date;
    end?: Date;

    constructor(data?: IInterval) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.start = _data["start"] ? new Date(_data["start"].toString()) : <any>undefined;
            this.end = _data["end"] ? new Date(_data["end"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): Interval {
        data = typeof data === 'object' ? data : {};
        let result = new Interval();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["start"] = this.start ? this.start.toISOString() : <any>undefined;
        data["end"] = this.end ? this.end.toISOString() : <any>undefined;
        return data; 
    }
}

export interface IInterval {
    start?: Date;
    end?: Date;
}

export class PowerFactorOverviewItem implements IPowerFactorOverviewItem {
    deviceName?: string | undefined;
    activeEnergy?: number;
    reactiveEnergyL?: number;
    reactiveEnergyC?: number;
    tanFi?: number;
    interval?: Interval | undefined;

    constructor(data?: IPowerFactorOverviewItem) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.deviceName = _data["deviceName"];
            this.activeEnergy = _data["activeEnergy"];
            this.reactiveEnergyL = _data["reactiveEnergyL"];
            this.reactiveEnergyC = _data["reactiveEnergyC"];
            this.tanFi = _data["tanFi"];
            this.interval = _data["interval"] ? Interval.fromJS(_data["interval"]) : <any>undefined;
        }
    }

    static fromJS(data: any): PowerFactorOverviewItem {
        data = typeof data === 'object' ? data : {};
        let result = new PowerFactorOverviewItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["deviceName"] = this.deviceName;
        data["activeEnergy"] = this.activeEnergy;
        data["reactiveEnergyL"] = this.reactiveEnergyL;
        data["reactiveEnergyC"] = this.reactiveEnergyC;
        data["tanFi"] = this.tanFi;
        data["interval"] = this.interval ? this.interval.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IPowerFactorOverviewItem {
    deviceName?: string | undefined;
    activeEnergy?: number;
    reactiveEnergyL?: number;
    reactiveEnergyC?: number;
    tanFi?: number;
    interval?: Interval | undefined;
}

export class QuantitiesDto implements IQuantitiesDto {
    list?: QuantityDto[] | undefined;

    constructor(data?: IQuantitiesDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["list"])) {
                this.list = [] as any;
                for (let item of _data["list"])
                    this.list!.push(QuantityDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): QuantitiesDto {
        data = typeof data === 'object' ? data : {};
        let result = new QuantitiesDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.list)) {
            data["list"] = [];
            for (let item of this.list)
                data["list"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IQuantitiesDto {
    list?: QuantityDto[] | undefined;
}

export class QuantityDto implements IQuantityDto {
    propName?: string | undefined;
    unit?: string | undefined;
    returnType?: string | undefined;
    prop?: string | undefined;
    value?: any | undefined;

    constructor(data?: IQuantityDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.propName = _data["propName"];
            this.unit = _data["unit"];
            this.returnType = _data["returnType"];
            this.prop = _data["prop"];
            this.value = _data["value"];
        }
    }

    static fromJS(data: any): QuantityDto {
        data = typeof data === 'object' ? data : {};
        let result = new QuantityDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["propName"] = this.propName;
        data["unit"] = this.unit;
        data["returnType"] = this.returnType;
        data["prop"] = this.prop;
        data["value"] = this.value;
        return data; 
    }
}

export interface IQuantityDto {
    propName?: string | undefined;
    unit?: string | undefined;
    returnType?: string | undefined;
    prop?: string | undefined;
    value?: any | undefined;
}

export class TimeSeriesDtoOfSingle implements ITimeSeriesDtoOfSingle {
    entries?: TupleOfDateTimeAndSingle[] | undefined;

    constructor(data?: ITimeSeriesDtoOfSingle) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["entries"])) {
                this.entries = [] as any;
                for (let item of _data["entries"])
                    this.entries!.push(TupleOfDateTimeAndSingle.fromJS(item));
            }
        }
    }

    static fromJS(data: any): TimeSeriesDtoOfSingle {
        data = typeof data === 'object' ? data : {};
        let result = new TimeSeriesDtoOfSingle();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.entries)) {
            data["entries"] = [];
            for (let item of this.entries)
                data["entries"].push(item.toJSON());
        }
        return data; 
    }
}

export interface ITimeSeriesDtoOfSingle {
    entries?: TupleOfDateTimeAndSingle[] | undefined;
}

export class TupleOfDateTimeAndSingle implements ITupleOfDateTimeAndSingle {
    item1?: Date;
    item2?: number;

    constructor(data?: ITupleOfDateTimeAndSingle) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.item1 = _data["item1"] ? new Date(_data["item1"].toString()) : <any>undefined;
            this.item2 = _data["item2"];
        }
    }

    static fromJS(data: any): TupleOfDateTimeAndSingle {
        data = typeof data === 'object' ? data : {};
        let result = new TupleOfDateTimeAndSingle();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["item1"] = this.item1 ? this.item1.toISOString() : <any>undefined;
        data["item2"] = this.item2;
        return data; 
    }
}

export interface ITupleOfDateTimeAndSingle {
    item1?: Date;
    item2?: number;
}

export enum AggregationMethod {
    Min = 0,
    Max = 1,
    Avg = 2,
}

export class SwaggerException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}