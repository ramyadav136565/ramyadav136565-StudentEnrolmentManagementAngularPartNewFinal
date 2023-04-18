// import { Component, OnInit, ViewChild } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { MatDialog } from '@angular/material/dialog';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatSort} from '@angular/material/sort';
// import {MatTableDataSource} from '@angular/material/table';
// import { UniversitiyServiceService } from '../services/UniversityServices/universitiy-service.service';

// declare var window:any;

// export interface PeriodicElement {
//   id: number;
//   name: string;
//   email: string;
//   action: number;
// }

// // var ELEMENT_DATA: PeriodicElement[] = [];

// var ELEMENT_DATA: PeriodicElement[] = [
//   {id: 1, name: 'Rameshwar',email:'ram@gamil.com',action: 1},
// ];

// @Component({
//   selector: 'app-university',
//   templateUrl: './university.component.html',
//   styleUrls: ['./university.component.css']
// })

// export class UniversityComponent implements OnInit{
//   router: any;

//  constructor(private _dialog: MatDialog,private universityService:UniversitiyServiceService) {}
//   UniversityList:any=[];
//   showUniversityList(){
//     this.universityService.showAllUniversities().subscribe(data=>{
//       this.UniversityList=data;
//       ELEMENT_DATA=this.UniversityList;
//       console.log(data);
//     });
//   }
  
//   panelOpenState1 = true;

//   // For Forms
//   universityForm = new FormGroup({
//     uniName: new FormControl(""),
//     address: new FormControl(""),
//   });

//   uniSubmitted(){
//     console.log(this.universityForm.value);
//   }

//   // For modal
//   openModel() {
//     const modelDiv = document.getElementById('myModal');
//     if(modelDiv!= null) {
//       modelDiv.style.display = 'block';
//     } 
//   }

//   CloseModel() {
//     const modelDiv = document.getElementById('myModal');
//     if(modelDiv!= null) {
//       modelDiv.style.display = 'none';
//     } 
//   }

//   ngOnInit(): void {
//     this.showUniversityList();
//   }

//   // For table
//   displayedColumns: string[] = ['id', 'name', 'email', 'action'];
//   dataSource = ELEMENT_DATA;
// }




import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // Import the MatDialogModule
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UniversitiyServiceService } from '../services/UniversityServices/universitiy-service.service';
// import { UniversitiyServiceService } from '../services/UniversityServices/universitiy-service.service';

declare var window:any;

export interface PeriodicElement {
  universityId: number;
  name: string;
  address: string;
}


@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css'],
  providers: [] // Add the MatDialogModule to the providers array
})

export class UniversityComponent implements OnInit{

constructor(private universityService:UniversitiyServiceService) {}
  UniversityList:any=[];
  showUniversityList(){
    this.universityService.showAllUniversities().subscribe(data=>{
      this.UniversityList=data;
    });
  }
  
  panelOpenState1 = true;

  // For Forms
  universityForm = new FormGroup({
    uniName: new FormControl(""),
    address: new FormControl(""),
  });

  uniSubmitted(){
    console.log(this.universityForm.value);
  }

  // For modal
  openModel() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'block';
    } 
  }

  CloseModel() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'none';
    } 
  }

  ngOnInit(): void {
    this.showUniversityList();
  }

  // For table
  displayedColumns: string[] = ['id', 'name', 'email', 'action'];
}
