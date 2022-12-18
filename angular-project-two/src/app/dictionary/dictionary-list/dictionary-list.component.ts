import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from '../service/dictionary-service.service';
import {Word} from '../dictionary/word';

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {

  dictionary: Word[] = [];

  constructor(private dictionaryService: DictionaryServiceService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.dictionary = this.dictionaryService.getAllWord();
  }

}
