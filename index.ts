import {TestDynamicArray} from './dynamic_array'
import {TestDoublyLinkedList} from './doubly_linked_lists'
import { TestStack } from './stack';
import { TestQueue } from './queue';
const  inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'TEST DATA_STRUCTURE',
      choices: ['Dynamic Array','Doubly Linked List','Stack','Queue'],
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
        }
    }
);


