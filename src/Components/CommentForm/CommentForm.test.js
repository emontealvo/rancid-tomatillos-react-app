import React from "react";
import CommentForm from "./CommentForm";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CommentForm", () => {
  it("should have two input fields and one button", () => {
    const { getByRole, getByPlaceholderText } = render(
      <CommentForm movieId={603} comments={[]}/>
    );

    const author = getByPlaceholderText("name");
    const comment = getByPlaceholderText("comment");
    const commentButton = getByRole("button", { name: "Submit" });

    expect(author).toBeInTheDocument();
    expect(comment).toBeInTheDocument();
    expect(commentButton).toBeInTheDocument();
  });

  it("should allow a user to fill out the form to leave a comment", () => {
    const { getByPlaceholderText } = render(
      <CommentForm movieId={603} comments={[]}/>
    );

    const authorSample = "Greg";
    const commentSample = "good movie";

    const author = getByPlaceholderText("name");
    const comment = getByPlaceholderText("comment");
    fireEvent.change(author, { target: { value: authorSample } });
    fireEvent.change(comment, { target: { value: commentSample } });

    expect(author.value).toEqual(authorSample);
    expect(comment.value).toEqual(commentSample);
  })
})
