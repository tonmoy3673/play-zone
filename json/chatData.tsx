const demoChats: Record<
  number,
  {
    sender: string;
    receiver: string;
    text: string;
    avatar: string;
    time: string;
    unreadCount?: number;
    media?: string[];
    voiceMessage?: string;
  }[]
> = {
  1: [
    {
      sender: "Daren Robertson",
      receiver: "You",
      text: "Hey coach, just finished today's training session",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      time: "12:03 PM",
      unreadCount: 2,
    },
    {
      sender: "You",
      receiver: "Daren Robertson",
      text: "Great work! How are you feeling about tomorrow's competition?",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      time: "12:05 PM",
      unreadCount: 1,
    },
    {
      sender: "Daren Robertson",
      receiver: "You",
      text: "I'm feeling confident. The new routine is coming together well",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      time: "12:08 PM",
      unreadCount: 0,
    },
    {
      sender: "You",
      receiver: "Daren Robertson",
      text: "That's great to hear! Keep it up!",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      time: "12:10 PM",
      unreadCount: 0,
    },
    {
      sender: "Daren Robertson",
      receiver: "You",
      text: "Check out the training schedule video",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      voiceMessage:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      time: "12:15 PM",
      unreadCount: 3,
    },
    {
      sender: "You",
      receiver: "Daren Robertson",
      text: "I’ll check it out right now!",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      time: "12:17 PM",
      unreadCount: 0,
    },
  ],
  2: [
    {
      sender: "Mike Thompson",
      receiver: "You",
      text: "Can we reschedule our session to next week?",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      time: "11:00 AM",
      unreadCount: 1,
    },
    {
      sender: "You",
      receiver: "Mike Thompson",
      text: "Sure, how about Tuesday at 3 PM?",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg", // Corrected the avatar URL typo
      time: "11:05 AM",
      unreadCount: 0,
    },
    {
      sender: "Mike Thompson",
      receiver: "You",
      text: "Tuesday at 3 PM works fine for me. Thanks!",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      time: "11:10 AM",
      unreadCount: 0,
    },
    {
      sender: "You",
      receiver: "Mike Thompson",
      text: "Great, see you then!",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      time: "11:15 AM",
      unreadCount: 0,
    },
  ],
};

const demoClients: any = {
  1: {
    name: "Daren Robertson",
    email: "daren@example.com",
    phone: "123-456-7890",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    details: "WR | San Diego High | 6'1” 185 | All-League ’24 | Speed & hands.",
    location: "San Diego, CA",
    glary: [
      "https://www.inax.com/wp-content/uploads/Kashima-Studium-01.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1d/7e/a6/d9/this-khalifa-studium.jpg",
      "https://t3.ftcdn.net/jpg/10/02/74/98/360_F_1002749891_eW1HTUwAJnMPymae1fPx6lNTtyW9nErw.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/7/435989702/JK/CN/UP/10308570/nature-hd-wallpaper.jpg",
      "https://thumbs.dreamstime.com/b/tiger-amazing-background-hd-wallpaper-tiger-amazing-background-hd-wallpaper-333534522.jpg",
      "https://c4.wallpaperflare.com/wallpaper/977/560/879/background-pictures-nature-hd-images-1920x1200-wallpaper-preview.jpg",
    ],
  },
  2: {
    name: "Mike Thompson",
    details:
      "MY | San Diego High | 5'10” 185 | All-League ’248 | Speed & hands.",
    location: "San Diego, CA",
    email: "mike@example.com",
    phone: "234-567-8901",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    glary: [
      "https://t3.ftcdn.net/jpg/10/02/74/98/360_F_1002749891_eW1HTUwAJnMPymae1fPx6lNTtyW9nErw.jpg", // valid image URL
      "https://thumbs.dreamstime.com/b/tiger-amazing-background-hd-wallpaper-tiger-amazing-background-hd-wallpaper-333534522.jpg", // valid image URL
      "https://c4.wallpaperflare.com/wallpaper/977/560/879/background-pictures-nature-hd-images-1920x1200-wallpaper-preview.jpg", // valid image URL
    ],
  },
};

const iconButtonStyle = {
  padding: "10px",
  borderRadius: "50%",
  background: "#f0f0f0",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  color: "#333",
};
export { demoChats, demoClients, iconButtonStyle };