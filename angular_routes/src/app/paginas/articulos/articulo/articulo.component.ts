import {Component, Input} from '@angular/core';
import {Article} from "../../../models/article.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {

  @Input() _article: Article;

  constructor(private router: Router) {
    this._article = { id: -1, description: '', title: ''};
  }

  onViewDetailsPress() {
    this.router.navigate([`articles/article/${this._article.id}`])
  }
}
