def _reduce(numbers: [int or float], reducer) -> int or float:
    if len(numbers) > 1:
        return reducer(numbers[-1], _reduce(numbers[:-1], reducer))
    else:
        return numbers[0]


def _sum(x, y):
    return x + y


def _difference(x, y):
    return x - y


def _product(x, y):
    return x * y


def _quotient(x, y):
    return x / y


print(_reduce([1, 2, 3], _sum))
print(_reduce([1, 2, 3], _difference))
print(_reduce([1, 2, 3], _product))
print(_reduce([1, 2, 3], _quotient))
