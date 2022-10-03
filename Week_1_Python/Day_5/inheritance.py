class animal:
    no_legs = 0
    def get_no_legs(self):
        print('Number of legs is:' + self.no_legs)
        

class sea_creatures(animal): # Superclass
    water_type = ''
    feed_type = ''
    
    def get_water_type(self):
        print('Preferred water type is: ' + self.water_type)
    def get_feed_type(self):
        print("Feed type is: " + self.feed_type)
    
    def set_Water_type(self, inp):
        self.water_type = inp
    def set_feed_type(self, inp):
        self.feed_type = inp
        

class Shark(sea_creatures): # Create a new class called Shark, Using sea_creatures
    
    def __init_(self): # This method will be called when there is a new instance of the class created
        pool = 'Main'
        age = 23
        
    def swim(self): # This is a method which can be called once we initiate a new object
        print('Shark is swimming')
        
    def walk(self): # Another method which can be called - see below
        print('Nobody understands how this shark is walking')

if __name__ == '__main__':
    mark_the_shark = Shark()
    mark_the_shark.swim()
    mark_the_shark.set_feed_type("Tuna")
    mark_the_shark.get_feed_type()