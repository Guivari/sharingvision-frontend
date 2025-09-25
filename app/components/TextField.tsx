'use client';

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
}

export default function TextField({ label, value, onChange, type = "text" }: TextFieldProps) {
  return (
    <div>
      <label className="block mb-1 max-w-xl">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input input-bordered w-full max-w-md"
        required
      />
    </div>
  );
}
