import { IOrderApplicationService } from "../applicationServiceInterface/IOrderApplicationService";
import { IOrderRepository } from "../domain/repository/IOrderRepository";
import { IGoodsRepository } from "../domain/repository/IGoodsRepository";
import { IUnitOfWork } from "../domain/repository/IUnitOfWork";
import { Order } from "../domain/model/Order";

export default class OrderApplicationService implements IOrderApplicationService {
    orderRepository: IOrderRepository;
    goodsRepository: IGoodsRepository;
    unitOfWork: IUnitOfWork;
    constructor(orderRepository: IOrderRepository, goodsRepository: IGoodsRepository, unitOfWork: IUnitOfWork) {
        console.log(arguments);
        this.orderRepository = orderRepository;
        this.goodsRepository = goodsRepository;
        this.unitOfWork = unitOfWork;
    }
    createOrder(goodsId: string, quantity: number): void {
        let order = new Order('123');
        this.unitOfWork.registerAdd(order, this.orderRepository);
        this.unitOfWork.commit();

    }


}