import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function EditTodoDialog({
  handleEditTodo,
  newTodo,
  handleTodoInputChange,
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
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
    </Dialog>
  );
}
