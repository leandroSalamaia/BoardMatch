namespace BoardMatch.Models;

public class Games
{
    // "id_jogo": 17559,
    // "nm_jogo": "Mage Knight: Edição Definitiva",
    // "nm_original": "Mage Knight: Ultimate Edition",
    // "thumb": "https://storage.googleapis.com/ludopedia-capas/17559_t.jpg",
    // "link": "jogo/mage-knight-ultimate-edition"
    
    public int id_jogo { get; set; }
    public string nm_jogo { get; set; }
    public string nm_original { get; set; }
    public string thumb { get; set; }
    public string link { get; set; }
    public bool favorito { get; set; } = false;
}