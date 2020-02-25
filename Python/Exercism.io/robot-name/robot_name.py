from random import SystemRandom
from string import ascii_uppercase, digits


class Robot:
    def __init__(self):
        self.name = self.generate_name()

    def generate_name(self):
        generated_letters = ''.join(SystemRandom().choice(
            ascii_uppercase) for i in range(2))

        generated_numbers = ''.join(SystemRandom().choice(digits)
                                    for i in range(3))

        return generated_letters + generated_numbers

    def reset(self):
        self.name = self.generate_name()
