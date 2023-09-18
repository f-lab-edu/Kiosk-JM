import { Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"

function QuantitySelector({ count, onPlus, onMinus, coffeeId }) {
  return (
    <div>
      <Button variant="outline" size="icon" onClick={() => onMinus(coffeeId)}>
        <Minus className="h-4 w-4" />
      </Button>
      {count[coffeeId]}
      <Button variant="outline" size="icon" onClick={() => onPlus(coffeeId)}>
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}
export default QuantitySelector
