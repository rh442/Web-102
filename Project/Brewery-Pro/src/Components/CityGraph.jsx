import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const BreweryCityChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data} margin={{ top: 20, right: 0, left: 150, bottom: 5 }} >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="city" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="orange" />
    </BarChart>
  </ResponsiveContainer>
);

export default BreweryCityChart;