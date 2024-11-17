const getAllProducts = async (req, res) => {
  res.status(200).json({msg:'i am get the products'})
};

const getAllProductsTesting= async (req, res) => {
    res.status(200).json({msg:'i am get the products ytffyugbjuhbjuhb'})
  };

  module.exports = {getAllProducts, getAllProductsTesting }