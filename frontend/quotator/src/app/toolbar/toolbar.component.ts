/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash';
import { TranslateService } from '../translation/translation.service';
import { ConnectService } from '../connect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'q-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  loggedIn = false;
  enFlagUrl = 'assets/imgs/en.svg';
  deFlagUrl = 'assets/imgs/de.svg';
  frFlagUrl = 'assets/imgs/fr.svg';
  ptFlagUrl = 'assets/imgs/pt.svg';

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private translate: TranslateService,
    private router: Router
  ) {
    this.registerImages();
    ConnectService.token.subscribe(token => {
      this.loggedIn = token != null;
      if (!this.loggedIn) {
        this.router.navigate(['connect']);
      }
    });
  }

  registerImages(): void {
    const images = {
      'en-flag': this.enFlagUrl,
      'fr-flag': this.frFlagUrl,
      'de-flag': this.deFlagUrl,
      'pt-flag': this.ptFlagUrl,
    };

    _.map(images, (url: string, key: string) => {
      const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      this.iconRegistry.addSvgIcon(key, safeUrl);
    });
  }

  setLanguage(lang: string): void {
    document.getElementsByTagName('html')[0].setAttribute('lang', lang);
    this.translate.use(lang);
  }

  logout() {
    ConnectService.token.next(null);
    ConnectService.user.next(null);
  }
}
