#include <iostream>
#include <string>
#include <cstdlib>
#include<fstream>

using namespace std;

 int main(void) {
   double n;
   std::cout << "No. of rows" << std::endl;
   std::cin >> n;
   string s;
   s = "hello";
   int x = 1990;
   int y;
   int z;
   string w;
   ofstream outfile("fdata.json");
   w = "{\n  \"cols\": [\n        {\"id\":\"\",\"label\":\"Year\",\"pattern\":\"\",\"type\":\"string\"},\n        {\"id\":\"\",\"label\":\"Sales\",\"pattern\":\"\",\"type\":\"number\"},\n        {\"id\":\"\",\"label\":\"Expenses\",\"pattern\":\"\",\"type\":\"number\"}\n      ],\n  \"rows\": [\n";
   outfile<<w<< std::endl;
   for (int i = 0; i < n; i++,x++) {
     y = rand() % 2000 + 600;
     z = rand() % 800 + 400;
     std::string p = to_string(x);
     std::string q = std::to_string(y);
     std::string r = std::to_string(z);
     s = "\t{\"c\":[{\"v\":\"" + p + "\",\"f\":null},{\"v\":" + q  + ",\"f\":null},{\"v\":" + r + ",\"f\":null}]},";
     outfile<<s<< std::endl;
   }
   w = "\t]\n}";
   outfile<<w;
   return 0;
 }
