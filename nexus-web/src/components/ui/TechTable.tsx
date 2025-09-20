interface TechTableProps {
  rows?: Array<{ label: string; value: string }>;
  specs?: Array<{ category: string; items: string[] }>;
}

export const TechTable = ({ rows, specs }: TechTableProps) => {
  if (specs) {
    return (
      <div className="grid gap-6">
        {specs.map((spec) => (
          <div key={spec.category} className="border-grid p-6">
            <h3 className="mb-4 text-lg font-display uppercase">{spec.category}</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {spec.items.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  if (rows) {
    return (
      <table className="table-block w-full text-left text-sm uppercase text-white/70">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row" className="font-normal text-white">
                {row.label}
              </th>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return null;
};
