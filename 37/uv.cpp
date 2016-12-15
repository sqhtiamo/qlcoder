
#include <iostream>
#include <functional>
#include <string>
#include <map>

std::map<std::string, long> hash; 

 
int main()
{
	long largest = 0;
	std::string lKey = ""; 
	int mark = 0;
	while(1) {
		std::string key;
		std::cin >> key;
		hash[key]++;
		if (hash[key] >= largest) {
			largest = hash[key];
			lKey = key;
			std::cout << "Largest: " << hash[key] << ", Key: " << lKey << std::endl;
		}
		mark++;
		if (mark % 1000000 == 1) {
			std::cout << "mark: " << mark  << std::endl;
		}
	}
}
