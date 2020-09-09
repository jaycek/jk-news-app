import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';
  mArticles: Array<any>;
  mSources:Array<any>;

  constructor(private newsApi:NewsApiService){
    console.log("Initiated news api service");
  }

  ngOnInit(){
    this.newsApi.initArticles().subscribe(data=>this.mArticles=data['articles']);
    this.newsApi.initsources().subscribe(data=>this.mSources=data['sources']);
  }

  searchArticles(source){
    console.log("Source is " + source);
    this.newsApi.getArticlesByID(source).subscribe(data=>this.mArticles=data['articles']);

  }
}
