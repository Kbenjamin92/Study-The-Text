// components/CategoryDropdown.tsx
import { Select } from '@chakra-ui/react';

interface Props {
  categories: string[];
  selected: string;
  onChange: (value: string) => void;
};

export const CategoryDropdown = ({ categories, selected, onChange }: Props) => {
  return (
    <Select.Item value={selected} onChange={(e) => onChange(e.target.value)} placeholder="Select Bible Topic">
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </Select.Item>
  );
}
