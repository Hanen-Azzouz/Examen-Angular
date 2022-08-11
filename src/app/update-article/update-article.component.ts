import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../ArticleService/article.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  id!:any;
  article!:any;
  constructor(private s:ArticleService,private ar:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.id=this.ar.snapshot.params['id'];
this.s.getArticleByID(this.id).subscribe(
  (d)=>{this.article=d;}
);
  }
  update(data:any){
    return this.s.updateArticle(this.id,data).subscribe(
      ()=>{ this.router.navigate(['/home/']);}
    );
    
    }
}
