import ipdb

class Coffee:
    def __init__(self, name):
        self.name = name

    @property
    def name(self):
        return self._name 

    @name.setter
    def name(self, new_name):
        if not hasattr(self, "_name"):
            if isinstance(new_name, str):
                if len(new_name) >= 3:
                    self._name = new_name
                else:
                    raise ValueError("Name must be 3 or more characters.")
            else:
                raise TypeError("Name must be of type str.")
        else:
            raise ValueError("Cannot change the name.")
        
    def orders(self):
        return [order for order in Order.all if order.coffee == self]
            
    def customers(self):
        return list(set([order.customer for order in self.orders()]))
    
    def num_orders(self):
        return len(self.orders())
    
    def average_price(self):
        if not self.num_orders():
            return 0
        prices = [order.price for order in self.orders()]
        sum_order_prices = sum(prices)
        return sum_order_prices / self.num_orders()

    def __repr__(self):
        return f"<Coffee name={self.name}>"

class Customer:
    all = []
    def __init__(self, name):
        self.name = name
        Customer.add_new_customer(self)

    @classmethod
    def add_new_customer(cls, new_customer):
        cls.all.append(new_customer)

    @classmethod
    def most_aficionado(cls, coffee):
        max_total = 0
        max_customer = None
        for customer in cls.all:
            total = sum([order.price for order in customer.orders() if order.coffee == coffee])
            if total > max_total:
                max_total = total
                max_customer = customer
        return max_customer
    
    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, new_name):
        if isinstance(new_name, str):
            if 1 <= len(new_name) <= 15:
                self._name = new_name
            else:
                raise ValueError("Name must be between 1 and 15 characters.")
        else:
            raise TypeError("Name must be a str.")
        
    def orders(self):
        return [order for order in Order.all if order.customer == self]
    
    def coffees(self):
        return list(set([order.coffee for order in self.orders()]))
    
    def create_order(self, coffee, price):
        return Order(customer=self, coffee=coffee, price=price)

    def __repr__(self):
        return f"<Customer name={self.name}>"
    
class Order:
    all = []

    def __init__(self, customer, coffee, price):
        self.customer = customer
        self.coffee = coffee
        self.price = price
        Order.add_new_order(self)

    @classmethod
    def add_new_order(cls, new_order):
        cls.all.append(new_order)
    
    @property
    def price(self):
        return self._price 

    @price.setter
    def price(self, new_price):
        if not hasattr(self, "_price"):
            if isinstance(new_price, float):
                if 1.0 <= new_price <= 10.0:
                    self._price = new_price
                else:
                    raise ValueError("Price must be between 1.0 and 10.0")
            else:
                raise TypeError("Price must be of type float.")
        else:
            raise ValueError("Price cannot change.")

    @property
    def customer(self):
        return self._customer

    @customer.setter
    def customer(self, new_customer):
        if isinstance(new_customer, Customer):
            self._customer = new_customer
        else: 
            raise TypeError("Must be of type Customer.")

    @property
    def coffee(self):
        return self._coffee 

    @coffee.setter
    def coffee(self, new_coffee):
        if isinstance(new_coffee, Coffee):
            self._coffee = new_coffee
        else:
            raise TypeError("Must be of type Coffee")

    def __repr__(self):
        return f"<Order customer={self.customer.name} coffee={self.coffee.name} price={self.price}>"