# Cartoon Collections Lab

## Learning Goals

- Get practice iterating through lists
- Build functions and control their return values.

***

## Key Vocab

- **Interpreter**: a program that executes other programs. Python programs
require the Python interpreter to be installed on your computer so that they
can be run.
- **Python Shell**: an interactive interpreter that can be accessed from the
command line.
- **Data Type**: a specific kind of data. The Python interpreter uses these
types to determine which actions can be performed on different data items.
- **Exception**: a type of error that can be predicted and handled without
causing a program to crash.
- **Code Block**: a collection of code that is interpreted together. Python
groups code blocks by indentation level.
- **Function**: a named code block that performs a sequence of actions when it
is called.
- **Scope**: the area in your program where a specific variable can be called.

***

## Instructions

To get started, run `pipenv install` to create your virtual environment and
`pipenv shell` to enter the virtual environment. Then run `pytest -x` to run
your tests. Use these instructions and `pytest`'s error messages to complete
your work in the `lib/` folder.

There are four functions to complete in this lab:

1. `roll_call_dwarves()`
2. `summon_captain_planet()`
3. `long_planeteer_calls()`
4. `find_the_cheese()`

### `roll_call_dwarves()`

![dwarves](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/cartoon-collections/dwarves.jpg)

This function should accept a list of dwarf names, for instance:

```py
["Doc", "Dopey", "Bashful", "Grumpy"]
```

It should then print out each name, in number order, using `print`. The print-out
should look like this:

```console
1. Doc
2. Dopey
3. Bashful
4. Grumpy
```

### `summon_captain_planet()`

![captain-planet](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/cartoon-collections/captain-planet.jpeg)

This function should accept a list of planeteer calls as an argument, e.g.:

```py
planeteer_calls = ["earth", "wind", "fire", "water", "heart"]
```

It should then capitalize each element and add an exclamation point at the end.
The return value of this function should be a list, as in this example:

```py
summon_captain_planet(planeteer_calls)
#=> ["Earth!", "Wind!", "Fire!", "Water!", "Heart!"]
```

**Hint**: You may want to review [list comprehension][list-comprehension] for
this one.

### `long_planeteer_calls()`

The `long_planeteer_calls()` function should accept a list of calls as an
argument. The function should tell us if any of the calls are longer than four
characters. For example:

```py
short_words = ["puff", "go", "two"]
long_planeteer_calls(short_words)
#=> False

assorted_words = ["two", "go", "industrious", "bop"]
long_planeteer_calls(assorted_words)
#=> True
```

Notice the return value of this function is either `True` or `False`, depending on
the list it was given as an argument.

### `find_the_cheese()`

![dancing-mice](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/cartoon-collections/cheese.jpg)

The `find_the_cheese()` function should accept a list of strings. It should then
look through these strings to find and return the first string that is a type of
cheese. The types of cheese that appear are `"cheddar"`, `"gouda"`, and
`"camembert"`.

For example:

```py
snacks = ["crackers", "gouda", "thyme"]
find_the_cheese(snacks)
#=> "gouda"

soup = ["tomato soup", "cheddar", "oyster crackers", "gouda"]
find_the_cheese(soup)
#=> "cheddar"
```

If, sadly, a list of ingredients does not include cheese, return `None`:

```py
ingredients = ["garlic", "rosemary", "bread"]
find_the_cheese(ingredients)
#=> None
```

You can assume that all strings will be lowercase. Take a look at the
[`in`][in] keyword for a hint. This function asks you to return a string
value instead of printing it so keep that in mind.

***

## Resources

- [GeeksforGeeks: List Comprehension][list-comprehension]

[list-comprehension]: https://www.geeksforgeeks.org/python-list-comprehension/
[in]: https://www.w3schools.com/python/ref_keyword_in.asp
