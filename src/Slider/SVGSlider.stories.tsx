import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import SvgImageSlider from './SVGImageSlider'; 

export default {
  title: 'Example/SvgImageSlider',
  component: SvgImageSlider,
} as Meta;

const Template: Story = (args) => <SvgImageSlider {...args} />;

export const SliderExample = Template.bind({});
SliderExample.args = {};

export const SliderWithDifferentValues = () => (
  <>
    <h3>Slider with Different Values</h3>
    <SvgImageSlider />
  </>
);
