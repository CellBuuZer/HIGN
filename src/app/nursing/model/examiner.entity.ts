export class ExaminerEntity {
  id: string;
  firstName: string;
  lastName: string;
  nationalProviderIdentifier: string;

  constructor() {
    this.id = '';
    this.firstName = '';
    this.lastName = '';
    this.nationalProviderIdentifier = '';
  }
}
