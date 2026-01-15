import { SaveData } from '../types';

const STORAGE_KEY = 'bible_word_search_save_v1';

/**
 * API Index
 * 
 * Este módulo centraliza todas as operações de persistência de dados.
 * Atualmente utiliza localStorage para persistência local.
 * 
 * Para habilitar salvamento na nuvem (Vercel/Database), substitua as implementações
 * abaixo por chamadas `fetch` para seus endpoints de backend (ex: /api/save, /api/load).
 */

export const api = {
  /**
   * Carrega os dados do jogador (Login, Progresso, Perfil, Termos).
   */
  async loadData(): Promise<SaveData | null> {
    // Simulação de delay de rede
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // TODO: Substituir por chamada real à API
    // const response = await fetch('/api/player/data');
    // return await response.json();

    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  },

  /**
   * Salva os dados do jogador.
   * Deve ser chamado sempre que houver mudança crítica (completar fase, mudar perfil, aceitar termos).
   */
  async saveData(data: SaveData): Promise<boolean> {
    try {
      // TODO: Substituir por chamada real à API
      // await fetch('/api/player/data', { 
      //   method: 'POST', 
      //   body: JSON.stringify(data),
      //   headers: { 'Content-Type': 'application/json' }
      // });

      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error("Erro ao salvar dados", e);
      return false;
    }
  },

  /**
   * Limpa os dados locais (Logout).
   */
  async clearData(): Promise<void> {
    localStorage.removeItem(STORAGE_KEY);
    // TODO: Chamar endpoint de logout se necessário
  }
};
