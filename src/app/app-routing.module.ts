import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateArticleComponent } from './update-article/update-article.component';

const routes: Routes = [
{path:'', redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent },
{path:'addarticle',component:AddArticleComponent},
{path:'articles',component:ArticlesComponent },

{path:'update/:id',component:UpdateArticleComponent},
{path:'**',component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
