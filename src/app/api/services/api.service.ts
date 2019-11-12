/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserDto } from '../models/user-dto';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly postPatientUserIdDoctorDoctorIdPath = '/patient/{userId}/doctor/{doctorId}';
  static readonly deletePatientUserIdDoctorDoctorIdPath = '/patient/{userId}/doctor/{doctorId}';
  static readonly getDoctorPatientsPath = '/doctor/patients';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ApiService.PostPatientUserIdDoctorDoctorIdParams` containing the following parameters:
   *
   * - `userId`: User id to to update with doctor id passed into route param
   *
   * - `doctorId`: Doctor id to add to user id passed into route param
   *
   * @return User updated
   */
  postPatientUserIdDoctorDoctorIdResponse(params: ApiService.PostPatientUserIdDoctorDoctorIdParams): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/patient/${params.userId}/doctor/${params.doctorId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * @param params The `ApiService.PostPatientUserIdDoctorDoctorIdParams` containing the following parameters:
   *
   * - `userId`: User id to to update with doctor id passed into route param
   *
   * - `doctorId`: Doctor id to add to user id passed into route param
   *
   * @return User updated
   */
  postPatientUserIdDoctorDoctorId(params: ApiService.PostPatientUserIdDoctorDoctorIdParams): __Observable<UserDto> {
    return this.postPatientUserIdDoctorDoctorIdResponse(params).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * @param params The `ApiService.DeletePatientUserIdDoctorDoctorIdParams` containing the following parameters:
   *
   * - `userId`: User id to to update with doctor id passed into route param
   *
   * - `doctorId`: Doctor id to add to user id passed into route param
   *
   * @return User updated
   */
  deletePatientUserIdDoctorDoctorIdResponse(params: ApiService.DeletePatientUserIdDoctorDoctorIdParams): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/patient/${params.userId}/doctor/${params.doctorId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * @param params The `ApiService.DeletePatientUserIdDoctorDoctorIdParams` containing the following parameters:
   *
   * - `userId`: User id to to update with doctor id passed into route param
   *
   * - `doctorId`: Doctor id to add to user id passed into route param
   *
   * @return User updated
   */
  deletePatientUserIdDoctorDoctorId(params: ApiService.DeletePatientUserIdDoctorDoctorIdParams): __Observable<UserDto> {
    return this.deletePatientUserIdDoctorDoctorIdResponse(params).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * @return Doctor patients
   */
  getDoctorPatientsResponse(): __Observable<__StrictHttpResponse<Array<UserDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/doctor/patients`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserDto>>;
      })
    );
  }
  /**
   * @return Doctor patients
   */
  getDoctorPatients(): __Observable<Array<UserDto>> {
    return this.getDoctorPatientsResponse().pipe(
      __map(_r => _r.body as Array<UserDto>)
    );
  }
}

module ApiService {

  /**
   * Parameters for postPatientUserIdDoctorDoctorId
   */
  export interface PostPatientUserIdDoctorDoctorIdParams {

    /**
     * User id to to update with doctor id passed into route param
     */
    userId: number;

    /**
     * Doctor id to add to user id passed into route param
     */
    doctorId: number;
  }

  /**
   * Parameters for deletePatientUserIdDoctorDoctorId
   */
  export interface DeletePatientUserIdDoctorDoctorIdParams {

    /**
     * User id to to update with doctor id passed into route param
     */
    userId: number;

    /**
     * Doctor id to add to user id passed into route param
     */
    doctorId: number;
  }
}

export { ApiService }
