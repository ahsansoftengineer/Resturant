import { Component, Output, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInputRef') serverContentInputDeclare: ElementRef;
  constructor() {}
  ngOnInit(): void {}
  onAddServer(serverNameRef: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameRef.value,
      serverContent: this.serverContentInputDeclare.nativeElement.value
    })
  }
  onAddBlueprint(serverNameRef: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameRef.value,
      serverContent: this.serverContentInputDeclare.nativeElement.value
    })
  }
}
