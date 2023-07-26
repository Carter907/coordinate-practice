import {Component, Input, OnInit} from '@angular/core';
import { Coordinate } from '../../model/coordinate';
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit{
    @Input() coordinate: Coordinate = { file: "d", rank: 4};

    ngOnInit(): void {
    }

    protected readonly String = String;
    protected readonly Number = Number;
}
