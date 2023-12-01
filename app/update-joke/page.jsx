"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateJoke = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jokeId = searchParams.get("id");

  const [post, setPost] = useState({ joke: "", tag: "", });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getJokeDetails = async () => {
      const response = await fetch(`/api/joke/${jokeId}`);
      const data = await response.json();

      setPost({
        joke: data.joke,
        tag: data.tag,
      });
    };

    if (jokeId) getJokeDetails();
  }, [jokeId]);

  const updateJoke = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!jokeId) return alert("Missing JokeId!");

    try {
      const response = await fetch(`/api/joke/${jokeId}`, {
        method: "PATCH",
        body: JSON.stringify({
          joke: post.joke,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateJoke}
    />
  );
};

export default UpdateJoke;