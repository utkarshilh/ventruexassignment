import React from 'react'
import Card from './Card';

export default function Testymonials() {
  return (
    <div className="container mx-auto p-4">

      <table align='center'>
        <tr>
          <td style={{ marginRight: '20px' }}>
            <Card title="Protduct Name" rating={4} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit turpis et eros luctus, vel dignissim justo accumsan." />
          </td>
          <td>
            <Card title="Product Name" rating={4} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit turpis et eros luctus, vel dignissim justo accumsan." />
          </td>
        </tr>
        <tr>
          <td style={{ marginRight: '20px' }}>
            <Card title="Product Name" rating={4} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit turpis et eros luctus, vel dignissim justo accumsan." />
          </td>
          <td>
            <Card title="Product Name" rating={4} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit turpis et eros luctus, vel dignissim justo accumsan." />
          </td>
        </tr>
      </table>

    </div>
  );
}
