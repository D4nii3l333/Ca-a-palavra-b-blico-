import { BookData } from './types';

export const BOOKS: BookData[] = [
  // --- NOVO TESTAMENTO ---
  { id: 'matthew', name: 'Mateus', testament: 'New', totalVerses: 1071, isLocked: true, levels: [] },
  { id: 'mark', name: 'Marcos', testament: 'New', totalVerses: 678, isLocked: true, levels: [] },
  { id: 'luke', name: 'Lucas', testament: 'New', totalVerses: 1151, isLocked: true, levels: [] },
  { id: 'john', name: 'João', testament: 'New', totalVerses: 879, isLocked: true, levels: [] },
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
  { id: 'genesis', name: 'Gênesis', testament: 'Old', totalVerses: 1533, isLocked: true, levels: [] },
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