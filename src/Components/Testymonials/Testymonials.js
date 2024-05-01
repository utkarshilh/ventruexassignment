import React from 'react';
import Card from './Card';
import Button from '../Tools/Button';
import Heading from '../Tools/Heading';

export default function Testimonials() {
  return (
    <div style={{ backgroundColor: 'rgb(254,243,199)' }}>
      <div className="container mx-auto p-12" >
        <div className="text-center">
          <Heading name="TESTYMONIALS" gbcolor="text-red-950" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Card
              title="Product Name"
              rating={4}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit turpis et eros luctus, vel dignissim justo accumsan."
            />
          </div>
          <div>
            <Card
              title="Product Name"
              rating={4}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit turpis et eros luctus, vel dignissim justo accumsan."
            />
          </div>
          <div>
            <Card
              title="Product Name"
              rating={4}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit turpis et eros luctus, vel dignissim justo accumsan."
            />
          </div>
          <div>
            <Card
              title="Product Name"
              rating={4}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit turpis et eros luctus, vel dignissim justo accumsan."

            />
          </div>
        </div>
        <div className="flex justify-center mt-8">

          <Button name="Help" />
        </div>
      </div>
    </div>
  );
}
