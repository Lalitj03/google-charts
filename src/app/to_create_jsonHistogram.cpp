#include <iostream>
#include <string>
#include <cstdlib>
#include<fstream>

using namespace std;

 int main(void) {
   long int n;
   std::cout << "No. of rows" << std::endl;
   std::cin >> n;
   string s;
   s = "hello";
   long int x = 1990;
   long int y;
   string w;
   ofstream outfile("Histogram_data.json");
   w = "{\n  \"cols\": [\n        {\"id\":\"\",\"label\":\"Year\",\"pattern\":\"\",\"type\":\"string\"},\n        {\"id\":\"\",\"label\":\"Sales\",\"pattern\":\"\",\"type\":\"number\"},\n      ],\n  \"rows\": [\n";
   outfile<<w<< std::endl;
   for (long int i = 0; i < n; i++,x++) {
     y = rand() % 20000 + 1000;
     std::string p = to_string(x);
     std::string q = std::to_string(y);
     s = "\t{\"c\":[{\"v\":\"" + p + "\",\"f\":null},{\"v\":" + q  + ",\"f\":null}]},";
     outfile<<s<< std::endl;
   }
   w = "\t]\n}";
   outfile<<w;
   return 0;
 }
