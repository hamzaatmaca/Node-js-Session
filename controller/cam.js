exports.cam = (req,res)=>{
    try {
        req.session.email
          ? res.status(200).render("pages/cam")
          : res.status(403).render("pages/login",{data:'Unauthorization Entry'});
         
      } catch (err) {
        res.status(500).render("pages/error");
      }
}