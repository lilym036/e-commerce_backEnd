const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const userData = await Category.findAll().catch((err) => {
    res.json(err);
  });
  return res.json(userData);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
const userData = await Category.findByPk(req.params.id).catch((err) => {
  res.json(err);
});
return res.json(userData);
});

router.post('/', async (req, res) => {
  // create a new category
  const userDataData = await Category.create(req.body);
  return res.json(userData);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const userDataData = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        category_id: req.params.category_id,
      },
    }

)});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const userData = await Category.destroy({
    where: {
      category_id_id: req.params.category_id,
    },
  });

  return res.json(userData);
});

module.exports = router;
