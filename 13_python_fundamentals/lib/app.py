#!/usr/bin/env python3
import ipdb

#✅ 1. Create a condition to check a pet's mood
    # If "pet_mood" is "Hungry!", "Rose needs to be fed."
    # If "pet_mood" is "Rowdy!", "Rose needs a walk."
    # In all other cases, "Rose is all good."
pet_mood = 'Rowdy!'
pet_name = "Apollo"

# if pet_mood == 'Hungry!':
#     print(f"{pet_name} needs to be fed.")
# elif pet_mood == 'Rowdy!':
#     print(f"{pet_name} needs a walk.")
# else:
#     print(f"{pet_name} is all good.")


#✅ 2. Create a ternary operator using "pet_mood" as a condition:
print(f"{pet_name} is all good.") if pet_mood == 'Good!' else print(f"{pet_name} needs some care.")

#✅ 3. Create a function (say_hello) that returns the string "Hello, world!"

def say_hello(name="John"):
    return f"Hello, {name}!"

say_hello("Emiley")

#✅ 4. Create a function (pet_greeting) that will return a string with interpolated pet's name
def pet_greeting(pet_name="John"):
    return f"hello, {pet_name}!"

print(pet_greeting())

#✅ 5. Move conditional logic from Deliverable 1 into a function (pet_status) so that we may use it with different pets / moods

def pet_status(pet_name="John", pet_mood="Good!"):
    if pet_mood == 'Hungry!':
        print(f"{pet_name} needs to be fed.")
    elif pet_mood == 'Rowdy!':
        print(f"{pet_name} needs a walk.")
    else:
        print(f"{pet_name} is all good.")

pet_status(pet_mood="Hungry!")  
#✅ 6. Create a function (pet_birthday) that will increment a pet's age up by 1. Use try / except to handle errors. 
    # If our function is given an incorrect datatype, it should handle the TypeError exception and alert the user
    # pet_birthday(10) => "Happy Birthday! Your pet is now 11."
    # pet_birthday("oops") => "Type Error Occurred"

def pet_birthday(age):
    try:
        age += 1
        return f"Happy Birthday! You pet is now {age}."
    except TypeError:
        return "Type error: must provide an integer."
    except NameError:
        return "Name error"
    except:
        return "Something went wrong"
    finally:
        print('hello from pet_birthday')

print(pet_birthday(10))