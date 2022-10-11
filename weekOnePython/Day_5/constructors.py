class Car:
    transmission = "Automatic"
    manufacturer = ""
    model = ""
    age = 0
    price = 0.0
    defect = ""

    def __init__(self, manufacturer, model, age, price, defects):
        self.manufacturer = manufacturer
        self.model = model
        self.age = age
        self.price = price
        self.defect = defects
        
    def display_details(self):
        print(f"Car Details: Manufacturer: {self.manufacturer}, Model: {self.model}, Age: {self.age}, Price: {self.price}, Defect details: {self.defect}")


print("Create a new car... ")
manufacturer = input("Enter Manufacturer: ")
model = input("Enter Model: ")
age = input("Enter Age: ")
price = input("Enter Price: ")
defects = input("Enter Defects: ")

my_car = Car(manufacturer, model, age, price, defects)

print(my_car.display_details())

