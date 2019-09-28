def defangIPaddr(address: str) -> str:
	result = address.replace(".", "[.]")
	return result
