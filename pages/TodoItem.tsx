import { Delete, Edit, MoreHorizontal } from "lucide-react";

import { AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function TodoItem({ todo, onEdit, onDelete }) {
  return (
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
              <button type="button" onClick={onEdit}>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </button>
            </DropdownMenuItem>

            <DropdownMenuItem className="text-red-600" asChild>
              <AlertDialogTrigger asChild>
                <button type="button" onClick={onDelete}>
                  <Delete className="mr-2 h-4 w-4" />
                  Delete
                </button>
              </AlertDialogTrigger>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
}

export default TodoItem;
