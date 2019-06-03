import { Order } from '../model/Order';
import { IRepository } from './IRepository';

export interface IOrderRepository extends IRepository<Order> {
}