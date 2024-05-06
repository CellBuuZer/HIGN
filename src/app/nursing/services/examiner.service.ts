import { Injectable } from '@angular/core';
import { BaseService} from "../../shared/services/base.service";
import {ExaminerEntity} from "../model/examiner.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExaminerService extends BaseService<ExaminerEntity>{
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/examiners';
  }
}
