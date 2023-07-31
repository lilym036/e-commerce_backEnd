const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tagData = await Book.findAll();
  return res.json(tagData);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tagData = await Tag.findByPk(req.params.id);

  return res.json(tagData);
});

router.post('/', async (req, res) => {
  // create a new tag
  const tagData = await Product.create(req.body);

  return res.json(tagData);
});

router.put('/:tag_id', async (req, res) => {
  // update a tag's name by its `id` value
  const tagData = await Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        tag_id: req.params.tag_id,
      },
    }
  );
  return res.json(tagData);
});

router.delete('/:tag_id', async (req, res) => {
  // delete on tag by its `id` value
  const tagData = await Tag.destroy({
    where: {
      tag_id: req.params.tag_id,
    },
  });

  return res.json(tagData);
});

module.exports = router;
