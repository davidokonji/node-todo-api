const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

//Testing for get route
const todos =[{
    text: 'first test todo'
},{
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