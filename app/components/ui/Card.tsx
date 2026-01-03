export default function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="p-6 border rounded shadow-sm">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-primary">{value}</p>
    </div>
  );
}
