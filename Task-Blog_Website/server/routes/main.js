    const express = require('express');
    const router  = express.Router();
    const post = require('../models/post');

    router.get('', async (req,res)=>{
        

        try {
            const locals = {
                title: "Blog Website",
                description: "Simple Blog created using NodeJs, express and MongoDB."
            }

            let perPage = 7;
            let page = req.query.page || 1;


            const data = await post.aggregate([{ $sort: {createdAt: -1} }])
            .skip(perPage * page - perPage)
            .limit(perPage)
            .exec(); 

            const count = await post.count;
            const nextPage = parseInt(page) + 1;
            const hasNextPage = nextPage <= Math.ceil(count / perPage);

            // const data = await Post.find();
            res.render('index',{
                locals,
                data,
                current: page,
                nextPage: hasNextPage ? nextPage : null               
            });

        } catch (error) {
            console.log(error);
        }


    });


    // function insertPostData(){
    //     Post.insertMany
    // }
    // insertPostData();

    
    router.get('/post/:id',async (req,res) => {    
        try {
            let slug = req.params.id;

            const data = await post.findById({_id: slug });

            const locals = {
                title: "Blog Website",
                description: "Simple Blog created using node and mongo express"
            }

            res.render('post',{locals, data});
        } catch (error) {
            console.log(error);
        }
    });


    router.post('/search',async (req,res) => {    
        try {
            const locals = {
                title: "Search",
                description: "Simple Blog created using node and mongo express"
            }

            let searchTerm = req.body.searchTerm;
            const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g,"");

            const data = await post.find({
                $or: [
                    {title: {$regex: new RegExp(searchNoSpecialChar,'i') }},
                    {body: {$regex: new RegExp(searchNoSpecialChar,'i') }}
                ]
            });

            res.render("search", {
                data,
                locals
            });
        } catch (error) {
            console.log(error);
        }
    });












    module.exports = router;
