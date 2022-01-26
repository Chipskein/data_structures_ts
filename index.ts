import {TestDynamicArray} from './structures/dynamic_array'
import {TestDoublyLinkedList} from './structures/doubly_linked_lists'
import { TestStack } from './structures/stack';
import { TestQueue } from './structures/queue';
import { TestBinaryHeap } from './structures/binary_heap';
import {TestBinarySearchTree} from './structures/binary_search_tree';
const  inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'TEST DATA_STRUCTURE',
      choices: ['Dynamic Array','Doubly Linked List','Stack','Queue','Binary Heap','Binary Search Tree'],
    },
    
  ])
  .then((answers:any) => {
        switch(answers.menu){
            case 'Dynamic Array':
                TestDynamicArray();
              break;
            case 'Doubly Linked List':
                TestDoublyLinkedList();
              break;
            case 'Stack':
                TestStack();
              break;
            case 'Queue':
                TestQueue();
            break;
            case 'Binary Heap':
                TestBinaryHeap();
            break;
            case 'Binary Search Tree':
                TestBinarySearchTree()
            break;
        }
    }
);


