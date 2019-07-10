def defangIPaddr(address: str) -> str:
	result = address.replace(".", "[.]")
	return result

defangIPaddr(address="192.168.1.1")
