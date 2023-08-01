import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

function ButtonIcon({ count, onPlus, onMinus, id }) {
  return (
    <div id={id}>
      <Button variant="outline" size="icon" onClick={() => onMinus(id)}>
        <Minus className="h-4 w-4" />
      </Button>
      {count[id]}
      <Button variant="outline" size="icon" onClick={() => onPlus(id)}>
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
export default ButtonIcon;
