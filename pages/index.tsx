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

interface TodoItem {
  id: number;
  todo: string;
}

function Todo() {
  const [addTodoVisible, setAddTodoVisible] = useState(false);
  const [editTodoVisible, setEditTodoVisible] = useState(true);
  const [selectedEditTodoIndex, setSelectedEditTodoIndex] = useState<
    number | null
  >(null);
  const [selectedDeleteTodoIndex, setSelectedDeleteTodoIndex] = useState<
    number | null
  >(null);
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const [newTodo, setNewTodo] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAddTodo = () => {
    setAddTodoVisible(!addTodoVisible);
  };

  const toggleEditTodo = () => {
    setEditTodoVisible(!editTodoVisible);
  };

  const handleTodoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleCreateTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Math.random(), todo: newTodo }]);
      setNewTodo("");
      toggleAddTodo();
    }
  };

  const handleDeleteTodo = () => {
    setTodos(
      todos.filter((todo, index) => {
        console.log(index, selectedDeleteTodoIndex);
        return index !== selectedDeleteTodoIndex;
      })
    );
  };

  const handleEditTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedEditTodoIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === selectedEditTodoIndex ? { ...todo, todo: newTodo } : todo
      );
      setTodos(updatedTodos);
      toggleEditTodo();
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.todo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AlertDialog>
      <Dialog open={addTodoVisible} onOpenChange={setAddTodoVisible}>
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
          </DialogContent>{" "}
          <ul>
            {filteredTodos.map((todo, index) => (
              <li
                id={String(todo.id)}
                key={todo.id}
                className="relative my-7 flex items-center space-x-2"
              >
                <Checkbox id={String(todo.id)} />
                <div className="text-sm font-medium">{todo.todo}</div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <MoreHorizontal className="absolute right-0" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-10">
                    <DropdownMenuGroup>
                      <DropdownMenuItem asChild>
                        <button
                          type="button"
                          onClick={() => {
                            setEditTodoVisible(true);
                            setSelectedEditTodoIndex(index);
                          }}
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </button>
                      </DropdownMenuItem>

                      <DropdownMenuItem className="text-red-600" asChild>
                        <AlertDialogTrigger asChild>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedDeleteTodoIndex(index);
                              console.log(index);
                            }}
                          >
                            <Delete className="mr-2 h-4 w-4" />
                            Delete
                          </button>
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
          <AlertDialogAction onClick={handleDeleteTodo}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
      <Dialog open={editTodoVisible} onOpenChange={setEditTodoVisible}>
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
              defaultValue={
                selectedEditTodoIndex ? todos[selectedEditTodoIndex].todo : ""
              }
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
      </Dialog>
    </AlertDialog>
  );
}

export default Todo;
