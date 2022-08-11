import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'model/Article';
import { ArticleService } from '../ArticleService/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
article!:any;
  constructor(private s:ArticleService,private router:Router) { }

  ngOnInit(): void {
    this.article=new Article();
  }
  ajouter(f:any){
    return this.s.addArticle(this.article).subscribe(
      ()=>{this.router.navigate(['/home/']);}
    );
   }
}
