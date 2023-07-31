import {v4 as uuidv4} from 'uuid';
let users = [];

export const getUsers = (req,res) => 
{
    // console.log(users);
    res.send(users);
} 

export const createUser = (req,res) => 
{
    console.log('POST ROUTE REACHED');
    const user=req.body;
    const userId = uuidv4();
    // const userWithId = { ...user, id : userId};
    users.push({ ...user, id : userId});
    res.send(`user with name ${user.firstName} added to the database`);
}

export const getUser = (req,res) =>
{
    const {id} = req.params
    const foundUser = users.find((user) => user.id === id);
    console.log(req.params);
    res.send(foundUser);
    // res.send('THE GET ID Route');
}

export const deleteUser = (req,res) => 
{
    const {id} = req.params;
    users = users.filter((user) => user.id !== id); 

    res.send(`user with id ${id} is deleted from the database`);
}

export const updateUser = (req,res) => 
{
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    
    const user = users.find((user)=>user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`user with id ${id} has been updated`);
}