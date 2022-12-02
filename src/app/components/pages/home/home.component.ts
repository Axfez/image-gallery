import { Component, OnInit } from '@angular/core';
import { ImagesService } from '@app/shared/services/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images: Array<any> = [];
  loading: boolean = true;
  constructor(private http: ImagesService) {}

  ngOnInit(): void {
    this.http.getImages().subscribe(obj => {
      this.images = obj['hits'];
      this.loading = false;
    });
  }

  search(searchTerm) {
    this.http.getImages(searchTerm).subscribe(obj => {
      this.images = obj['hits'];
      this.loading = false;
    });
  }
}
