const Dish = require("../model/dishModel");

const addDish = async (req, res) => {
    try {
        const { name, prize, dishTag, catagory, dishType, bestSeller } = req.body;
        if (!name || !prize || !dishTag || !catagory || !dishType ||!bestSeller) {
            return res.status(422).json({ err: true, message: "Enter Details Properly" });
        }
        const dish = new Dish({
            name: name,
            prize: prize,
            dishTag: dishTag,
            catagory: catagory,
            dishType: dishType,
            bestSeller: bestSeller
        });
        await dish.save();
        return res.status(200).json({ err: false, message: "Dish Added Successfully" });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { addDish }