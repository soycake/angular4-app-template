/* =========================================================================================
 * Import Library Angular 2 
 * ========================================================================================= */

import { Component, OnInit } from '@angular/core';

/* =========================================================================================
 * Import Service
 * ========================================================================================= */

import { AppService } from './../services/app.service';

/* =========================================================================================
 * Component
 * ========================================================================================= */

@Component ({
    selector    : 'main-component',
    templateUrl : './../../public/views/main.html'
})

/* =========================================================================================
 * Class
 * ========================================================================================= */

export class MainComponent implements OnInit {

    /* =========================================================================================
     * Constructor
     * ========================================================================================= */

    constructor (private app: AppService) {}

    public ngOnInit () { }

}