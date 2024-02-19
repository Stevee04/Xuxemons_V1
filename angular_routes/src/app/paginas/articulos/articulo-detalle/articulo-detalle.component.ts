import {Component, OnInit} from '@angular/core';
import {Article} from "../../../models/article.model";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {ArticlesService} from "../../../services/articles.service";

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {

  article$: Observable<Article | undefined>;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.article$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.articlesService.getArticleById(parseInt(params.get('id')!)))
    );
  }

  onCloseDetail() {
    this.router.navigate(['articles/list']);
  }


}
