#include <iostream>
#include <string>

using std::cin;
using std::cout;
using std::string;

/*
P R O BL E M : V A R I A BL E - L E N G T H S T R I N G M A N I PU LA T I O N
Write heap-based implementations for three required string functions:
append This function takes a string and a character and appends the character
to the end of the string.
concatenate This function takes two strings and appends the characters of the
second string onto the first.
characterAt This function takes a string and a number and returns the character
at that position in the string (with the first character in the string numbered zero).
Write the code with the assumption that characterAt will be called frequently,
while the other two functions will be called relatively seldom. The relative efficiency of
the operations should reflect the calling frequency.
*/

void characterAt(char *&s, int position) {
    cout << s[position] << "\n";
}

void append(char *&s, char c){
    int position = 0;
    while (s[position] != 0){
        position++;
    }
    s[position] = '!';
    s[position+1] = 0;
}

void concatenate(char *&s1, char *&s2){
    int positionS1 = 0;
    while (s1[positionS1] != 0){
        positionS1++;
    }

    int positionS2 = 0;
    while (s2[positionS2] != 0){
        s1[positionS1] = s2[positionS2];
        positionS2++;
        positionS1++;
    }
    s1[positionS1+1] = 0;


}


void voidSampleCase(){
    char *a = new char[5];
    a[0] = 't'; a[1] = 'e'; a[2] = 's'; a[3] = 't'; a[4] = 0;
    append(a, '!');
    cout << a << "\n";

    char *b = new char[7];
    b[0] = 'h'; b[1] = 'a'; b[2] = 'm'; b[3] = 'm'; b[4] = 'o'; b[5] = 'n'; b[6]= 0;
    concatenate(a, b);
    cout << a << "\n";

    characterAt(a, 5);
}


int main() {
    voidSampleCase();
    std::cout << "FIN";
    return 0;
}
