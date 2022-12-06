import { Component, OnInit } from '@angular/core';
import {Article} from './hackernew/Article';

@Component({
  selector: 'app-th-hackernews',
  templateUrl: './th-hackernews.component.html',
  styleUrls: ['./th-hackernews.component.css']
})

export class ThHackernewsComponent implements OnInit {

  constructor() { }
  article: Article = {};
  articles: Article[] = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/'
    }
  ];

  like = 0;

  likeThis() {
    this.like++;
  }

  addNewArtical() {
    this.articles.push(this.article);
  }

  ngOnInit(): void {
  }

}
