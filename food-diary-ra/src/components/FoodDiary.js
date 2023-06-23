import Entry from "./Entry";

export default function FoodDiary() {
  return (
    <div className="container">
      <table>
        <tr>
          <th>Food</th>
          <th>Amount</th>
          <th>Protein (g)</th>
          <th>Total</th>
          <th></th>
        </tr>
        <Entry />
      </table>
    </div>
  );
}
