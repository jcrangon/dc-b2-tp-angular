import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-france-map',
  templateUrl: './france-map.component.html',
  styleUrls: ['./france-map.component.scss']
})
export class FranceMapComponent {
  @Output() sendRegionCode: EventEmitter<string> = new EventEmitter<string>()

  onClickRegion(code: string): void
  {
    console.log(code)
    this.sendRegionCode.emit(code)

  }

}
