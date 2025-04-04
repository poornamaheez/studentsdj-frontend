import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  students: Student[] = [];

  getStudents() {
    this.studentService.getAllStudents().subscribe({
      next: (students) => {
        this.students = students;
        console.log(students);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }



}
