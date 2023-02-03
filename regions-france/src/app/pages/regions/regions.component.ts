import { Component } from '@angular/core';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent {
  public activePage!: string

  constructor(){
    this.activePage = 'regions'
  }

  getClickedRegionCode(code: string){
    console.log(code)
  }
}
