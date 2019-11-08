def defang_ip_address(address: str) -> str:
	result = address.replace(".", "[.]")
	return result
