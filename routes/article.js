const Article = require("../models/Article");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newArticle = new Article(req.body);

  try {
    const savedArticle = await newArticle.save();
    res.status(200).json(savedArticle);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedArticle);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.status(200).json("Article has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Article
router.get("/find/:id", async (req, res) => {
  try {
    const Article = await Article.findById(req.params.id);
    res.status(200).json(Article);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Article
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let Article;

    if (qNew) {
        Article = await Article.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
        Article = await Article.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
        Article = await Article.find();
    }

    res.status(200).json(Article);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
