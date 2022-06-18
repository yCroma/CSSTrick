import { createFirst } from "./First";

export default {
  title: "CSSTrick/First",
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
  },
};

const Template = ({ label, ...args }) => {
  return createFirst({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Hello, World!",
};
