import remindersForMonth from './remindersForMonth';

it('sorts reminders', () => {
  const allReminders = [
    {date: '2018-07-25T11:00', text: 'Dentist', id: 1},
    {date: '2018-07-28T19:00', text: 'Concert', id: 2},
    {date: '2018-07-26T10:00', text: 'Docs', id: 3}
  ];
  
  const expected = {
    '2018-07-25': [
      {date: '2018-07-25T11:00', text: 'Dentist', id: 1}
    ],
    '2018-07-26': [
      {date: '2018-07-26T10:00', text: 'Docs', id: 3}
    ],
    '2018-07-28': [
      {date: '2018-07-28T19:00', text: 'Concert', id: 2}
    ]
  };
  
  expect(remindersForMonth(allReminders)).toEqual(expected)
});

it('Groups reminders on the same day', () => {
  const allReminders = [
    {date: '2018-07-25T11:00', text: 'Dentist', id: 1},
    {date: '2018-07-28T19:00', text: 'Concert', id: 2},
    {date: '2018-07-26T10:00', text: 'Docs', id: 3},
    {date: '2018-07-25T15:00', text: 'Coffee', id: 4},
    {date: '2018-07-28T12:00', text: 'Lunch', id: 5}
  ];

  const expected = {
    '2018-07-25': [
      {date: '2018-07-25T11:00', text: 'Dentist', id: 1},
      {date: '2018-07-25T15:00', text: 'Coffee', id: 4}
    ],
    '2018-07-26': [
      {date: '2018-07-26T10:00', text: 'Docs', id: 3}
    ],
    '2018-07-28': [
      {date: '2018-07-28T12:00', text: 'Lunch', id: 5},
      {date: '2018-07-28T19:00', text: 'Concert', id: 2}
    ]
  };
  
  expect(remindersForMonth(allReminders)).toEqual(expected)
});