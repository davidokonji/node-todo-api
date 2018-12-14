const expect = require('expect');
const request = require('supertest');

const {ObjectID} = require('mongodb');
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

//Testing for get route
// const wrongid = new ObjectID('123');
const todos =[{
    _id: new ObjectID(),
    text: 'first test todo'
},{
    _id: new ObjectID(),
    text: 'second test todo'
}];
//<-- eof testing get route
//NOTE: the test suite wont run correctly because our test suite assumes the todo collection is empty,so we run a mocha   
// life cycle function callled beforeEach()
beforeEach((done)=>{
//  Todo.remove({}).then(()=>done());  //this is used for the post test check we modify for get
Todo.remove({}).then(()=>{
    return Todo.insertMany(todos);
}).then(()=>done());
});
////////////////////////////////////////////////
describe('POST/todos',()=>{
    it('should create a new todo',(done)=>{
        var text = 'Test Todo text';
        request(app)
        .post('/todos') 
        .send({text})
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text);
        })
        .end((err,res)=>{
            if(err) {
                return done(err);
            }
            
            Todo.find({text}).then((todos)=> {      // the assumption of it being empty
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e)=>done(e));
        });
    });
    it('should not create todo with invalid body data',(done)=>{

        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err,res)=>{
            if(err) {
                return done(err);
            }
            Todo.find().then((todos)=> {      // the assumption of it being empty
                expect(todos.length).toBe(2);
                done();
            }).catch((e)=>done(e));
        });
    });
});
describe('GET /todos',()=>{
    it('should get all todos',(done)=>{
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res)=>{
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);
    });
});

describe('GET /todos/:id',()=>{
    it('should return todo doc',(done)=>{
        request(app)
        // .get('/todos/id')
        .get(`/todos/${todos[0]._id.toHexString()}`) //using toHexString() method converts the objectid into a string to be passed as a path
        .expect(200)
        .expect((res)=>{
            expect(res.body.todo.text).toBe(todos[0].text);
        }).end(done)
    });
    it('should return a 404 if todo not found',(done)=>{
        const newid = new ObjectID();
        request(app)
        .get(`/todos/${newid.toHexString()}`)
        .expect(404)
        .end(done)
    });
    it('should return a 404 for non-objects ids',(done)=>{
        request(app)
        .get(`/todos/123`)
        .expect(404)
        .end(done)
    })
});
describe('DELETE /todos/:id',()=>{
    it('should remove a todo',(done)=>{
        var hexid = todos[1]._id.toHexString();
        request(app)
        .delete(`/todos/${hexid}`)
        .expect(200)
        .expect((res)=>{
            expect(res.body.todo._id).toBe(hexid)
        })
        .end((err,res)=>{
            if(err){
                return done(err)
            }
            Todo.findById(hexid).then((todo)=>{
                expect(todo).toNotExist();
                done();
            }).catch((e)=>done(e));
        });
    });
    it('should return 404 if todo not found',(done)=>{
        // var hexid = todos[1]._id.toHexString();
        const newhexid = new ObjectID().toHexString();
        request(app)
        .delete(`/todos/${newhexid}`)
        .expect(404)
        .end(done)
    });
    it('should return 404 if object id is invalid',(done)=>{
        request(app)
        .delete(`/todos/123`)
        .expect(404)
        .end(done)
    });
});