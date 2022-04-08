import { render, screen } from '@testing-library/react';
import Enzyme from "enzyme";
import App from './App';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() })

test("renders correctly", () => {
 
const employee = {
  name: 'Harisankar',
  location: 'Odisha',
  bloodGroup: 'O+',
  age: 22,
profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}
  shallow(<App employee={employee} />);
});
