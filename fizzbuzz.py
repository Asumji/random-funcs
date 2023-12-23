import time

for i in range(100):
    time.sleep(0.3)
    if ((i+1) % 5 == 0 and (i+1) % 3 == 0):
        print("FizzBuzz")
    elif ((i+1) % 3 == 0):
        print("Fizz")
    elif ((i+1) % 5 == 0):
        print("Buzz")
    else:
        print((i+1))
