import {Component} from '@angular/core';
import {Coordinate, Rank} from "../../model/coordinate";

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent {

    getBoard(): Coordinate[][] {
        let board: Coordinate[][] = []

        for (let j = 97; j <= 104; j++) {
            let rank: Coordinate[] = []
            for (let i = 8; i >= 1; i--) {
                rank.push(<Coordinate>{rank: i, file: String.fromCharCode(j)})
            }

            board.push(rank)
        }
        return board;
    }
}
