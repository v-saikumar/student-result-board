import { YearValidator } from "./year.validator";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.css"]
})
export class StudentFormComponent implements OnInit {
  admissionForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.admissionForm = this.formBuilder.group({
      firstName: [
        "",
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern("^[a-zA-Z ]*$")
        ]
      ],
      lastName: [
        "",
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern("^[a-zA-Z ]*$")
        ]
      ],
      class: ["", [Validators.required, Validators.pattern("^[a-zA-Z0-9]*$")]],
      percentage: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      date: ["", [Validators.required]],
      year: ["", [Validators.required, YearValidator.passYear]]
    });
  }

  isDateInvalid = false;
  isValidDate(event: any) {
    let year = new Date(event.target.value).getFullYear();

    if (2017 < year) {
      this.isDateInvalid = true;
    } else {
      this.isDateInvalid = false;
    }
  }
  save() {
    console.log(this.admissionForm.value);
  }
  ngOnInit() {}
}
