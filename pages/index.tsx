import { useState } from "react";
import { Delete, Edit, MoreHorizontal, Plus } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

function Todo() {
  const [addTodoVisible, setAddTodoVisible] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const toggleAddTodo = () => {
    setAddTodoVisible(!addTodoVisible);
  };

  const handleTodoInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleCreateTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Math.random(), todo: newTodo }]);
      setNewTodo("");
      toggleAddTodo();
      console.log(todos);
    }
  };

  return (
    <Dialog open={addTodoVisible} onOpenChange={setAddTodoVisible}>
      <div className="relative mx-auto max-w-[400px]">
        <div className="ml-6 mt-10">
          <div className="text-5xl font-extrabold ">TODO LIST</div>
        </div>

        <div className="ml-6 mt-10 flex w-full max-w-sm items-center space-x-2">
          <Input placeholder="Search" />
          <Button type="submit">Search</Button>
        </div>
        <DialogTrigger asChild>
          <Plus
            className="fixed bottom-6 right-6 h-10 w-10 rounded-full bg-slate-900 text-white"
            onClick={toggleAddTodo}
          ></Plus>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Todo</DialogTitle>
          </DialogHeader>
          <form id="createTodo" onSubmit={handleCreateTodo}>
            <Input
              className="mb-20"
              placeholder="Type your Todo here"
              value={newTodo}
              onChange={handleTodoInputChange}
            />
          </form>
          <DialogFooter>
            <Button
              form="createTodo"
              className="absolute bottom-6 right-6"
              type="submit"
            >
              Create
            </Button>
          </DialogFooter>
        </DialogContent>

        <ul>
          {todos.map((todo) => (
            <li
              id={todo.id}
              key={todo.id}
              className="relative my-7 ml-7 flex items-center space-x-2"
            >
              <Checkbox id={todo.id} />
              <div className="text-sm font-medium">{todo.todo}</div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <MoreHorizontal className="absolute right-0" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-10">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <AlertDialog
                      open={addTodoVisible}
                      onOpenChange={setAddTodoVisible}
                    >
                      <AlertDialogTrigger asChild>
                        <DropdownMenuItem className="text-red-600">
                          <Delete className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          ))}
        </ul>
      </div>
    </Dialog>
  );
}

export default Todo;
