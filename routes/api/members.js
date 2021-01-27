const express =require('express')
const uuid=require('uuid')

const router=express.Router()
const members =require('../../MembersArray')

//getting all members
router.get('/',(req,res)=>{
    res.json(members)
})

//getting single member
router.get('/:id',(req,res)=>{
    //how to get id
    // res.send(req.params.id)

    //test if the id exist
    const found=members.some(member=>member.id===Number(req.params.id))
    if(found){
        res.json(members.filter(member=>member.id===Number(req.params.id)))
    }else
    {
        res.status(400).json({msg:`No member With Id of ${req.params.id}`})
    }
    
})
router.post('/',(req,res)=>{
   const newMember={
       id:uuid.v4(),
       name:req.body.name,
       email:req.body.email,
       status:'active'
   }
   if(!newMember.name||!newMember.email){
       res.status(400).json({msg:"Please name and Email"})
   }else{
       members.push(newMember)
       res.json(members)
   }
})
module.exports=router