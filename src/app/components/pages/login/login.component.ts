import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {environment} from '../../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  env: any = environment;
  urlLogin: string;

  constructor(
    public authService: AuthService,
    public snackBar: MatSnackBar,
    public route: ActivatedRoute,
    public router: Router,
    private apiService: ApiService) {
    this.urlLogin = apiService._baseGithub + '/login/oauth/authorize?scope=user:email:repo&client_id=' + this.env.client_id;
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if (params.code) {
          this.authService.clear();
          this.login(params.code);
        }
      });
  }

  public login(code) {
    this.apiService.login(code).subscribe(res => {
        const response: any = res.split('&');
        let error = false;

        response.forEach(param => {
          if (param.indexOf('access_token') > -1) {
            const access_token = param.split('=');
            this.authService.setToken(access_token[1]);
            this.router.navigate(['/listagem']);
          } else {
            if (param.indexOf('error') > -1) {
              error = true;
            }
          }
        });

        if (error) {
          this.snackBar.open('Erro ao tentar fazer login', 'Fechar', {
            duration: 3000
          });
        }
      }
    );
  }

}
