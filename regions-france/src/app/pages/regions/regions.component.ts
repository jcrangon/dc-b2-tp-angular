import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent {
  public activePage!: string

  constructor(public toaster: ToastrService){
    this.activePage = 'regions'
  }

  getClickedRegionCode(code: string){
    console.log(code)
  }
}
