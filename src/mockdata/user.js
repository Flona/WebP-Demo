import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://avatars0.githubusercontent.com/u/35988190?s=400&u=5f4b4c8203e44fd9cf9230cb9ef7446de8ea29a1&v=4',
    name: '张某某'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
