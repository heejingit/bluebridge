// server route, api
// - Woojin

// mongoDB schema(mongoose) & mock db & MongoDB Atlas & Front
// -> except validation
// - Injun
// - Heejin


const User = {
  _id: ObjectId,
  personalInfo: {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    picture: String
  },
  employeeInfo: {
    department: String,
    position: String,
    hourlyWage: Number,
    roles: [
      String
    ],
    workInfo: {
      lastLoginTime: Date, 
      lastLogoutTime: Date,
      workTime: [
        {
          date: Date,
          workStartTime: Date,
          workFinishTime: Date
        }
      ]
    }
  },
  isLogin: Boolean,
  condition: String,
  note: {                 // Personal note
    description: String,
    date: Date,
    isHighPriority: Boolean
  }
};

// main feed
const Feed = [
  {
    _id: ObjectId,
    author: Uesr._id or User.personalInfo.email,
    description: String,
    date: Date,
    isHighPriority: Boolean
  }
]

// schedule
const Schedule = {
  Meeting: [
    {
      purpose: String,
      participants: [Uesr._id or User.personalInfo.email],
      location: String,
      date: Date
    },
  ],
  Vacation: [
    {
      user: Uesr._id or User.personalInfo.email,
      description: String,
      startDate: Date,
      endDate: Date,
    }
  ],
  Event: [
    {
      title: String,
      description: String,
      date: Date
    }
  ]
}