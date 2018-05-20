import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {
  @Input() name: string;
  @Input() styleIcon: string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    iconRegistry
      .addSvgIcon('github',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/images/svg/logo-github.svg')
      )
    ;
  }

  ngOnInit() {
  }

}
