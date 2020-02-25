from string import ascii_lowercase


def is_pangram(sentence: str) -> bool:
    ascii_chars = set(ascii_lowercase)
    sentence = set(sentence.lower())
    return len(ascii_chars - sentence) == 0
