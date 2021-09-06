const router =  require("express").Router();

router.get("/auth", (req,res) => {
    res.send("hey its auth route")
})

module.exports = router;