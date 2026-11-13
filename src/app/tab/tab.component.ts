import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor() { }
  selectedSkill : string = 'Angular'
  

  onChangeSkill(skill: string){
    this.selectedSkill = skill
  }

  ngOnInit(): void {
  }


}
