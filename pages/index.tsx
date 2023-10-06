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
  const [editTodoVisible, setEditTodoVisible] = useState(true);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAddTodo = () => {
    setAddTodoVisible(!addTodoVisible);
  };

  const toggleEditTodo = () => {
    setEditTodoVisible(!editTodoVisible);
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
    }
  };

  const handleEditTodo = (e, editedTodo) => {
    e.preventDefault();
    const updatedTodos = todos.map((todo) =>
      todo.id === editedTodo.id ? editedTodo : todo
    );
    setTodos(updatedTodos);
    toggleEditTodo();
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.todo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AlertDialog>
      <Dialog open={addTodoVisible} onOpenChange={setAddTodoVisible}>
        <Dialog open={editTodoVisible} onOpenChange={setEditTodoVisible}>
          <div className="relative mx-auto h-screen max-w-[400px] p-4">
            <div className=" pt-2">
              <div className="text-5xl font-extrabold ">TODO LIST</div>
            </div>

            <div className="mt-6 flex w-full max-w-sm items-center space-x-2">
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <Button type="submit">Search</Button>
            </div>
            <DialogTrigger asChild>
              <Plus
                className="absolute bottom-6 right-6 h-10 w-10 rounded-full bg-slate-900 text-white"
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

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Todo</DialogTitle>
              </DialogHeader>
              <form id="editTodo" onSubmit={handleEditTodo}>
                <Input
                  className="mb-20"
                  placeholder="Type your Todo here"
                  value={newTodo}
                  onChange={handleTodoInputChange}
                />
              </form>
              <DialogFooter>
                <Button
                  form="editTodo"
                  className="absolute bottom-6 right-6"
                  type="submit"
                >
                  Create
                </Button>
              </DialogFooter>
            </DialogContent>

            <ul>
              {filteredTodos.map((todo) => (
                <li
                  id={todo.id}
                  key={todo.id}
                  className="relative my-7 flex items-center space-x-2"
                >
                  <Checkbox id={todo.id} />
                  <div className="text-sm font-medium">{todo.todo}</div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <MoreHorizontal className="absolute right-0" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-10">
                      <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                          <DialogTrigger onClick={setEditTodoVisible}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DialogTrigger>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="text-red-600" asChild>
                          <AlertDialogTrigger>
                            <Delete className="mr-2 h-4 w-4" />
                            Delete
                          </AlertDialogTrigger>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              ))}
            </ul>
          </div>
        </Dialog>
      </Dialog>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Todo;
