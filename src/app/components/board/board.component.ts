import {Component} from '@angular/core';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent {


    getBoard(): string[][] {
        let board: string[][] = []


        for (let j = 97; j <= 104; j++) {
            let rank: string[] = []
            for (let i = 8; i >= 1; i--) {

                rank.push(i + String.fromCharCode(j))
            }

            board.push(rank)
        }
        return board;
    }
}
