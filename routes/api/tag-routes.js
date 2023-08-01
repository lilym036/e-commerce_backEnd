const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tagData = await Tag.findAll({
    include: [Product]
  }).catch((err) => {
    res.json(err);
  });
  return res.json(tagData);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tagData = await Tag.findByPk(req.params.id, {
    include: [Product]
  }).catch((err) => {
    res.json(err);
  });
  return res.json(tagData);
});

router.post('/', async (req, res) => {
  // create a new tag
  const tagData = await Tag.create(req.body);

  return res.json(tagData);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const tagData = await Tag.update(
    req.body,
    {
      where: {
        id: req.params.id,
      },
    }
  ).catch((err) => {
    res.json(err);
  });
  return res.json(tagData);
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const tagData = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.json(tagData);
});

module.exports = router;
