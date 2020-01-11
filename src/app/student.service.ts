import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class StudentService {
  private studentData: string = "http://localhost:3000/students";

  constructor(private http: HttpClient) {}
  getAllStudents() {
    return this.http.get(this.studentData);
  }
}
