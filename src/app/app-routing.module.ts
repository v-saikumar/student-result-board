import { StudentComponent } from "./student/student.component";
import { StudentFormComponent } from "./student-form/student-form.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/studentboard", pathMatch: "full" },
  { path: "studentboard", component: StudentComponent },
  { path: "student-form", component: StudentFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
