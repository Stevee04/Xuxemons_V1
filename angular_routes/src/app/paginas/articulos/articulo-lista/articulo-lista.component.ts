import {Component, OnInit} from '@angular/core';
import {ArticlesService} from "../../../services/articles.service";
import {Observable} from "rxjs";
import {Article} from "../../../models/article.model";

@Component({
  selector: 'app-articulo-lista',
  templateUrl: './articulo-lista.component.html',
  styleUrls: ['./articulo-lista.component.css']
})
export class ArticuloListaComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(private articles: ArticlesService) {
  }

  ngOnInit() {
    this.articles$ = this.articles.getArticles();
  }
}
