

interface Props {
  categories: string[];
  selected: string;
  onChange: (value: string) => void;
};

export const CategoryDropdown = ({ categories, selected, onChange }: Props) => {
  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)}>
      <option value="" disabled>
        Select Bible Topic
      </option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
