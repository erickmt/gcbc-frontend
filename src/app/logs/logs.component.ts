import { Component, OnInit } from '@angular/core';
import { Log } from '../models/log';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  public logs : Log[] = [];

  constructor(private logService : LogService) { }

  ngOnInit(): void {
    this.carregaLogs();
  }

  carregaLogs() {
    this.logs = this.logService.obterTodos();
  }

}
