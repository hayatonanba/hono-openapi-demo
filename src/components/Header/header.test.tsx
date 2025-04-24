import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { auth, signIn, signOut } from "../../auth";
import Header from "./header";

vi.mock("../../auth", async () => {
  return {
    auth: vi.fn(),
    signIn: vi.fn(),
    signOut: vi.fn(),
  };
});

describe("Header", () => {
  it("ログインしていないときに『ログイン』ボタンが表示される", async () => {
    (auth as any).mockResolvedValue(null);
    render(await Header());
    expect(screen.getByRole("button", { name: "ログイン" })).toBeInTheDocument();
  });

  it("ログインしているときに『ログアウト』ボタンが表示される", async () => {
    (auth as any).mockResolvedValue({ user: { name: "test-user" } });
    render(await Header());
    expect(screen.getByRole("button", { name: "ログアウト" })).toBeInTheDocument();
  });

  it("ログインボタンを押すと signIn() が呼ばれる", async () => {
    (auth as any).mockResolvedValue(null);
    const mockSignIn = signIn as unknown as ReturnType<typeof vi.fn>;
    render(await Header());
    const loginButton = screen.getByRole("button", { name: "ログイン" });
    fireEvent.click(loginButton);
    // server action の中で呼ばれるので非同期待ち
    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith("github");
    });
  });

  it("ログアウトボタンを押すと signOut() が呼ばれる", async () => {
    (auth as any).mockResolvedValue({ user: { name: "test-user" } });
    const mockSignOut = signOut as unknown as ReturnType<typeof vi.fn>;
    render(await Header());
    const logoutButton = screen.getByRole("button", { name: "ログアウト" });
    fireEvent.click(logoutButton);
    await waitFor(() => {
      expect(mockSignOut).toHaveBeenCalled();
    });
  });
});
