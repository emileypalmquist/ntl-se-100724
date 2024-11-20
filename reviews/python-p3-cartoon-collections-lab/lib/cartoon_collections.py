def roll_call_dwarves(names):
    i = 1
    for name in names:
        print(f"{i}. {name}")
        i += 1

def format_call(call):
    return f"{call.capitalize()}!"

def summon_captain_planet(calls):
    # formatted_calls = []
    # for call in calls:
    #     formatted_calls.append(f"{call.capitalize()}!")
    # return formatted_calls

    # return [f"{call.capitalize()}!" for call in calls]
    return [format_call(call) for call in calls]

def long_planeteer_calls(calls):
    for call in calls:
        if len(call) > 4:
            return True
    return False

def find_the_cheese(snacks):
    cheese = ["cheddar", "gouda", "camembert"]
    for snack in snacks:
        if snack in cheese:
            return snack
    return None
