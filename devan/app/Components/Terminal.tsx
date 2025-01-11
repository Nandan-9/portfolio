export default function Terminal() {
    return (
      <div>
        <div className="w-full">
        <div className="coding inverse-toggle px-5 pt-4 text-gray-100 text-sm font-mono subpixel-antialiased   pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
        <div className="top mb-2 flex">
            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="mt-4 flex">
            <span className="text-green-400">computer:~$</span>
            <p className="flex-1 typing items-center pl-2">
                hai there
                
            </p>
        </div>
    </div>
  </div>
      
  
      </div>
    );
  }
  


      // Todo.js
    
    // [...]
    

  // [..]

    // File: Todo.js
    
    // [...]
    
    function Todo() {
      const [tasks, setTasks] = useState([
          {
              title: "Grab some Pizza",
              completed: true
          },
          {
              title: "Do your workout",
              completed: true
          },
          {
              title: "Hangout with friends",
              completed: false
          }
      ]);
  
      const addTask = title => {
          const newTasks = [...tasks, { title, completed: false }];
          setTasks(newTasks);
      };
  
      return (
          <div className="todo-container">
              <div className="header">TODO - ITEMS</div>
              <div className="tasks">
                  {tasks.map((task, index) => (
                      <Task
                          task={task}
                          index={index}
                          key={index}
                      />
                  ))}
              </div>
              <div className="create-task" >
                  <CreateTask addTask={addTask} />
              </div>
          </div>
      );
  }
  
  // [..]
