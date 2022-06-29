#include <iostream>
#include <string>

using std::cin;
using std::cout;
using std::string;


int compareFunc(const void * voidA, const void * voidB){
    int * intA = (int *)(voidA);
    int * intB = (int *)(voidB);
    return *intA -*intB;
}

/* PROBLEM: FINDING THE MODE
In statistics, the mode of a set of values is the value that appears most often. Write 
code that processes an array of survey data, where survey takers have responded to 
a question with a number in the range 1–10, to determine the mode of the data set. 
For our purpose, if multiple modes exist, any may be chosen. */
void findingTheMode(){
    const int ARRAY_SIZE = 12;
    int surveyData[ARRAY_SIZE] = {4, 7, 3, 8, 9, 7, 3, 9, 9, 3, 3, 10};
    qsort(surveyData, ARRAY_SIZE, sizeof(int), compareFunc);
    int mostFrequentNumber = 0;
    int highestFrequency = 0;
    int currentNumber = 0;
    int currentFrequency = 0;

    for(int i = 0; i < 12; i++){
        if (currentNumber == surveyData[i]){
            currentFrequency++;
        }else if (currentNumber != surveyData[i]){
            if(currentFrequency > highestFrequency){
                highestFrequency = currentFrequency;
                mostFrequentNumber = currentNumber;
            }
            currentNumber = surveyData[i];
            currentFrequency = 1;
        }
    }
    
    std::cout << "the most frequent number is " << mostFrequentNumber << "\n";
}

void findingTheModeRefactored(){
    const int arraySize = 12;
    int surveyData[arraySize] = {4, 7, 3, 8, 9, 7, 3, 9, 9, 3, 3, 10};
    const int numberOfDifferentResponses = 10;
    int histogram[numberOfDifferentResponses] = {0};
    int currentNumber = 0;
    int highestFrequency = 0;
    int highestNumber = 0;

    for (int i = 0; i < arraySize; i++){
        currentNumber = surveyData[i];
        histogram[currentNumber-1]++;
    }

    for(int i = 0; i < numberOfDifferentResponses; i++){
        if (histogram[i] > highestFrequency){
            highestFrequency = histogram[i];
            highestNumber = i + 1;
        }
    }
std::cout << "the most frequent number is " << highestNumber << "\n";
}

/*
3-1. Are you disappointed we didn’t do more with sorting? I’m here to help. To 
make sure you are comfortable with qsort, write code that uses the function 
to sort an array of our student struct. First have it sort by grade, and then try 
it again using the student ID.
*/
struct student {
    int grade;
    int studentID;
    string name;
};

int compareStudentGrade(const void * voidA, const void * voidB){
    const student * pA = (const student *)(voidA);
    const student * pB = (const student *)(voidB);
    return (*pA).grade - (*pB).grade;
}

int compareStudentID(const void * voidA, const void * voidB){
    const student * pA = (const student *)(voidA);
    const student * pB = (const student *)(voidB);
    return (*pA).studentID - (*pB).studentID;
}

void printFirstAndLastArrayPosition(student studentArray[], int ARRAY_SIZE){
    for(int i = 0; i < ARRAY_SIZE; i++){
        if (i == 0){
            std::cout << "First student grade is " << studentArray[i].grade << " and ID is " << studentArray[i].studentID << "\n";
        }

        if (i == ARRAY_SIZE -1){
            std::cout << "Last student grade is " << studentArray[i].grade << " and ID is " << studentArray[i].studentID << "\n";
        }
    }
}

void exercise3_1(){
  
    const int ARRAY_SIZE = 10;
    student studentArray[ARRAY_SIZE] = {
    {87, 10001, "Fred"},
    {28, 10002, "Tom"},
    {100, 10003, "Alistair"},
    {78, 10004, "Sasha"},
    {84, 10005, "Erin"},
    {98, 10006, "Belinda"},
    {75, 10007, "Leslie"},
    {70, 10008, "Candy"},
    {81, 10009, "Aretha"},
    {68, 10010, "Veronica"}
    };
   

    qsort(studentArray, ARRAY_SIZE, sizeof(student), compareStudentGrade);
    printFirstAndLastArrayPosition(studentArray,ARRAY_SIZE);
    qsort(studentArray, ARRAY_SIZE, sizeof(student), compareStudentID);
    printFirstAndLastArrayPosition(studentArray, ARRAY_SIZE);
}


int main() {
    findingTheMode();
    findingTheModeRefactored();
    exercise3_1();
    return 0;
}
