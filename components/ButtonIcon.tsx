import { ChevronRight, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ButtonIcon() {
  const [count, setCount] = useState(0);
  const plusHandler = function () {
    setCount((prev) => prev + 1);
  };
  const minusHandler = function () {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <Button variant="outline" size="icon" onClick={minusHandler}>
        <Minus className="h-4 w-4" />
      </Button>
      {count}
      <Button variant="outline" size="icon" onClick={plusHandler}>
        <Plus className="h-4 w-4" />
      </Button>
    </>
  );
}
export default ButtonIcon;
