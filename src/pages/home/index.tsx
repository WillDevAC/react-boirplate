import React, { useEffect, useState } from "react";

interface IComments {
  body: string;
  id: number;
  name: string;
  email: string;
  postId: number;
}

const HomePage: React.FC = () => {
  const [comments, setComments] = useState<IComments[]>([]);

  const getComments = async () => {
    const commentsList = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((response) => response.json());
    return commentsList;
  };

  useEffect(() => {
    getComments().then((response) => {
      setComments(response);
    });
  }, []);

  return (
    <>
      {comments.map((listComments) => (
        <>
          <div>
            <p>{listComments.email}</p>
            <span>{listComments.name}</span>
          </div>
          <br />
        </>
      ))}
    </>
  );
};

export default HomePage;
