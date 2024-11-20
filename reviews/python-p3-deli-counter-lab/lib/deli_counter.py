def line(deli_line):
    if not deli_line:
        print("The line is currently empty.")
    else:
        message = "The line is currently:"
        # i = 1
        # for name in deli_line:
        #     message += f" {i}. {name}"
        #     i += 1
        for i, name in enumerate(deli_line, start=1):
            message += f" {i}. {name}"
        print(message)

def take_a_number(katz_deli, name):
    katz_deli.append(name)
    position = len(katz_deli)
    print(f"Welcome, {name}. You are number {position} in line.")

def now_serving(katz_deli):
    if not katz_deli:
        print("There is nobody waiting to be served!")
    else:
        serving = katz_deli.pop(0)
        print(f"Currently serving {serving}.")