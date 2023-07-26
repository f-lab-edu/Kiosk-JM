import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonIcon({ currentCount, onPlus, onMinus, id }) {
  return (
    <div id={id}>
      <Button variant="outline" size="icon" onClick={onMinus}>
        <Minus className="h-4 w-4" />
      </Button>
      {currentCount}
      <Button variant="outline" size="icon" onClick={onPlus}>
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
export default ButtonIcon;
