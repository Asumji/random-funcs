function len(array)
    local i = 0
    for b in pairs(array)
    do
        i = i + 1
    end

    return i
end

local array = {}
local letter = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"}

local objects = 10
local length = 6

for b = 1,objects,1
do 
    local string = ""
    for a = 1,length,1
    do
        local index = math.random(1, len(letter))
        string = string .. letter[index]
    end
    table.insert(array, string)
end

for i = 1, objects, 1
do
    print(array[i])
end
