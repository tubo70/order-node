import "reflect-metadata";
import {createConnection,getConnection} from "typeorm";
import { InjectionMode, createContainer } from "awilix";



const container = createContainer();
container.loadModules(['../applicationServiceImp/**/*.ts','../infrastructure/repository/**/*.ts'],{
    resolverOptions: {
        injectionMode: InjectionMode.CLASSIC
      }
});
let orderService = container.resolve('OrderRepository');
console.log(orderService);
// async function test(){
//     let item = new OrderItem('1','2');
//     console.log(JSON.stringify(item));
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await getConnection().manager.save(user);
//     console.log("Saved a new user with id: " + user.id);
// }
// test();
// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));