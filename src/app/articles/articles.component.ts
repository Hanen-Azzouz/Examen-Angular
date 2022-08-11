import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../ArticleService/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  list!:any;
  constructor(private ac:ActivatedRoute,private s:ArticleService) { }

  ngOnInit(): void {

this.s.fetchArticles().subscribe(
  (data)=>this.list=data );



  }

}
