import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormEvent, useState } from "react";
import axios from "axios";
import { Pen } from "lucide-react";

interface ModalProps {
  _id: string;
  prevItemName: string;
  prevAmount: string;
  prevCategory: string;
  prevPriority: string;
  onEdit: (editedExpense: any) => void;
}

const EditModal = ({
  _id,
  prevItemName,
  prevAmount,
  prevCategory,
  prevPriority,
  onEdit,
}: ModalProps) => {
  const [itemName, setItemName] = useState(prevItemName);
  const [amount, setAmount] = useState(prevAmount);
  const [category, setCategory] = useState(prevCategory);
  const [priority, setPriority] = useState(prevPriority);

  const handleEdit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/v1/expense/${_id}`, {
        itemName: itemName,
        amount: amount,
        category: category,
        priority: priority,
      });
      onEdit(response.data.updatedExpense);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="icon">
            <Pen width={16} height={16} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="text-left">
            <DialogTitle className="md-2">Edit this Expense</DialogTitle>
            <DialogDescription>
              Please Update the below fiels to Edit this Expense
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={handleEdit}
            className="flex flex-col items-start justify-center gap-3"
          >
            <Label>Item Name</Label>
            <Input
              required
              value={itemName}
              type="text"
              onChange={(e) => setItemName(e.target.value)}
            />
            <Label>Amount</Label>
            <Input
              required
              value={amount}
              type="number"
              onChange={(e) => setAmount(e.target.value)}
            />
            <Label>Category</Label>
            <Select onValueChange={setCategory} defaultValue={prevCategory}>
              <SelectTrigger>
                <SelectValue placeholder="personal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="personal">personal</SelectItem>
                <SelectItem value="work">work</SelectItem>
                <SelectItem value="home">home</SelectItem>
                <SelectItem value="other">other</SelectItem>
              </SelectContent>
            </Select>
            <Label>Priority</Label>
            <Select onValueChange={setPriority} defaultValue={prevPriority}>
              <SelectTrigger>
                <SelectValue placeholder="mid" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">low</SelectItem>
                <SelectItem value="mid">mid</SelectItem>
                <SelectItem value="high">high</SelectItem>
              </SelectContent>
            </Select>
            <DialogClose>
              <Button type="submit" className="mt-2">
                Edit Expense
              </Button>
            </DialogClose>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditModal;
