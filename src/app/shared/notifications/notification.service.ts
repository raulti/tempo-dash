import { Injectable } from '@angular/core';
import { NotificationsComponent } from './notifications.component';

@Injectable()
export class NotificationService extends NotificationsComponent{

    constructor() {
        super();
    }

    public success(msg) {
        this.createAlert(msg, 'success');
    }

    public danger(msg) {
        this.createAlert(msg, 'danger');
    }

    public warning(msg) {
        this.createAlert(msg, 'warning');
    }

    public info(msg) {
        this.createAlert(msg, 'info');
    }

    public createAlert(msg, type) {
        this.showNotification(msg, type);
    }
}