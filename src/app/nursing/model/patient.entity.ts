export class PatientEntity {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  birthDate: string;

  constructor() {
    this.id = '';
    this.firstName = '';
    this.lastName = '';
    this.photoUrl = '';
    this.birthDate = '';
  }
}
