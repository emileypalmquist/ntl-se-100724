#!/usr/bin/env python3
import ipdb

from classes.many_to_many import Customer
from classes.many_to_many import Order
from classes.many_to_many import Coffee

if __name__ == '__main__':
    print("HELLO! :) let's debug")

    customer1 = Customer("Emiley")
    customer2 = Customer("Conner")

    coffee1 = Coffee("Mocha")
    coffee2 = Coffee("Latte")
    coffee3 = Coffee("Flat White")

    order1 = Order(price=1.0, customer=customer1, coffee=coffee1)
    order2 = Order(price=10.0, customer=customer1, coffee=coffee1)
    order3 = Order(price=1.5, customer=customer2, coffee=coffee1)
    order3 = Order(price=1.5, customer=customer2, coffee=coffee2)

    Customer.most_aficionado(coffee1)

    ipdb.set_trace()
