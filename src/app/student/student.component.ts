import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentServiceService } from '../services/StudentServices/student-service.service';
//import { TextDecoder } from 'util';


//For table
// export interface PeriodicElement {
//   fullName: string;
//   address: string;
//   email: string;
//   universityId:number;
//   term: number;
//   course: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {stuId: 1, name: 'Rameshwar', address:'Indore', email:'ram@gamil.com', term:2, course:'BTech', action: 1},
//   {stuId: 2, name: 'Piyush', address:'Odisha', email:'piyush@gamil.com', term:8, course:'BA', action: 1},
//   {stuId: 3, name: 'Harsh', address:'Lucknow', email:'harsh@gamil.com', term:6, course:'BE', action: 1},
// ];

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent {


  constructor(private studentService: StudentServiceService,) { }
  // studentId:any =101;

  fullName: any;
  address: any;
  email: any;
  universityId: any;
  term: any;
  course: any;
  title: any;
  studentId: any

  StudentList: any = [];
  ShowAllStudents() {
    this.studentService.showAllStudents().subscribe(data => {
      this.StudentList = data;
      console.log(data);
    });
  }

  student: any
  GetStudentById(id: number) {
    this.studentService.getStudentById(id).subscribe(data => {
      // console.log(data)
      this.openModel();
      this.title = "Update Student"
      this.stuForm = new FormGroup({
        fullName: new FormControl(data.fullName, Validators.required),
        email: new FormControl(data.email, [Validators.required, Validators.email]),
        address: new FormControl(data.address, Validators.required),
        universityId: new FormControl(data.universityId, Validators.required),
        term: new FormControl(data.term, Validators.required),
        course: new FormControl(data.course, Validators.required),
      });

      this.student.studentId = this.studentId;
      this.student.fullName = this.fullName;
      this.student.email = this.email;
      this.student.address = this.address;
      this.student.universityId = this.universityId;
      this.student.term = this.term;
      this.student.course = this.course;

      // this.StudentList=data;
      console.log(data);
    });
  }

  // UpdateStudent() {
  //   this.studentService.updateStudent(this.stuForm.value)
  //     .subscribe({
  //       next: (response) => {
  //         console.log(response);
  //         this.CloseModel();
  //         window.alert("Student updated SuccessFully");
  //       },
  //       error: (error: any) => {
  //         if(this.stuForm.value.address==null || this.stuForm.value.course=="" || this.stuForm.value.email==null || this.stuForm.value.fullName==null || this.stuForm.value.term==null|| this.stuForm.value.universityId==null){
  //           window.alert("Please fill all details")
  //         }
  //         else{
  //           window.alert(error.error);

  //         }
  //         console.log(error);
  //       }
  //     });
  //   }

  AddUpdateStudent() {
    if (this.title == "Add Student") {
      this.studentService.addStudent(this.stuForm.value)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.CloseModel();
            window.alert("Student added SuccessFully");
          },
          error: (error: any) => {
            if (this.stuForm.value.address == null || this.stuForm.value.course == "" || this.stuForm.value.email == null || this.stuForm.value.fullName == null || this.stuForm.value.term == null || this.stuForm.value.universityId == null) {
              window.alert("Please fill all details")
            }
            else {
              window.alert(error.error);
            }
            console.log(error);
          }
        });
    }
    else {
      console.log(this.student);
      this.studentService.updateStudent(this.student)
        .subscribe({
          next: (response) => {
            this.CloseModel();
            window.alert("Student updated SuccessFully");
          },
          error: (error: any) => {
            if (this.address == null || this.course == "" || this.email == null || this.fullName == null || this.term == null || this.universityId == null) {
              window.alert("Please fill all details")
            }
            else {
              window.alert(error.error);

            }
            console.log(error);
          }
        });
    }
  }





  // deleteStudent(id:Number){
  //   this.studentService.deleteStudent(id).subscribe({
  //   next:(response)=>{
  //     window.alert(response);
  //     console.log(response);
  //   }
  //   });
  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe({
      next: (response: ArrayBuffer) => {
        const message = new TextDecoder().decode(response);
        window.alert(message);
        console.log(message);
        location.reload();
      },
      error: (error: any) => {
        console.error(error);
      }
    });

  }
  // For panel
  panelOpenState1 = true;

  // For form
  stuForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    universityId: new FormControl('', Validators.required),
    term: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required),
  });

  stuSubmitted() {
    console.log(this.stuForm.value);
  }

  // For Modal
  openModel() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  CloseModel() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
      //location.reload();
    }
  }
  ngOnInit(): void {
    this.ShowAllStudents();
    this.title = "Add Student"
  }

  // For table
  displayedColumns: string[] = ['stuId', 'name', 'address', 'email', 'course', 'term', 'action'];
  // dataSource = ELEMENT_DATA;
}
