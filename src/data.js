export const posts = [
  {
    id: 1,
    author: {
      name: "Anna Doe",
      role: "Software Engineer",
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=267&q=60",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋"
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        children: [
          {
            content: "🎉 github.com/henriquebortoletto"
          }
        ]
      },
      {
        type: "span",
        children: [
          {
            content: "#novoprojeto"
          },
          {
            content: "#nlw"
          },
          {
            content: "#rocketseat"
          }
        ]
      }
    ],
    publishedAt: new Date("2023-05-15 20:00:00")
  },
  {
    id: 2,
    author: {
      name: "Sophia Doe",
      role: "Influencer Digital",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=267&q=60"
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋"
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        children: [
          {
            content: "🎉 github.com/henriquebortoletto"
          }
        ]
      },
      {
        type: "span",
        children: [
          {
            content: "#novoprojeto"
          },
          {
            content: "#nlw"
          },
          {
            content: "#rocketseat"
          }
        ]
      }
    ],
    publishedAt: new Date("2023-05-18 17:12:34")
  }
];
