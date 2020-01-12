import { StudentService } from "./../student.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  students = [];
  // data = (total = 0);
  constructor(private studentService: StudentService) {}
  get sortData() {
    return this.students.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  max = 0;
  ngOnInit() {
    this.studentService.getAllStudents().subscribe(res => {
      this.students = <[]>res;
      this.students.sort((a, b) => (a.name > b.name ? 1 : -1));

      this.students.forEach(student => {
        let marks = student.marks;
        // let total = 0;
        // for (let property in marks) {
        //   total += parseFloat(marks[property]);
        // }
        // student["total"] = total;
        let totalmarks =
          parseInt(marks.Maths) +
          parseInt(marks.English) +
          parseInt(marks.Science);
        student["totalMarks"] = totalmarks;
        if (
          parseInt(marks.Maths) >= 20 &&
          parseInt(marks.English) >= 20 &&
          parseInt(marks.Science) >= 20
        ) {
          student["status"] = "Pass";
        } else {
          student["status"] = "Fail";
        }
      });
      for (let i = 0; i < this.students.length; i++) {
        let count = 0;
        for (let j = 1 + i; j < this.students.length; j++) {
          if (this.students[i].totalMarks < this.students[j].totalMarks) {
            count++;
          }
        } //inner loop
        if (this.students[i].status == "Pass" && count == 0) {
          this.students[i].status = "Topper";
        }
      } //outer loop
    });
  }
}
