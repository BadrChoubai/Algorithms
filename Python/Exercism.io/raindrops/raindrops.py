# This solution is adapated from someone else's solution to the same problem.
# 
# It utilizes list comprehension to loop through the Tuple I initialized of sounds
# and will return the sound value if the number is divisible by the current divisor
#  

sounds = ((3, 'Pling'), (5, 'Plang'), (7, 'Plong'))

def convert(number: int) -> str:
    raindrops = [sound for divisor, sound in sounds if number % divisor == 0] 
    return ''.join(raindrops) if raindrops else str(number)

