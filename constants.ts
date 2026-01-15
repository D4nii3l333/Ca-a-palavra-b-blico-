import { BookData } from './types';

export const BOOKS: BookData[] = [
  // --- NOVO TESTAMENTO ---
  { 
    id: 'matthew', 
    name: 'Mateus', 
    testament: 'New', 
    totalVerses: 1071, 
    isLocked: false, 
    levels: [
      // --- MATEUS CAPÍTULO 1 ---
      {
        id: 'mt-1-1', reference: 'Mateus 1:1',
        text: 'Livro da geração de Jesus Cristo, filho de Davi, filho de Abraão.',
        words: [{ word: 'GERACAO', display: 'GERAÇÃO' }, { word: 'JESUS', display: 'JESUS' }, { word: 'CRISTO', display: 'CRISTO' }, { word: 'DAVI', display: 'DAVI' }, { word: 'ABRAAO', display: 'ABRAÃO' }]
      },
      {
        id: 'mt-1-2', reference: 'Mateus 1:2',
        text: 'Abraão gerou a Isaque; e Isaque gerou a Jacó; e Jacó gerou a Judá e a seus irmãos;',
        words: [{ word: 'ABRAAO', display: 'ABRAÃO' }, { word: 'ISAQUE', display: 'ISAQUE' }, { word: 'JACO', display: 'JACÓ' }, { word: 'JUDA', display: 'JUDÁ' }, { word: 'IRMAOS', display: 'IRMÃOS' }]
      },
      {
        id: 'mt-1-3', reference: 'Mateus 1:3',
        text: 'E Judá gerou, de Tamar, a Perez e a Zerá; e Perez gerou a Esrom; e Esrom gerou a Arão;',
        words: [{ word: 'TAMAR', display: 'TAMAR' }, { word: 'PEREZ', display: 'PEREZ' }, { word: 'ZERA', display: 'ZERÁ' }, { word: 'ESROM', display: 'ESROM' }, { word: 'ARAO', display: 'ARÃO' }]
      },
      {
        id: 'mt-1-4', reference: 'Mateus 1:4',
        text: 'E Arão gerou a Aminadabe; e Aminadabe gerou a Naassom; e Naassom gerou a Salmom;',
        words: [{ word: 'ARAO', display: 'ARÃO' }, { word: 'AMINADABE', display: 'AMINADABE' }, { word: 'NAASSOM', display: 'NAASSOM' }, { word: 'SALMOM', display: 'SALMOM' }]
      },
      {
        id: 'mt-1-5', reference: 'Mateus 1:5',
        text: 'E Salmom gerou, de Raabe, a Boaz; e Boaz gerou de Rute a Obede; e Obede gerou a Jessé;',
        words: [{ word: 'RAABE', display: 'RAABE' }, { word: 'BOAZ', display: 'BOAZ' }, { word: 'RUTE', display: 'RUTE' }, { word: 'OBEDE', display: 'OBEDE' }, { word: 'JESSE', display: 'JESSÉ' }]
      },
      {
        id: 'mt-1-6', reference: 'Mateus 1:6',
        text: 'E Jessé gerou ao rei Davi; e o rei Davi gerou a Salomão da que foi mulher de Urias.',
        words: [{ word: 'JESSE', display: 'JESSÉ' }, { word: 'REI', display: 'REI' }, { word: 'DAVI', display: 'DAVI' }, { word: 'SALOMAO', display: 'SALOMÃO' }, { word: 'URIAS', display: 'URIAS' }]
      },
      {
        id: 'mt-1-7', reference: 'Mateus 1:7',
        text: 'E Salomão gerou a Roboão; e Roboão gerou a Abias; e Abias gerou a Asa;',
        words: [{ word: 'SALOMAO', display: 'SALOMÃO' }, { word: 'ROBOAO', display: 'ROBOÃO' }, { word: 'ABIAS', display: 'ABIAS' }, { word: 'ASA', display: 'ASA' }]
      },
      {
        id: 'mt-1-8', reference: 'Mateus 1:8',
        text: 'E Asa gerou a Josafá; e Josafá gerou a Jorão; e Jorão gerou a Uzias;',
        words: [{ word: 'ASA', display: 'ASA' }, { word: 'JOSAFA', display: 'JOSAFÁ' }, { word: 'JORAO', display: 'JORÃO' }, { word: 'UZIAS', display: 'UZIAS' }]
      },
      {
        id: 'mt-1-9', reference: 'Mateus 1:9',
        text: 'E Uzias gerou a Jotão; e Jotão gerou a Acaz; e Acaz gerou a Ezequias;',
        words: [{ word: 'UZIAS', display: 'UZIAS' }, { word: 'JOTAO', display: 'JOTÃO' }, { word: 'ACAZ', display: 'ACAZ' }, { word: 'EZEQUIAS', display: 'EZEQUIAS' }]
      },
      {
        id: 'mt-1-10', reference: 'Mateus 1:10',
        text: 'E Ezequias gerou a Manassés; e Manassés gerou a Amom; e Amom gerou a Josias;',
        words: [{ word: 'EZEQUIAS', display: 'EZEQUIAS' }, { word: 'MANASSES', display: 'MANASSÉS' }, { word: 'AMOM', display: 'AMOM' }, { word: 'JOSIAS', display: 'JOSIAS' }]
      },
      {
        id: 'mt-1-11', reference: 'Mateus 1:11',
        text: 'E Josias gerou a Jeconias e a seus irmãos na deportação para babilônia.',
        words: [{ word: 'JOSIAS', display: 'JOSIAS' }, { word: 'JECONIAS', display: 'JECONIAS' }, { word: 'IRMAOS', display: 'IRMÃOS' }, { word: 'BABILONIA', display: 'BABILÔNIA' }]
      },
      {
        id: 'mt-1-12', reference: 'Mateus 1:12',
        text: 'E, depois da deportação para a babilônia, Jeconias gerou a Salatiel; e Salatiel gerou a Zorobabel;',
        words: [{ word: 'DEPORTACAO', display: 'DEPORTAÇÃO' }, { word: 'BABILONIA', display: 'BABILÔNIA' }, { word: 'SALATIEL', display: 'SALATIEL' }, { word: 'ZOROBABEL', display: 'ZOROBABEL' }]
      },
      {
        id: 'mt-1-13', reference: 'Mateus 1:13',
        text: 'E Zorobabel gerou a Abiúde; e Abiúde gerou a Eliaquim; e Eliaquim gerou a Azor;',
        words: [{ word: 'ZOROBABEL', display: 'ZOROBABEL' }, { word: 'ABIUDE', display: 'ABIÚDE' }, { word: 'ELIAQUIM', display: 'ELIAQUIM' }, { word: 'AZOR', display: 'AZOR' }]
      },
      {
        id: 'mt-1-14', reference: 'Mateus 1:14',
        text: 'E Azor gerou a Sadoque; e Sadoque gerou a Aquim; e Aquim gerou a Eliúde;',
        words: [{ word: 'AZOR', display: 'AZOR' }, { word: 'SADOQUE', display: 'SADOQUE' }, { word: 'AQUIM', display: 'AQUIM' }, { word: 'ELIUDE', display: 'ELIÚDE' }]
      },
      {
        id: 'mt-1-15', reference: 'Mateus 1:15',
        text: 'E Eliúde gerou a Eleazar; e Eleazar gerou a Matã; e Matã gerou a Jacó;',
        words: [{ word: 'ELIUDE', display: 'ELIÚDE' }, { word: 'ELEAZAR', display: 'ELEAZAR' }, { word: 'MATA', display: 'MATÃ' }, { word: 'JACO', display: 'JACÓ' }]
      },
      {
        id: 'mt-1-16', reference: 'Mateus 1:16',
        text: 'E Jacó gerou a José, marido de Maria, da qual nasceu JESUS, que se chama o Cristo.',
        words: [{ word: 'JACO', display: 'JACÓ' }, { word: 'JOSE', display: 'JOSÉ' }, { word: 'MARIA', display: 'MARIA' }, { word: 'JESUS', display: 'JESUS' }, { word: 'CRISTO', display: 'CRISTO' }]
      },
      {
        id: 'mt-1-17', reference: 'Mateus 1:17',
        text: 'De sorte que todas as gerações, desde Abraão até Davi, são catorze gerações; e desde Davi até a deportação para a babilônia, catorze gerações; e desde a deportação para a babilônia até Cristo, catorze gerações.',
        words: [{ word: 'GERACOES', display: 'GERAÇÕES' }, { word: 'ABRAAO', display: 'ABRAÃO' }, { word: 'DAVI', display: 'DAVI' }, { word: 'BABILONIA', display: 'BABILÔNIA' }, { word: 'CRISTO', display: 'CRISTO' }]
      },
      {
        id: 'mt-1-18', reference: 'Mateus 1:18',
        text: 'Ora, o nascimento de Jesus Cristo foi assim: Que estando Maria, sua mãe, desposada com José, antes de se ajuntarem, achou-se ter concebido do Espírito Santo.',
        words: [{ word: 'NASCIMENTO', display: 'NASCIMENTO' }, { word: 'MARIA', display: 'MARIA' }, { word: 'JOSE', display: 'JOSÉ' }, { word: 'ESPIRITO', display: 'ESPÍRITO' }, { word: 'SANTO', display: 'SANTO' }]
      },
      {
        id: 'mt-1-19', reference: 'Mateus 1:19',
        text: 'Então José, seu marido, como era justo, e a não queria infamar, intentou deixá-la secretamente.',
        words: [{ word: 'JOSE', display: 'JOSÉ' }, { word: 'MARIDO', display: 'MARIDO' }, { word: 'JUSTO', display: 'JUSTO' }, { word: 'INFAMAR', display: 'INFAMAR' }, { word: 'SECRETAMENTE', display: 'SECRETAMENTE' }]
      },
      {
        id: 'mt-1-20', reference: 'Mateus 1:20',
        text: 'E, projetando ele isto, eis que em sonho lhe apareceu um anjo do Senhor, dizendo: José, filho de Davi, não temas receber a Maria, tua mulher, porque o que nela está gerado é do Espírito Santo;',
        words: [{ word: 'SONHO', display: 'SONHO' }, { word: 'ANJO', display: 'ANJO' }, { word: 'SENHOR', display: 'SENHOR' }, { word: 'JOSE', display: 'JOSÉ' }, { word: 'MARIA', display: 'MARIA' }, { word: 'ESPIRITO', display: 'ESPÍRITO' }]
      },
      {
        id: 'mt-1-21', reference: 'Mateus 1:21',
        text: 'E dará à luz um filho e chamarás o seu nome JESUS; porque ele salvará o seu povo dos seus pecados.',
        words: [{ word: 'LUZ', display: 'LUZ' }, { word: 'FILHO', display: 'FILHO' }, { word: 'JESUS', display: 'JESUS' }, { word: 'POVO', display: 'POVO' }, { word: 'PECADOS', display: 'PECADOS' }]
      },
      {
        id: 'mt-1-22', reference: 'Mateus 1:22',
        text: 'Tudo isto aconteceu para que se cumprisse o que foi dito da parte do Senhor, pelo profeta, que diz;',
        words: [{ word: 'ACONTECEU', display: 'ACONTECEU' }, { word: 'CUMPRISSE', display: 'CUMPRISSE' }, { word: 'SENHOR', display: 'SENHOR' }, { word: 'PROFETA', display: 'PROFETA' }]
      },
      {
        id: 'mt-1-23', reference: 'Mateus 1:23',
        text: 'Eis que a virgem conceberá, e dará à luz um filho, E chamá-lo-ão pelo nome de EMANUEL, Que traduzido é: Deus conosco.',
        words: [{ word: 'VIRGEM', display: 'VIRGEM' }, { word: 'LUZ', display: 'LUZ' }, { word: 'FILHO', display: 'FILHO' }, { word: 'EMANUEL', display: 'EMANUEL' }, { word: 'DEUS', display: 'DEUS' }]
      },
      {
        id: 'mt-1-24', reference: 'Mateus 1:24',
        text: 'E José, despertando do sono, fez como o anjo do Senhor lhe ordenara, e recebeu a sua mulher;',
        words: [{ word: 'JOSE', display: 'JOSÉ' }, { word: 'SONO', display: 'SONO' }, { word: 'ANJO', display: 'ANJO' }, { word: 'SENHOR', display: 'SENHOR' }, { word: 'MULHER', display: 'MULHER' }]
      },
      {
        id: 'mt-1-25', reference: 'Mateus 1:25',
        text: 'E não a conheceu até que deu à luz seu filho, o primogênito; e pôs-lhe por nome Jesus.',
        words: [{ word: 'CONHECEU', display: 'CONHECEU' }, { word: 'LUZ', display: 'LUZ' }, { word: 'PRIMOGENITO', display: 'PRIMOGÊNITO' }, { word: 'JESUS', display: 'JESUS' }]
      },
      // --- MATEUS CAPÍTULO 2 ---
      {
        id: 'mt-2-1', reference: 'Mateus 2:1',
        text: 'E, tendo nascido Jesus em Belém de Judéia, no tempo do rei Herodes, eis que uns magos vieram do oriente a Jerusalém,',
        words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'BELEM', display: 'BELÉM' }, { word: 'JUDEIA', display: 'JUDÉIA' }, { word: 'HERODES', display: 'HERODES' }, { word: 'MAGOS', display: 'MAGOS' }, { word: 'ORIENTE', display: 'ORIENTE' }]
      },
      {
        id: 'mt-2-2', reference: 'Mateus 2:2',
        text: 'Dizendo: Onde está aquele que é nascido rei dos judeus? porque vimos a sua estrela no oriente, e viemos a adorá-lo.',
        words: [{ word: 'NASCIDO', display: 'NASCIDO' }, { word: 'REI', display: 'REI' }, { word: 'JUDEUS', display: 'JUDEUS' }, { word: 'ESTRELA', display: 'ESTRELA' }, { word: 'ORIENTE', display: 'ORIENTE' }]
      },
      {
        id: 'mt-2-3', reference: 'Mateus 2:3',
        text: 'E o rei Herodes, ouvindo isto, perturbou-se, e toda Jerusalém com ele.',
        words: [{ word: 'HERODES', display: 'HERODES' }, { word: 'OUVINDO', display: 'OUVINDO' }, { word: 'PERTURBOU', display: 'PERTURBOU' }, { word: 'JERUSALEM', display: 'JERUSALÉM' }]
      },
      {
        id: 'mt-2-4', reference: 'Mateus 2:4',
        text: 'E, congregados todos os príncipes dos sacerdotes, e os escribas do povo, perguntou-lhes onde havia de nascer o Cristo.',
        words: [{ word: 'PRINCIPES', display: 'PRÍNCIPES' }, { word: 'SACERDOTES', display: 'SACERDOTES' }, { word: 'ESCRIBAS', display: 'ESCRIBAS' }, { word: 'CRISTO', display: 'CRISTO' }]
      },
      {
        id: 'mt-2-5', reference: 'Mateus 2:5',
        text: 'E eles lhe disseram: Em Belém de Judéia; porque assim está escrito pelo profeta:',
        words: [{ word: 'BELEM', display: 'BELÉM' }, { word: 'JUDEIA', display: 'JUDÉIA' }, { word: 'ESCRITO', display: 'ESCRITO' }, { word: 'PROFETA', display: 'PROFETA' }]
      },
      {
        id: 'mt-2-6', reference: 'Mateus 2:6',
        text: 'E tu, Belém, terra de Judá, De modo nenhum és a menor entre as capitais de Judá; porque de ti sairá o Guia que há de apascentar o meu povo Israel.',
        words: [{ word: 'BELEM', display: 'BELÉM' }, { word: 'JUDA', display: 'JUDÁ' }, { word: 'CAPITAIS', display: 'CAPITAIS' }, { word: 'GUIA', display: 'GUIA' }, { word: 'ISRAEL', display: 'ISRAEL' }]
      },
      {
        id: 'mt-2-7', reference: 'Mateus 2:7',
        text: 'Então Herodes, chamando secretamente os magos, inquiriu exatamente deles acerca do tempo em que a estrela lhes aparecera.',
        words: [{ word: 'HERODES', display: 'HERODES' }, { word: 'MAGOS', display: 'MAGOS' }, { word: 'TEMPO', display: 'TEMPO' }, { word: 'ESTRELA', display: 'ESTRELA' }]
      },
      {
        id: 'mt-2-8', reference: 'Mateus 2:8',
        text: 'E, enviando-os a Belém, disse: Ide, e perguntai diligentemente pelo menino e, quando o achardes, participai-mo, para que também eu vá e o adore.',
        words: [{ word: 'BELEM', display: 'BELÉM' }, { word: 'MENINO', display: 'MENINO' }, { word: 'ADORE', display: 'ADORE' }]
      },
      {
        id: 'mt-2-9', reference: 'Mateus 2:9',
        text: 'E, tendo eles ouvido o rei, partiram; e eis que a estrela, que tinham visto no oriente, ia adiante deles, até que, chegando, se deteve sobre o lugar onde estava o menino.',
        words: [{ word: 'REI', display: 'REI' }, { word: 'ESTRELA', display: 'ESTRELA' }, { word: 'ORIENTE', display: 'ORIENTE' }, { word: 'LUGAR', display: 'LUGAR' }, { word: 'MENINO', display: 'MENINO' }]
      },
      {
        id: 'mt-2-10', reference: 'Mateus 2:10',
        text: 'E, vendo eles a estrela, regozijaram-se muito com grande alegria.',
        words: [{ word: 'VENDO', display: 'VENDO' }, { word: 'ESTRELA', display: 'ESTRELA' }, { word: 'GRANDE', display: 'GRANDE' }, { word: 'ALEGRIA', display: 'ALEGRIA' }]
      },
      {
        id: 'mt-2-11', reference: 'Mateus 2:11',
        text: 'E, entrando na casa, acharam o menino com Maria sua mãe e, prostrando-se, o adoraram; e abrindo os seus tesouros, ofertaram-lhe dádivas: ouro, incenso e mirra.',
        words: [{ word: 'MENINO', display: 'MENINO' }, { word: 'MARIA', display: 'MARIA' }, { word: 'TESOUROS', display: 'TESOUROS' }, { word: 'OURO', display: 'OURO' }, { word: 'INCENSO', display: 'INCENSO' }, { word: 'MIRRA', display: 'MIRRA' }]
      },
      {
        id: 'mt-2-12', reference: 'Mateus 2:12',
        text: 'E, sendo por divina revelação avisados num sonho para que não voltassem para junto de Herodes, partiram para a sua terra por outro caminho.',
        words: [{ word: 'REVELACAO', display: 'REVELAÇÃO' }, { word: 'SONHO', display: 'SONHO' }, { word: 'HERODES', display: 'HERODES' }, { word: 'TERRA', display: 'TERRA' }, { word: 'CAMINHO', display: 'CAMINHO' }]
      },
      {
        id: 'mt-2-13', reference: 'Mateus 2:13',
        text: 'E, tendo eles se retirado, eis que o anjo do Senhor apareceu a José num sonho, dizendo: Levanta-te, e toma o menino e sua mãe, e foge para o Egito, e demora-te lá até que eu te diga; porque Herodes há de procurar o menino para o matar.',
        words: [{ word: 'ANJO', display: 'ANJO' }, { word: 'JOSE', display: 'JOSÉ' }, { word: 'SONHO', display: 'SONHO' }, { word: 'MENINO', display: 'MENINO' }, { word: 'EGITO', display: 'EGITO' }, { word: 'HERODES', display: 'HERODES' }]
      },
      {
        id: 'mt-2-14', reference: 'Mateus 2:14',
        text: 'E, levantando-se ele, tomou o menino e sua mãe, de noite, e foi para o Egito.',
        words: [{ word: 'LEVANTANDO', display: 'LEVANTANDO' }, { word: 'MENINO', display: 'MENINO' }, { word: 'NOITE', display: 'NOITE' }, { word: 'EGITO', display: 'EGITO' }]
      },
      {
        id: 'mt-2-15', reference: 'Mateus 2:15',
        text: 'E esteve lá, até à morte de Herodes, para que se cumprisse o que foi dito da parte do Senhor pelo profeta, que diz: Do Egito chamei o meu Filho.',
        words: [{ word: 'MORTE', display: 'MORTE' }, { word: 'HERODES', display: 'HERODES' }, { word: 'SENHOR', display: 'SENHOR' }, { word: 'EGITO', display: 'EGITO' }, { word: 'FILHO', display: 'FILHO' }]
      },
      {
        id: 'mt-2-16', reference: 'Mateus 2:16',
        text: 'Então Herodes, vendo que tinha sido iludido pelos magos, irritou-se muito, e mandou matar todos os meninos que havia em Belém, e em todos os seus contornos, de dois anos para baixo, segundo o tempo que diligentemente inquirira dos magos.',
        words: [{ word: 'HERODES', display: 'HERODES' }, { word: 'MAGOS', display: 'MAGOS' }, { word: 'MATAR', display: 'MATAR' }, { word: 'MENINOS', display: 'MENINOS' }, { word: 'BELEM', display: 'BELÉM' }]
      },
      {
        id: 'mt-2-17', reference: 'Mateus 2:17',
        text: 'Então se cumpriu o que foi dito pelo profeta Jeremias, que diz:',
        words: [{ word: 'CUMPRIU', display: 'CUMPRIU' }, { word: 'DITO', display: 'DITO' }, { word: 'PROFETA', display: 'PROFETA' }, { word: 'JEREMIAS', display: 'JEREMIAS' }]
      },
      {
        id: 'mt-2-18', reference: 'Mateus 2:18',
        text: 'Em Ramá se ouviu uma voz, Lamentação, choro e grande pranto: Raquel chorando os seus filhos, E não quer ser consolada, porque já não existem.',
        words: [{ word: 'RAMA', display: 'RAMÁ' }, { word: 'VOZ', display: 'VOZ' }, { word: 'LAMENTACAO', display: 'LAMENTAÇÃO' }, { word: 'CHORO', display: 'CHORO' }, { word: 'RAQUEL', display: 'RAQUEL' }, { word: 'FILHOS', display: 'FILHOS' }]
      },
      {
        id: 'mt-2-19', reference: 'Mateus 2:19',
        text: 'Morto, porém, Herodes, eis que o anjo do Senhor apareceu num sonho a José no Egito,',
        words: [{ word: 'MORTO', display: 'MORTO' }, { word: 'HERODES', display: 'HERODES' }, { word: 'ANJO', display: 'ANJO' }, { word: 'JOSE', display: 'JOSÉ' }, { word: 'EGITO', display: 'EGITO' }]
      },
      {
        id: 'mt-2-20', reference: 'Mateus 2:20',
        text: 'Dizendo: Levanta-te, e toma o menino e sua mãe, e vai para a terra de Israel; porque já estão mortos os que procuravam a morte do menino.',
        words: [{ word: 'MENINO', display: 'MENINO' }, { word: 'MAE', display: 'MÃE' }, { word: 'TERRA', display: 'TERRA' }, { word: 'ISRAEL', display: 'ISRAEL' }, { word: 'MORTE', display: 'MORTE' }]
      },
      {
        id: 'mt-2-21', reference: 'Mateus 2:21',
        text: 'Então ele se levantou, e tomou o menino e sua mãe, e foi para a terra de Israel.',
        words: [{ word: 'LEVANTOU', display: 'LEVANTOU' }, { word: 'MENINO', display: 'MENINO' }, { word: 'TERRA', display: 'TERRA' }, { word: 'ISRAEL', display: 'ISRAEL' }]
      },
      {
        id: 'mt-2-22', reference: 'Mateus 2:22',
        text: 'E, ouvindo que Arquelau reinava na Judéia em lugar de Herodes, seu pai, receou ir para lá; mas avisado num sonho, por divina revelação, foi para as partes da Galiléia.',
        words: [{ word: 'ARQUELAU', display: 'ARQUELAU' }, { word: 'JUDEIA', display: 'JUDÉIA' }, { word: 'HERODES', display: 'HERODES' }, { word: 'SONHO', display: 'SONHO' }, { word: 'GALILEIA', display: 'GALILÉIA' }]
      },
      {
        id: 'mt-2-23', reference: 'Mateus 2:23',
        text: 'E chegou, e habitou numa cidade chamada Nazaré, para que se cumprisse o que fora dito pelos profetas: Ele será chamado Nazareno.',
        words: [{ word: 'CIDADE', display: 'CIDADE' }, { word: 'NAZARE', display: 'NAZARÉ' }, { word: 'PROFETAS', display: 'PROFETAS' }, { word: 'NAZARENO', display: 'NAZARENO' }]
      },
      // --- MATEUS CAPÍTULO 3 ---
      {
        id: 'mt-3-1', reference: 'Mateus 3:1',
        text: 'E, naqueles dias, apareceu João o Batista pregando no deserto da Judéia,',
        words: [{ word: 'JOAO', display: 'JOÃO' }, { word: 'BATISTA', display: 'BATISTA' }, { word: 'DESERTO', display: 'DESERTO' }, { word: 'JUDEIA', display: 'JUDÉIA' }]
      },
      {
        id: 'mt-3-2', reference: 'Mateus 3:2',
        text: 'E dizendo: Arrependei-vos, porque é chegado o reino dos céus.',
        words: [{ word: 'ARREPENDEI', display: 'ARREPENDEI' }, { word: 'REINO', display: 'REINO' }, { word: 'CEUS', display: 'CÉUS' }]
      },
      {
        id: 'mt-3-3', reference: 'Mateus 3:3',
        text: 'Porque este é o anunciado pelo profeta Isaías, que disse: Voz do que clama no deserto: Preparai o caminho do Senhor, Endireitai as suas veredas.',
        words: [{ word: 'PROFETA', display: 'PROFETA' }, { word: 'ISAIAS', display: 'ISAÍAS' }, { word: 'VOZ', display: 'VOZ' }, { word: 'DESERTO', display: 'DESERTO' }, { word: 'CAMINHO', display: 'CAMINHO' }, { word: 'SENHOR', display: 'SENHOR' }]
      },
      {
        id: 'mt-3-4', reference: 'Mateus 3:4',
        text: 'E este João tinha as suas vestes de pelos de camelo, e um cinto de couro em torno de seus lombos; e alimentava-se de gafanhotos e de mel silvestre.',
        words: [{ word: 'JOAO', display: 'JOÃO' }, { word: 'VESTES', display: 'VESTES' }, { word: 'CAMELO', display: 'CAMELO' }, { word: 'COURO', display: 'COURO' }, { word: 'GAFANHOTOS', display: 'GAFANHOTOS' }, { word: 'MEL', display: 'MEL' }]
      },
      {
        id: 'mt-3-5', reference: 'Mateus 3:5',
        text: 'Então ia ter com ele Jerusalém, e toda a Judéia, e toda a província adjacente ao Jordão;',
        words: [{ word: 'JERUSALEM', display: 'JERUSALÉM' }, { word: 'JUDEIA', display: 'JUDÉIA' }, { word: 'PROVINCIA', display: 'PROVÍNCIA' }, { word: 'JORDAO', display: 'JORDÃO' }]
      },
      {
        id: 'mt-3-6', reference: 'Mateus 3:6',
        text: 'E eram por ele batizados no rio Jordão, confessando os seus pecados.',
        words: [{ word: 'BATIZADOS', display: 'BATIZADOS' }, { word: 'RIO', display: 'RIO' }, { word: 'JORDAO', display: 'JORDÃO' }, { word: 'CONFESSANDO', display: 'CONFESSANDO' }, { word: 'PECADOS', display: 'PECADOS' }]
      },
      {
        id: 'mt-3-7', reference: 'Mateus 3:7',
        text: 'E, vendo ele muitos dos fariseus e dos saduceus, que vinham ao seu batismo, dizia-lhes: Raça de víboras, quem vos ensinou a fugir da ira futura?',
        words: [{ word: 'FARISEUS', display: 'FARISEUS' }, { word: 'SADUCEUS', display: 'SADUCEUS' }, { word: 'BATISMO', display: 'BATISMO' }, { word: 'VIBORAS', display: 'VÍBORAS' }, { word: 'IRA', display: 'IRA' }]
      },
      {
        id: 'mt-3-8', reference: 'Mateus 3:8',
        text: 'Produzi, pois, frutos dignos de arrependimento;',
        words: [{ word: 'PRODUZI', display: 'PRODUZI' }, { word: 'FRUTOS', display: 'FRUTOS' }, { word: 'DIGNOS', display: 'DIGNOS' }, { word: 'ARREPENDIMENTO', display: 'ARREPENDIMENTO' }]
      },
      {
        id: 'mt-3-9', reference: 'Mateus 3:9',
        text: 'E não presumais, de vós mesmos, dizendo: Temos por pai a Abraão; porque eu vos digo que, mesmo destas pedras, Deus pode suscitar filhos a Abraão.',
        words: [{ word: 'ABRAAO', display: 'ABRAÃO' }, { word: 'PEDRAS', display: 'PEDRAS' }, { word: 'DEUS', display: 'DEUS' }, { word: 'FILHOS', display: 'FILHOS' }]
      },
      {
        id: 'mt-3-10', reference: 'Mateus 3:10',
        text: 'E também agora está posto o machado à raiz das árvores; toda a árvore, pois, que não produz bom fruto, é cortada e lançada no fogo.',
        words: [{ word: 'MACHADO', display: 'MACHADO' }, { word: 'RAIZ', display: 'RAIZ' }, { word: 'ARVORE', display: 'ÁRVORE' }, { word: 'FRUTO', display: 'FRUTO' }, { word: 'FOGO', display: 'FOGO' }]
      },
      {
        id: 'mt-3-11', reference: 'Mateus 3:11',
        text: 'E eu, em verdade, vos batizo com água, para o arrependimento; mas aquele que vem após mim é mais poderoso do que eu; cujas alparcas não sou digno de levar; ele vos batizará com o Espírito Santo, e com fogo.',
        words: [{ word: 'BATIZO', display: 'BATIZO' }, { word: 'AGUA', display: 'ÁGUA' }, { word: 'PODEROSO', display: 'PODEROSO' }, { word: 'ESPIRITO', display: 'ESPÍRITO' }, { word: 'SANTO', display: 'SANTO' }, { word: 'FOGO', display: 'FOGO' }]
      },
      {
        id: 'mt-3-12', reference: 'Mateus 3:12',
        text: 'Em sua mão tem a pá, e limpará a sua eira, e recolherá no celeiro o seu trigo, e queimará a palha com fogo que nunca se apagará.',
        words: [{ word: 'MAO', display: 'MÃO' }, { word: 'PA', display: 'PÁ' }, { word: 'EIRA', display: 'EIRA' }, { word: 'CELEIRO', display: 'CELEIRO' }, { word: 'TRIGO', display: 'TRIGO' }, { word: 'PALHA', display: 'PALHA' }]
      },
      {
        id: 'mt-3-13', reference: 'Mateus 3:13',
        text: 'Então veio Jesus da Galiléia ter com João, junto do Jordão, para ser batizado por ele.',
        words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'GALILEIA', display: 'GALILÉIA' }, { word: 'JOAO', display: 'JOÃO' }, { word: 'JORDAO', display: 'JORDÃO' }, { word: 'BATIZADO', display: 'BATIZADO' }]
      },
      {
        id: 'mt-3-14', reference: 'Mateus 3:14',
        text: 'Mas João opunha-se-lhe, dizendo: Eu careço de ser batizado por ti, e vens tu a mim?',
        words: [{ word: 'JOAO', display: 'JOÃO' }, { word: 'CARECO', display: 'CAREÇO' }, { word: 'BATIZADO', display: 'BATIZADO' }]
      },
      {
        id: 'mt-3-15', reference: 'Mateus 3:15',
        text: 'Jesus, porém, respondendo, disse-lhe: Deixa por agora, porque assim nos convém cumprir toda a justiça. Então ele o permitiu.',
        words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'CONVEM', display: 'CONVÉM' }, { word: 'CUMPRIR', display: 'CUMPRIR' }, { word: 'JUSTICA', display: 'JUSTIÇA' }]
      },
      {
        id: 'mt-3-16', reference: 'Mateus 3:16',
        text: 'E, sendo Jesus batizado, saiu logo da água, e eis que se lhe abriram os céus, e viu o Espírito de Deus descendo como pomba e vindo sobre ele.',
        words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'AGUA', display: 'ÁGUA' }, { word: 'CEUS', display: 'CÉUS' }, { word: 'ESPIRITO', display: 'ESPÍRITO' }, { word: 'DEUS', display: 'DEUS' }, { word: 'POMBA', display: 'POMBA' }]
      },
      {
        id: 'mt-3-17', reference: 'Mateus 3:17',
        text: 'E eis que uma voz dos céus dizia: Este é o meu Filho amado, em quem me comprazo.',
        words: [{ word: 'VOZ', display: 'VOZ' }, { word: 'CEUS', display: 'CÉUS' }, { word: 'FILHO', display: 'FILHO' }, { word: 'AMADO', display: 'AMADO' }, { word: 'COMPRAZO', display: 'COMPRAZO' }]
      },
      // --- MATEUS CAPÍTULO 4 ---
      {
        id: 'mt-4-1', reference: 'Mateus 4:1',
        text: 'Então foi conduzido Jesus pelo Espírito ao deserto, para ser tentado pelo diabo.',
        words: [{ word: 'CONDUZIDO', display: 'CONDUZIDO' }, { word: 'JESUS', display: 'JESUS' }, { word: 'ESPIRITO', display: 'ESPÍRITO' }, { word: 'DESERTO', display: 'DESERTO' }, { word: 'DIABO', display: 'DIABO' }]
      },
      {
        id: 'mt-4-2', reference: 'Mateus 4:2',
        text: 'E, tendo jejuado quarenta dias e quarenta noites, depois teve fome;',
        words: [{ word: 'JEJUADO', display: 'JEJUADO' }, { word: 'QUARENTA', display: 'QUARENTA' }, { word: 'DIAS', display: 'DIAS' }, { word: 'NOITES', display: 'NOITES' }, { word: 'FOME', display: 'FOME' }]
      },
      {
        id: 'mt-4-3', reference: 'Mateus 4:3',
        text: 'E, chegando-se a ele o tentador, disse: Se tu és o Filho de Deus, manda que estas pedras se tornem em pães.',
        words: [{ word: 'TENTADOR', display: 'TENTADOR' }, { word: 'FILHO', display: 'FILHO' }, { word: 'DEUS', display: 'DEUS' }, { word: 'PEDRAS', display: 'PEDRAS' }, { word: 'PAES', display: 'PÃES' }]
      },
      {
        id: 'mt-4-4', reference: 'Mateus 4:4',
        text: 'Ele, porém, respondendo, disse: Está escrito: Nem só de pão viverá o homem, mas de toda a palavra que sai da boca de Deus.',
        words: [{ word: 'ESCRITO', display: 'ESCRITO' }, { word: 'PAO', display: 'PÃO' }, { word: 'HOMEM', display: 'HOMEM' }, { word: 'PALAVRA', display: 'PALAVRA' }, { word: 'BOCA', display: 'BOCA' }, { word: 'DEUS', display: 'DEUS' }]
      },
      {
        id: 'mt-4-5', reference: 'Mateus 4:5',
        text: 'Então o diabo o transportou à cidade santa, e colocou-o sobre o pináculo do templo,',
        words: [{ word: 'DIABO', display: 'DIABO' }, { word: 'CIDADE', display: 'CIDADE' }, { word: 'SANTA', display: 'SANTA' }, { word: 'PINACULO', display: 'PINÁCULO' }, { word: 'TEMPLO', display: 'TEMPLO' }]
      },
      {
        id: 'mt-4-6', reference: 'Mateus 4:6',
        text: 'E disse-lhe: Se tu és o Filho de Deus, lança-te de aqui abaixo; porque está escrito: Que aos seus anjos dará ordens a teu respeito, E tomar-te-ão nas mãos, Para que nunca tropeces com o teu pé em alguma pedra.',
        words: [{ word: 'FILHO', display: 'FILHO' }, { word: 'DEUS', display: 'DEUS' }, { word: 'ANJOS', display: 'ANJOS' }, { word: 'MAOS', display: 'MÃOS' }, { word: 'PE', display: 'PÉ' }, { word: 'PEDRA', display: 'PEDRA' }]
      },
      {
        id: 'mt-4-7', reference: 'Mateus 4:7',
        text: 'Disse-lhe Jesus: Também está escrito: Não tentarás o Senhor teu Deus.',
        words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'ESCRITO', display: 'ESCRITO' }, { word: 'SENHOR', display: 'SENHOR' }, { word: 'DEUS', display: 'DEUS' }]
      },
      {
        id: 'mt-4-8', reference: 'Mateus 4:8',
        text: 'Novamente o transportou o diabo a um monte muito alto; e mostrou-lhe todos os reinos do mundo, e a glória deles.',
        words: [{ word: 'DIABO', display: 'DIABO' }, { word: 'MONTE', display: 'MONTE' }, { word: 'REINOS', display: 'REINOS' }, { word: 'MUNDO', display: 'MUNDO' }, { word: 'GLORIA', display: 'GLÓRIA' }]
      },
      {
        id: 'mt-4-9', reference: 'Mateus 4:9',
        text: 'E disse-lhe: Tudo isto te darei se, prostrado, me adorares.',
        words: [{ word: 'TUDO', display: 'TUDO' }, { word: 'DAREI', display: 'DAREI' }, { word: 'PROSTRADO', display: 'PROSTRADO' }, { word: 'ADORARES', display: 'ADORARES' }]
      },
      {
        id: 'mt-4-10', reference: 'Mateus 4:10',
        text: 'Então disse-lhe Jesus: Vai-te, Satanás, porque está escrito: Ao Senhor teu Deus adorarás, e só a ele servirás.',
        words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'SATANAS', display: 'SATANÁS' }, { word: 'ESCRITO', display: 'ESCRITO' }, { word: 'SENHOR', display: 'SENHOR' }, { word: 'DEUS', display: 'DEUS' }, { word: 'SERVIRAS', display: 'SERVIRÁS' }]
      },
      {
        id: 'mt-4-11', reference: 'Mateus 4:11',
        text: 'Então o diabo o deixou; e, eis que chegaram os anjos, e o serviam.',
        words: [{ word: 'DIABO', display: 'DIABO' }, { word: 'DEIXOU', display: 'DEIXOU' }, { word: 'ANJOS', display: 'ANJOS' }, { word: 'SERVIAM', display: 'SERVIAM' }]
      },
      {
        id: 'mt-4-12', reference: 'Mateus 4:12',
        text: 'Jesus, porém, ouvindo que João estava preso, voltou para a Galiléia;',
        words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'JOAO', display: 'JOÃO' }, { word: 'PRESO', display: 'PRESO' }, { word: 'GALILEIA', display: 'GALILÉIA' }]
      },
      {
        id: 'mt-4-13', reference: 'Mateus 4:13',
        text: 'E, deixando Nazaré, foi habitar em Cafarnaum, cidade marítima, nos confins de Zebulom e Naftali;',
        words: [{ word: 'NAZARE', display: 'NAZARÉ' }, { word: 'HABITAR', display: 'HABITAR' }, { word: 'CAFARNAUM', display: 'CAFARNAUM' }, { word: 'CIDADE', display: 'CIDADE' }, { word: 'ZEBULOM', display: 'ZEBULOM' }, { word: 'NAFTALI', display: 'NAFTALI' }]
      },
      {
        id: 'mt-4-14', reference: 'Mateus 4:14',
        text: 'Para que se cumprisse o que foi dito pelo profeta Isaías, que diz:',
        words: [{ word: 'CUMPRISSE', display: 'CUMPRISSE' }, { word: 'DITO', display: 'DITO' }, { word: 'PROFETA', display: 'PROFETA' }, { word: 'ISAIAS', display: 'ISAÍAS' }]
      },
      {
        id: 'mt-4-15', reference: 'Mateus 4:15',
        text: 'A terra de Zebulom, e a terra de Naftali, Junto ao caminho do mar, além do Jordão, A Galiléia das nações;',
        words: [{ word: 'ZEBULOM', display: 'ZEBULOM' }, { word: 'NAFTALI', display: 'NAFTALI' }, { word: 'CAMINHO', display: 'CAMINHO' }, { word: 'MAR', display: 'MAR' }, { word: 'JORDAO', display: 'JORDÃO' }, { word: 'GALILEIA', display: 'GALILÉIA' }]
      },
      {
        id: 'mt-4-16', reference: 'Mateus 4:16',
        text: 'O povo, que estava assentado em trevas, Viu uma grande luz; aos que estavam assentados na região e sombra da morte, A luz raiou.',
        words: [{ word: 'POVO', display: 'POVO' }, { word: 'TREVAS', display: 'TREVAS' }, { word: 'LUZ', display: 'LUZ' }, { word: 'REGIAO', display: 'REGIÃO' }, { word: 'SOMBRA', display: 'SOMBRA' }, { word: 'MORTE', display: 'MORTE' }]
      },
      {
        id: 'mt-4-17', reference: 'Mateus 4:17',
        text: 'Desde então começou Jesus a pregar, e a dizer: Arrependei-vos, porque é chegado o reino dos céus.',
        words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'PREGAR', display: 'PREGAR' }, { word: 'ARREPENDEI', display: 'ARREPENDEI' }, { word: 'REINO', display: 'REINO' }, { word: 'CEUS', display: 'CÉUS' }]
      },
      {
        id: 'mt-4-18', reference: 'Mateus 4:18',
        text: 'E Jesus, andando junto ao mar da Galiléia, viu a dois irmãos, Simão, chamado Pedro, e André, seu irmão, os quais lançavam as redes ao mar, porque eram pescadores;',
        words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'GALILEIA', display: 'GALILÉIA' }, { word: 'IRMAOS', display: 'IRMÃOS' }, { word: 'PEDRO', display: 'PEDRO' }, { word: 'ANDRE', display: 'ANDRÉ' }, { word: 'REDES', display: 'REDES' }, { word: 'PESCADORES', display: 'PESCADORES' }]
      },
      {
        id: 'mt-4-19', reference: 'Mateus 4:19',
        text: 'E disse-lhes: Vinde após mim, e eu vos farei pescadores de homens.',
        words: [{ word: 'VINDE', display: 'VINDE' }, { word: 'FAREI', display: 'FAREI' }, { word: 'PESCADORES', display: 'PESCADORES' }, { word: 'HOMENS', display: 'HOMENS' }]
      },
      {
        id: 'mt-4-20', reference: 'Mateus 4:20',
        text: 'Então eles, deixando logo as redes, seguiram-no.',
        words: [{ word: 'DEIXANDO', display: 'DEIXANDO' }, { word: 'LOGO', display: 'LOGO' }, { word: 'REDES', display: 'REDES' }, { word: 'SEGUIRAM', display: 'SEGUIRAM' }]
      },
      {
        id: 'mt-4-21', reference: 'Mateus 4:21',
        text: 'E, adiantando-se dali, viu outros dois irmãos, Tiago, filho de Zebedeu, e João, seu irmão, num barco com seu pai, Zebedeu, consertando as redes;',
        words: [{ word: 'IRMAOS', display: 'IRMÃOS' }, { word: 'TIAGO', display: 'TIAGO' }, { word: 'ZEBEDEU', display: 'ZEBEDEU' }, { word: 'JOAO', display: 'JOÃO' }, { word: 'BARCO', display: 'BARCO' }, { word: 'PAI', display: 'PAI' }]
      },
      {
        id: 'mt-4-22', reference: 'Mateus 4:22',
        text: 'E chamou-os; eles, deixando imediatamente o barco e seu pai, seguiram-no.',
        words: [{ word: 'CHAMOU', display: 'CHAMOU' }, { word: 'IMEDIATAMENTE', display: 'IMEDIATAMENTE' }, { word: 'BARCO', display: 'BARCO' }, { word: 'PAI', display: 'PAI' }, { word: 'SEGUIRAM', display: 'SEGUIRAM' }]
      },
      {
        id: 'mt-4-23', reference: 'Mateus 4:23',
        text: 'E percorria Jesus toda a Galiléia, ensinando nas suas sinagogas e pregando o evangelho do reino, e curando todas as enfermidades e moléstias entre o povo.',
        words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'GALILEIA', display: 'GALILÉIA' }, { word: 'SINAGOGAS', display: 'SINAGOGAS' }, { word: 'EVANGELHO', display: 'EVANGELHO' }, { word: 'ENFERMIDADES', display: 'ENFERMIDADES' }, { word: 'POVO', display: 'POVO' }]
      },
      {
        id: 'mt-4-24', reference: 'Mateus 4:24',
        text: 'E a sua fama correu por toda a Síria, e traziam-lhe todos os que padeciam, acometidos de várias enfermidades e tormentos, os endemoninhados, os lunáticos, e os paralíticos, e ele os curava.',
        words: [{ word: 'FAMA', display: 'FAMA' }, { word: 'SIRIA', display: 'SÍRIA' }, { word: 'ENFERMIDADES', display: 'ENFERMIDADES' }, { word: 'TORMENTOS', display: 'TORMENTOS' }, { word: 'LUNATICOS', display: 'LUNÁTICOS' }, { word: 'PARALITICOS', display: 'PARALÍTICOS' }]
      },
      {
        id: 'mt-4-25', reference: 'Mateus 4:25',
        text: 'E seguia-o uma grande multidão da Galiléia, de Decápolis, de Jerusalém, da Judéia, e de além do Jordão.',
        words: [{ word: 'SEGUIA', display: 'SEGUIA' }, { word: 'MULTIDAO', display: 'MULTIDÃO' }, { word: 'GALILEIA', display: 'GALILÉIA' }, { word: 'DECAPOLIS', display: 'DECÁPOLIS' }, { word: 'JERUSALEM', display: 'JERUSALÉM' }, { word: 'JUDEIA', display: 'JUDÉIA' }, { word: 'JORDAO', display: 'JORDÃO' }]
      }
    ]
  },
  { id: 'mark', name: 'Marcos', testament: 'New', totalVerses: 678, isLocked: true, levels: [] },
  { id: 'luke', name: 'Lucas', testament: 'New', totalVerses: 1151, isLocked: true, levels: [] },
  { 
    id: 'john', 
    name: 'João', 
    testament: 'New', 
    totalVerses: 879, 
    isLocked: false, 
    levels: [
      // --- JOÃO CAPÍTULO 1 ---
      { id: 'jn-1-1', reference: 'João 1:1', text: 'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.', words: [{ word: 'PRINCIPIO', display: 'PRINCÍPIO' }, { word: 'VERBO', display: 'VERBO' }, { word: 'DEUS', display: 'DEUS' }] },
      { id: 'jn-1-2', reference: 'João 1:2', text: 'Ele estava no princípio com Deus.', words: [{ word: 'PRINCIPIO', display: 'PRINCÍPIO' }, { word: 'DEUS', display: 'DEUS' }] },
      { id: 'jn-1-3', reference: 'João 1:3', text: 'Todas as coisas foram feitas por ele, e sem ele nada do que foi feito se fez.', words: [{ word: 'COISAS', display: 'COISAS' }, { word: 'FEITAS', display: 'FEITAS' }, { word: 'NADA', display: 'NADA' }] },
      { id: 'jn-1-4', reference: 'João 1:4', text: 'Nele estava a vida, e a vida era a luz dos homens.', words: [{ word: 'VIDA', display: 'VIDA' }, { word: 'LUZ', display: 'LUZ' }, { word: 'HOMENS', display: 'HOMENS' }] },
      { id: 'jn-1-5', reference: 'João 1:5', text: 'E a luz resplandece nas trevas, e as trevas não a compreenderam.', words: [{ word: 'LUZ', display: 'LUZ' }, { word: 'TREVAS', display: 'TREVAS' }, { word: 'COMPREENDERAM', display: 'COMPREENDERAM' }] },
      { id: 'jn-1-6', reference: 'João 1:6', text: 'Houve um homem enviado de Deus, cujo nome era João.', words: [{ word: 'HOMEM', display: 'HOMEM' }, { word: 'DEUS', display: 'DEUS' }, { word: 'JOAO', display: 'JOÃO' }] },
      { id: 'jn-1-7', reference: 'João 1:7', text: 'Este veio para testemunho, para que testificasse da luz, para que todos cressem por ele.', words: [{ word: 'TESTEMUNHO', display: 'TESTEMUNHO' }, { word: 'LUZ', display: 'LUZ' }, { word: 'CRESSEM', display: 'CRESSEM' }] },
      { id: 'jn-1-8', reference: 'João 1:8', text: 'Não era ele a luz, mas para que testificasse da luz.', words: [{ word: 'LUZ', display: 'LUZ' }, { word: 'TESTIFICASSE', display: 'TESTIFICASSE' }] },
      { id: 'jn-1-9', reference: 'João 1:9', text: 'Ali estava a luz verdadeira, que ilumina a todo o homem que vem ao mundo.', words: [{ word: 'LUZ', display: 'LUZ' }, { word: 'VERDADEIRA', display: 'VERDADEIRA' }, { word: 'MUNDO', display: 'MUNDO' }] },
      { id: 'jn-1-10', reference: 'João 1:10', text: 'Estava no mundo, e o mundo foi feito por ele, e o mundo não o conheceu.', words: [{ word: 'MUNDO', display: 'MUNDO' }, { word: 'FEITO', display: 'FEITO' }, { word: 'CONHECEU', display: 'CONHECEU' }] },
      { id: 'jn-1-11', reference: 'João 1:11', text: 'Veio para o que era seu, e os seus não o receberam.', words: [{ word: 'SEU', display: 'SEU' }, { word: 'RECEBERAM', display: 'RECEBERAM' }] },
      { id: 'jn-1-12', reference: 'João 1:12', text: 'Mas, a todos quantos o receberam, deu-lhes o poder de serem feitos filhos de Deus, aos que crêem no seu nome;', words: [{ word: 'PODER', display: 'PODER' }, { word: 'FILHOS', display: 'FILHOS' }, { word: 'DEUS', display: 'DEUS' }, { word: 'CREEM', display: 'CRÊEM' }] },
      { id: 'jn-1-13', reference: 'João 1:13', text: 'Os quais não nasceram do sangue, nem da vontade da carne, nem da vontade do homem, mas de Deus.', words: [{ word: 'SANGUE', display: 'SANGUE' }, { word: 'VONTADE', display: 'VONTADE' }, { word: 'CARNE', display: 'CARNE' }, { word: 'DEUS', display: 'DEUS' }] },
      { id: 'jn-1-14', reference: 'João 1:14', text: 'E o Verbo se fez carne, e habitou entre nós, e vimos a sua glória, como a glória do unigênito do Pai, cheio de graça e de verdade.', words: [{ word: 'VERBO', display: 'VERBO' }, { word: 'CARNE', display: 'CARNE' }, { word: 'GLORIA', display: 'GLÓRIA' }, { word: 'GRACA', display: 'GRAÇA' }, { word: 'VERDADE', display: 'VERDADE' }] },
      { id: 'jn-1-15', reference: 'João 1:15', text: 'João testificou dele, e clamou, dizendo: Este era aquele de quem eu dizia: O que vem após mim é antes de mim, porque foi primeiro do que eu.', words: [{ word: 'JOAO', display: 'JOÃO' }, { word: 'CLAMOU', display: 'CLAMOU' }, { word: 'PRIMEIRO', display: 'PRIMEIRO' }] },
      { id: 'jn-1-16', reference: 'João 1:16', text: 'E todos nós recebemos também da sua plenitude, e graça por graça.', words: [{ word: 'RECEBEMOS', display: 'RECEBEMOS' }, { word: 'PLENITUDE', display: 'PLENITUDE' }, { word: 'GRACA', display: 'GRAÇA' }] },
      { id: 'jn-1-17', reference: 'João 1:17', text: 'Porque a lei foi dada por Moisés; a graça e a verdade vieram por Jesus Cristo.', words: [{ word: 'LEI', display: 'LEI' }, { word: 'MOISES', display: 'MOISÉS' }, { word: 'GRACA', display: 'GRAÇA' }, { word: 'VERDADE', display: 'VERDADE' }, { word: 'JESUS', display: 'JESUS' }] },
      { id: 'jn-1-18', reference: 'João 1:18', text: 'Deus nunca foi visto por alguém. O Filho unigênito, que está no seio do Pai, esse o revelou.', words: [{ word: 'DEUS', display: 'DEUS' }, { word: 'ALGUEM', display: 'ALGUÉM' }, { word: 'FILHO', display: 'FILHO' }, { word: 'REVELOU', display: 'REVELOU' }] },
      { id: 'jn-1-19', reference: 'João 1:19', text: 'E este é o testemunho de João, quando os judeus mandaram de Jerusalém sacerdotes e levitas para que lhe perguntassem: Quem és tu?', words: [{ word: 'TESTEMUNHO', display: 'TESTEMUNHO' }, { word: 'JOAO', display: 'JOÃO' }, { word: 'JERUSALEM', display: 'JERUSALÉM' }, { word: 'SACERDOTES', display: 'SACERDOTES' }] },
      { id: 'jn-1-20', reference: 'João 1:20', text: 'E confessou, e não negou; confessou: Eu não sou o Cristo.', words: [{ word: 'CONFESSOU', display: 'CONFESSOU' }, { word: 'NEGOU', display: 'NEGOU' }, { word: 'CRISTO', display: 'CRISTO' }] },
      { id: 'jn-1-21', reference: 'João 1:21', text: 'E perguntaram-lhe: Então quê? És tu Elias? E disse: Não sou. És tu profeta? E respondeu: Não.', words: [{ word: 'ELIAS', display: 'ELIAS' }, { word: 'PROFETA', display: 'PROFETA' }, { word: 'NAO', display: 'NÃO' }] },
      { id: 'jn-1-22', reference: 'João 1:22', text: 'Disseram-lhe pois: Quem és? para que demos resposta àqueles que nos enviaram; que dizes de ti mesmo?', words: [{ word: 'RESPOSTA', display: 'RESPOSTA' }, { word: 'ENVIARAM', display: 'ENVIARAM' }, { word: 'MESMO', display: 'MESMO' }] },
      { id: 'jn-1-23', reference: 'João 1:23', text: 'Disse: Eu sou a voz do que clama no deserto: Endireitai o caminho do Senhor, como disse o profeta Isaías.', words: [{ word: 'VOZ', display: 'VOZ' }, { word: 'DESERTO', display: 'DESERTO' }, { word: 'CAMINHO', display: 'CAMINHO' }, { word: 'ISAIAS', display: 'ISAÍAS' }] },
      { id: 'jn-1-24', reference: 'João 1:24', text: 'E os que tinham sido enviados eram dos fariseus.', words: [{ word: 'ENVIADOS', display: 'ENVIADOS' }, { word: 'FARISEUS', display: 'FARISEUS' }] },
      { id: 'jn-1-25', reference: 'João 1:25', text: 'E perguntaram-lhe, e disseram-lhe: Por que batizas, pois, se tu não és o Cristo, nem Elias, nem o profeta?', words: [{ word: 'BATIZAS', display: 'BATIZAS' }, { word: 'CRISTO', display: 'CRISTO' }, { word: 'ELIAS', display: 'ELIAS' }, { word: 'PROFETA', display: 'PROFETA' }] },
      { id: 'jn-1-26', reference: 'João 1:26', text: 'João respondeu-lhes, dizendo: Eu batizo com água; mas no meio de vós está um a quem vós não conheceis.', words: [{ word: 'JOAO', display: 'JOÃO' }, { word: 'BATIZO', display: 'BATIZO' }, { word: 'AGUA', display: 'ÁGUA' }, { word: 'MEIO', display: 'MEIO' }] },
      { id: 'jn-1-27', reference: 'João 1:27', text: 'Este é aquele que vem após mim, que é antes de mim, do qual eu não sou digno de desatar a correia da alparca.', words: [{ word: 'APOS', display: 'APÓS' }, { word: 'ANTES', display: 'ANTES' }, { word: 'DIGNO', display: 'DIGNO' }, { word: 'CORREIA', display: 'CORREIA' }] },
      { id: 'jn-1-28', reference: 'João 1:28', text: 'Estas coisas aconteceram em Betabara, do outro lado do Jordão, onde João estava batizando.', words: [{ word: 'BETABARA', display: 'BETABARA' }, { word: 'JORDAO', display: 'JORDÃO' }, { word: 'JOAO', display: 'JOÃO' }, { word: 'BATIZANDO', display: 'BATIZANDO' }] },
      { id: 'jn-1-29', reference: 'João 1:29', text: 'No dia seguinte João viu a Jesus, que vinha para ele, e disse: Eis o Cordeiro de Deus, que tira o pecado do mundo.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'CORDEIRO', display: 'CORDEIRO' }, { word: 'DEUS', display: 'DEUS' }, { word: 'PECADO', display: 'PECADO' }] },
      { id: 'jn-1-30', reference: 'João 1:30', text: 'Este é aquele do qual eu disse: Após mim vem um homem que é antes de mim, porque foi primeiro do que eu.', words: [{ word: 'HOMEM', display: 'HOMEM' }, { word: 'PRIMEIRO', display: 'PRIMEIRO' }] },
      { id: 'jn-1-31', reference: 'João 1:31', text: 'E eu não o conhecia; mas, para que ele fosse manifestado a Israel, vim eu, por isso, batizando com água.', words: [{ word: 'CONHECIA', display: 'CONHECIA' }, { word: 'ISRAEL', display: 'ISRAEL' }, { word: 'BATIZANDO', display: 'BATIZANDO' }, { word: 'AGUA', display: 'ÁGUA' }] },
      { id: 'jn-1-32', reference: 'João 1:32', text: 'E João testificou, dizendo: Eu vi o Espírito descer do céu como pomba, e repousar sobre ele.', words: [{ word: 'JOAO', display: 'JOÃO' }, { word: 'ESPIRITO', display: 'ESPÍRITO' }, { word: 'CEU', display: 'CÉU' }, { word: 'POMBA', display: 'POMBA' }] },
      { id: 'jn-1-33', reference: 'João 1:33', text: 'E eu não o conhecia, mas o que me mandou a batizar com água, esse me disse: Sobre aquele que vires descer o Espírito, e sobre ele repousar, esse é o que batiza com o Espírito Santo.', words: [{ word: 'BATIZAR', display: 'BATIZAR' }, { word: 'ESPIRITO', display: 'ESPÍRITO' }, { word: 'REPOUSAR', display: 'REPOUSAR' }, { word: 'SANTO', display: 'SANTO' }] },
      { id: 'jn-1-34', reference: 'João 1:34', text: 'E eu vi, e tenho testificado que este é o Filho de Deus.', words: [{ word: 'TESTIFICADO', display: 'TESTIFICADO' }, { word: 'FILHO', display: 'FILHO' }, { word: 'DEUS', display: 'DEUS' }] },
      { id: 'jn-1-35', reference: 'João 1:35', text: 'No dia seguinte João estava outra vez ali, e dois dos seus discípulos;', words: [{ word: 'JOAO', display: 'JOÃO' }, { word: 'OUTRA', display: 'OUTRA' }, { word: 'DISCIPULOS', display: 'DISCÍPULOS' }] },
      { id: 'jn-1-36', reference: 'João 1:36', text: 'E, vendo passar a Jesus, disse: Eis aqui o Cordeiro de Deus.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'CORDEIRO', display: 'CORDEIRO' }, { word: 'DEUS', display: 'DEUS' }] },
      { id: 'jn-1-37', reference: 'João 1:37', text: 'E os dois discípulos ouviram-no dizer isto, e seguiram a Jesus.', words: [{ word: 'DISCIPULOS', display: 'DISCÍPULOS' }, { word: 'OUVIRAM', display: 'OUVIRAM' }, { word: 'SEGUIRAM', display: 'SEGUIRAM' }, { word: 'JESUS', display: 'JESUS' }] },
      { id: 'jn-1-38', reference: 'João 1:38', text: 'E Jesus, voltando-se e vendo que eles o seguiam, disse-lhes: Que buscais? E eles disseram: Rabi (que, traduzido, quer dizer Mestre), onde moras?', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'BUSCAIS', display: 'BUSCAIS' }, { word: 'RABI', display: 'RABI' }, { word: 'MESTRE', display: 'MESTRE' }] },
      { id: 'jn-1-39', reference: 'João 1:39', text: 'Ele lhes disse: Vinde, e vede. Foram, e viram onde morava, e ficaram com ele aquele dia; e era já quase a hora décima.', words: [{ word: 'VINDE', display: 'VINDE' }, { word: 'MORAVA', display: 'MORAVA' }, { word: 'FICARAM', display: 'FICARAM' }, { word: 'DECIMA', display: 'DÉCIMA' }] },
      { id: 'jn-1-40', reference: 'João 1:40', text: 'Era André, irmão de Simão Pedro, um dos dois que ouviram aquilo de João, e o haviam seguido.', words: [{ word: 'ANDRE', display: 'ANDRÉ' }, { word: 'SIMAO', display: 'SIMÃO' }, { word: 'PEDRO', display: 'PEDRO' }, { word: 'JOAO', display: 'JOÃO' }] },
      { id: 'jn-1-41', reference: 'João 1:41', text: 'Este achou primeiro a seu irmão Simão, e disse-lhe: Achamos o Messias (que, traduzido, é o Cristo).', words: [{ word: 'PRIMEIRO', display: 'PRIMEIRO' }, { word: 'SIMAO', display: 'SIMÃO' }, { word: 'MESSIAS', display: 'MESSIAS' }, { word: 'CRISTO', display: 'CRISTO' }] },
      { id: 'jn-1-42', reference: 'João 1:42', text: 'E levou-o a Jesus. E, olhando Jesus para ele, disse: Tu és Simão, filho de Jonas; tu serás chamado Cefas (que quer dizer Pedro).', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'SIMAO', display: 'SIMÃO' }, { word: 'JONAS', display: 'JONAS' }, { word: 'CEFAS', display: 'CEFAS' }, { word: 'PEDRO', display: 'PEDRO' }] },
      { id: 'jn-1-43', reference: 'João 1:43', text: 'No dia seguinte quis Jesus ir à Galiléia, e achou a Filipe, e disse-lhe: Segue-me.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'GALILEIA', display: 'GALILÉIA' }, { word: 'FILIPE', display: 'FILIPE' }, { word: 'SEGUE', display: 'SEGUE' }] },
      { id: 'jn-1-44', reference: 'João 1:44', text: 'E Filipe era de Betsaida, cidade de André e de Pedro.', words: [{ word: 'FILIPE', display: 'FILIPE' }, { word: 'BETSAIDA', display: 'BETSAIDA' }, { word: 'ANDRE', display: 'ANDRÉ' }, { word: 'PEDRO', display: 'PEDRO' }] },
      { id: 'jn-1-45', reference: 'João 1:45', text: 'Filipe achou Natanael, e disse-lhe: Havemos achado aquele de quem Moisés escreveu na lei, e os profetas: Jesus de Nazaré, filho de José.', words: [{ word: 'NATANAEL', display: 'NATANAEL' }, { word: 'MOISES', display: 'MOISÉS' }, { word: 'JESUS', display: 'JESUS' }, { word: 'NAZARE', display: 'NAZARÉ' }, { word: 'JOSE', display: 'JOSÉ' }] },
      { id: 'jn-1-46', reference: 'João 1:46', text: 'Disse-lhe Natanael: Pode vir alguma coisa boa de Nazaré? Disse-lhe Filipe: Vem, e vê.', words: [{ word: 'NATANAEL', display: 'NATANAEL' }, { word: 'COISA', display: 'COISA' }, { word: 'NAZARE', display: 'NAZARÉ' }, { word: 'FILIPE', display: 'FILIPE' }] },
      { id: 'jn-1-47', reference: 'João 1:47', text: 'Jesus viu Natanael vir ter com ele, e disse dele: Eis aqui um verdadeiro israelita, em quem não há dolo.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'NATANAEL', display: 'NATANAEL' }, { word: 'VERDADEIRO', display: 'VERDADEIRO' }, { word: 'ISRAELITA', display: 'ISRAELITA' }, { word: 'DOLO', display: 'DOLO' }] },
      { id: 'jn-1-48', reference: 'João 1:48', text: 'Disse-lhe Natanael: De onde me conheces tu? Jesus respondeu, e disse-lhe: Antes que Filipe te chamasse, te vi eu, estando tu debaixo da figueira.', words: [{ word: 'NATANAEL', display: 'NATANAEL' }, { word: 'CONHECES', display: 'CONHECES' }, { word: 'FILIPE', display: 'FILIPE' }, { word: 'FIGUEIRA', display: 'FIGUEIRA' }] },
      { id: 'jn-1-49', reference: 'João 1:49', text: 'Natanael respondeu, e disse-lhe: Rabi, tu és o Filho de Deus; tu és o Rei de Israel.', words: [{ word: 'NATANAEL', display: 'NATANAEL' }, { word: 'RABI', display: 'RABI' }, { word: 'FILHO', display: 'FILHO' }, { word: 'REI', display: 'REI' }, { word: 'ISRAEL', display: 'ISRAEL' }] },
      { id: 'jn-1-50', reference: 'João 1:50', text: 'Jesus respondeu, e disse-lhe: Porque te disse: Vi-te debaixo da figueira, crês? Coisas maiores do que estas verás.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'FIGUEIRA', display: 'FIGUEIRA' }, { word: 'CRES', display: 'CRÊS' }, { word: 'MAIORES', display: 'MAIORES' }] },
      { id: 'jn-1-51', reference: 'João 1:51', text: 'E disse-lhe: Na verdade, na verdade vos digo que daqui em diante vereis o céu aberto, e os anjos de Deus subindo e descendo sobre o Filho do homem.', words: [{ word: 'VERDADE', display: 'VERDADE' }, { word: 'CEU', display: 'CÉU' }, { word: 'ABERTO', display: 'ABERTO' }, { word: 'ANJOS', display: 'ANJOS' }, { word: 'HOMEM', display: 'HOMEM' }] },
      // --- JOÃO CAPÍTULO 2 ---
      { id: 'jn-2-1', reference: 'João 2:1', text: 'E, ao terceiro dia, fizeram-se umas bodas em Caná da Galiléia; e estava ali a mãe de Jesus.', words: [{ word: 'TERCEIRO', display: 'TERCEIRO' }, { word: 'BODAS', display: 'BODAS' }, { word: 'CANA', display: 'CANÁ' }, { word: 'GALILEIA', display: 'GALILÉIA' }, { word: 'JESUS', display: 'JESUS' }] },
      { id: 'jn-2-2', reference: 'João 2:2', text: 'E foi também convidado Jesus e os seus discípulos para as bodas.', words: [{ word: 'CONVIDADO', display: 'CONVIDADO' }, { word: 'JESUS', display: 'JESUS' }, { word: 'DISCIPULOS', display: 'DISCÍPULOS' }, { word: 'BODAS', display: 'BODAS' }] },
      { id: 'jn-2-3', reference: 'João 2:3', text: 'E, faltando vinho, a mãe de Jesus lhe disse: Não têm vinho.', words: [{ word: 'FALTANDO', display: 'FALTANDO' }, { word: 'VINHO', display: 'VINHO' }, { word: 'MAE', display: 'MÃE' }, { word: 'JESUS', display: 'JESUS' }] },
      { id: 'jn-2-4', reference: 'João 2:4', text: 'Disse-lhe Jesus: Mulher, que tenho eu contigo? Ainda não é chegada a minha hora.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'MULHER', display: 'MULHER' }, { word: 'CHEGADA', display: 'CHEGADA' }, { word: 'HORA', display: 'HORA' }] },
      { id: 'jn-2-5', reference: 'João 2:5', text: 'Sua mãe disse aos serventes: Fazei tudo quanto ele vos disser.', words: [{ word: 'MAE', display: 'MÃE' }, { word: 'SERVENTES', display: 'SERVENTES' }, { word: 'FAZEI', display: 'FAZEI' }, { word: 'DISSER', display: 'DISSER' }] },
      { id: 'jn-2-6', reference: 'João 2:6', text: 'E estavam ali postas seis talhas de pedra, para as purificações dos judeus, e em cada uma cabiam dois ou três almudes.', words: [{ word: 'TALHAS', display: 'TALHAS' }, { word: 'PEDRA', display: 'PEDRA' }, { word: 'PURIFICACOES', display: 'PURIFICAÇÕES' }, { word: 'JUDEUS', display: 'JUDEUS' }, { word: 'ALMUDES', display: 'ALMUDES' }] },
      { id: 'jn-2-7', reference: 'João 2:7', text: 'Disse-lhes Jesus: Enchei de água essas talhas. E encheram-nas até em cima.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'AGUA', display: 'ÁGUA' }, { word: 'TALHAS', display: 'TALHAS' }, { word: 'ENCHERAM', display: 'ENCHERAM' }, { word: 'CIMA', display: 'CIMA' }] },
      { id: 'jn-2-8', reference: 'João 2:8', text: 'E disse-lhes: Tirai agora, e levai ao mestre-sala. E levaram.', words: [{ word: 'TIRAI', display: 'TIRAI' }, { word: 'LEVAI', display: 'LEVAI' }, { word: 'MESTRE', display: 'MESTRE' }, { word: 'LEVARAM', display: 'LEVARAM' }] },
      { id: 'jn-2-9', reference: 'João 2:9', text: 'E, logo que o mestre-sala provou a água feita vinho (não sabendo de onde viera, se bem que o sabiam os serventes que tinham tirado a água), chamou o mestre-sala ao esposo,', words: [{ word: 'PROVOU', display: 'PROVOU' }, { word: 'AGUA', display: 'ÁGUA' }, { word: 'VINHO', display: 'VINHO' }, { word: 'SERVENTES', display: 'SERVENTES' }, { word: 'ESPOSO', display: 'ESPOSO' }] },
      { id: 'jn-2-10', reference: 'João 2:10', text: 'E disse-lhe: Todo o homem põe primeiro o vinho bom e, quando já têm bebido bem, então o inferior; mas tu guardaste até agora o bom vinho.', words: [{ word: 'HOMEM', display: 'HOMEM' }, { word: 'VINHO', display: 'VINHO' }, { word: 'BOM', display: 'BOM' }, { word: 'INFERIOR', display: 'INFERIOR' }] },
      { id: 'jn-2-11', reference: 'João 2:11', text: 'Jesus principiou assim os seus sinais em Caná da Galiléia, e manifestou a sua glória; e os seus discípulos creram nele.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'SINAIS', display: 'SINAIS' }, { word: 'CANA', display: 'CANÁ' }, { word: 'GLORIA', display: 'GLÓRIA' }, { word: 'CRERAM', display: 'CRERAM' }] },
      { id: 'jn-2-12', reference: 'João 2:12', text: 'Depois disto desceu a Cafarnaum, ele, e sua mãe, e seus irmãos, e seus discípulos; e ficaram ali não muitos dias.', words: [{ word: 'CAFARNAUM', display: 'CAFARNAUM' }, { word: 'MAE', display: 'MÃE' }, { word: 'IRMAOS', display: 'IRMÃOS' }, { word: 'DISCIPULOS', display: 'DISCÍPULOS' }] },
      { id: 'jn-2-13', reference: 'João 2:13', text: 'E estava próxima a páscoa dos judeus, e Jesus subiu a Jerusalém.', words: [{ word: 'PROXIMA', display: 'PRÓXIMA' }, { word: 'PASCOA', display: 'PÁSCOA' }, { word: 'JUDEUS', display: 'JUDEUS' }, { word: 'JERUSALEM', display: 'JERUSALÉM' }] },
      { id: 'jn-2-14', reference: 'João 2:14', text: 'E achou no templo os que vendiam bois, e ovelhas, e pombos, e os cambiadores assentados.', words: [{ word: 'TEMPLO', display: 'TEMPLO' }, { word: 'BOIS', display: 'BOIS' }, { word: 'OVELHAS', display: 'OVELHAS' }, { word: 'POMBOS', display: 'POMBOS' }, { word: 'CAMBIADORES', display: 'CAMBIADORES' }] },
      { id: 'jn-2-15', reference: 'João 2:15', text: 'E tendo feito um azorrague de cordéis, lançou todos fora do templo, também os bois e ovelhas; e espalhou o dinheiro dos cambiadores, e derribou as mesas;', words: [{ word: 'AZORRAGUE', display: 'AZORRAGUE' }, { word: 'TEMPLO', display: 'TEMPLO' }, { word: 'BOIS', display: 'BOIS' }, { word: 'DINHEIRO', display: 'DINHEIRO' }, { word: 'MESAS', display: 'MESAS' }] },
      { id: 'jn-2-16', reference: 'João 2:16', text: 'E disse aos que vendiam pombos: Tirai daqui estes, e não façais da casa de meu Pai casa de venda.', words: [{ word: 'POMBOS', display: 'POMBOS' }, { word: 'TIRAI', display: 'TIRAI' }, { word: 'CASA', display: 'CASA' }, { word: 'PAI', display: 'PAI' }, { word: 'VENDA', display: 'VENDA' }] },
      { id: 'jn-2-17', reference: 'João 2:17', text: 'E os seus discípulos lembraram-se do que está escrito: O zelo da tua casa me devorou.', words: [{ word: 'DISCIPULOS', display: 'DISCÍPULOS' }, { word: 'LEMBRARAM', display: 'LEMBRARAM' }, { word: 'ESCRITO', display: 'ESCRITO' }, { word: 'ZELO', display: 'ZELO' }, { word: 'CASA', display: 'CASA' }] },
      { id: 'jn-2-18', reference: 'João 2:18', text: 'Responderam, pois, os judeus, e disseram-lhe: Que sinal nos mostras para fazeres isto?', words: [{ word: 'RESPONDERAM', display: 'RESPONDERAM' }, { word: 'JUDEUS', display: 'JUDEUS' }, { word: 'SINAL', display: 'SINAL' }, { word: 'MOSTRAS', display: 'MOSTRAS' }] },
      { id: 'jn-2-19', reference: 'João 2:19', text: 'Jesus respondeu, e disse-lhes: Derribai este templo, e em três dias o levantarei.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'DERRIBAI', display: 'DERRIBAI' }, { word: 'TEMPLO', display: 'TEMPLO' }, { word: 'TRES', display: 'TRÊS' }, { word: 'LEVANTAREI', display: 'LEVANTAREI' }] },
      { id: 'jn-2-20', reference: 'João 2:20', text: 'Disseram, pois, os judeus: Em quarenta e seis anos foi edificado este templo, e tu o levantarás em três dias?', words: [{ word: 'JUDEUS', display: 'JUDEUS' }, { word: 'QUARENTA', display: 'QUARENTA' }, { word: 'ANOS', display: 'ANOS' }, { word: 'TEMPLO', display: 'TEMPLO' }, { word: 'TRES', display: 'TRÊS' }] },
      { id: 'jn-2-21', reference: 'João 2:21', text: 'Mas ele falava do templo do seu corpo.', words: [{ word: 'FALAVA', display: 'FALAVA' }, { word: 'TEMPLO', display: 'TEMPLO' }, { word: 'SEU', display: 'SEU' }, { word: 'CORPO', display: 'CORPO' }] },
      { id: 'jn-2-22', reference: 'João 2:22', text: 'Quando, pois, ressuscitou dentre os mortos, os seus discípulos lembraram-se de que lhes dissera isto; e creram na Escritura, e na palavra que Jesus tinha dito.', words: [{ word: 'RESSUSCITOU', display: 'RESSUSCITOU' }, { word: 'DISCIPULOS', display: 'DISCÍPULOS' }, { word: 'LEMBRARAM', display: 'LEMBRARAM' }, { word: 'ESCRITURA', display: 'ESCRITURA' }, { word: 'PALAVRA', display: 'PALAVRA' }] },
      { id: 'jn-2-23', reference: 'João 2:23', text: 'E, estando ele em Jerusalém pela páscoa, durante a festa, muitos, vendo os sinais que fazia, creram no seu nome.', words: [{ word: 'JERUSALEM', display: 'JERUSALÉM' }, { word: 'PASCOA', display: 'PÁSCOA' }, { word: 'FESTA', display: 'FESTA' }, { word: 'SINAIS', display: 'SINAIS' }, { word: 'CRERAM', display: 'CRERAM' }] },
      { id: 'jn-2-24', reference: 'João 2:24', text: 'Mas o mesmo Jesus não confiava neles, porque a todos conhecia;', words: [{ word: 'MESMO', display: 'MESMO' }, { word: 'JESUS', display: 'JESUS' }, { word: 'CONFIAVA', display: 'CONFIAVA' }, { word: 'CONHECIA', display: 'CONHECIA' }] },
      { id: 'jn-2-25', reference: 'João 2:25', text: 'E não necessitava de que alguém testificasse do homem, porque ele bem sabia o que havia no homem.', words: [{ word: 'NECESSITAVA', display: 'NECESSITAVA' }, { word: 'ALGUEM', display: 'ALGUÉM' }, { word: 'TESTIFICASSE', display: 'TESTIFICASSE' }, { word: 'HOMEM', display: 'HOMEM' }] },
      // --- JOÃO CAPÍTULO 3 ---
      { id: 'jn-3-1', reference: 'João 3:1', text: 'E havia entre os fariseus um homem, chamado Nicodemos, príncipe dos judeus.', words: [{ word: 'FARISEUS', display: 'FARISEUS' }, { word: 'HOMEM', display: 'HOMEM' }, { word: 'NICODEMOS', display: 'NICODEMOS' }, { word: 'PRINCIPE', display: 'PRÍNCIPE' }, { word: 'JUDEUS', display: 'JUDEUS' }] },
      { id: 'jn-3-2', reference: 'João 3:2', text: 'Este foi ter de noite com Jesus, e disse-lhe: Rabi, bem sabemos que és Mestre, vindo de Deus; porque ninguém pode fazer estes sinais que tu fazes, se Deus não for com ele.', words: [{ word: 'NOITE', display: 'NOITE' }, { word: 'RABI', display: 'RABI' }, { word: 'MESTRE', display: 'MESTRE' }, { word: 'SINAIS', display: 'SINAIS' }, { word: 'DEUS', display: 'DEUS' }] },
      { id: 'jn-3-3', reference: 'João 3:3', text: 'Jesus respondeu, e disse-lhe: Na verdade, na verdade te digo que aquele que não nascer de novo, não pode ver o reino de Deus.', words: [{ word: 'VERDADE', display: 'VERDADE' }, { word: 'NASCER', display: 'NASCER' }, { word: 'NOVO', display: 'NOVO' }, { word: 'REINO', display: 'REINO' }, { word: 'DEUS', display: 'DEUS' }] },
      { id: 'jn-3-4', reference: 'João 3:4', text: 'Disse-lhe Nicodemos: Como pode um homem nascer, sendo velho? Pode, porventura, tornar a entrar no ventre de sua mãe, e nascer?', words: [{ word: 'NICODEMOS', display: 'NICODEMOS' }, { word: 'HOMEM', display: 'HOMEM' }, { word: 'VELHO', display: 'VELHO' }, { word: 'VENTRE', display: 'VENTRE' }, { word: 'MAE', display: 'MÃE' }] },
      { id: 'jn-3-5', reference: 'João 3:5', text: 'Jesus respondeu: Na verdade, na verdade te digo que aquele que não nascer da água e do Espírito, não pode entrar no reino de Deus.', words: [{ word: 'AGUA', display: 'ÁGUA' }, { word: 'ESPIRITO', display: 'ESPÍRITO' }, { word: 'ENTRAR', display: 'ENTRAR' }, { word: 'REINO', display: 'REINO' }, { word: 'DEUS', display: 'DEUS' }] },
      { id: 'jn-3-6', reference: 'João 3:6', text: 'O que é nascido da carne é carne, e o que é nascido do Espírito é espírito.', words: [{ word: 'NASCIDO', display: 'NASCIDO' }, { word: 'CARNE', display: 'CARNE' }, { word: 'ESPIRITO', display: 'ESPÍRITO' }] },
      { id: 'jn-3-7', reference: 'João 3:7', text: 'Não te maravilhes de te ter dito: Necessário vos é nascer de novo.', words: [{ word: 'MARAVILHES', display: 'MARAVILHES' }, { word: 'NECESSARIO', display: 'NECESSÁRIO' }, { word: 'NASCER', display: 'NASCER' }, { word: 'NOVO', display: 'NOVO' }] },
      { id: 'jn-3-8', reference: 'João 3:8', text: 'O vento assopra onde quer, e ouves a sua voz, mas não sabes de onde vem, nem para onde vai; assim é todo aquele que é nascido do Espírito.', words: [{ word: 'VENTO', display: 'VENTO' }, { word: 'ASSOPRA', display: 'ASSOPRA' }, { word: 'VOZ', display: 'VOZ' }, { word: 'NASCIDO', display: 'NASCIDO' }, { word: 'ESPIRITO', display: 'ESPÍRITO' }] },
      { id: 'jn-3-9', reference: 'João 3:9', text: 'Nicodemos respondeu, e disse-lhe: Como pode ser isso?', words: [{ word: 'NICODEMOS', display: 'NICODEMOS' }, { word: 'COMO', display: 'COMO' }, { word: 'PODE', display: 'PODE' }, { word: 'SER', display: 'SER' }, { word: 'ISSO', display: 'ISSO' }] },
      { id: 'jn-3-10', reference: 'João 3:10', text: 'Jesus respondeu, e disse-lhe: Tu és mestre de Israel, e não sabes isto?', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'MESTRE', display: 'MESTRE' }, { word: 'ISRAEL', display: 'ISRAEL' }, { word: 'SABES', display: 'SABES' }] },
      { id: 'jn-3-11', reference: 'João 3:11', text: 'Na verdade, na verdade te digo que nós dizemos o que sabemos, e testificamos o que vimos; e não aceitais o nosso testemunho.', words: [{ word: 'VERDADE', display: 'VERDADE' }, { word: 'SABEMOS', display: 'SABEMOS' }, { word: 'VIMOS', display: 'VIMOS' }, { word: 'TESTEMUNHO', display: 'TESTEMUNHO' }] },
      { id: 'jn-3-12', reference: 'João 3:12', text: 'Se vos falei de coisas terrestres, e não crestes, como crereis, se vos falar das celestiais?', words: [{ word: 'COISAS', display: 'COISAS' }, { word: 'TERRESTRES', display: 'TERRESTRES' }, { word: 'CRESTES', display: 'CRESTES' }, { word: 'CELESTIAIS', display: 'CELESTIAIS' }] },
      { id: 'jn-3-13', reference: 'João 3:13', text: 'Ora, ninguém subiu ao céu, senão o que desceu do céu, o Filho do homem, que está no céu.', words: [{ word: 'NINGUEM', display: 'NINGUÉM' }, { word: 'SUBIU', display: 'SUBIU' }, { word: 'CEU', display: 'CÉU' }, { word: 'FILHO', display: 'FILHO' }, { word: 'HOMEM', display: 'HOMEM' }] },
      { id: 'jn-3-14', reference: 'João 3:14', text: 'E, como Moisés levantou a serpente no deserto, assim importa que o Filho do homem seja levantado;', words: [{ word: 'MOISES', display: 'MOISÉS' }, { word: 'SERPENTE', display: 'SERPENTE' }, { word: 'DESERTO', display: 'DESERTO' }, { word: 'LEVANTADO', display: 'LEVANTADO' }] },
      { id: 'jn-3-15', reference: 'João 3:15', text: 'Para que todo aquele que nele crê não pereça, mas tenha a vida eterna.', words: [{ word: 'TODO', display: 'TODO' }, { word: 'CRE', display: 'CRÊ' }, { word: 'PERECA', display: 'PEREÇA' }, { word: 'VIDA', display: 'VIDA' }, { word: 'ETERNA', display: 'ETERNA' }] },
      { id: 'jn-3-16', reference: 'João 3:16', text: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.', words: [{ word: 'DEUS', display: 'DEUS' }, { word: 'MUNDO', display: 'MUNDO' }, { word: 'FILHO', display: 'FILHO' }, { word: 'PERECA', display: 'PEREÇA' }, { word: 'VIDA', display: 'VIDA' }] },
      { id: 'jn-3-17', reference: 'João 3:17', text: 'Porque Deus enviou o seu Filho ao mundo, não para que condenasse o mundo, mas para que o mundo fosse salvo por ele.', words: [{ word: 'DEUS', display: 'DEUS' }, { word: 'ENVIOU', display: 'ENVIOU' }, { word: 'MUNDO', display: 'MUNDO' }, { word: 'SALVO', display: 'SALVO' }] },
      { id: 'jn-3-18', reference: 'João 3:18', text: 'Quem crê nele não é condenado; mas quem não crê já está condenado, porquanto não crê no nome do unigênito Filho de Deus.', words: [{ word: 'CRE', display: 'CRÊ' }, { word: 'CONDENADO', display: 'CONDENADO' }, { word: 'NOME', display: 'NOME' }, { word: 'FILHO', display: 'FILHO' }, { word: 'DEUS', display: 'DEUS' }] },
      { id: 'jn-3-19', reference: 'João 3:19', text: 'E a condenação é esta: Que a luz veio ao mundo, e os homens amaram mais as trevas do que a luz, porque as suas obras eram más.', words: [{ word: 'CONDENACAO', display: 'CONDENAÇÃO' }, { word: 'LUZ', display: 'LUZ' }, { word: 'MUNDO', display: 'MUNDO' }, { word: 'TREVAS', display: 'TREVAS' }, { word: 'OBRAS', display: 'OBRAS' }] },
      { id: 'jn-3-20', reference: 'João 3:20', text: 'Porque todo aquele que faz o mal odeia a luz, e não vem para a luz, para que as suas obras não sejam reprovadas.', words: [{ word: 'MAL', display: 'MAL' }, { word: 'ODEIA', display: 'ODEIA' }, { word: 'LUZ', display: 'LUZ' }, { word: 'OBRAS', display: 'OBRAS' }, { word: 'REPROVADAS', display: 'REPROVADAS' }] },
      { id: 'jn-3-21', reference: 'João 3:21', text: 'Mas quem pratica a verdade vem para a luz, a fim de que as suas obras sejam manifestas, porque são feitas em Deus.', words: [{ word: 'PRATICA', display: 'PRÁTICA' }, { word: 'VERDADE', display: 'VERDADE' }, { word: 'LUZ', display: 'LUZ' }, { word: 'OBRAS', display: 'OBRAS' }, { word: 'DEUS', display: 'DEUS' }] },
      { id: 'jn-3-22', reference: 'João 3:22', text: 'Depois disto foi Jesus com os seus discípulos para a terra da Judéia; e estava ali com eles, e batizava.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'DISCIPULOS', display: 'DISCÍPULOS' }, { word: 'TERRA', display: 'TERRA' }, { word: 'JUDEIA', display: 'JUDÉIA' }, { word: 'BATIZAVA', display: 'BATIZAVA' }] },
      { id: 'jn-3-23', reference: 'João 3:23', text: 'Ora, João batizava também em Enom, junto a Salim, porque havia ali muitas águas; e vinham ali, e eram batizados.', words: [{ word: 'JOAO', display: 'JOÃO' }, { word: 'BATIZAVA', display: 'BATIZAVA' }, { word: 'MUITAS', display: 'MUITAS' }, { word: 'AGUAS', display: 'ÁGUAS' }, { word: 'BATIZADOS', display: 'BATIZADOS' }] },
      { id: 'jn-3-24', reference: 'João 3:24', text: 'Porque ainda João não tinha sido lançado na prisão.', words: [{ word: 'JOAO', display: 'JOÃO' }, { word: 'LANCADO', display: 'LANÇADO' }, { word: 'PRISAO', display: 'PRISÃO' }] },
      { id: 'jn-3-25', reference: 'João 3:25', text: 'Houve então uma questão entre os discípulos de João e os judeus acerca da purificação.', words: [{ word: 'QUESTAO', display: 'QUESTÃO' }, { word: 'DISCIPULOS', display: 'DISCÍPULOS' }, { word: 'JOAO', display: 'JOÃO' }, { word: 'JUDEUS', display: 'JUDEUS' }, { word: 'PURIFICACAO', display: 'PURIFICAÇÃO' }] },
      { id: 'jn-3-26', reference: 'João 3:26', text: 'E foram ter com João, e disseram-lhe: Rabi, aquele que estava contigo além do Jordão, do qual tu deste testemunho, ei-lo batizando, e todos vão ter com ele.', words: [{ word: 'JOAO', display: 'JOÃO' }, { word: 'RABI', display: 'RABI' }, { word: 'JORDAO', display: 'JORDÃO' }, { word: 'TESTEMUNHO', display: 'TESTEMUNHO' }, { word: 'BATIZANDO', display: 'BATIZANDO' }] },
      { id: 'jn-3-27', reference: 'João 3:27', text: 'João respondeu, e disse: O homem não pode receber coisa alguma, se não lhe for dada do céu.', words: [{ word: 'JOAO', display: 'JOÃO' }, { word: 'HOMEM', display: 'HOMEM' }, { word: 'RECEBER', display: 'RECEBER' }, { word: 'COISA', display: 'COISA' }, { word: 'CEU', display: 'CÉU' }] },
      { id: 'jn-3-28', reference: 'João 3:28', text: 'Vós mesmos me sois testemunhas de que disse: Eu não sou o Cristo, mas sou enviado adiante dele.', words: [{ word: 'MESMOS', display: 'MESMOS' }, { word: 'TESTEMUNHAS', display: 'TESTEMUNHAS' }, { word: 'CRISTO', display: 'CRISTO' }, { word: 'ENVIADO', display: 'ENVIADO' }] },
      { id: 'jn-3-29', reference: 'João 3:29', text: 'Aquele que tem a esposa é o esposo; mas o amigo do esposo, que lhe assiste e o ouve, alegra-se muito com a voz do esposo. Assim, pois, já este meu gozo está cumprido.', words: [{ word: 'ESPOSA', display: 'ESPOSA' }, { word: 'ESPOSO', display: 'ESPOSO' }, { word: 'AMIGO', display: 'AMIGO' }, { word: 'VOZ', display: 'VOZ' }, { word: 'GOZO', display: 'GOZO' }] },
      { id: 'jn-3-30', reference: 'João 3:30', text: 'É necessário que ele cresça e que eu diminua.', words: [{ word: 'NECESSARIO', display: 'NECESSÁRIO' }, { word: 'CRESCA', display: 'CRESÇA' }, { word: 'DIMINUA', display: 'DIMINUA' }] },
      { id: 'jn-3-31', reference: 'João 3:31', text: 'Aquele que vem de cima é sobre todos; aquele que vem da terra é da terra e fala da terra. Aquele que vem do céu é sobre todos.', words: [{ word: 'CIMA', display: 'CIMA' }, { word: 'TERRA', display: 'TERRA' }, { word: 'FALA', display: 'FALA' }, { word: 'CEU', display: 'CÉU' }] },
      { id: 'jn-3-32', reference: 'João 3:32', text: 'E aquilo que ele viu e ouviu isso testifica; e ninguém aceita o seu testemunho.', words: [{ word: 'VIU', display: 'VIU' }, { word: 'OUVIU', display: 'OUVIU' }, { word: 'TESTIFICA', display: 'TESTIFICA' }, { word: 'TESTEMUNHO', display: 'TESTEMUNHO' }] },
      { id: 'jn-3-33', reference: 'João 3:33', text: 'Aquele que aceitou o seu testemunho, esse confirmou que Deus é verdadeiro.', words: [{ word: 'ACEITOU', display: 'ACEITOU' }, { word: 'TESTEMUNHO', display: 'TESTEMUNHO' }, { word: 'DEUS', display: 'DEUS' }, { word: 'VERDADEIRO', display: 'VERDADEIRO' }] },
      { id: 'jn-3-34', reference: 'João 3:34', text: 'Porque aquele que Deus enviou fala as palavras de Deus; pois não lhe dá Deus o Espírito por medida.', words: [{ word: 'DEUS', display: 'DEUS' }, { word: 'ENVIOU', display: 'ENVIOU' }, { word: 'PALAVRAS', display: 'PALAVRAS' }, { word: 'ESPIRITO', display: 'ESPÍRITO' }] },
      { id: 'jn-3-35', reference: 'João 3:35', text: 'O Pai ama o Filho, e todas as coisas entregou nas suas mãos.', words: [{ word: 'PAI', display: 'PAI' }, { word: 'AMA', display: 'AMA' }, { word: 'FILHO', display: 'FILHO' }, { word: 'COISAS', display: 'COISAS' }, { word: 'MAOS', display: 'MÃOS' }] },
      { id: 'jn-3-36', reference: 'João 3:36', text: 'Aquele que crê no Filho tem a vida eterna; mas aquele que não crê no Filho não verá a vida, mas a ira de Deus sobre ele permanece.', words: [{ word: 'CRE', display: 'CRÊ' }, { word: 'FILHO', display: 'FILHO' }, { word: 'VIDA', display: 'VIDA' }, { word: 'ETERNA', display: 'ETERNA' }, { word: 'IRA', display: 'IRA' }] },
      // --- JOÃO CAPÍTULO 4 ---
      { id: 'jn-4-1', reference: 'João 4:1', text: 'E quando o Senhor entendeu que os fariseus tinham ouvido que Jesus fazia e batizava mais discípulos do que João', words: [{ word: 'SENHOR', display: 'SENHOR' }, { word: 'FARISEUS', display: 'FARISEUS' }, { word: 'JESUS', display: 'JESUS' }, { word: 'BATIZAVA', display: 'BATIZAVA' }, { word: 'JOAO', display: 'JOÃO' }] },
      { id: 'jn-4-2', reference: 'João 4:2', text: '(Ainda que Jesus mesmo não batizava, mas os seus discípulos),', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'BATIZAVA', display: 'BATIZAVA' }, { word: 'DISCIPULOS', display: 'DISCÍPULOS' }] },
      { id: 'jn-4-3', reference: 'João 4:3', text: 'Deixou a Judéia, e foi outra vez para a Galiléia.', words: [{ word: 'DEIXOU', display: 'DEIXOU' }, { word: 'JUDEIA', display: 'JUDÉIA' }, { word: 'OUTRA', display: 'OUTRA' }, { word: 'GALILEIA', display: 'GALILÉIA' }] },
      { id: 'jn-4-4', reference: 'João 4:4', text: 'E era-lhe necessário passar por Samaria.', words: [{ word: 'NECESSARIO', display: 'NECESSÁRIO' }, { word: 'PASSAR', display: 'PASSAR' }, { word: 'SAMARIA', display: 'SAMARIA' }] },
      { id: 'jn-4-5', reference: 'João 4:5', text: 'Foi, pois, a uma cidade de Samaria, chamada Sicar, junto da herdade que Jacó tinha dado a seu filho José.', words: [{ word: 'SAMARIA', display: 'SAMARIA' }, { word: 'SICAR', display: 'SICAR' }, { word: 'JACO', display: 'JACÓ' }, { word: 'FILHO', display: 'FILHO' }, { word: 'JOSE', display: 'JOSÉ' }] },
      { id: 'jn-4-6', reference: 'João 4:6', text: 'E estava ali a fonte de Jacó. Jesus, pois, cansado do caminho, assentou-se assim junto da fonte. Era isto quase à hora sexta.', words: [{ word: 'FONTE', display: 'FONTE' }, { word: 'JACO', display: 'JACÓ' }, { word: 'JESUS', display: 'JESUS' }, { word: 'CANSADO', display: 'CANSADO' }, { word: 'SEXTA', display: 'SEXTA' }] },
      { id: 'jn-4-7', reference: 'João 4:7', text: 'Veio uma mulher de Samaria tirar água. Disse-lhe Jesus: Dá-me de beber.', words: [{ word: 'MULHER', display: 'MULHER' }, { word: 'SAMARIA', display: 'SAMARIA' }, { word: 'AGUA', display: 'ÁGUA' }, { word: 'JESUS', display: 'JESUS' }, { word: 'BEBER', display: 'BEBER' }] },
      { id: 'jn-4-8', reference: 'João 4:8', text: 'Porque os seus discípulos tinham ido à cidade comprar comida.', words: [{ word: 'DISCIPULOS', display: 'DISCÍPULOS' }, { word: 'CIDADE', display: 'CIDADE' }, { word: 'COMPRAR', display: 'COMPRAR' }, { word: 'COMIDA', display: 'COMIDA' }] },
      { id: 'jn-4-9', reference: 'João 4:9', text: 'Disse-lhe, pois, a mulher samaritana: Como, sendo tu judeu, me pedes de beber a mim, que sou mulher samaritana? (porque os judeus não se comunicam com os samaritanos).', words: [{ word: 'MULHER', display: 'MULHER' }, { word: 'SAMARITANA', display: 'SAMARITANA' }, { word: 'JUDEU', display: 'JUDEU' }, { word: 'BEBER', display: 'BEBER' }, { word: 'SAMARITANOS', display: 'SAMARITANOS' }] },
      { id: 'jn-4-10', reference: 'João 4:10', text: 'Jesus respondeu, e disse-lhe: Se tu conheceras o dom de Deus, e quem é o que te diz: Dá-me de beber, tu lhe pedirias, e ele te daria água viva.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'DOM', display: 'DOM' }, { word: 'DEUS', display: 'DEUS' }, { word: 'BEBER', display: 'BEBER' }, { word: 'AGUA', display: 'ÁGUA' }, { word: 'VIVA', display: 'VIVA' }] },
      { id: 'jn-4-11', reference: 'João 4:11', text: 'Disse-lhe a mulher: Senhor, tu não tens com que a tirar, e o poço é fundo; onde, pois, tens a água viva?', words: [{ word: 'MULHER', display: 'MULHER' }, { word: 'POCO', display: 'POÇO' }, { word: 'FUNDO', display: 'FUNDO' }, { word: 'AGUA', display: 'ÁGUA' }, { word: 'VIVA', display: 'VIVA' }] },
      { id: 'jn-4-12', reference: 'João 4:12', text: 'És tu maior do que o nosso pai Jacó, que nos deu o poço, bebendo ele próprio dele, e os seus filhos, e o seu gado?', words: [{ word: 'MAIOR', display: 'MAIOR' }, { word: 'PAI', display: 'PAI' }, { word: 'JACO', display: 'JACÓ' }, { word: 'POCO', display: 'POÇO' }, { word: 'GADO', display: 'GADO' }] },
      { id: 'jn-4-13', reference: 'João 4:13', text: 'Jesus respondeu, e disse-lhe: Qualquer que beber desta água tornará a ter sede;', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'BEBER', display: 'BEBER' }, { word: 'AGUA', display: 'ÁGUA' }, { word: 'SEDE', display: 'SEDE' }] },
      { id: 'jn-4-14', reference: 'João 4:14', text: 'Mas aquele que beber da água que eu lhe der nunca terá sede, porque a água que eu lhe der se fará nele uma fonte de água que salte para a vida eterna.', words: [{ word: 'BEBER', display: 'BEBER' }, { word: 'AGUA', display: 'ÁGUA' }, { word: 'SEDE', display: 'SEDE' }, { word: 'FONTE', display: 'FONTE' }, { word: 'VIDA', display: 'VIDA' }, { word: 'ETERNA', display: 'ETERNA' }] },
      { id: 'jn-4-15', reference: 'João 4:15', text: 'Disse-lhe a mulher: Senhor, dá-me dessa água, para que não mais tenha sede, e não venha aqui tirá-la.', words: [{ word: 'MULHER', display: 'MULHER' }, { word: 'AGUA', display: 'ÁGUA' }, { word: 'SEDE', display: 'SEDE' }, { word: 'VENHA', display: 'VENHA' }] },
      { id: 'jn-4-16', reference: 'João 4:16', text: 'Disse-lhe Jesus: Vai, chama o teu marido, e vem cá.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'CHAMA', display: 'CHAMA' }, { word: 'MARIDO', display: 'MARIDO' }] },
      { id: 'jn-4-17', reference: 'João 4:17', text: 'A mulher respondeu, e disse: Não tenho marido. Disse-lhe Jesus: Disseste bem: Não tenho marido;', words: [{ word: 'MULHER', display: 'MULHER' }, { word: 'MARIDO', display: 'MARIDO' }, { word: 'JESUS', display: 'JESUS' }, { word: 'DISSESTE', display: 'DISSESTE' }] },
      { id: 'jn-4-18', reference: 'João 4:18', text: 'Porque tiveste cinco maridos, e o que agora tens não é teu marido; isto disseste com verdade.', words: [{ word: 'CINCO', display: 'CINCO' }, { word: 'MARIDOS', display: 'MARIDOS' }, { word: 'AGORA', display: 'AGORA' }, { word: 'VERDADE', display: 'VERDADE' }] },
      { id: 'jn-4-19', reference: 'João 4:19', text: 'Disse-lhe a mulher: Senhor, vejo que és profeta.', words: [{ word: 'MULHER', display: 'MULHER' }, { word: 'SENHOR', display: 'SENHOR' }, { word: 'VEJO', display: 'VEJO' }, { word: 'PROFETA', display: 'PROFETA' }] },
      { id: 'jn-4-20', reference: 'João 4:20', text: 'Nossos pais adoraram neste monte, e vós dizeis que é em Jerusalém o lugar onde se deve adorar.', words: [{ word: 'PAIS', display: 'PAIS' }, { word: 'ADORARAM', display: 'ADORARAM' }, { word: 'MONTE', display: 'MONTE' }, { word: 'JERUSALEM', display: 'JERUSALÉM' }, { word: 'ADORAR', display: 'ADORAR' }] },
      { id: 'jn-4-21', reference: 'João 4:21', text: 'Disse-lhe Jesus: Mulher, crê-me que a hora vem, em que nem neste monte nem em Jerusalém adorareis o Pai.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'MULHER', display: 'MULHER' }, { word: 'HORA', display: 'HORA' }, { word: 'JERUSALEM', display: 'JERUSALÉM' }, { word: 'PAI', display: 'PAI' }] },
      { id: 'jn-4-22', reference: 'João 4:22', text: 'Vós adorais o que não sabeis; nós adoramos o que sabemos porque a salvação vem dos judeus.', words: [{ word: 'ADORAIS', display: 'ADORAIS' }, { word: 'ADORAMOS', display: 'ADORAMOS' }, { word: 'SABEMOS', display: 'SABEMOS' }, { word: 'SALVACAO', display: 'SALVAÇÃO' }, { word: 'JUDEUS', display: 'JUDEUS' }] },
      { id: 'jn-4-23', reference: 'João 4:23', text: 'Mas a hora vem, e agora é, em que os verdadeiros adoradores adorarão o Pai em espírito e em verdade; porque o Pai procura a tais que assim o adorem.', words: [{ word: 'VERDADEIROS', display: 'VERDADEIROS' }, { word: 'ADORADORES', display: 'ADORADORES' }, { word: 'PAI', display: 'PAI' }, { word: 'ESPIRITO', display: 'ESPÍRITO' }, { word: 'VERDADE', display: 'VERDADE' }] },
      { id: 'jn-4-24', reference: 'João 4:24', text: 'Deus é Espírito, e importa que os que o adoram o adorem em espírito e em verdade.', words: [{ word: 'DEUS', display: 'DEUS' }, { word: 'ESPIRITO', display: 'ESPÍRITO' }, { word: 'IMPORTA', display: 'IMPORTA' }, { word: 'ADOREM', display: 'ADOREM' }, { word: 'VERDADE', display: 'VERDADE' }] },
      { id: 'jn-4-25', reference: 'João 4:25', text: 'A mulher disse-lhe: Eu sei que o Messias (que se chama o Cristo) vem; quando ele vier, nos anunciará tudo.', words: [{ word: 'MULHER', display: 'MULHER' }, { word: 'MESSIAS', display: 'MESSIAS' }, { word: 'CRISTO', display: 'CRISTO' }, { word: 'ANUNCIARA', display: 'ANUNCIARÁ' }] },
      { id: 'jn-4-26', reference: 'João 4:26', text: 'Jesus disse-lhe: Eu o sou, eu que falo contigo.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'SOU', display: 'SOU' }, { word: 'FALO', display: 'FALO' }, { word: 'CONTIGO', display: 'CONTIGO' }] },
      { id: 'jn-4-27', reference: 'João 4:27', text: 'E nisto vieram os seus discípulos, e maravilharam-se de que estivesse falando com uma mulher; todavia nenhum lhe disse: Que perguntas? ou: Por que falas com ela?', words: [{ word: 'DISCIPULOS', display: 'DISCÍPULOS' }, { word: 'MARAVILHARAM', display: 'MARAVILHARAM' }, { word: 'MULHER', display: 'MULHER' }, { word: 'PERGUNTAS', display: 'PERGUNTAS' }] },
      { id: 'jn-4-28', reference: 'João 4:28', text: 'Deixou, pois, a mulher o seu cântaro, e foi à cidade, e disse àqueles homens:', words: [{ word: 'DEIXOU', display: 'DEIXOU' }, { word: 'MULHER', display: 'MULHER' }, { word: 'CANTARO', display: 'CÂNTARO' }, { word: 'CIDADE', display: 'CIDADE' }, { word: 'HOMENS', display: 'HOMENS' }] },
      { id: 'jn-4-29', reference: 'João 4:29', text: 'Vinde, vede um homem que me disse tudo quanto tenho feito. Porventura não é este o Cristo?', words: [{ word: 'VINDE', display: 'VINDE' }, { word: 'HOMEM', display: 'HOMEM' }, { word: 'FEITO', display: 'FEITO' }, { word: 'CRISTO', display: 'CRISTO' }] },
      { id: 'jn-4-30', reference: 'João 4:30', text: 'Saíram, pois, da cidade, e foram ter com ele', words: [{ word: 'SAIRAM', display: 'SAÍRAM' }, { word: 'CIDADE', display: 'CIDADE' }, { word: 'FORAM', display: 'FORAM' }] },
      { id: 'jn-4-31', reference: 'João 4:31', text: 'E entretanto os seus discípulos lhe rogaram, dizendo: Rabi, come.', words: [{ word: 'DISCIPULOS', display: 'DISCÍPULOS' }, { word: 'ROGARAM', display: 'ROGARAM' }, { word: 'RABI', display: 'RABI' }, { word: 'COME', display: 'COME' }] },
      { id: 'jn-4-32', reference: 'João 4:32', text: 'Ele, porém, lhes disse: Uma comida tenho para comer, que vós não conheceis.', words: [{ word: 'COMIDA', display: 'COMIDA' }, { word: 'COMER', display: 'COMER' }, { word: 'CONHECEIS', display: 'CONHECEIS' }] },
      { id: 'jn-4-33', reference: 'João 4:33', text: 'Então os discípulos diziam uns aos outros: Trouxe-lhe, porventura, alguém algo de comer?', words: [{ word: 'DISCIPULOS', display: 'DISCÍPULOS' }, { word: 'OUTROS', display: 'OUTROS' }, { word: 'ALGUEM', display: 'ALGUÉM' }, { word: 'COMER', display: 'COMER' }] },
      { id: 'jn-4-34', reference: 'João 4:34', text: 'Jesus disse-lhes: A minha comida é fazer a vontade daquele que me enviou, e realizar a sua obra.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'COMIDA', display: 'COMIDA' }, { word: 'VONTADE', display: 'VONTADE' }, { word: 'ENVIOU', display: 'ENVIOU' }, { word: 'OBRA', display: 'OBRA' }] },
      { id: 'jn-4-35', reference: 'João 4:35', text: 'Não dizeis vós que ainda há quatro meses até que venha a ceifa? Eis que eu vos digo: Levantai os vossos olhos, e vede as terras, que já estão brancas para a ceifa.', words: [{ word: 'QUATRO', display: 'QUATRO' }, { word: 'MESES', display: 'MESES' }, { word: 'CEIFA', display: 'CEIFA' }, { word: 'TERRAS', display: 'TERRAS' }, { word: 'BRANCAS', display: 'BRANCAS' }] },
      { id: 'jn-4-36', reference: 'João 4:36', text: 'E o que ceifa recebe galardão, e ajunta fruto para a vida eterna; para que, assim o que semeia como o que ceifa, ambos se regozijem.', words: [{ word: 'CEIFA', display: 'CEIFA' }, { word: 'GALARDAO', display: 'GALARDÃO' }, { word: 'FRUTO', display: 'FRUTO' }, { word: 'VIDA', display: 'VIDA' }, { word: 'ETERNA', display: 'ETERNA' }, { word: 'REGOZIJEM', display: 'REGOZIJEM' }] },
      { id: 'jn-4-37', reference: 'João 4:37', text: 'Porque nisto é verdadeiro o ditado, que um é o que semeia, e outro o que ceifa.', words: [{ word: 'VERDADEIRO', display: 'VERDADEIRO' }, { word: 'DITADO', display: 'DITADO' }, { word: 'SEMEIA', display: 'SEMEIA' }, { word: 'CEIFA', display: 'CEIFA' }] },
      { id: 'jn-4-38', reference: 'João 4:38', text: 'Eu vos enviei a ceifar onde vós não trabalhastes; outros trabalharam, e vós entrastes no seu trabalho.', words: [{ word: 'ENVIEI', display: 'ENVIEI' }, { word: 'CEIFAR', display: 'CEIFAR' }, { word: 'TRABALHASTES', display: 'TRABALHASTES' }, { word: 'TRABALHO', display: 'TRABALHO' }] },
      { id: 'jn-4-39', reference: 'João 4:39', text: 'E muitos dos samaritanos daquela cidade creram nele, pela palavra da mulher, que testificou: Disse-me tudo quanto tenho feito.', words: [{ word: 'SAMARITANOS', display: 'SAMARITANOS' }, { word: 'CIDADE', display: 'CIDADE' }, { word: 'CRERAM', display: 'CRERAM' }, { word: 'MULHER', display: 'MULHER' }, { word: 'FEITO', display: 'FEITO' }] },
      { id: 'jn-4-40', reference: 'João 4:40', text: 'Indo, pois, ter com ele os samaritanos, rogaram-lhe que ficasse com eles; e ficou ali dois dias.', words: [{ word: 'SAMARITANOS', display: 'SAMARITANOS' }, { word: 'ROGARAM', display: 'ROGARAM' }, { word: 'FICASSE', display: 'FICASSE' }, { word: 'DOIS', display: 'DOIS' }, { word: 'DIAS', display: 'DIAS' }] },
      { id: 'jn-4-41', reference: 'João 4:41', text: 'E muitos mais creram nele, por causa da sua palavra.', words: [{ word: 'MUITOS', display: 'MUITOS' }, { word: 'CRERAM', display: 'CRERAM' }, { word: 'CAUSA', display: 'CAUSA' }, { word: 'PALAVRA', display: 'PALAVRA' }] },
      { id: 'jn-4-42', reference: 'João 4:42', text: 'E diziam à mulher: Já não é pelo teu dito que nós cremos; porque nós mesmos o temos ouvido, e sabemos que este é verdadeiramente o Cristo, o Salvador do mundo.', words: [{ word: 'MULHER', display: 'MULHER' }, { word: 'CREMOS', display: 'CREMOS' }, { word: 'VERDADEIRAMENTE', display: 'VERDADEIRAMENTE' }, { word: 'CRISTO', display: 'CRISTO' }, { word: 'SALVADOR', display: 'SALVADOR' }, { word: 'MUNDO', display: 'MUNDO' }] },
      { id: 'jn-4-43', reference: 'João 4:43', text: 'E dois dias depois partiu dali, e foi para a Galiléia.', words: [{ word: 'DOIS', display: 'DOIS' }, { word: 'DIAS', display: 'DIAS' }, { word: 'PARTIU', display: 'PARTIU' }, { word: 'GALILEIA', display: 'GALILÉIA' }] },
      { id: 'jn-4-44', reference: 'João 4:44', text: 'Porque Jesus mesmo testificou que um profeta não tem honra na sua própria pátria.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'TESTIFICOU', display: 'TESTIFICOU' }, { word: 'PROFETA', display: 'PROFETA' }, { word: 'HONRA', display: 'HONRA' }, { word: 'PATRIA', display: 'PÁTRIA' }] },
      { id: 'jn-4-45', reference: 'João 4:45', text: 'Chegando, pois, à Galiléia, os galileus o receberam, vistas todas as coisas que fizera em Jerusalém, no dia da festa; porque também eles tinham ido à festa.', words: [{ word: 'GALILEIA', display: 'GALILÉIA' }, { word: 'GALILEUS', display: 'GALILEUS' }, { word: 'RECEBERAM', display: 'RECEBERAM' }, { word: 'JERUSALEM', display: 'JERUSALÉM' }, { word: 'FESTA', display: 'FESTA' }] },
      { id: 'jn-4-46', reference: 'João 4:46', text: 'Segunda vez foi Jesus a Caná da Galiléia, onde da água fizera vinho. E havia ali um nobre, cujo filho estava enfermo em Cafarnaum.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'CANA', display: 'CANÁ' }, { word: 'AGUA', display: 'ÁGUA' }, { word: 'VINHO', display: 'VINHO' }, { word: 'NOBRE', display: 'NOBRE' }, { word: 'FILHO', display: 'FILHO' }, { word: 'CAFARNAUM', display: 'CAFARNAUM' }] },
      { id: 'jn-4-47', reference: 'João 4:47', text: 'Ouvindo este que Jesus vinha da Judéia para a Galiléia, foi ter com ele, e rogou-lhe que descesse, e curasse o seu filho, porque já estava à morte.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'JUDEIA', display: 'JUDÉIA' }, { word: 'GALILEIA', display: 'GALILÉIA' }, { word: 'CURASSE', display: 'CURASSE' }, { word: 'MORTE', display: 'MORTE' }] },
      { id: 'jn-4-48', reference: 'João 4:48', text: 'Então Jesus lhe disse: Se não virdes sinais e milagres, não crereis.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'SINAIS', display: 'SINAIS' }, { word: 'MILAGRES', display: 'MILAGRES' }, { word: 'CREREIS', display: 'CREREIS' }] },
      { id: 'jn-4-49', reference: 'João 4:49', text: 'Disse-lhe o nobre: Senhor, desce, antes que meu filho morra.', words: [{ word: 'NOBRE', display: 'NOBRE' }, { word: 'SENHOR', display: 'SENHOR' }, { word: 'DESCE', display: 'DESCE' }, { word: 'FILHO', display: 'FILHO' }, { word: 'MORRA', display: 'MORRA' }] },
      { id: 'jn-4-50', reference: 'João 4:50', text: 'Disse-lhe Jesus: Vai, o teu filho vive. E o homem creu na palavra que Jesus lhe disse, e partiu.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'FILHO', display: 'FILHO' }, { word: 'VIVE', display: 'VIVE' }, { word: 'HOMEM', display: 'HOMEM' }, { word: 'PALAVRA', display: 'PALAVRA' }] },
      { id: 'jn-4-51', reference: 'João 4:51', text: 'E descendo ele logo, saíram-lhe ao encontro os seus servos, e lhe anunciaram, dizendo: O teu filho vive.', words: [{ word: 'DESCENDO', display: 'DESCENDO' }, { word: 'ENCONTRO', display: 'ENCONTRO' }, { word: 'SERVOS', display: 'SERVOS' }, { word: 'FILHO', display: 'FILHO' }, { word: 'VIVE', display: 'VIVE' }] },
      { id: 'jn-4-52', reference: 'João 4:52', text: 'Perguntou-lhes, pois, a que hora se achara melhor. E disseram-lhe: Ontem às sete horas a febre o deixou.', words: [{ word: 'HORA', display: 'HORA' }, { word: 'MELHOR', display: 'MELHOR' }, { word: 'SETE', display: 'SETE' }, { word: 'FEBRE', display: 'FEBRE' }] },
      { id: 'jn-4-53', reference: 'João 4:53', text: 'Entendeu, pois, o pai que era aquela hora a mesma em que Jesus lhe disse: O teu filho vive; e creu ele, e toda a sua casa.', words: [{ word: 'PAI', display: 'PAI' }, { word: 'HORA', display: 'HORA' }, { word: 'JESUS', display: 'JESUS' }, { word: 'FILHO', display: 'FILHO' }, { word: 'CREU', display: 'CREU' }, { word: 'CASA', display: 'CASA' }] },
      { id: 'jn-4-54', reference: 'João 4:54', text: 'Jesus fez este segundo milagre, quando ia da Judéia para a Galiléia.', words: [{ word: 'JESUS', display: 'JESUS' }, { word: 'SEGUNDO', display: 'SEGUNDO' }, { word: 'MILAGRE', display: 'MILAGRE' }, { word: 'JUDEIA', display: 'JUDÉIA' }, { word: 'GALILEIA', display: 'GALILÉIA' }] },
    ]
  },
  { id: 'acts', name: 'Atos', testament: 'New', totalVerses: 1007, isLocked: true, levels: [] },
  { id: 'romans', name: 'Romanos', testament: 'New', totalVerses: 433, isLocked: true, levels: [] },
  { id: '1corinthians', name: '1 Coríntios', testament: 'New', totalVerses: 437, isLocked: true, levels: [] },
  { id: '2corinthians', name: '2 Coríntios', testament: 'New', totalVerses: 257, isLocked: true, levels: [] },
  { id: 'galatians', name: 'Gálatas', testament: 'New', totalVerses: 149, isLocked: true, levels: [] },
  { id: 'ephesians', name: 'Efésios', testament: 'New', totalVerses: 155, isLocked: true, levels: [] },
  { id: 'philippians', name: 'Filipenses', testament: 'New', totalVerses: 104, isLocked: true, levels: [] },
  { id: 'colossians', name: 'Colossenses', testament: 'New', totalVerses: 95, isLocked: true, levels: [] },
  { id: '1thessalonians', name: '1 Tessalonicenses', testament: 'New', totalVerses: 89, isLocked: true, levels: [] },
  { id: '2thessalonians', name: '2 Tessalonicenses', testament: 'New', totalVerses: 47, isLocked: true, levels: [] },
  { id: '1timothy', name: '1 Timóteo', testament: 'New', totalVerses: 113, isLocked: true, levels: [] },
  { id: '2timothy', name: '2 Timóteo', testament: 'New', totalVerses: 83, isLocked: true, levels: [] },
  { id: 'titus', name: 'Tito', testament: 'New', totalVerses: 46, isLocked: true, levels: [] },
  { id: 'philemon', name: 'Filemom', testament: 'New', totalVerses: 25, isLocked: true, levels: [] },
  { id: 'hebrews', name: 'Hebreus', testament: 'New', totalVerses: 303, isLocked: true, levels: [] },
  { id: 'james', name: 'Tiago', testament: 'New', totalVerses: 108, isLocked: true, levels: [] },
  { id: '1peter', name: '1 Pedro', testament: 'New', totalVerses: 105, isLocked: true, levels: [] },
  { id: '2peter', name: '2 Pedro', testament: 'New', totalVerses: 61, isLocked: true, levels: [] },
  { id: '1john', name: '1 João', testament: 'New', totalVerses: 105, isLocked: true, levels: [] },
  {
    id: '2john',
    name: '2 João',
    testament: 'New',
    totalVerses: 13,
    isLocked: false,
    levels: [
      {
        id: '2jn-1-1',
        reference: '2 João 1:1',
        text: 'O ancião à senhora eleita, e a seus filhos, aos quais amo na verdade, e não somente eu, mas também todos os que têm conhecido a verdade.',
        words: [
          { word: 'ANCIAO', display: 'ANCIÃO' },
          { word: 'SENHORA', display: 'SENHORA' },
          { word: 'ELEITA', display: 'ELEITA' },
          { word: 'FILHOS', display: 'FILHOS' },
          { word: 'AMO', display: 'AMO' },
          { word: 'VERDADE', display: 'VERDADE' },
          { word: 'SOMENTE', display: 'SOMENTE' },
          { word: 'CONHECIDO', display: 'CONHECIDO' },
        ]
      },
      {
        id: '2jn-1-2',
        reference: '2 João 1:2',
        text: 'Por amor da verdade que está em nós, e para sempre estará conosco:',
        words: [
          { word: 'AMOR', display: 'AMOR' },
          { word: 'VERDADE', display: 'VERDADE' },
          { word: 'SEMPRE', display: 'SEMPRE' },
          { word: 'CONOSCO', display: 'CONOSCO' },
        ]
      },
      {
        id: '2jn-1-3',
        reference: '2 João 1:3',
        text: 'Graça, misericórdia e paz, da parte de Deus Pai e da do Senhor Jesus Cristo, o Filho do Pai, seja convosco na verdade e amor.',
        words: [
          { word: 'GRACA', display: 'GRAÇA' },
          { word: 'MISERICORDIA', display: 'MISERICÓRDIA' },
          { word: 'PAZ', display: 'PAZ' },
          { word: 'DEUS', display: 'DEUS' },
          { word: 'PAI', display: 'PAI' },
          { word: 'SENHOR', display: 'SENHOR' },
          { word: 'JESUS', display: 'JESUS' },
          { word: 'CRISTO', display: 'CRISTO' },
          { word: 'FILHO', display: 'FILHO' },
          { word: 'CONVOSCO', display: 'CONVOSCO' },
        ]
      },
      {
        id: '2jn-1-4',
        reference: '2 João 1:4',
        text: 'Muito me alegro por achar que alguns de teus filhos andam na verdade, assim como temos recebido o mandamento do Pai.',
        words: [
          { word: 'ALEGRO', display: 'ALEGRO' },
          { word: 'FILHOS', display: 'FILHOS' },
          { word: 'ANDAM', display: 'ANDAM' },
          { word: 'VERDADE', display: 'VERDADE' },
          { word: 'RECEBIDO', display: 'RECEBIDO' },
          { word: 'MANDAMENTO', display: 'MANDAMENTO' },
          { word: 'PAI', display: 'PAI' },
        ]
      },
      {
        id: '2jn-1-5',
        reference: '2 João 1:5',
        text: 'E agora, senhora, rogo-te, não como escrevendo-te um novo mandamento, mas aquele mesmo que desde o princípio tivemos: que nos amemos uns aos outros.',
        words: [
          { word: 'SENHORA', display: 'SENHORA' },
          { word: 'ROGO', display: 'ROGO' },
          { word: 'NOVO', display: 'NOVO' },
          { word: 'MANDAMENTO', display: 'MANDAMENTO' },
          { word: 'PRINCIPIO', display: 'PRINCÍPIO' },
          { word: 'AMEMOS', display: 'AMEMOS' },
        ]
      },
      {
        id: '2jn-1-6',
        reference: '2 João 1:6',
        text: 'E o amor é este: que andemos segundo os seus mandamentos. Este é o mandamento, como já desde o princípio ouvistes, que andeis nele.',
        words: [
          { word: 'AMOR', display: 'AMOR' },
          { word: 'ANDEMOS', display: 'ANDEMOS' },
          { word: 'MANDAMENTOS', display: 'MANDAMENTOS' },
          { word: 'PRINCIPIO', display: 'PRINCÍPIO' },
          { word: 'OUVISTES', display: 'OUVISTES' },
        ]
      },
      {
        id: '2jn-1-7',
        reference: '2 João 1:7',
        text: 'Porque já muitos enganadores entraram no mundo, os quais não confessam que Jesus Cristo veio em carne. Este tal é o enganador e o anticristo.',
        words: [
          { word: 'ENGANADORES', display: 'ENGANADORES' },
          { word: 'MUNDO', display: 'MUNDO' },
          { word: 'CONFESSAM', display: 'CONFESSAM' },
          { word: 'JESUS', display: 'JESUS' },
          { word: 'CRISTO', display: 'CRISTO' },
          { word: 'CARNE', display: 'CARNE' },
          { word: 'ENGANADOR', display: 'ENGANADOR' },
          { word: 'ANTICRISTO', display: 'ANTICRISTO' },
        ]
      },
      {
        id: '2jn-1-8',
        reference: '2 João 1:8',
        text: 'Olhai por vós mesmos, para que não percamos o que temos ganho, antes recebamos o inteiro galardão.',
        words: [
          { word: 'OLHAI', display: 'OLHAI' },
          { word: 'MESMOS', display: 'MESMOS' },
          { word: 'PERCAMOS', display: 'PERCAMOS' },
          { word: 'GANHO', display: 'GANHO' },
          { word: 'RECEBAMOS', display: 'RECEBAMOS' },
          { word: 'INTEIRO', display: 'INTEIRO' },
          { word: 'GALARDAO', display: 'GALARDÃO' },
        ]
      },
      {
        id: '2jn-1-9',
        reference: '2 João 1:9',
        text: 'Todo aquele que prevarica, e não persevera na doutrina de Cristo, não tem a Deus. Quem persevera na doutrina de Cristo, esse tem tanto ao Pai como ao Filho.',
        words: [
          { word: 'PREVARICA', display: 'PREVARICA' },
          { word: 'PERSEVERA', display: 'PERSEVERA' },
          { word: 'DOUTRINA', display: 'DOUTRINA' },
          { word: 'CRISTO', display: 'CRISTO' },
          { word: 'DEUS', display: 'DEUS' },
          { word: 'PAI', display: 'PAI' },
          { word: 'FILHO', display: 'FILHO' },
        ]
      },
      {
        id: '2jn-1-10',
        reference: '2 João 1:10',
        text: 'Se alguém vem ter convosco, e não traz esta doutrina, não o recebais em casa, nem tampouco o saudeis.',
        words: [
          { word: 'ALGUEM', display: 'ALGUÉM' },
          { word: 'CONVOSCO', display: 'CONVOSCO' },
          { word: 'DOUTRINA', display: 'DOUTRINA' },
          { word: 'RECEBAIS', display: 'RECEBAIS' },
          { word: 'CASA', display: 'CASA' },
          { word: 'SAUDEIS', display: 'SAUDEIS' },
        ]
      },
      {
        id: '2jn-1-11',
        reference: '2 João 1:11',
        text: 'Porque quem o saúda tem parte nas suas más obras.',
        words: [
          { word: 'SAUDA', display: 'SAÚDA' },
          { word: 'PARTE', display: 'PARTE' },
          { word: 'MAS', display: 'MÁS' },
          { word: 'OBRAS', display: 'OBRAS' },
        ]
      },
      {
        id: '2jn-1-12',
        reference: '2 João 1:12',
        text: 'Tendo muito que escrever-vos, não quis fazê-lo com papel e tinta; mas espero ir ter convosco e falar face a face, para que o nosso gozo seja cumprido.',
        words: [
          { word: 'ESCREVER', display: 'ESCREVER' },
          { word: 'PAPEL', display: 'PAPEL' },
          { word: 'TINTA', display: 'TINTA' },
          { word: 'ESPERO', display: 'ESPERO' },
          { word: 'CONVOSCO', display: 'CONVOSCO' },
          { word: 'FACE', display: 'FACE' },
          { word: 'GOZO', display: 'GOZO' },
          { word: 'CUMPRIDO', display: 'CUMPRIDO' },
        ]
      },
      {
        id: '2jn-1-13',
        reference: '2 João 1:13',
        text: 'Os filhos de tua irmã eleita te saúdam. Amém.',
        words: [
          { word: 'FILHOS', display: 'FILHOS' },
          { word: 'IRMA', display: 'IRMÃ' },
          { word: 'ELEITA', display: 'ELEITA' },
          { word: 'SAUDAM', display: 'SAÚDAM' },
          { word: 'AMEM', display: 'AMÉM' },
        ]
      }
    ]
  },
  { 
    id: '3john', 
    name: '3 João', 
    testament: 'New', 
    totalVerses: 15, 
    isLocked: false, 
    levels: [
      {
        id: '3jn-1-1',
        reference: '3 João 1:1',
        text: 'O presbítero ao amado Gaio, a quem em verdade eu amo.',
        words: [
          { word: 'PRESBITERO', display: 'PRESBÍTERO' },
          { word: 'AMADO', display: 'AMADO' },
          { word: 'GAIO', display: 'GAIO' },
          { word: 'VERDADE', display: 'VERDADE' },
          { word: 'AMO', display: 'AMO' },
        ]
      },
      {
        id: '3jn-1-2',
        reference: '3 João 1:2',
        text: 'Amado, desejo que te vá bem em todas as coisas, e que tenhas saúde, assim como bem vai a tua alma.',
        words: [
          { word: 'AMADO', display: 'AMADO' },
          { word: 'DESEJO', display: 'DESEJO' },
          { word: 'SAUDE', display: 'SAÚDE' },
          { word: 'ALMA', display: 'ALMA' },
          { word: 'COISAS', display: 'COISAS' },
        ]
      },
      {
        id: '3jn-1-3',
        reference: '3 João 1:3',
        text: 'Porque muito me alegrei quando os irmãos vieram, e testificaram da tua verdade, como tu andas na verdade.',
        words: [
          { word: 'ALEGREI', display: 'ALEGREI' },
          { word: 'IRMAOS', display: 'IRMÃOS' },
          { word: 'TESTIFICARAM', display: 'TESTIFICARAM' },
          { word: 'VERDADE', display: 'VERDADE' },
          { word: 'ANDAS', display: 'ANDAS' },
        ]
      },
      {
        id: '3jn-1-4',
        reference: '3 João 1:4',
        text: 'Não tenho maior gozo do que este, o de ouvir que os meus filhos andam na verdade.',
        words: [
          { word: 'MAIOR', display: 'MAIOR' },
          { word: 'GOZO', display: 'GOZO' },
          { word: 'OUVIR', display: 'OUVIR' },
          { word: 'FILHOS', display: 'FILHOS' },
          { word: 'VERDADE', display: 'VERDADE' },
          { word: 'ANDAM', display: 'ANDAM' },
        ]
      },
      {
        id: '3jn-1-5',
        reference: '3 João 1:5',
        text: 'Amado, procedes fielmente em tudo o que fazes para com os irmãos, e para com os estranhos,',
        words: [
          { word: 'AMADO', display: 'AMADO' },
          { word: 'PROCEDES', display: 'PROCEDES' },
          { word: 'FIELMENTE', display: 'FIELMENTE' },
          { word: 'FAZES', display: 'FAZES' },
          { word: 'IRMAOS', display: 'IRMÃOS' },
          { word: 'ESTRANHOS', display: 'ESTRANHOS' },
        ]
      },
      {
        id: '3jn-1-6',
        reference: '3 João 1:6',
        text: 'Que em presença da igreja testificaram do teu amor; aos quais, se conduzires como é digno para com Deus, bem farás;',
        words: [
          { word: 'PRESENCA', display: 'PRESENÇA' },
          { word: 'IGREJA', display: 'IGREJA' },
          { word: 'AMOR', display: 'AMOR' },
          { word: 'DIGNO', display: 'DIGNO' },
          { word: 'DEUS', display: 'DEUS' },
          { word: 'FARAS', display: 'FARÁS' },
        ]
      },
      {
        id: '3jn-1-7',
        reference: '3 João 1:7',
        text: 'Porque pelo seu Nome saíram, nada tomando dos gentios.',
        words: [
          { word: 'NOME', display: 'NOME' },
          { word: 'SAIRAM', display: 'SAÍRAM' },
          { word: 'TOMANDO', display: 'TOMANDO' },
          { word: 'GENTIOS', display: 'GENTIOS' },
        ]
      },
      {
        id: '3jn-1-8',
        reference: '3 João 1:8',
        text: 'Portanto, aos tais devemos receber, para que sejamos cooperadores da verdade.',
        words: [
          { word: 'DEVEMOS', display: 'DEVEMOS' },
          { word: 'RECEBER', display: 'RECEBER' },
          { word: 'COOPERADORES', display: 'COOPERADORES' },
          { word: 'VERDADE', display: 'VERDADE' },
        ]
      },
      {
        id: '3jn-1-9',
        reference: '3 João 1:9',
        text: 'Tenho escrito à igreja; mas Diótrefes, que procura ter entre eles o primado, não nos recebe.',
        words: [
          { word: 'ESCRITO', display: 'ESCRITO' },
          { word: 'IGREJA', display: 'IGREJA' },
          { word: 'DIOTREFES', display: 'DIÓTREFES' },
          { word: 'PRIMADO', display: 'PRIMADO' },
          { word: 'RECEBE', display: 'RECEBE' },
        ]
      },
      {
        id: '3jn-1-10',
        reference: '3 João 1:10',
        text: 'Por isso, se eu for, trarei à memória as obras que ele faz, proferindo contra nós palavras maliciosas; e, não contente com isto, não recebe os irmãos, e impede os que querem recebê-los, e os lança fora da igreja.',
        words: [
          { word: 'MEMORIA', display: 'MEMÓRIA' },
          { word: 'OBRAS', display: 'OBRAS' },
          { word: 'PALAVRAS', display: 'PALAVRAS' },
          { word: 'MALICIOSAS', display: 'MALICIOSAS' },
          { word: 'CONTENTE', display: 'CONTENTE' },
          { word: 'IRMAOS', display: 'IRMÃOS' },
          { word: 'IMPEDE', display: 'IMPEDE' },
          { word: 'IGREJA', display: 'IGREJA' },
        ]
      },
      {
        id: '3jn-1-11',
        reference: '3 João 1:11',
        text: 'Amado, não sigas o mal, mas o bem. Quem faz o bem é de Deus; mas quem faz o mal não tem visto a Deus.',
        words: [
          { word: 'AMADO', display: 'AMADO' },
          { word: 'SIGAS', display: 'SIGAS' },
          { word: 'MAL', display: 'MAL' },
          { word: 'BEM', display: 'BEM' },
          { word: 'DEUS', display: 'DEUS' },
          { word: 'VISTO', display: 'VISTO' },
        ]
      },
      {
        id: '3jn-1-12',
        reference: '3 João 1:12',
        text: 'Todos dão testemunho de Demétrio, até a mesma verdade; e também nós testemunhamos; e vós bem sabeis que o nosso testemunho é verdadeiro.',
        words: [
          { word: 'TESTEMUNHO', display: 'TESTEMUNHO' },
          { word: 'DEMETRIO', display: 'DEMÉTRIO' },
          { word: 'VERDADE', display: 'VERDADE' },
          { word: 'SABEIS', display: 'SABEIS' },
          { word: 'VERDADEIRO', display: 'VERDADEIRO' },
        ]
      },
      {
        id: '3jn-1-13',
        reference: '3 João 1:13',
        text: 'Tinha muito que escrever, mas não quero escrever-te com tinta e pena.',
        words: [
          { word: 'MUITO', display: 'MUITO' },
          { word: 'ESCREVER', display: 'ESCREVER' },
          { word: 'QUERO', display: 'QUERO' },
          { word: 'TINTA', display: 'TINTA' },
          { word: 'PENA', display: 'PENA' },
        ]
      },
      {
        id: '3jn-1-14',
        reference: '3 João 1:14',
        text: 'Espero, porém, ver-te brevemente, e falaremos face a face.',
        words: [
          { word: 'ESPERO', display: 'ESPERO' },
          { word: 'BREVEMENTE', display: 'BREVEMENTE' },
          { word: 'FALAREMOS', display: 'FALAREMOS' },
          { word: 'FACE', display: 'FACE' },
        ]
      },
      {
        id: '3jn-1-15',
        reference: '3 João 1:15',
        text: 'Paz seja contigo. Os amigos te saúdam. Saúda os amigos por nome.',
        words: [
          { word: 'PAZ', display: 'PAZ' },
          { word: 'CONTIGO', display: 'CONTIGO' },
          { word: 'AMIGOS', display: 'AMIGOS' },
          { word: 'SAUDAM', display: 'SAÚDAM' },
          { word: 'NOME', display: 'NOME' },
        ]
      }
    ]
  },
  { id: 'jude', name: 'Judas', testament: 'New', totalVerses: 25, isLocked: true, levels: [] },
  { id: 'revelation', name: 'Apocalipse', testament: 'New', totalVerses: 404, isLocked: true, levels: [] },

  // --- ANTIGO TESTAMENTO ---
  { 
    id: 'genesis', 
    name: 'Gênesis', 
    testament: 'Old', 
    totalVerses: 1533, 
    isLocked: false, 
    levels: [
      // --- GÊNESIS CAPÍTULO 1 ---
      { id: 'gn-1-1', reference: 'Gênesis 1:1', text: 'No princípio criou Deus o céu e a terra.', words: [{ word: 'PRINCIPIO', display: 'PRINCÍPIO' }, { word: 'DEUS', display: 'DEUS' }, { word: 'CEU', display: 'CÉU' }, { word: 'TERRA', display: 'TERRA' }] },
      { id: 'gn-1-2', reference: 'Gênesis 1:2', text: 'E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas.', words: [{ word: 'TERRA', display: 'TERRA' }, { word: 'VAZIA', display: 'VAZIA' }, { word: 'TREVAS', display: 'TREVAS' }, { word: 'ABISMO', display: 'ABISMO' }, { word: 'ESPIRITO', display: 'ESPÍRITO' }, { word: 'AGUAS', display: 'ÁGUAS' }] },
      { id: 'gn-1-3', reference: 'Gênesis 1:3', text: 'E disse Deus: Haja luz; e houve luz.', words: [{ word: 'LUZ', display: 'LUZ' }] },
      { id: 'gn-1-4', reference: 'Gênesis 1:4', text: 'E viu Deus que era boa a luz; e fez Deus separação entre a luz e as trevas.', words: [{ word: 'LUZ', display: 'LUZ' }, { word: 'TREVAS', display: 'TREVAS' }, { word: 'SEPARACAO', display: 'SEPARAÇÃO' }] },
      { id: 'gn-1-5', reference: 'Gênesis 1:5', text: 'E Deus chamou à luz Dia; e às trevas chamou Noite. E foi a tarde e a manhã, o dia primeiro.', words: [{ word: 'DIA', display: 'DIA' }, { word: 'NOITE', display: 'NOITE' }, { word: 'TARDE', display: 'TARDE' }, { word: 'MANHA', display: 'MANHÃ' }, { word: 'PRIMEIRO', display: 'PRIMEIRO' }] },
      { id: 'gn-1-6', reference: 'Gênesis 1:6', text: 'E disse Deus: Haja uma expansão no meio das águas, e haja separação entre águas e águas.', words: [{ word: 'EXPANSAO', display: 'EXPANSÃO' }, { word: 'AGUAS', display: 'ÁGUAS' }, { word: 'SEPARACAO', display: 'SEPARAÇÃO' }] },
      { id: 'gn-1-7', reference: 'Gênesis 1:7', text: 'E fez Deus a expansão, e fez separação entre as águas que estavam debaixo da expansão e as águas que estavam sobre a expansão; e assim foi.', words: [{ word: 'EXPANSAO', display: 'EXPANSÃO' }, { word: 'AGUAS', display: 'ÁGUAS' }, { word: 'DEBAIXO', display: 'DEBAIXO' }, { word: 'SOBRE', display: 'SOBRE' }] },
      { id: 'gn-1-8', reference: 'Gênesis 1:8', text: 'E chamou Deus à expansão Céus, e foi a tarde e a manhã, o dia segundo.', words: [{ word: 'CEUS', display: 'CÉUS' }, { word: 'TARDE', display: 'TARDE' }, { word: 'MANHA', display: 'MANHÃ' }, { word: 'SEGUNDO', display: 'SEGUNDO' }] },
      { id: 'gn-1-9', reference: 'Gênesis 1:9', text: 'E disse Deus: Ajuntem-se as águas debaixo dos céus num lugar; e apareça a porção seca; e assim foi.', words: [{ word: 'AGUAS', display: 'ÁGUAS' }, { word: 'LUGAR', display: 'LUGAR' }, { word: 'SECA', display: 'SECA' }] },
      { id: 'gn-1-10', reference: 'Gênesis 1:10', text: 'E chamou Deus à porção seca Terra; e ao ajuntamento das águas chamou Mares; e viu Deus que era bom.', words: [{ word: 'TERRA', display: 'TERRA' }, { word: 'MARES', display: 'MARES' }, { word: 'BOM', display: 'BOM' }] },
      { id: 'gn-1-11', reference: 'Gênesis 1:11', text: 'E disse Deus: Produza a terra erva verde, erva que dê semente, árvore frutífera que dê fruto segundo a sua espécie, cuja semente está nela sobre a terra; e assim foi.', words: [{ word: 'ERVA', display: 'ERVA' }, { word: 'VERDE', display: 'VERDE' }, { word: 'SEMENTE', display: 'SEMENTE' }, { word: 'ARVORE', display: 'ÁRVORE' }, { word: 'FRUTO', display: 'FRUTO' }] },
      { id: 'gn-1-12', reference: 'Gênesis 1:12', text: 'E a terra produziu erva, erva dando semente conforme a sua espécie, e a árvore frutífera, cuja semente está nela conforme a sua espécie; e viu Deus que era bom.', words: [{ word: 'TERRA', display: 'TERRA' }, { word: 'ERVA', display: 'ERVA' }, { word: 'SEMENTE', display: 'SEMENTE' }, { word: 'ARVORE', display: 'ÁRVORE' }, { word: 'FRUTO', display: 'FRUTO' }] },
      { id: 'gn-1-13', reference: 'Gênesis 1:13', text: 'E foi a tarde e a manhã, o dia terceiro.', words: [{ word: 'TARDE', display: 'TARDE' }, { word: 'MANHA', display: 'MANHÃ' }, { word: 'TERCEIRO', display: 'TERCEIRO' }] },
      { id: 'gn-1-14', reference: 'Gênesis 1:14', text: 'E disse Deus: Haja luminares na expansão dos céus, para haver separação entre o dia e a noite; e sejam eles para sinais e para tempos determinados e para dias e anos.', words: [{ word: 'LUMINARES', display: 'LUMINARES' }, { word: 'CEUS', display: 'CÉUS' }, { word: 'DIA', display: 'DIA' }, { word: 'NOITE', display: 'NOITE' }, { word: 'SINAIS', display: 'SINAIS' }, { word: 'TEMPOS', display: 'TEMPOS' }, { word: 'DIAS', display: 'DIAS' }, { word: 'ANOS', display: 'ANOS' }] },
      { id: 'gn-1-15', reference: 'Gênesis 1:15', text: 'E sejam para luminares na expansão dos céus, para iluminar a terra; e assim foi.', words: [{ word: 'LUMINARES', display: 'LUMINARES' }, { word: 'CEUS', display: 'CÉUS' }, { word: 'ILUMINAR', display: 'ILUMINAR' }, { word: 'TERRA', display: 'TERRA' }] },
      { id: 'gn-1-16', reference: 'Gênesis 1:16', text: 'E fez Deus os dois grandes luminares: o luminar maior para governar o dia, e o luminar menor para governar a noite; e fez as estrelas.', words: [{ word: 'LUMINARES', display: 'LUMINARES' }, { word: 'MAIOR', display: 'MAIOR' }, { word: 'MENOR', display: 'MENOR' }, { word: 'ESTRELAS', display: 'ESTRELAS' }] },
      { id: 'gn-1-17', reference: 'Gênesis 1:17', text: 'E Deus os pôs na expansão dos céus para iluminar a terra,', words: [{ word: 'CEUS', display: 'CÉUS' }, { word: 'ILUMINAR', display: 'ILUMINAR' }, { word: 'TERRA', display: 'TERRA' }] },
      { id: 'gn-1-18', reference: 'Gênesis 1:18', text: 'E para governar o dia e a noite, e para fazer separação entre a luz e as trevas; e viu Deus que era bom.', words: [{ word: 'GOVERNAR', display: 'GOVERNAR' }, { word: 'DIA', display: 'DIA' }, { word: 'NOITE', display: 'NOITE' }, { word: 'LUZ', display: 'LUZ' }, { word: 'TREVAS', display: 'TREVAS' }] },
      { id: 'gn-1-19', reference: 'Gênesis 1:19', text: 'E foi a tarde e a manhã, o dia quarto.', words: [{ word: 'TARDE', display: 'TARDE' }, { word: 'MANHA', display: 'MANHÃ' }, { word: 'QUARTO', display: 'QUARTO' }] },
      { id: 'gn-1-20', reference: 'Gênesis 1:20', text: 'E disse Deus: Produzam as águas abundantemente répteis de alma vivente; e voem as aves sobre a face da expansão dos céus.', words: [{ word: 'AGUAS', display: 'ÁGUAS' }, { word: 'REPTEIS', display: 'RÉPTEIS' }, { word: 'ALMA', display: 'ALMA' }, { word: 'VIVENTE', display: 'VIVENTE' }, { word: 'AVES', display: 'AVES' }, { word: 'CEUS', display: 'CÉUS' }] },
      { id: 'gn-1-21', reference: 'Gênesis 1:21', text: 'E Deus criou as grandes baleias, e todo o réptil de alma vivente que as águas abundantemente produziram conforme as suas espécies; e toda a ave de asas conforme a sua espécie; e viu Deus que era bom.', words: [{ word: 'BALEIAS', display: 'BALEIAS' }, { word: 'REPTIL', display: 'RÉPTIL' }, { word: 'AGUAS', display: 'ÁGUAS' }, { word: 'AVE', display: 'AVE' }, { word: 'ESPECIE', display: 'ESPÉCIE' }] },
      { id: 'gn-1-22', reference: 'Gênesis 1:22', text: 'E Deus os abençoou, dizendo: Frutificai e multiplicai-vos, e enchei as águas nos mares; e as aves se multipliquem na terra.', words: [{ word: 'FRUTIFICAI', display: 'FRUTIFICAI' }, { word: 'MULTIPLICAI', display: 'MULTIPLICAI' }, { word: 'AGUAS', display: 'ÁGUAS' }, { word: 'MARES', display: 'MARES' }, { word: 'AVES', display: 'AVES' }, { word: 'TERRA', display: 'TERRA' }] },
      { id: 'gn-1-23', reference: 'Gênesis 1:23', text: 'E foi a tarde e a manhã, o dia quinto.', words: [{ word: 'TARDE', display: 'TARDE' }, { word: 'MANHA', display: 'MANHÃ' }, { word: 'QUINTO', display: 'QUINTO' }] },
      { id: 'gn-1-24', reference: 'Gênesis 1:24', text: 'E disse Deus: Produza a terra alma vivente conforme a sua espécie; gado, e répteis e feras da terra conforme a sua espécie; e assim foi.', words: [{ word: 'TERRA', display: 'TERRA' }, { word: 'ALMA', display: 'ALMA' }, { word: 'VIVENTE', display: 'VIVENTE' }, { word: 'GADO', display: 'GADO' }, { word: 'REPTEIS', display: 'RÉPTEIS' }, { word: 'FERAS', display: 'FERAS' }] },
      { id: 'gn-1-25', reference: 'Gênesis 1:25', text: 'E fez Deus as feras da terra conforme a sua espécie, e o gado conforme a sua espécie, e todo o réptil da terra conforme a sua espécie; e viu Deus que era bom.', words: [{ word: 'FERAS', display: 'FERAS' }, { word: 'GADO', display: 'GADO' }, { word: 'REPTIL', display: 'RÉPTIL' }, { word: 'TERRA', display: 'TERRA' }, { word: 'BOM', display: 'BOM' }] },
      { id: 'gn-1-26', reference: 'Gênesis 1:26', text: 'E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança; e domine sobre os peixes do mar, e sobre as aves dos céus, e sobre o gado, e sobre toda a terra, e sobre todo o réptil que se move sobre a terra.', words: [{ word: 'HOMEM', display: 'HOMEM' }, { word: 'IMAGEM', display: 'IMAGEM' }, { word: 'SEMELHANCA', display: 'SEMELHANÇA' }, { word: 'PEIXES', display: 'PEIXES' }, { word: 'AVES', display: 'AVES' }, { word: 'GADO', display: 'GADO' }] },
      { id: 'gn-1-27', reference: 'Gênesis 1:27', text: 'E criou Deus o homem à sua imagem; à imagem de Deus o criou; homem e mulher os criou.', words: [{ word: 'HOMEM', display: 'HOMEM' }, { word: 'IMAGEM', display: 'IMAGEM' }, { word: 'DEUS', display: 'DEUS' }, { word: 'MULHER', display: 'MULHER' }] },
      { id: 'gn-1-28', reference: 'Gênesis 1:28', text: 'E Deus os abençoou, e Deus lhes disse: Frutificai e multiplicai-vos, e enchei a terra, e sujeitai-a; e dominai sobre os peixes do mar e sobre as aves dos céus, e sobre todo o animal que se move sobre a terra.', words: [{ word: 'FRUTIFICAI', display: 'FRUTIFICAI' }, { word: 'MULTIPLICAI', display: 'MULTIPLICAI' }, { word: 'TERRA', display: 'TERRA' }, { word: 'DOMINAI', display: 'DOMINAI' }, { word: 'PEIXES', display: 'PEIXES' }, { word: 'AVES', display: 'AVES' }, { word: 'ANIMAL', display: 'ANIMAL' }] },
      { id: 'gn-1-29', reference: 'Gênesis 1:29', text: 'E disse Deus: Eis que vos tenho dado toda a erva que dê semente, que está sobre a face de toda a terra; e toda a árvore, em que há fruto que dê semente, ser-vos-á para mantimento.', words: [{ word: 'ERVA', display: 'ERVA' }, { word: 'SEMENTE', display: 'SEMENTE' }, { word: 'ARVORE', display: 'ÁRVORE' }, { word: 'FRUTO', display: 'FRUTO' }, { word: 'MANTIMENTO', display: 'MANTIMENTO' }] },
      { id: 'gn-1-30', reference: 'Gênesis 1:30', text: 'E a todo o animal da terra, e a toda a ave dos céus, e a todo o réptil da terra, em que há alma vivente, toda a erva verde será para mantimento; e assim foi.', words: [{ word: 'ANIMAL', display: 'ANIMAL' }, { word: 'AVE', display: 'AVE' }, { word: 'REPTIL', display: 'RÉPTIL' }, { word: 'ALMA', display: 'ALMA' }, { word: 'ERVA', display: 'ERVA' }, { word: 'VERDE', display: 'VERDE' }] },
      { id: 'gn-1-31', reference: 'Gênesis 1:31', text: 'E viu Deus tudo quanto tinha feito, e eis que era muito bom; e foi a tarde e a manhã, o dia sexto.', words: [{ word: 'MUITO', display: 'MUITO' }, { word: 'BOM', display: 'BOM' }, { word: 'TARDE', display: 'TARDE' }, { word: 'MANHA', display: 'MANHÃ' }, { word: 'SEXTO', display: 'SEXTO' }] },
      // --- GÊNESIS CAPÍTULO 2 ---
      { id: 'gn-2-1', reference: 'Gênesis 2:1', text: 'Assim os céus, a terra e todo o seu exército foram acabados.', words: [{ word: 'CEUS', display: 'CÉUS' }, { word: 'TERRA', display: 'TERRA' }, { word: 'EXERCITO', display: 'EXÉRCITO' }, { word: 'ACABADOS', display: 'ACABADOS' }] },
      { id: 'gn-2-2', reference: 'Gênesis 2:2', text: 'E havendo Deus acabado no dia sétimo a obra que fizera, descansou no sétimo dia de toda a sua obra, que tinha feito.', words: [{ word: 'SETIMO', display: 'SÉTIMO' }, { word: 'OBRA', display: 'OBRA' }, { word: 'DESCANSOU', display: 'DESCANSOU' }] },
      { id: 'gn-2-3', reference: 'Gênesis 2:3', text: 'E abençoou Deus o dia sétimo, e o santificou; porque nele descansou de toda a sua obra que Deus criara e fizera.', words: [{ word: 'ABENCOOU', display: 'ABENÇOOU' }, { word: 'SANTIFICOU', display: 'SANTIFICOU' }, { word: 'DESCANSOU', display: 'DESCANSOU' }, { word: 'OBRA', display: 'OBRA' }] },
      { id: 'gn-2-4', reference: 'Gênesis 2:4', text: 'Estas são as origens dos céus e da terra, quando foram criados; no dia em que o Senhor Deus fez a terra e os céus,', words: [{ word: 'ORIGENS', display: 'ORIGENS' }, { word: 'CRIADOS', display: 'CRIADOS' }, { word: 'SENHOR', display: 'SENHOR' }, { word: 'DEUS', display: 'DEUS' }] },
      { id: 'gn-2-5', reference: 'Gênesis 2:5', text: 'E toda a planta do campo que ainda não estava na terra, e toda a erva do campo que ainda não brotava; porque ainda o Senhor Deus não tinha feito chover sobre a terra, e não havia homem para lavrar a terra.', words: [{ word: 'PLANTA', display: 'PLANTA' }, { word: 'CAMPO', display: 'CAMPO' }, { word: 'ERVA', display: 'ERVA' }, { word: 'CHOVER', display: 'CHOVER' }, { word: 'HOMEM', display: 'HOMEM' }, { word: 'LAVRAR', display: 'LAVRAR' }] },
      { id: 'gn-2-6', reference: 'Gênesis 2:6', text: 'Um vapor, porém, subia da terra, e regava toda a face da terra.', words: [{ word: 'VAPOR', display: 'VAPOR' }, { word: 'TERRA', display: 'TERRA' }, { word: 'REGAVA', display: 'REGAVA' }, { word: 'FACE', display: 'FACE' }] },
      { id: 'gn-2-7', reference: 'Gênesis 2:7', text: 'E formou o Senhor Deus o homem do pó da terra, e soprou em suas narinas o fôlego da vida; e o homem foi feito alma vivente.', words: [{ word: 'SENHOR', display: 'SENHOR' }, { word: 'HOMEM', display: 'HOMEM' }, { word: 'PO', display: 'PÓ' }, { word: 'NARINAS', display: 'NARINAS' }, { word: 'FOLEGO', display: 'FÔLEGO' }, { word: 'VIDA', display: 'VIDA' }, { word: 'ALMA', display: 'ALMA' }] },
      { id: 'gn-2-8', reference: 'Gênesis 2:8', text: 'E plantou o Senhor Deus um jardim no Éden, do lado oriental; e pôs ali o homem que tinha formado.', words: [{ word: 'PLANTOU', display: 'PLANTOU' }, { word: 'JARDIM', display: 'JARDIM' }, { word: 'EDEN', display: 'ÉDEN' }, { word: 'ORIENTAL', display: 'ORIENTAL' }, { word: 'HOMEM', display: 'HOMEM' }] },
      { id: 'gn-2-9', reference: 'Gênesis 2:9', text: 'E o Senhor Deus fez brotar da terra toda a árvore agradável à vista, e boa para comida; e a árvore da vida no meio do jardim, e a árvore do conhecimento do bem e do mal.', words: [{ word: 'ARVORE', display: 'ÁRVORE' }, { word: 'AGRADAVEL', display: 'AGRADÁVEL' }, { word: 'VISTA', display: 'VISTA' }, { word: 'COMIDA', display: 'COMIDA' }, { word: 'VIDA', display: 'VIDA' }, { word: 'CONHECIMENTO', display: 'CONHECIMENTO' }, { word: 'BEM', display: 'BEM' }, { word: 'MAL', display: 'MAL' }] },
      { id: 'gn-2-10', reference: 'Gênesis 2:10', text: 'E saía um rio do Éden para regar o jardim; e dali se dividia e se tornava em quatro braços.', words: [{ word: 'RIO', display: 'RIO' }, { word: 'EDEN', display: 'ÉDEN' }, { word: 'REGAR', display: 'REGAR' }, { word: 'JARDIM', display: 'JARDIM' }, { word: 'QUATRO', display: 'QUATRO' }, { word: 'BRACOS', display: 'BRAÇOS' }] },
      { id: 'gn-2-11', reference: 'Gênesis 2:11', text: 'O nome do primeiro é Pisom; este é o que rodeia toda a terra de Havilá, onde há ouro.', words: [{ word: 'PISOM', display: 'PISOM' }, { word: 'HAVILA', display: 'HAVILÁ' }, { word: 'OURO', display: 'OURO' }] },
      { id: 'gn-2-12', reference: 'Gênesis 2:12', text: 'E o ouro dessa terra é bom; ali há o bdélio, e a pedra sardônica.', words: [{ word: 'OURO', display: 'OURO' }, { word: 'BOM', display: 'BOM' }, { word: 'BDELIO', display: 'BDÉLIO' }, { word: 'PEDRA', display: 'PEDRA' }, { word: 'SARDONICA', display: 'SARDÔNICA' }] },
      { id: 'gn-2-13', reference: 'Gênesis 2:13', text: 'E o nome do segundo rio é Giom; este é o que rodeia toda a terra de Cuxe.', words: [{ word: 'GIOM', display: 'GIOM' }, { word: 'CUXE', display: 'CUXE' }] },
      { id: 'gn-2-14', reference: 'Gênesis 2:14', text: 'E o nome do terceiro rio é Tigre; este é o que vai para o lado oriental da Assíria; e o quarto rio é o Eufrates.', words: [{ word: 'TIGRE', display: 'TIGRE' }, { word: 'ASSIRIA', display: 'ASSÍRIA' }, { word: 'EUFRATES', display: 'EUFRATES' }] },
      { id: 'gn-2-15', reference: 'Gênesis 2:15', text: 'E tomou o Senhor Deus o homem, e o pôs no jardim do Éden para o lavrar e o guardar.', words: [{ word: 'SENHOR', display: 'SENHOR' }, { word: 'HOMEM', display: 'HOMEM' }, { word: 'JARDIM', display: 'JARDIM' }, { word: 'EDEN', display: 'ÉDEN' }, { word: 'LAVRAR', display: 'LAVRAR' }, { word: 'GUARDAR', display: 'GUARDAR' }] },
      { id: 'gn-2-16', reference: 'Gênesis 2:16', text: 'E ordenou o Senhor Deus ao homem, dizendo: De toda a árvore do jardim comerás livremente,', words: [{ word: 'ORDENOU', display: 'ORDENOU' }, { word: 'HOMEM', display: 'HOMEM' }, { word: 'ARVORE', display: 'ÁRVORE' }, { word: 'JARDIM', display: 'JARDIM' }, { word: 'COMERAS', display: 'COMERÁS' }] },
      { id: 'gn-2-17', reference: 'Gênesis 2:17', text: 'Mas da árvore do conhecimento do bem e do mal, dela não comerás; porque no dia em que dela comeres, certamente morrerás.', words: [{ word: 'CONHECIMENTO', display: 'CONHECIMENTO' }, { word: 'BEM', display: 'BEM' }, { word: 'MAL', display: 'MAL' }, { word: 'COMERAS', display: 'COMERÁS' }, { word: 'MORRERAS', display: 'MORRERÁS' }] },
      { id: 'gn-2-18', reference: 'Gênesis 2:18', text: 'E disse o Senhor Deus: Não é bom que o homem esteja só; far-lhe-ei uma ajudadora idônea para ele.', words: [{ word: 'BOM', display: 'BOM' }, { word: 'HOMEM', display: 'HOMEM' }, { word: 'SO', display: 'SÓ' }, { word: 'AJUDADORA', display: 'AJUDADORA' }, { word: 'IDONEA', display: 'IDÔNEA' }] },
      { id: 'gn-2-19', reference: 'Gênesis 2:19', text: 'Havendo, pois, o Senhor Deus formado da terra todo o animal do campo, e toda a ave dos céus, os trouxe a Adão, para este ver como lhes chamaria; e tudo o que Adão chamou a toda a alma vivente, isso foi o seu nome.', words: [{ word: 'FORMADO', display: 'FORMADO' }, { word: 'ANIMAL', display: 'ANIMAL' }, { word: 'AVE', display: 'AVE' }, { word: 'ADAO', display: 'ADÃO' }, { word: 'NOME', display: 'NOME' }] },
      { id: 'gn-2-20', reference: 'Gênesis 2:20', text: 'E Adão pôs os nomes a todo o gado, e às aves dos céus, e a todo o animal do campo; mas para o homem não se achava ajudadora idônea.', words: [{ word: 'ADAO', display: 'ADÃO' }, { word: 'GADO', display: 'GADO' }, { word: 'AVES', display: 'AVES' }, { word: 'ANIMAL', display: 'ANIMAL' }, { word: 'AJUDADORA', display: 'AJUDADORA' }] },
      { id: 'gn-2-21', reference: 'Gênesis 2:21', text: 'Então o Senhor Deus fez cair um sono pesado sobre Adão, e este adormeceu; e tomou uma das suas costelas, e cerrou a carne em seu lugar;', words: [{ word: 'SONO', display: 'SONO' }, { word: 'PESADO', display: 'PESADO' }, { word: 'ADAO', display: 'ADÃO' }, { word: 'COSTELAS', display: 'COSTELAS' }, { word: 'CARNE', display: 'CARNE' }] },
      { id: 'gn-2-22', reference: 'Gênesis 2:22', text: 'E da costela que o Senhor Deus tomou do homem, formou uma mulher, e trouxe-a a Adão.', words: [{ word: 'COSTELA', display: 'COSTELA' }, { word: 'MULHER', display: 'MULHER' }, { word: 'ADAO', display: 'ADÃO' }] },
      { id: 'gn-2-23', reference: 'Gênesis 2:23', text: 'E disse Adão: Esta é agora osso dos meus ossos, e carne da minha carne; esta será chamada mulher, porquanto do homem foi tomada.', words: [{ word: 'OSSO', display: 'OSSO' }, { word: 'CARNE', display: 'CARNE' }, { word: 'MULHER', display: 'MULHER' }, { word: 'HOMEM', display: 'HOMEM' }] },
      { id: 'gn-2-24', reference: 'Gênesis 2:24', text: 'Portanto deixará o homem o seu pai e a sua mãe, e apegar-se-á à sua mulher, e serão ambos uma carne.', words: [{ word: 'PAI', display: 'PAI' }, { word: 'MAE', display: 'MÃE' }, { word: 'MULHER', display: 'MULHER' }, { word: 'CARNE', display: 'CARNE' }] },
      { id: 'gn-2-25', reference: 'Gênesis 2:25', text: 'E ambos estavam nus, o homem e a sua mulher; e não se envergonhavam.', words: [{ word: 'NUS', display: 'NUS' }, { word: 'HOMEM', display: 'HOMEM' }, { word: 'MULHER', display: 'MULHER' }, { word: 'ENVERGONHAVAM', display: 'ENVERGONHAVAM' }] },
      // --- GÊNESIS CAPÍTULO 3 ---
      { id: 'gn-3-1', reference: 'Gênesis 3:1', text: 'Ora, a serpente era mais astuta que todas as alimárias do campo que o SENHOR Deus tinha feito. E esta disse à mulher: É assim que Deus disse: Não comereis de toda a árvore do jardim?', words: [{ word: 'SERPENTE', display: 'SERPENTE' }, { word: 'ASTUTA', display: 'ASTUTA' }, { word: 'MULHER', display: 'MULHER' }, { word: 'ARVORE', display: 'ÁRVORE' }, { word: 'JARDIM', display: 'JARDIM' }] },
      { id: 'gn-3-2', reference: 'Gênesis 3:2', text: 'E disse a mulher à serpente: Do fruto das árvores do jardim comeremos,', words: [{ word: 'MULHER', display: 'MULHER' }, { word: 'SERPENTE', display: 'SERPENTE' }, { word: 'FRUTO', display: 'FRUTO' }, { word: 'ARVORES', display: 'ÁRVORES' }] },
      { id: 'gn-3-3', reference: 'Gênesis 3:3', text: 'Mas do fruto da árvore que está no meio do jardim, disse Deus: Não comereis dele, nem nele tocareis para que não morrais.', words: [{ word: 'MEIO', display: 'MEIO' }, { word: 'JARDIM', display: 'JARDIM' }, { word: 'COMEREIS', display: 'COMEREIS' }, { word: 'TOCAREIS', display: 'TOCAREIS' }, { word: 'MORRAIS', display: 'MORRAIS' }] },
      { id: 'gn-3-4', reference: 'Gênesis 3:4', text: 'Então a serpente disse à mulher: Certamente não morrereis.', words: [{ word: 'SERPENTE', display: 'SERPENTE' }, { word: 'MULHER', display: 'MULHER' }, { word: 'CERTAMENTE', display: 'CERTAMENTE' }, { word: 'MORREREIS', display: 'MORREREIS' }] },
      { id: 'gn-3-5', reference: 'Gênesis 3:5', text: 'Porque Deus sabe que no dia em que dele comerdes se abrirão os vossos olhos, e sereis como Deus, sabendo o bem e o mal.', words: [{ word: 'DEUS', display: 'DEUS' }, { word: 'OLHOS', display: 'OLHOS' }, { word: 'BEM', display: 'BEM' }, { word: 'MAL', display: 'MAL' }] },
      { id: 'gn-3-6', reference: 'Gênesis 3:6', text: 'E viu a mulher que aquela árvore era boa para se comer, e agradável aos olhos, e árvore desejável para dar entendimento; tomou do seu fruto, e comeu, e deu também a seu marido, e ele comeu com ela.', words: [{ word: 'ARVORE', display: 'ÁRVORE' }, { word: 'BOA', display: 'BOA' }, { word: 'AGRADAVEL', display: 'AGRADÁVEL' }, { word: 'DESEJAVEL', display: 'DESEJÁVEL' }, { word: 'FRUTO', display: 'FRUTO' }, { word: 'MARIDO', display: 'MARIDO' }] },
      { id: 'gn-3-7', reference: 'Gênesis 3:7', text: 'Então foram abertos os olhos de ambos, e conheceram que estavam nus; e coseram folhas de figueira, e fizeram para si aventais.', words: [{ word: 'OLHOS', display: 'OLHOS' }, { word: 'NUS', display: 'NUS' }, { word: 'FOLHAS', display: 'FOLHAS' }, { word: 'FIGUEIRA', display: 'FIGUEIRA' }, { word: 'AVENTAIS', display: 'AVENTAIS' }] },
      { id: 'gn-3-8', reference: 'Gênesis 3:8', text: 'E ouviram a voz do Senhor Deus, que passeava no jardim pela viração do dia; e esconderam-se Adão e sua mulher da presença do Senhor Deus, entre as árvores do jardim.', words: [{ word: 'VOZ', display: 'VOZ' }, { word: 'JARDIM', display: 'JARDIM' }, { word: 'ESCONDERAM', display: 'ESCONDERAM' }, { word: 'ADAO', display: 'ADÃO' }, { word: 'MULHER', display: 'MULHER' }, { word: 'ARVORES', display: 'ÁRVORES' }] },
      { id: 'gn-3-9', reference: 'Gênesis 3:9', text: 'E chamou o Senhor Deus a Adão, e disse-lhe: Onde estás?', words: [{ word: 'CHAMOU', display: 'CHAMOU' }, { word: 'ADAO', display: 'ADÃO' }, { word: 'ONDE', display: 'ONDE' }, { word: 'ESTAS', display: 'ESTÁS' }] },
      { id: 'gn-3-10', reference: 'Gênesis 3:10', text: 'E ele disse: Ouvi a tua voz soar no jardim, e temi, porque estava nu, e escondi-me.', words: [{ word: 'VOZ', display: 'VOZ' }, { word: 'JARDIM', display: 'JARDIM' }, { word: 'TEMI', display: 'TEMI' }, { word: 'NU', display: 'NU' }, { word: 'ESCONDI', display: 'ESCONDI' }] },
      { id: 'gn-3-11', reference: 'Gênesis 3:11', text: 'E Deus disse: Quem te mostrou que estavas nu? Comeste tu da árvore de que te ordenei que não comesses?', words: [{ word: 'QUEM', display: 'QUEM' }, { word: 'NU', display: 'NU' }, { word: 'COMESTE', display: 'COMESTE' }, { word: 'ARVORE', display: 'ÁRVORE' }] },
      { id: 'gn-3-12', reference: 'Gênesis 3:12', text: 'Então disse Adão: A mulher que me deste por companheira, ela me deu da árvore, e comi.', words: [{ word: 'MULHER', display: 'MULHER' }, { word: 'COMPANHEIRA', display: 'COMPANHEIRA' }, { word: 'ARVORE', display: 'ÁRVORE' }, { word: 'COMI', display: 'COMI' }] },
      { id: 'gn-3-13', reference: 'Gênesis 3:13', text: 'E disse o Senhor Deus à mulher: Por que fizeste isto? E disse a mulher: A serpente me enganou, e eu comi.', words: [{ word: 'MULHER', display: 'MULHER' }, { word: 'QUE', display: 'QUE' }, { word: 'FIZESTE', display: 'FIZESTE' }, { word: 'SERPENTE', display: 'SERPENTE' }, { word: 'ENGANOU', display: 'ENGANOU' }] },
      { id: 'gn-3-14', reference: 'Gênesis 3:14', text: 'Então o Senhor Deus disse à serpente: Porquanto fizeste isto, maldita serás mais que toda a fera, e mais que todos os animais do campo; sobre o teu ventre andarás, e pó comerás todos os dias da tua vida.', words: [{ word: 'SERPENTE', display: 'SERPENTE' }, { word: 'MALDITA', display: 'MALDITA' }, { word: 'FERA', display: 'FERA' }, { word: 'ANIMAIS', display: 'ANIMAIS' }, { word: 'VENTRE', display: 'VENTRE' }, { word: 'PO', display: 'PÓ' }] },
      { id: 'gn-3-15', reference: 'Gênesis 3:15', text: 'E porei inimizade entre ti e a mulher, e entre a tua semente e a sua semente; esta te ferirá a cabeça, e tu lhe ferirás o calcanhar.', words: [{ word: 'INIMIZADE', display: 'INIMIZADE' }, { word: 'MULHER', display: 'MULHER' }, { word: 'SEMENTE', display: 'SEMENTE' }, { word: 'CABECA', display: 'CABEÇA' }, { word: 'CALCANHAR', display: 'CALCANHAR' }] },
      { id: 'gn-3-16', reference: 'Gênesis 3:16', text: 'E à mulher disse: Multiplicarei grandemente a tua dor, e a tua conceição; com dor darás à luz filhos; e o teu desejo será para o teu marido, e ele te dominará.', words: [{ word: 'DOR', display: 'DOR' }, { word: 'CONCEICAO', display: 'CONCEIÇÃO' }, { word: 'FILHOS', display: 'FILHOS' }, { word: 'DESEJO', display: 'DESEJO' }, { word: 'MARIDO', display: 'MARIDO' }] },
      { id: 'gn-3-17', reference: 'Gênesis 3:17', text: 'E a Adão disse: Porquanto deste ouvidos à voz de tua mulher, e comeste da árvore de que te ordenei, dizendo: Não comerás dela, maldita é a terra por causa de ti; com dor comerás dela todos os dias da tua vida.', words: [{ word: 'ADAO', display: 'ADÃO' }, { word: 'MULHER', display: 'MULHER' }, { word: 'ARVORE', display: 'ÁRVORE' }, { word: 'MALDITA', display: 'MALDITA' }, { word: 'TERRA', display: 'TERRA' }, { word: 'DOR', display: 'DOR' }] },
      { id: 'gn-3-18', reference: 'Gênesis 3:18', text: 'Espinhos, e cardos também, te produzirá; e comerás a erva do campo.', words: [{ word: 'ESPINHOS', display: 'ESPINHOS' }, { word: 'CARDOS', display: 'CARDOS' }, { word: 'ERVA', display: 'ERVA' }, { word: 'CAMPO', display: 'CAMPO' }] },
      { id: 'gn-3-19', reference: 'Gênesis 3:19', text: 'No suor do teu rosto comerás o teu pão, até que te tornes à terra; porque dela foste tomado; porquanto és pó e em pó te tornarás.', words: [{ word: 'SUOR', display: 'SUOR' }, { word: 'ROSTO', display: 'ROSTO' }, { word: 'PAO', display: 'PÃO' }, { word: 'TERRA', display: 'TERRA' }, { word: 'PO', display: 'PÓ' }] },
      { id: 'gn-3-20', reference: 'Gênesis 3:20', text: 'E chamou Adão o nome de sua mulher Eva; porquanto era a mãe de todos os viventes.', words: [{ word: 'ADAO', display: 'ADÃO' }, { word: 'EVA', display: 'EVA' }, { word: 'MAE', display: 'MÃE' }, { word: 'VIVENTES', display: 'VIVENTES' }] },
      { id: 'gn-3-21', reference: 'Gênesis 3:21', text: 'E fez o Senhor Deus a Adão e à sua mulher túnicas de peles, e os vestiu.', words: [{ word: 'TUNICAS', display: 'TÚNICAS' }, { word: 'PELES', display: 'PELES' }, { word: 'VESTIU', display: 'VESTIU' }] },
      { id: 'gn-3-22', reference: 'Gênesis 3:22', text: 'Então disse o Senhor Deus: Eis que o homem é como um de nós, sabendo o bem e o mal; ora, para que não estenda a sua mão, e tome também da árvore da vida, e coma e viva eternamente,', words: [{ word: 'HOMEM', display: 'HOMEM' }, { word: 'BEM', display: 'BEM' }, { word: 'MAL', display: 'MAL' }, { word: 'MAO', display: 'MÃO' }, { word: 'ARVORE', display: 'ÁRVORE' }, { word: 'VIDA', display: 'VIDA' }] },
      { id: 'gn-3-23', reference: 'Gênesis 3:23', text: 'O Senhor Deus, pois, o lançou fora do jardim do Éden, para lavrar a terra de que fora tomado.', words: [{ word: 'LANCOU', display: 'LANÇOU' }, { word: 'JARDIM', display: 'JARDIM' }, { word: 'EDEN', display: 'ÉDEN' }, { word: 'LAVRAR', display: 'LAVRAR' }, { word: 'TERRA', display: 'TERRA' }] },
      { id: 'gn-3-24', reference: 'Gênesis 3:24', text: 'E havendo lançado fora o homem, pôs querubins ao oriente do jardim do Éden, e uma espada inflamada que andava ao redor, para guardar o caminho da árvore da vida.', words: [{ word: 'QUERUBINS', display: 'QUERUBINS' }, { word: 'ORIENTE', display: 'ORIENTE' }, { word: 'ESPADA', display: 'ESPADA' }, { word: 'CAMINHO', display: 'CAMINHO' }, { word: 'ARVORE', display: 'ÁRVORE' }, { word: 'VIDA', display: 'VIDA' }] },
      // --- GÊNESIS CAPÍTULO 4 ---
      { id: 'gn-4-1', reference: 'Gênesis 4:1', text: 'E conheceu Adão a Eva, sua mulher, e ela concebeu e deu à luz a Caim, e disse: Alcancei do SENHOR um homem.', words: [{ word: 'ADAO', display: 'ADÃO' }, { word: 'EVA', display: 'EVA' }, { word: 'CAIM', display: 'CAIM' }, { word: 'SENHOR', display: 'SENHOR' }, { word: 'HOMEM', display: 'HOMEM' }] },
      { id: 'gn-4-2', reference: 'Gênesis 4:2', text: 'E deu à luz mais a seu irmão Abel; e Abel foi pastor de ovelhas, e Caim foi lavrador da terra.', words: [{ word: 'ABEL', display: 'ABEL' }, { word: 'PASTOR', display: 'PASTOR' }, { word: 'OVELHAS', display: 'OVELHAS' }, { word: 'CAIM', display: 'CAIM' }, { word: 'LAVRADOR', display: 'LAVRADOR' }] },
      { id: 'gn-4-3', reference: 'Gênesis 4:3', text: 'E aconteceu ao cabo de dias que Caim trouxe do fruto da terra uma oferta ao Senhor.', words: [{ word: 'CAIM', display: 'CAIM' }, { word: 'FRUTO', display: 'FRUTO' }, { word: 'TERRA', display: 'TERRA' }, { word: 'OFERTA', display: 'OFERTA' }] },
      { id: 'gn-4-4', reference: 'Gênesis 4:4', text: 'E Abel também trouxe dos primogênitos das suas ovelhas, e da sua gordura; e atentou o Senhor para Abel e para a sua oferta.', words: [{ word: 'ABEL', display: 'ABEL' }, { word: 'PRIMOGENITOS', display: 'PRIMOGÊNITOS' }, { word: 'GORDURA', display: 'GORDURA' }, { word: 'ATENTOU', display: 'ATENTOU' }] },
      { id: 'gn-4-5', reference: 'Gênesis 4:5', text: 'Mas para Caim e para a sua oferta não atentou. E irou-se Caim fortemente, e descaiu-lhe o semblante.', words: [{ word: 'CAIM', display: 'CAIM' }, { word: 'OFERTA', display: 'OFERTA' }, { word: 'IRASE', display: 'IRÁ-SE' }, { word: 'SEMBLANTE', display: 'SEMBLANTE' }] },
      { id: 'gn-4-6', reference: 'Gênesis 4:6', text: 'E o Senhor disse a Caim: Por que te iraste? E por que descaiu o teu semblante?', words: [{ word: 'SENHOR', display: 'SENHOR' }, { word: 'CAIM', display: 'CAIM' }, { word: 'IRASTE', display: 'IRASTE' }, { word: 'SEMBLANTE', display: 'SEMBLANTE' }] },
      { id: 'gn-4-7', reference: 'Gênesis 4:7', text: 'Se bem fizeres, não é certo que serás aceito? E se não fizeres bem, o pecado jaz à porta, e sobre ti será o seu desejo, mas sobre ele deves dominar.', words: [{ word: 'BEM', display: 'BEM' }, { word: 'PECADO', display: 'PECADO' }, { word: 'PORTA', display: 'PORTA' }, { word: 'DESEJO', display: 'DESEJO' }, { word: 'DOMINAR', display: 'DOMINAR' }] },
      { id: 'gn-4-8', reference: 'Gênesis 4:8', text: 'E falou Caim com o seu irmão Abel; e sucedeu que, estando eles no campo, se levantou Caim contra o seu irmão Abel, e o matou.', words: [{ word: 'CAIM', display: 'CAIM' }, { word: 'ABEL', display: 'ABEL' }, { word: 'CAMPO', display: 'CAMPO' }, { word: 'MATOU', display: 'MATOU' }] },
      { id: 'gn-4-9', reference: 'Gênesis 4:9', text: 'E disse o Senhor a Caim: Onde está Abel, teu irmão? E ele disse: Não sei; sou eu guardador do meu irmão?', words: [{ word: 'ONDE', display: 'ONDE' }, { word: 'ABEL', display: 'ABEL' }, { word: 'IRMAO', display: 'IRMÃO' }, { word: 'GUARDADOR', display: 'GUARDADOR' }] },
      { id: 'gn-4-10', reference: 'Gênesis 4:10', text: 'E disse Deus: Que fizeste? A voz do sangue do teu irmão clama a mim desde a terra.', words: [{ word: 'SANGUE', display: 'SANGUE' }, { word: 'IRMAO', display: 'IRMÃO' }, { word: 'CLAMA', display: 'CLAMA' }, { word: 'TERRA', display: 'TERRA' }] },
      { id: 'gn-4-11', reference: 'Gênesis 4:11', text: 'E agora maldito és tu desde a terra, que abriu a sua boca para receber da tua mão o sangue do teu irmão.', words: [{ word: 'MALDITO', display: 'MALDITO' }, { word: 'TERRA', display: 'TERRA' }, { word: 'BOCA', display: 'BOCA' }, { word: 'SANGUE', display: 'SANGUE' }] },
      { id: 'gn-4-12', reference: 'Gênesis 4:12', text: 'Quando lavrares a terra, não te dará mais a sua força; fugitivo e vagabundo serás na terra.', words: [{ word: 'LAVRARES', display: 'LAVRARES' }, { word: 'FORCA', display: 'FORÇA' }, { word: 'FUGITIVO', display: 'FUGITIVO' }, { word: 'VAGABUNDO', display: 'VAGABUNDO' }] },
      { id: 'gn-4-13', reference: 'Gênesis 4:13', text: 'Então disse Caim ao Senhor: É maior a minha maldade que a que possa ser perdoada.', words: [{ word: 'CAIM', display: 'CAIM' }, { word: 'SENHOR', display: 'SENHOR' }, { word: 'MALDADE', display: 'MALDADE' }, { word: 'PERDOADA', display: 'PERDOADA' }] },
      { id: 'gn-4-14', reference: 'Gênesis 4:14', text: 'Eis que hoje me lanças da face da terra, e da tua face me esconderei; e serei fugitivo e vagabundo na terra, e será que todo aquele que me achar, me matará.', words: [{ word: 'FACE', display: 'FACE' }, { word: 'TERRA', display: 'TERRA' }, { word: 'FUGITIVO', display: 'FUGITIVO' }, { word: 'VAGABUNDO', display: 'VAGABUNDO' }, { word: 'MATARA', display: 'MATARÁ' }] },
      { id: 'gn-4-15', reference: 'Gênesis 4:15', text: 'O Senhor, porém, disse-lhe: Portanto qualquer que matar a Caim, sete vezes será castigado. E pôs o Senhor um sinal em Caim, para que o não ferisse qualquer que o achasse.', words: [{ word: 'MATAR', display: 'MATAR' }, { word: 'CAIM', display: 'CAIM' }, { word: 'SETE', display: 'SETE' }, { word: 'CASTIGADO', display: 'CASTIGADO' }, { word: 'SINAL', display: 'SINAL' }] },
      { id: 'gn-4-16', reference: 'Gênesis 4:16', text: 'E saiu Caim de diante da face do Senhor, e habitou na terra de Node, do lado oriental do Éden.', words: [{ word: 'CAIM', display: 'CAIM' }, { word: 'FACE', display: 'FACE' }, { word: 'SENHOR', display: 'SENHOR' }, { word: 'NODE', display: 'NODE' }, { word: 'ORIENTAL', display: 'ORIENTAL' }, { word: 'EDEN', display: 'ÉDEN' }] },
      { id: 'gn-4-17', reference: 'Gênesis 4:17', text: 'E conheceu Caim a sua mulher, e ela concebeu, e deu à luz a Enoque; e ele edificou uma cidade, e chamou o nome da cidade conforme o nome de seu filho Enoque;', words: [{ word: 'MULHER', display: 'MULHER' }, { word: 'ENOQUE', display: 'ENOQUE' }, { word: 'CIDADE', display: 'CIDADE' }] },
      { id: 'gn-4-18', reference: 'Gênesis 4:18', text: 'E a Enoque nasceu Irade, e Irade gerou a Meujael, e Meujael gerou a Metusael e Metusael gerou a Lameque.', words: [{ word: 'ENOQUE', display: 'ENOQUE' }, { word: 'IRADE', display: 'IRADE' }, { word: 'MEUJAEL', display: 'MEUJAEL' }, { word: 'METUSAEL', display: 'METUSAEL' }, { word: 'LAMEQUE', display: 'LAMEQUE' }] },
      { id: 'gn-4-19', reference: 'Gênesis 4:19', text: 'E tomou Lameque para si duas mulheres; o nome de uma era Ada, e o nome da outra, Zilá.', words: [{ word: 'LAMEQUE', display: 'LAMEQUE' }, { word: 'DUAS', display: 'DUAS' }, { word: 'MULHERES', display: 'MULHERES' }, { word: 'ADA', display: 'ADA' }, { word: 'ZILA', display: 'ZILÁ' }] },
      { id: 'gn-4-20', reference: 'Gênesis 4:20', text: 'E Ada deu à luz a Jabal; este foi o pai dos que habitam em tendas e têm gado.', words: [{ word: 'ADA', display: 'ADA' }, { word: 'JABAL', display: 'JABAL' }, { word: 'PAI', display: 'PAI' }, { word: 'TENDAS', display: 'TENDAS' }, { word: 'GADO', display: 'GADO' }] },
      { id: 'gn-4-21', reference: 'Gênesis 4:21', text: 'E o nome do seu irmão era Jubal; este foi o pai de todos os que tocam harpa e órgão.', words: [{ word: 'JUBAL', display: 'JUBAL' }, { word: 'PAI', display: 'PAI' }, { word: 'HARPA', display: 'HARPA' }, { word: 'ORGAO', display: 'ÓRGÃO' }] },
      { id: 'gn-4-22', reference: 'Gênesis 4:22', text: 'E Zilá também deu à luz a Tubalcaim, mestre de toda a obra de cobre e ferro; e a irmã de Tubalcaim foi Noema.', words: [{ word: 'ZILA', display: 'ZILÁ' }, { word: 'TUBALCAIM', display: 'TUBALCAIM' }, { word: 'COBRE', display: 'COBRE' }, { word: 'FERRO', display: 'FERRO' }, { word: 'NOEMA', display: 'NOEMA' }] },
      { id: 'gn-4-23', reference: 'Gênesis 4:23', text: 'E disse Lameque a suas mulheres Ada e Zilá: Ouvi a minha voz; vós, mulheres de Lameque, escutai as minhas palavras; porque eu matei um homem por me ferir, e um jovem por me pisar.', words: [{ word: 'LAMEQUE', display: 'LAMEQUE' }, { word: 'ADA', display: 'ADA' }, { word: 'ZILA', display: 'ZILÁ' }, { word: 'VOZ', display: 'VOZ' }, { word: 'PALAVRAS', display: 'PALAVRAS' }, { word: 'HOMEM', display: 'HOMEM' }] },
      { id: 'gn-4-24', reference: 'Gênesis 4:24', text: 'Porque sete vezes Caim será castigado; mas Lameque setenta vezes sete.', words: [{ word: 'SETE', display: 'SETE' }, { word: 'CAIM', display: 'CAIM' }, { word: 'LAMEQUE', display: 'LAMEQUE' }, { word: 'SETENTA', display: 'SETENTA' }] },
      { id: 'gn-4-25', reference: 'Gênesis 4:25', text: 'E tornou Adão a conhecer a sua mulher; e ela deu à luz um filho, e chamou o seu nome Sete; porque, disse ela, Deus me deu outro filho em lugar de Abel; porquanto Caim o matou.', words: [{ word: 'ADAO', display: 'ADÃO' }, { word: 'MULHER', display: 'MULHER' }, { word: 'FILHO', display: 'FILHO' }, { word: 'SETE', display: 'SETE' }, { word: 'DEUS', display: 'DEUS' }, { word: 'ABEL', display: 'ABEL' }] },
      { id: 'gn-4-26', reference: 'Gênesis 4:26', text: 'E a Sete também nasceu um filho; e chamou o seu nome Enos; então se começou a invocar o nome do Senhor.', words: [{ word: 'SETE', display: 'SETE' }, { word: 'FILHO', display: 'FILHO' }, { word: 'ENOS', display: 'ENOS' }, { word: 'INVOCAR', display: 'INVOCAR' }, { word: 'NOME', display: 'NOME' }] },
    ] 
  },
  { id: 'exodus', name: 'Êxodo', testament: 'Old', totalVerses: 1213, isLocked: true, levels: [] },
  { id: 'leviticus', name: 'Levítico', testament: 'Old', totalVerses: 859, isLocked: true, levels: [] },
  { id: 'numbers', name: 'Números', testament: 'Old', totalVerses: 1288, isLocked: true, levels: [] },
  { id: 'deuteronomy', name: 'Deuteronômio', testament: 'Old', totalVerses: 959, isLocked: true, levels: [] },
  { id: 'joshua', name: 'Josué', testament: 'Old', totalVerses: 658, isLocked: true, levels: [] },
  { id: 'judges', name: 'Juízes', testament: 'Old', totalVerses: 618, isLocked: true, levels: [] },
  { id: 'ruth', name: 'Rute', testament: 'Old', totalVerses: 85, isLocked: true, levels: [] },
  { id: '1samuel', name: '1 Samuel', testament: 'Old', totalVerses: 810, isLocked: true, levels: [] },
  { id: '2samuel', name: '2 Samuel', testament: 'Old', totalVerses: 695, isLocked: true, levels: [] },
  { id: '1kings', name: '1 Reis', testament: 'Old', totalVerses: 816, isLocked: true, levels: [] },
  { id: '2kings', name: '2 Reis', testament: 'Old', totalVerses: 719, isLocked: true, levels: [] },
  { id: '1chronicles', name: '1 Crônicas', testament: 'Old', totalVerses: 942, isLocked: true, levels: [] },
  { id: '2chronicles', name: '2 Crônicas', testament: 'Old', totalVerses: 822, isLocked: true, levels: [] },
  { id: 'ezra', name: 'Esdras', testament: 'Old', totalVerses: 280, isLocked: true, levels: [] },
  { id: 'nehemiah', name: 'Neemias', testament: 'Old', totalVerses: 406, isLocked: true, levels: [] },
  { id: 'esther', name: 'Ester', testament: 'Old', totalVerses: 167, isLocked: true, levels: [] },
  { id: 'job', name: 'Jó', testament: 'Old', totalVerses: 1070, isLocked: true, levels: [] },
  { id: 'psalms', name: 'Salmos', testament: 'Old', totalVerses: 2461, isLocked: true, levels: [] },
  { id: 'proverbs', name: 'Provérbios', testament: 'Old', totalVerses: 915, isLocked: true, levels: [] },
  { id: 'ecclesiastes', name: 'Eclesiastes', testament: 'Old', totalVerses: 222, isLocked: true, levels: [] },
  { id: 'songofsongs', name: 'Cânticos', testament: 'Old', totalVerses: 117, isLocked: true, levels: [] },
  { id: 'isaiah', name: 'Isaías', testament: 'Old', totalVerses: 1292, isLocked: true, levels: [] },
  { id: 'jeremiah', name: 'Jeremias', testament: 'Old', totalVerses: 1364, isLocked: true, levels: [] },
  { id: 'lamentations', name: 'Lamentações', testament: 'Old', totalVerses: 154, isLocked: true, levels: [] },
  { id: 'ezekiel', name: 'Ezequiel', testament: 'Old', totalVerses: 1273, isLocked: true, levels: [] },
  { id: 'daniel', name: 'Daniel', testament: 'Old', totalVerses: 357, isLocked: true, levels: [] },
  { id: 'hosea', name: 'Oséias', testament: 'Old', totalVerses: 197, isLocked: true, levels: [] },
  { id: 'joel', name: 'Joel', testament: 'Old', totalVerses: 73, isLocked: true, levels: [] },
  { id: 'amos', name: 'Amós', testament: 'Old', totalVerses: 146, isLocked: true, levels: [] },
  { id: 'obadiah', name: 'Obadias', testament: 'Old', totalVerses: 21, isLocked: true, levels: [] },
  { id: 'jonah', name: 'Jonas', testament: 'Old', totalVerses: 48, isLocked: true, levels: [] },
  { id: 'micah', name: 'Miquéias', testament: 'Old', totalVerses: 105, isLocked: true, levels: [] },
  { id: 'nahum', name: 'Naum', testament: 'Old', totalVerses: 47, isLocked: true, levels: [] },
  { id: 'habakkuk', name: 'Habacuque', testament: 'Old', totalVerses: 56, isLocked: true, levels: [] },
  { id: 'zephaniah', name: 'Sofonias', testament: 'Old', totalVerses: 53, isLocked: true, levels: [] },
  { id: 'haggai', name: 'Ageu', testament: 'Old', totalVerses: 38, isLocked: true, levels: [] },
  { id: 'zechariah', name: 'Zacarias', testament: 'Old', totalVerses: 211, isLocked: true, levels: [] },
  { id: 'malachi', name: 'Malaquias', testament: 'Old', totalVerses: 55, isLocked: true, levels: [] },
];