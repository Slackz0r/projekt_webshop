import { Layers } from "lucide-react";

type CounterCardProps = {
  type: string;
  amount: number;
};

export default function CounterCard({ type, amount }: CounterCardProps) {
  return (
    <div className="flex gap-16">
      <div className="grid">
        <span>{type}</span>
        <span>{amount}</span>
      </div>
      <Layers color="#3e9389" />
    </div>
  );
}
