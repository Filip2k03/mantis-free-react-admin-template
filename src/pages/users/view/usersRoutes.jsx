// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const users = {
  id: 'user',
  title: 'User',
  type: 'group',
  children: [
    {
      id: 'user',
      title: 'Users List',
      type: 'item',
      url: '/userlist',
      icon: icons.LoginOutlined,
      target: false
    }
  ]
};

export default users;
