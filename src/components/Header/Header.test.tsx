import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renderiza a marca 'Rota Aberta'", () => {
    render(<Header />);
    expect(screen.getByText("Rota Aberta")).toBeInTheDocument();
  });

  it("renderiza os links de navegação para Início e Destinos", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /início/i })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: /destinos/i })).toHaveAttribute(
      "href",
      "/destinos"
    );
  });
});
