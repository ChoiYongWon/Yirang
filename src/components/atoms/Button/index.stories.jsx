import React from 'react';
import Button from './index';

export default {
    title: 'Button',
    component: Button,
    decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>]
};

const Template = (args) => <Button {...args} />;

export const Small_Btn = Template.bind({});
Small_Btn.args = {
    size: "small",
    value: 'small button',
};

export const Default_Btn = Template.bind({});
Default_Btn.args = {
    size: "default",
    value: 'default button',
};


export const Large_Btn = Template.bind({});
Large_Btn.args = {
    size: "large",
    value: 'large button',
};

export const Primary_Small_Btn = Template.bind({});
Primary_Small_Btn.args = {
    size: "small",
    types: "primary",
    value: 'small button',
};

export const Primary_Default_Btn = Template.bind({});
Primary_Default_Btn.args = {
    size: "default",
    types: "primary",
    value: 'default button',
};


export const Primary_Large_Btn = Template.bind({});
Primary_Large_Btn.args = {
    size: "large",
    types: "primary",
    value: 'large button',
};

export const Text_Btn = Template.bind({});
Text_Btn.args = {
    size: "default",
    types: "text",
    value: 'text button',
};

export const Primary_Block_Btn = Template.bind({});
Primary_Block_Btn.args = {
    block: true,
    types: "primary",
    value: 'block button',
};
