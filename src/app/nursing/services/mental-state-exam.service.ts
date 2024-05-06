import { Injectable } from '@angular/core';
import { BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {MentalStateExamEntity} from "../model/mental-state-exam.entity";

@Injectable({
  providedIn: 'root'
})
export class MentalStateExamService extends BaseService<MentalStateExamEntity>{
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/mental-state-exams';
  }
}
