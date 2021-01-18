// ang
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// libs
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

// app
import { IFreelancerProfile } from '@app/interfaces/core/server-responses/freelancer-response.interface';
import { profiles } from '../mock/freelancer-list';


@Injectable({ providedIn: 'root' })

export class FreelancerHttpService {
    constructor(private _http: HttpClient) { }


    public searchFreelancerList(freelancerName: string = ''): Observable<{ "pages": number, "profiles": IFreelancerProfile[] }> {
        // console.log('nameFreelancer', freelancerName)
        const url: string = "genie.geegbay.com/profile/api/v1/profiles/freelancermap?keywords=Java&page=2";
        let params: HttpParams = new HttpParams();
        const response = this._http.get<any>(url, { params }).pipe(tap(freelancerList => { console.log(freelancerList) }));
        return of({
            "pages": 400,
            "profiles": profiles
            // "profiles": profiles.filter(profile => profile.name.indexOf(freelancerName) > -1)
        }).pipe(tap(freelancerList => {
            console.log(freelancerList);
        }));
    }
}

