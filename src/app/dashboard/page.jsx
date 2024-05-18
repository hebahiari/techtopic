"use client";
import { useSession } from "next-auth/react";
// import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const Loading = (
    <div className={styles.loadingscreen}>
      <img className="spinner" src="/loading.gif" />
    </div>
  );

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  //// this part protects the dashboard route from users who are not logged in
  if (session.status === "loading") {
    return null;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  /////////

  const handleDelete = async (id) => {
    let response = confirm("Are you sure you want to delete this post?");
    if (response) {
      try {
        await fetch(`/api/posts/${id}`, {
          method: "DELETE",
        });
        mutate();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target[0].value;
    const desc = event.target[1].value;
    const image = event.target[2].value;
    const content = event.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      event.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const Post = ({post}) => {
    return (
      <div className={styles.post} key={post._id}>
      <Link href={`/blog/${post._id}`}>
        <div className={styles.imageContainer}>
          <Image src={post.image} alt="" fill={true} />
        </div>
      </Link>
      <Link href={`/blog/${post._id}`}>
        <h2 className={styles.postTitle}>{post.title}</h2>
      </Link>
      <span
        className={styles.delete}
        onClick={() => handleDelete(post._id)}
      >
        X
      </span>
    </div>
    )
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        {isLoading || data?.length ? (
          <div className={styles.posts}>
            <h1 className={styles.formTitle}>Your Posts</h1>
            {isLoading
              ? Loading
              : data?.map((post) => {
                return <Post key={post.id} post={post} />
              }
                )}
          </div>
        ) : null}
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1 className={styles.formTitle}>Add New Post</h1>
          <input
            type="text"
            placeholder="Title"
            className={styles.input}
            maxLength={35}
            required
          />
          <input
            type="text"
            placeholder="Description"
            className={styles.input}
            maxLength={450}
            required
          />
          <input
            type="text"
            placeholder="Image"
            className={styles.input}
          />
          <textarea
            placeholder="Content"
            className={styles.textarea}
            cols="30"
            rows="10"
            required
          />
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
