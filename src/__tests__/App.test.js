import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Test for top-level heading
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

// Test for image with alt text
test("displays an image of yourself with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/your name/i);  // Replace "your name" with the appropriate alt text
  expect(image).toBeInTheDocument();
});

// Test for second-level heading
test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(secondLevelHeading).toBeInTheDocument();
});

// Test for biography paragraph
test("displays a paragraph for biography", () => {
  render(<App />);
  const bio = screen.getByText(/your biography here/i);  // Replace with the actual bio text
  expect(bio).toBeInTheDocument();
});

// Test for GitHub link
test("displays a link to GitHub", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  expect(githubLink).toHaveAttribute("href", "https://github.com/katanujoy");
});

// Test for LinkedIn link
test("displays a link to LinkedIn", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });
  expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/your-username");
});
