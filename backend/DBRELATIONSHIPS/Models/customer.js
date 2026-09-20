const mongoose = require("mongoose");

const {Schema} = mongoose;

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");

}

const orderSchema = new schema ({
    item: String,
    price: Number,
});

const customerSchema = new schema ({
    name: String, 
    orders: [
        {
            type : schema.Types.ObjectId,
            ref: "Order"

        }],
});
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

module.exports = { Order, Customer };

//FUNCTIONS 
const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
};