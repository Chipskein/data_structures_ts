import {TestDynamicArray} from './dynamic_array'
import {TestDoublyLinkedList} from './doubly_linked_lists'
const  inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'TEST DATA_STRUCTURE',
      choices: ['Dynamic Array','Doubly Linked List'],
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
            
        }
    }
);


