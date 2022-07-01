#include <iostream>
#include <string>

using std::cin;
using std::cout;
using std::string;
/*
Using recursion to sum an int array, using only the array and size as parameters.
*/

int intArray[10]{1,2,3,4,5,6,7,8,9,10};

int iterativeArraySum(int integers[], int size) {
int sum = 0;
for (int i = 0; i < size; i++) {
sum += integers[i];
}
return sum;
}

int recursiveArraySum(int integers[], int size){
int sum = 0;
    sum = integers[size];
    if (size > -1){
        sum += recursiveArraySum(integers, size -1); 
    }
   return sum;
} 

/*
P R O B L E M : C O U N T IN G N E G A T I V E
N U M B E R S I N A S I N G L Y L I N K E D L I S T
Write a recursive function that is given a singly linked list where the data type is integer.
The function returns the count of negative numbers in the list.
*/
// pointer  is a variable that stores the memory address as its value. 
struct listNode {
int data;
listNode *next;
};


listNode finalNode = {-66, };
listNode *finalNodeAddress = &finalNode;

listNode middleNode = {3, finalNodeAddress};
listNode *middleNodeAddress = &middleNode;

listNode headNode = {-1,middleNodeAddress};
listNode *headNodeAddress = &headNode;


int countNegativeNodes(const listNode *head){

    int sum = 0;
    if ((*head).data < 0){
        sum++;
    }
    
    if ((*head).next != NULL){
        sum += countNegativeNodes((*head).next);
    }

    return sum;
}

struct treeNode {
int data;
treeNode * left;
treeNode * right;
};

treeNode node4 = {2, 0, 0};
treeNode node3 = {5, 0, 0};
treeNode node2 = {44, &node4, 0};
treeNode node1 = {1, &node2, &node3};
/*
P R O B L E M : F I N D T H E L A R G E ST V A L U E I N A B I N A R Y T R E E
Write a function that, when given a binary tree where each node holds an integer,
returns the largest integer in the tree.
*/
int maxValueInBinaryTree(treeNode *node){
    int leftNode = 0;
    if ( (*node).left != NULL){
        leftNode = maxValueInBinaryTree((*node).left);
    }
    int rightNode = 0;
    if ( (*node).right != NULL){
        rightNode = maxValueInBinaryTree((*node).right);
    }
    int currentNode = (*node).data;

    if (currentNode >= leftNode && currentNode >= rightNode){
        return currentNode;
    }

    if (leftNode >= currentNode && leftNode >= rightNode){
        return leftNode;
    }

    if( rightNode >= currentNode && rightNode >= leftNode){
        return rightNode;
    }
}



int main() {
    cout << iterativeArraySum(intArray, 10) << "\n";
    cout << recursiveArraySum(intArray, 10) << "\n";
    cout << countNegativeNodes(headNodeAddress) << "\n";
    cout << "max tree value: " << maxValueInBinaryTree(&node1) << "\n";
    std::cout << "FIN";
    return 0;
}
