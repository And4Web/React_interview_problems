const menus = [
  {
    label: "Home",
    to: "/"
  }, 
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "/details",
        children: [
          {
            label: "Location",
            to: "/location",
          },
        ]
      },
    ]
  },
  {
    label: "Articles",
    to: "/articles",
    children: [
      {
        label: "Science",
        to: "/science"
      },
      {
        label: "Entertainment",
        to:"/entertainment",
        children: [
          {
            label: "Novels",
            to: "/novels",
            children: [
              {
                label: "Mistery",
                to: "/mistery"
              },
              {
                label:"Crime",
                to: "/crime" 
              },
              {
                label: "Psychology",
                to:"/psychology",
                children: [
                  {
                    label: "Human Behavior",
                    to: "/behavior"
                  }
                ]
              }
            ]
          },
          {
            label: "Comics",
            to: "/comics",
            children: [
              {
                label: "Raj Comics",
                to: "/rajComics", 
                children: [
                  {
                    label: "Nagraj",
                    to: "/nagraj"
                  }, 
                  {
                    label: "Doga",
                    to :"/doga"
                  }
                ]
              },
              {
                label: "Marvel",
                to: "/marvel",
                children: [
                  {
                    label: "Spiderman",
                    to: "/spiderman"
                  },
                  {
                    label: "Wolvarine",
                    to: "/wolvarine"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "/account"
      },
      {
        label: "Security",
        to: "/security",
        children: [
          {
            label: "Login",
            to: "/login"
          },
          {
            label: "Register",
            to: "/register"
          }
        ]
      }, 
    ]
  },
 
]

export default menus;