import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'model/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url='http://localhost:3000/article/';


  constructor(private http:HttpClient) { }



// Ajouter un element dans db.json
addArticle(data:Article){

  return this.http.post(this.url,data);
  }
// Afficher le contenu du fichier db.json
fetchArticles(){
  return this.http.get(this.url);
  
  }
//Modifier un element dans db.json
updateArticle(id:any,data:Article)
{
return this.http.put(this.url+id,data);

}
// Afficher le contenu d'un element du fichier db.json

getArticleByID(id :any){
  return this.http.get(this.url+id);}




}
