import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom"; 

describe("Footer", () => {
  it("ロゴテキストが表示されていること", () => {
    render(<Footer />);
    expect(screen.getByText("Navigation_bar")).toBeInTheDocument();
  });

  it("著作権表記が表示されていること", () => {
    render(<Footer />);
    expect(
      screen.getByText(/© 2024 My blog\. All rights reserved\./)
    ).toBeInTheDocument();
  });

  it("Gmailのリンクが存在し、正しいURLを持つこと", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", "https://github.com/hayatonanba"); // Gmail
  });

  it("GitHubのリンクが存在し、正しいURLを持つこと", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link");
    expect(links[1]).toHaveAttribute("href", "https://github.com/hayatonanba");
  });

  it("Xのリンクが存在し、正しいURLを持つこと", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link");
    expect(links[2]).toHaveAttribute("href", "https://x.com/hayatonanba0228");
  });
});
