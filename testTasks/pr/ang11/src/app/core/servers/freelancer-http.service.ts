// ang
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// libs
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

// app
import { IFreelancerProfile } from '@app/interfaces/core/server-responses/freelancer-response.interface';
import { profiles } from '../mock/freelancer-list';


@Injectable()

export class FreelancerHttpService {
    constructor(private _http: HttpClient) { }


    public searchFreelancerList(pageSize?: number): Observable<{ "pages": number, "profiles": IFreelancerProfile[] }> {
        const url: string = "genie.geegbay.com/profile/api/v1/profiles/freelancermap?keywords=Java&page=2";
        let params: HttpParams = new HttpParams();
        const response = this._http.get<any>(url, { params }).pipe(tap(freelancerList => { console.log(freelancerList) }));
        return of({
            "pages": 400,
            "profiles": profiles
        }).pipe(tap(freelancerList => {
            console.log(freelancerList);
        }));
    }

    // public getFreelancerList(currentPage: number, nextPageSize: number) {
    //     console.log("currentPage, nextPageSize", currentPage, nextPageSize)
    //     const url: string = `genie.geegbay.com/profile/api/v1/profiles/freelancermap?page=${currentPage}&pageSize=${nextPageSize}`;
    //     let params: HttpParams = new HttpParams();
    //     const response = this._http.get<any>(url, { params });

    //     // const fromPosition = nextPageSize * currentPage - 1;
    //     // const toPosition = (nextPageSize * currentPage - 1) + (nextPageSize);

    //     return of({
    //         "pages": 400,
    //         // "profiles": profiles.slice(fromPosition, toPosition)
    //         "profiles": profiles
    //     })
    // }

}

