import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Article} from "../models/article.model";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  // SI ESTAS VIENDO ESTE FICHERO ES QUE NO HAS SEGUIDO LAS INSTRUCCIONES DE NO HACERLO !!!

  sampleDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit sollicitudin interdum. Suspendisse nec ante sapien. Quisque ullamcorper mi et ligula viverra blandit. Cras sodales tortor posuere diam faucibus, dapibus molestie ante finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus bibendum ultricies urna vitae volutpat. Quisque et blandit elit. Nullam dignissim odio nec fermentum tincidunt. Mauris nibh leo, efficitur in luctus ac, lobortis ac ipsum. Donec maximus elit nec commodo iaculis. Fusce velit leo, tempus mollis lorem sed, tincidunt maximus ex. Maecenas luctus, arcu ac faucibus dictum, tellus elit facilisis nulla, maximus semper sapien magna in nisl. Phasellus quis enim vulputate, euismod est ut, semper massa. Aenean a dolor tellus. Sed dignissim scelerisque turpis quis aliquam. Praesent sodales volutpat dolor eget luctus.";
  articles: Article[] = [];

  constructor() {
    for (let i = 1; i <= 10; i++){
      this.articles.push({ id: i, title: `Titular del artículo ${i}`, photo: `https://picsum.photos/300/${i}00`, description: this.sampleDescription })
    }
  }

  getArticles(): Observable<Article[]> {
    return of(this.articles);
  }

  getArticleById(articleId: number): Observable<Article | undefined> {
    const article = this.articles.find(value => value.id === articleId);
    return of(article);
  }
}
