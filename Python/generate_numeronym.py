def generate_numeronym(word: str) -> str:
    first, middle, last = word[0], word[1:-1], word[-1]
    
    return f"{ first }{ len(middle) }{ last }"


if __name__ == "__main__":
    kubernetes = generate_numeronym("Kubernetes")
    print(kubernetes)
