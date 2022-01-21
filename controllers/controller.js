const Feed = require('../models/article');


const getHomePage = (req,res) => {
Feed.find()
.then(feeds =>{
    res.render('homePage' , {pageTitle:'Home Page' , feeds})
})
.catch(err => console.log(err))

}

const getNewFeed =(req,res) => {

if(req.method==='GET'){

res.render('addNewFeed' , {pageTitle:'Add New Feed'})

}

if(req.method==='POST'){

const feed =new Feed(req.body);

feed.save()
.then( feed =>{
    res.redirect('/')
})
.catch(err => console.log(err))
    
}
}


const showFeedPage =(req,res) => {

    Feed.findById(req.params.id)
.then(feed=>{
    res.render('showFeedPage',{pageTitle:'Feed Page' , feed})
})
.catch(err => console.log(err))

}

const delFeed =(req,res) =>{
Feed.findByIdAndDelete(req.params.id)
.then(result =>
    res.redirect('/'))
.catch(err => console.log(err))
}

const updateFeed =(req,res) => { 


    if (req.method==='GET') {
        Feed.findById(req.params.id)
        .then(feed => {
            res.render('editFeedPage' ,{pageTitle:'edit feed' ,feed})
        })
        .catch(err => console.log(err))
    }

    
    if (req.method==='POST') {
        Feed.findByIdAndUpdate(req.params.id,req.body)
        .then(result=>{
              res.redirect('/')
        })
        .catch(err =>console.log(err))
        
    }

}





module.exports ={
    
    getHomePage,
    getNewFeed,
    showFeedPage,
    delFeed,
    updateFeed
}