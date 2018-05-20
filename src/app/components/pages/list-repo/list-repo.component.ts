import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-list-repo',
  templateUrl: './list-repo.component.html',
  styleUrls: ['./list-repo.component.scss']
})


export class ListRepoComponent implements OnInit {

  displayedColumns = ['name', 'forks', 'stars'];
  dataGitHub: any;

  constructor(
    public snackBar: MatSnackBar,
    private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getUserRepo().subscribe(res => {
        this.dataGitHub = res;
      },
      error => {
        this.snackBar.open('Erro ao listar repositórios', 'Fechar', {
          duration: 3000
        });
      }
    );
  }

}
