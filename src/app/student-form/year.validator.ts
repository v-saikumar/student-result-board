import { FormControl } from "@angular/forms";
export class YearValidator {
  static passYear(control: FormControl): { [key: string]: any } {
    let value = control.value;
    let year = new Date(value).getFullYear();
    if (2017 < year) {
      return { passYear: true };
    }
    return null;
  }
}
