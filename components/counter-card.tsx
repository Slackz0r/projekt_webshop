import { Layers, CircleCheck, TriangleAlert, OctagonX } from "lucide-react";

export const cardConfig = {
  Total: {
    icon: Layers,
    color: "text-gray-800",
    bg: "bg-gray-100",
  },
  "In Stock": {
    icon: CircleCheck,
    color: "text-green-800",
    bg: "bg-green-100",
  },
  "Low Stock": {
    icon: TriangleAlert,
    color: "text-yellow-800",
    bg: "bg-yellow-100",
  },
  "Out of Stock": {
    icon: OctagonX,
    color: "text-red-800",
    bg: "bg-red-100",
  },
};

export type CounterCardType = keyof typeof cardConfig;

type CounterCardProps = {
  type: CounterCardType;
  amount: number;
};

export default function CounterCard({ type, amount }: CounterCardProps) {
  const config = cardConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={`flex justify-between items-center flex-1 gap-4 p-6 rounded-xl shadow ${config.bg}`}
    >
      <div className="grid">
        <span className="text-sm text-gray-500">{type}</span>
        <span className="text-2xl font-semibold">{amount}</span>
      </div>
      <Icon className={config.color} size={28} />
    </div>
  );
}
