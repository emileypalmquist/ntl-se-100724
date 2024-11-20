from cartoon_collections import (
    roll_call_dwarves, summon_captain_planet,
    long_planeteer_calls, find_the_cheese
)

import io
import sys

class TestCartoonCollections:
    '''Module cartoon_collections.py'''

    # OTHER_DELI = ["Logan", "Avi", "Spencer"]
    # ANOTHER_DELI = ["Amanda", "Annette", "Ruchi", "Jason", "Logan", "Spencer", "Avi", "Joe", "Rachel", "Lindsey"]

    def test_roll_call_dwarves(self):
        '''prints out the 7 dwarfs in a numbered list'''
        captured_out = io.StringIO()
        sys.stdout = captured_out
        roll_call_dwarves(["Dopey", "Grumpy", "Bashful"])
        sys.stdout = sys.__stdout__
        assert(captured_out.getvalue() == '''1. Dopey\n2. Grumpy\n3. Bashful\n''')

    def test_summon_captain_planet_structure(self):
        '''returns a list with the same number of elements that it was given'''
        result = summon_captain_planet(["carrot", "cucumber", "pepper"])
        assert(isinstance(result, list))
        assert(len(result) == 3)

    def test_summon_captain_planet_contents(self):
        '''capitalizes each element and adds an exclamation mark'''
        result = summon_captain_planet(["apple", "banana", "orange"])
        assert(result == ['Apple!', 'Banana!', 'Orange!'])
        result2 = summon_captain_planet(["carrot", "cucumber", "pepper"])
        assert(result2 == ['Carrot!', 'Cucumber!', 'Pepper!'])

    def test_long_planeteer_calls_returns_true(self):
        '''returns true if any calls are longer than 4 characters'''
        assert(long_planeteer_calls(["axe", "earth", "wind", "fire"]) == True)

    def test_long_planeteer_calls_returns_false(self):
        '''returns false if all calls are 4 characters or less'''
        assert(long_planeteer_calls(["wind", "fire", "tree", "axe", "code"]) == False)

    def test_find_the_cheese_with_cheese(self):
        '''returns the first element of the array that is cheese'''
        assert(find_the_cheese(["banana", "cheddar", "sock"]) == 'cheddar')

    def test_find_the_cheese_without_cheese(self):
        '''returns None if the array does not contain a type of cheese'''
        assert(find_the_cheese(["ham", "cellphone", "computer"]) == None)
