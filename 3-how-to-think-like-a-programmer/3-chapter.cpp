#include <iostream>
using std::cin;
using std::cout;

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


int main() {
    findingTheMode();
    findingTheModeRefactored();
    return 0;
}
