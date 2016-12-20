def encode(num):
	#todo
	string = len(str(num))
	result = ''
	if (int(string) < 10):
		result = '0' + str(string) + str(num)
	else:
		result = str(string) + str(num)
	return result

def decode(string):
	#todo
	# print string[1:-1]
	return int(string[2:])


print decode(encode(132122121113))
