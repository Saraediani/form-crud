import Users from '../../models/users.js';

 const getUsers = async (req, res) =>{

    const users = await  Users.find()
    
    try{
      res.json(users);
  } catch (error){
    res.status(400).json({error:error.message});
  } 
  };

  const createUser = async (req, res) => {
    const checkComingFrom = req.query.q ? req.query.q:""
    const createUser = await Users.create({
  
      name:req.body.name,
      comingFrom:checkComingFrom
  
    })
  try{
    res.json(createUser);
  }catch(error){
    res.status(400).json({error:error.message})
  }
  }
  const getUser = async (req, res) =>{

    const user = await  Users.findById(req.params.id);
    
    try{
      res.json(user);
  } catch (error){
    res.status(400).json({error:error.message});
  } 
  };

 const deleteUser = async(req, res) => {
    const user = await  Users.findByIdAndDelete(req.params.id);
    
    try{
      res.json(user);
  } catch (error){
    res.status(400).json({error:error.message});
  } 
}; 
 const updateUser  = async(req, res) => {
    try {
        const updateuser= await Users.findById( req.params.id);
        Object.assign(updateuser ,req.body)
        updateuser.save();
         res.status(201).json(updateuser);
       } catch (error) {
         res.status(500).json({error :error.message});
       }
}; 




export default {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,

} ;
