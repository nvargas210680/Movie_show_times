import express from "express";


const router = express.Router();

router.post("/", (req, res)=>{
    res.send("working");
});

export default router;

