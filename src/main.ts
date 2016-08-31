import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { NgModuleNgFactory } from './ng-module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(NgModuleNgFactory);
