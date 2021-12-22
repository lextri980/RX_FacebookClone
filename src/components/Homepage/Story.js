import React from "react";

// Components
import StoryCard from "./StoryCard";

export default function Story() {

  const data = [
    {
      avatar: "https://images.unsplash.com/profile-1581969924925-91f6482dfb23image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      image: "https://images.unsplash.com/photo-1597752750783-48008058ad70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Sinitta Leunen"
    },
    {
      avatar: "https://images.unsplash.com/profile-1627507390948-f034fc7f5380image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      image: "https://images.unsplash.com/photo-1638459614085-bdb69b6d3432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Nick Wilkerson"
    },
    {
      avatar: "https://images.unsplash.com/profile-1605780274397-200ea3604d6fimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Toa Heftiba"
    },
    {
      avatar: "https://images.unsplash.com/profile-1539616908003-dcffab608e11?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      image: "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Aiony Haust"
    },
    {
      avatar: "https://images.unsplash.com/profile-1638305220567-5a23b548b612?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      image: "https://images.unsplash.com/photo-1580986475043-66518bfc2a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Elia Pellegrini"
    }
  ]

  return (
    <div className="story">
      {data && data.map((d, index) => {
        return <StoryCard key={d.name}
          avatar={d.avatar}
          image={d.image}
          name={d.name}
          index={index}
          data={data}
        />
      })}
    </div>
  );
}
