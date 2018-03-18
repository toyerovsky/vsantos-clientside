import ServerNotification from './Notification';

class Notifier {
    array: ServerNotification[];
    top: number;

    constructor(array: ServerNotification[]) {
        this.array = array;
        this.top = 0;

        setInterval(this.watch, 1000);
    }

    watch() {
        if (this.array.length <= 0) {
            return;
        }
        let current = new Date();
        let id = 0;
        this.array.forEach(value => {
            id++;
            let ms = value.current_date.getMilliseconds();
            let delay = (value.delay * 1000);

            if(current.getMilliseconds() > delay){
                this.array.splice(id,1);
            }
        });

    }

    push(notification: ServerNotification) {
        this.array.push(notification);
        this.top = this.array.length;
    }


    getByID(id: number) {
        if (this.array.length < id) {
            return false;
        }
        let notification = this.array[id];
        return notification;
    }

}