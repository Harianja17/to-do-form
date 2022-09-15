import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.css']
})
export class AnimeFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  animeForm: FormGroup= new FormGroup({
    id: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    cover: new FormControl(null, [Validators.required,Validators.minLength(3)])
  })

  listAnime: any[]=[]

  submitData(data:any){
    console.log('Data From From', data); 
    this.listAnime.push(data);
  }

  form(property:string):FormGroup{
    return this.animeForm.get(property) as FormGroup;
  }

}
