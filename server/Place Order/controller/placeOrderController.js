const PlaceOrder = require("../model/placeOrderModel");

const getOrderList = async (req, res) => {
    try {
        const orders = await PlaceOrder.find();
        if (!orders) {
            return res.status(422).json({ err: true, message: "No orders yet" });
        }
        res.status(200).json({ err: false, message: "Success", orders: orders });
    } catch (err) {
        console.log(err);
    }
}

const getTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

const placeOrder = async (req, res) => {
    try {
        const { tableNum, orderList } = req.body;
        const date = new Date().toLocaleDateString();
        const time = getTime(new Date());
        if (!tableNum, !orderList) {
            return res.status(422).json({ err: true, message: "Something wrong order again" });
        }
        const order = new PlaceOrder({
            tableNum: tableNum,
            date: date,
            time: time,
            orderList: orderList
        });
        await order.save();
        res.status(200).json({ err: false, message: "Order placed, Wait unlit its get cooked" });
    } catch (err) {
        console.log(err);
    }
}

const deleteOrder = async (req, res) => {
    try {
        const {id} = req.body;
        const res = await PlaceOrder.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }
}

module.exports = { placeOrder, getOrderList, deleteOrder }