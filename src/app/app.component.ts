import { Component, VERSION, OnInit } from "@angular/core";
import { ApiService } from "./api.service";
import { Person } from "./person";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  people: Person[];
  person = new Person();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.refreshPeople();
  }

  refreshPeople() {
    this.apiService.getPeople().subscribe(data => {
      console.log(data);
      this.people = data;
    });
  }
  addPerson() {
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })      
  }
}
