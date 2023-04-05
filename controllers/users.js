//import { v4 as uuid } from 'uuid';
const {client} = require('../connection')

//let users = [];
//const express = require('express');
const { parse } = require('pg-protocol');
//const app = express();


//const bodyParser = require('body-parser');
//app.use(bodyParser.json())
client.connect()


const getUsers = (req, res) => {
    //console.log(`Users in the database: ${users}`);
    client.query(`Select * from users`,(err,result) => {
        if(!err) {
            res.send(result.rows);
        }
    });
    client.end;

    //res.send(users);
}

const createUser = (req, res) => {   
    const user = req.body;
    let insertQuery = `insert into users(id, firstname, lastname, location)
                        values(${user.id},'${user.firstname}','${user.lastname}','${user.location}')`;

    client.query(insertQuery,(err,result) => {
        if(!err) {
            res.send('Insertion was successful')
        }
        else {console.log(err.message)}
    })
    client.end;
};

 const getUser = (req, res) => {
    client.query(`Select * from users where id=${req.params.id}`,(err, result) => {
        if(!err) {
            res.send(result.rows);
        }
    });
    client.end;
    
};

const deleteUser = (req, res) => { 
    let deleteQuery = `delete from users where id= ${req.params.id}`;

    client.query(deleteQuery,(err,result) => {
        if(!err) {
            res.send('deletion was successful')
        }
        else {console.log(err.message)}
    })
    client.end;
};

 const updateUser =  (req,res) => {
    const user = req.body;
    let updateQuery = `update users
                      set firstname = '${user.firstname}',
                      lastname = '${user.lastname}',
                      location = '${user.location}'
                      where id = ${user.id}`

    client.query(updateQuery,(err,result) => {
        if(!err) {
            res.send('Update was successful')
        }
        else {console.log(err.message)}
    })
    client.end;
};


module.exports = {getUser,updateUser,deleteUser,createUser,getUsers};
