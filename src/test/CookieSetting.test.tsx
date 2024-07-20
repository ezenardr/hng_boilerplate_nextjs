import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import React from "react";
import { vi } from "vitest";

import CookieSetting from "~/components/common/CookieSetting/CookieSetting";

vi.mock("next/link", () => {
  return {
    __esModule: true,
    default: ({
      children,
      href,
    }: {
      children: React.ReactNode;
      href: string;
    }) => <a href={href}>{children}</a>,
  };
});

describe("cookieSetting", () => {
  it("renders the CookieSetting component with all elements", () => {
    expect.hasAssertions();
    render(<CookieSetting />);

    // Check for headings
    expect(screen.getByText("Customize cookies")).toBeInTheDocument();

    // Check for the privacy policy link
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();

    // Check for each cookie item
    const cookieTitles = [
      "Strictly necessary",
      "Performance cookies",
      "Functionality cookies",
      "Targeting cookies",
    ];

    for (const title of cookieTitles) {
      expect(screen.getByText(title)).toBeInTheDocument();
    }

    // Check for the Save & Accept button
    expect(
      screen.getByRole("button", { name: "Save & Accept" }),
    ).toBeInTheDocument();
  });

  it("toggles the switch for non-essential cookies", () => {
    expect.hasAssertions();
    render(<CookieSetting />);

    const switches = screen.getAllByRole("switch");
    expect(switches).toHaveLength(3);

    for (const sw of switches) {
      expect(sw).not.toBeChecked();
      fireEvent.click(sw);
      expect(sw).toBeChecked();
    }
  });
});
