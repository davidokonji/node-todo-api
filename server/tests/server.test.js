const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

//NOTE: the test suite wont run correctly because our test suite assumes the todo collection is empty,so we run a mocha   
// life cycle function callled beforeEach()
beforeEach((done)=>{
 Todo.remove({}).then(()=>done());
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
            
            Todo.find().then((todos)=> {      // the assumption of it being empty
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
                expect(todos.length).toBe(0);
                done();
            }).catch((e)=>done(e));
        })
    })
});