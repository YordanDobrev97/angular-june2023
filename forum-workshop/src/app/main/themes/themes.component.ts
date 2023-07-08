import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
  listThemes: Theme[] = []

  constructor(private apiService: ApiService){
  }

  ngOnInit(): void {
    this.apiService.getThemes().subscribe((themes) => {
      this.listThemes = themes
    })
  }

}
