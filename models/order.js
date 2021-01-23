
import 'moment/locale/tr'

class Order {
    constructor(id,status,items,totalAmount,date, deviceId){
        this.id= id;
        this.status=status;
        this.items=items;
        this.totalAmount=totalAmount;
        this.date=date;
        this.deviceId=deviceId

    }
    
    get readableData(){
        const moment = require('moment');
        //const options = { year: 'numeric', month: 'long', day: 'numeric' };
        //return this.date.toLocaleDateString('en-US', { month: 'long'});
        return moment(this.date).locale('tr').format('MMMM Do YYYY, hh:mm')
        }
}

export default Order;