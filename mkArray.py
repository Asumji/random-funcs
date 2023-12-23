def mkArray():
    array = []
    objects = input("How many objects should the array have? ")
    if (objects.isnumeric()):
        objects = int(objects)
        for i in range(objects):
            arrayObject = input("Enter object: ")
            array.append(arrayObject)
        print(array)

mkArray()
