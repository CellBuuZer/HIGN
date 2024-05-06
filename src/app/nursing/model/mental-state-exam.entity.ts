import { PatientEntity } from './patient.entity';
import { ExaminerEntity } from './examiner.entity';

export class MentalStateExamEntity {
  id: string;
  patientId: string;
  examinerId: string;
  examDate: string;
  orientationScore: number;
  registrationScore: number;
  attentionAndCalculationScore: number;
  recallScore: number;
  languageScore: number;
  patient: PatientEntity;
  examiner: ExaminerEntity;
  totalScore: number;

  constructor() {
    this.id = '';
    this.patientId = '';
    this.examinerId = '';
    this.examDate = '';
    this.orientationScore = 0;
    this.registrationScore = 0;
    this.attentionAndCalculationScore = 0;
    this.recallScore = 0;
    this.languageScore = 0;
    this.patient = new PatientEntity();
    this.examiner = new ExaminerEntity();
    this.totalScore = 0;
  }
}


