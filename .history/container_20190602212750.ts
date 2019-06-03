import { createContainer, InjectionMode, asClass } from "awilix";
import OrderRepository from "./infrastructure/repository/OrderRepository";
import GoodsRepository from "./infrastructure/repository/GoodsRepository";
import TypeOrmUnitOfWork from "./infrastructure/repository/TypeOrmUnitOfWork";
import OrderApplicationService from "./applicationServiceImp/OrderApplicationService";
const container = createContainer({ injectionMode: InjectionMode.CLASSIC });
container.register({
    orderRepository:asClass(OrderRepository),
    goodsRepository:asClass(GoodsRepository),
    unitOfWork:asClass(TypeOrmUnitOfWork),
    orderApplicationService: asClass(OrderApplicationService).singleton()
})
export { container }