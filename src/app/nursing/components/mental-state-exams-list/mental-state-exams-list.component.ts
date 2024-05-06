import {Component, Input, OnInit} from '@angular/core';
import {MentalStateExamEntity} from "../../model/mental-state-exam.entity";
import {MentalStateExamService} from "../../services/mental-state-exam.service";
import {PatientService} from "../../services/patient.service";
import {ExaminerService} from "../../services/examiner.service";
import {PatientEntity} from "../../model/patient.entity";
import {ExaminerEntity} from "../../model/examiner.entity";

@Component({
  selector: 'app-mental-state-exams-list',
  templateUrl: './mental-state-exams-list.component.html',
  styleUrl: './mental-state-exams-list.component.css'
})
export class MentalStateExamsListComponent implements OnInit{
  @Input() mentalStateExams: MentalStateExamEntity[] = [];

  constructor(
    private examService: MentalStateExamService,
    private patientService: PatientService,
    private examinerService: ExaminerService
  ) {}

  ngOnInit() {
    this.getAllExams();
  }

  private getAllExams() {
    this.examService.getAll().subscribe((response: any) => {
      this.mentalStateExams = response;
      this.fetchRelatedData(this.mentalStateExams);
    });
  }

  private fetchRelatedData(exams: MentalStateExamEntity[]) {
    exams.forEach((exam) => {
      this.patientService.getById(exam.patientId).subscribe(
        (patient: PatientEntity) => {
          exam.patient = patient;
          this.fetchExaminerData(exam);
        },
        (error) => {
          console.error('Error fetching patient data:', error);
        }
      );
    });
  }

  private fetchExaminerData(exam: MentalStateExamEntity) {
    this.examinerService.getById(exam.examinerId).subscribe(
      (examiner: ExaminerEntity) => {
        exam.examiner = examiner;
        exam.totalScore = this.calculateTotalScore(exam);
      },
      (error) => {
        console.error('Error fetching examiner data:', error);
      }
    );
  }

  calculateTotalScore(exam: MentalStateExamEntity): number {
    return (
      exam.orientationScore +
      exam.registrationScore +
      exam.attentionAndCalculationScore +
      exam.recallScore +
      exam.languageScore
    );
  }
}

