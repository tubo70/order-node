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
    async createOrder(goodsCode: string, quantity: number): Promise<void> {
        let goods = await this.goodsRepository.getByCode(goodsCode);
        let order = Order.create('123');
        order.addItm(goods.id, goodsCode, goods.price, quantity);
        goods.reduceStock(quantity);
        this.unitOfWork.registerAdd(order, this.orderRepository);
        this.unitOfWork.registerUpdate(goods, this.goodsRepository);
        this.unitOfWork.commit();

    }


}