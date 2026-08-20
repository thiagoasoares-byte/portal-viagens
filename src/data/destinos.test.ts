import { describe, it, expect } from "vitest";
import { destinos } from "./destinos";

describe("destinos", () => {
  it("possui ao menos um destino cadastrado", () => {
    expect(destinos.length).toBeGreaterThan(0);
  });

  it("todos os destinos têm ids únicos", () => {
    const ids = destinos.map((d) => d.id);
    const idsUnicos = new Set(ids);
    expect(idsUnicos.size).toBe(ids.length);
  });

  it("todos os destinos têm os campos obrigatórios preenchidos", () => {
    for (const destino of destinos) {
      expect(destino.id).toBeTruthy();
      expect(destino.nome).toBeTruthy();
      expect(destino.pais).toBeTruthy();
      expect(destino.imagem).toMatch(/^https?:\/\//);
      expect(destino.atividades.length).toBeGreaterThan(0);
    }
  });
});
