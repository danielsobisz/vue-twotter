export const users = [
  {
    id: 1,
    username: '@MitchellRomney',
    firstName: 'Mitchell',
    lastName: 'Romney',
    email: 'mitchellromney@theearthissquare.com',
    pic: 'user.jpg',
    followers: 350,
    isAdmin: true,
    twoots: [
      { id: 1, content: 'Twotter is Amazing!', date: '04.01.2021, 16:26:10' },
      {
        id: 2,
        content: "Don't forget to subscriber to The Earth is Square!",
        date: '02.01.2021, 13:23:15',
      },
    ],
  },
  {
    id: 2,
    username: '@JColeNC',
    firstName: 'J.',
    lastName: 'Cole',
    pic: 'user2.jpg',
    followers: 213,
    email: null,
    isAdmin: false,
    twoots: [
      {
        id: 1,
        content: 'Has anybody heard about Nuxt?',
        date: '02.01.2021, 08:34:23',
      },
      { id: 2, content: 'Hello World!', date: '23.12.2020, 13:12:50' },
    ],
  },
  {
    id: 3,
    username: '@MaryJane',
    firstName: 'Mary',
    lastName: 'Jane',
    pic: 'user3.jpg',
    followers: 420,
    email: null,
    isAdmin: false,
    twoots: [
      { id: 1, content: 'Whats up Everybody!', date: '03.01.2021, 21:15:01' },
      {
        id: 2,
        content: 'Twotter is way much better than Twitter!',
        date: '30.12.2020, 18:49:32',
      },
    ],
  },
  {
    id: 4,
    username: '@BobBurnham',
    firstName: 'Bob',
    lastName: 'Burnham',
    pic: 'user4.jpg',
    followers: 87,
    email: null,
    isAdmin: false,
    twoots: [
      {
        id: 1,
        content: 'Suddenly, I notice that Vue is way much better than React.',
        date: '10.01.2021, 07:05:50',
      },
    ],
  },
];
