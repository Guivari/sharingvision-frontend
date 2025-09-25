'use client';

interface TextareaFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
}

export default function TextareaField({ label, value, onChange}: TextareaFieldProps) {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="textarea textarea-bordered w-full"
        rows={10}
        required
      />
    </div>
  );
}
