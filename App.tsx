import React, { useState, useEffect, useRef } from 'react';
import { ScreenState, BookData, LevelData, WordConfig, GridState, Coordinate, UserProfile, GameMode } from './types';
import { BOOKS } from './constants';
import { generateGrid, normalizeWord } from './utils/gameLogic';
import { WordGrid } from './components/WordGrid';
import { Lock, BookOpen, Play, ChevronLeft, Award, Calendar, Lightbulb, Star, Unlock, MonitorPlay, Hammer, Scroll, User, LogIn, Loader2, Edit3, Camera, LogOut, Save, RefreshCw, Check, ZoomIn, Hand, MousePointer2, Eye, Minimize2, Maximize2, Coffee } from 'lucide-react';

// --- AVATAR CONFIGURATION ---
const AVATARS = [
  { id: 1, color: 'bg-blue-600', icon: User },
  { id: 2, color: 'bg-red-500', icon: Star },
  { id: 3, color: 'bg-green-600', icon: Scroll },
  { id: 4, color: 'bg-yellow-500', icon: Lightbulb },
  { id: 5, color: 'bg-purple-600', icon: Award },
  { id: 6, color: 'bg-orange-500', icon: BookOpen },
  { id: 7, color: 'bg-teal-600', icon: User },
  { id: 8, color: 'bg-pink-600', icon: Star },
];

type AdContext = 'UNLOCK_BOOK' | 'HINT' | 'INTERSTITIAL';

const App: React.FC = () => {
  // Start with a loading state to check persistence before showing any screen
  const [isLoading, setIsLoading] = useState(true);
  const [screen, setScreen] = useState<ScreenState>(ScreenState.LOGIN);
  
  const [selectedBook, setSelectedBook] = useState<BookData | null>(null);
  
  // Game Setup State
  const [pendingLevel, setPendingLevel] = useState<{level: LevelData, index: number} | null>(null);
  const [currentLevel, setCurrentLevel] = useState<LevelData | null>(null);
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.STANDARD);
  
  // Accessibility & Viewport State
  const [interactionMode, setInteractionMode] = useState<'SELECT' | 'PAN'>('SELECT');
  // ViewState: { x, y, scale } for infinite canvas manipulation
  const [viewState, setViewState] = useState({ x: 0, y: 0, scale: 1.0 });
  
  // Gesture Refs
  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const prevPinchDistRef = useRef<number | null>(null);
  const lastPanPointRef = useRef<{ x: number; y: number } | null>(null);

  // User Profile State
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // Profile Editing State
  const [tempName, setTempName] = useState('');
  const [tempAvatarId, setTempAvatarId] = useState(1);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // Persistence / Progress State
  const [unlockedBookIds, setUnlockedBookIds] = useState<string[]>(['2john', 'matthew', 'john', 'genesis']); // Default unlocked
  const [completedLevels, setCompletedLevels] = useState<string[]>([]); // List of level IDs completed

  // Ad Simulation State
  const [showAdModal, setShowAdModal] = useState(false);
  const [adContext, setAdContext] = useState<AdContext>('UNLOCK_BOOK');
  const [pendingAdAction, setPendingAdAction] = useState<(() => void) | null>(null);
  const [adTargetBook, setAdTargetBook] = useState<BookData | null>(null); // Only for UNLOCK_BOOK context
  const [adTimer, setAdTimer] = useState(60);
  const [isAdPlaying, setIsAdPlaying] = useState(false);

  // Ad Frequency Counters (Session based)
  const [hintUsageCount, setHintUsageCount] = useState(0);
  const [levelsCompletedSessionCount, setLevelsCompletedSessionCount] = useState(0);

  // Game State
  const [gridState, setGridState] = useState<GridState | null>(null);
  const [foundWordIndices, setFoundWordIndices] = useState<number[]>([]); 
  const [foundCoordinates, setFoundCoordinates] = useState<Coordinate[][]>([]);
  
  // Login Loading State
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // --- INITIALIZATION ---

  useEffect(() => {
    // Check local storage for existing user
    const storedUser = localStorage.getItem('bible_word_search_user');
    
    // Simulate a small delay for the "Splash Screen" feel or asset loading
    setTimeout(() => {
      if (storedUser) {
        setUserProfile(JSON.parse(storedUser));
        setScreen(ScreenState.MENU);
      } else {
        setScreen(ScreenState.LOGIN);
      }
      setIsLoading(false);
    }, 800);
  }, []);

  // --- ACTIONS ---

  const handleGoogleLogin = () => {
    setIsLoggingIn(true);
    // Simulate API Call
    setTimeout(() => {
      const mockUser: UserProfile = { 
        name: 'Viajante Bíblico', 
        isGuest: false,
        avatarId: Math.floor(Math.random() * AVATARS.length) + 1
      };
      localStorage.setItem('bible_word_search_user', JSON.stringify(mockUser));
      setUserProfile(mockUser);
      setIsLoggingIn(false);
      setScreen(ScreenState.MENU);
    }, 1500);
  };

  const handleGuestLogin = () => {
    const guestUser: UserProfile = { 
      name: 'Visitante', 
      isGuest: true,
      avatarId: 1 
    };
    localStorage.setItem('bible_word_search_user', JSON.stringify(guestUser));
    setUserProfile(guestUser);
    setScreen(ScreenState.MENU);
  };

  const handleLogout = () => {
    localStorage.removeItem('bible_word_search_user');
    setUserProfile(null);
    setScreen(ScreenState.LOGIN);
  };

  const handleSwitchOrLinkAccount = () => {
    setIsLoggingIn(true);
    setTimeout(() => {
      const isUpgrade = userProfile?.isGuest;
      const newUser: UserProfile = { 
        name: isUpgrade ? userProfile.name : 'Novo Usuário Google', 
        isGuest: false,
        avatarId: isUpgrade ? userProfile.avatarId : Math.floor(Math.random() * AVATARS.length) + 1
      };
      localStorage.setItem('bible_word_search_user', JSON.stringify(newUser));
      setUserProfile(newUser);
      setIsLoggingIn(false);
      setScreen(ScreenState.MENU);
    }, 1500);
  };

  const startEditingProfile = () => {
    if (userProfile) {
      setTempName(userProfile.name);
      setTempAvatarId(userProfile.avatarId);
      setIsEditingProfile(true);
    }
  };

  const saveProfile = () => {
    if (userProfile) {
      const updatedProfile = { ...userProfile, name: tempName, avatarId: tempAvatarId };
      setUserProfile(updatedProfile);
      localStorage.setItem('bible_word_search_user', JSON.stringify(updatedProfile));
      setIsEditingProfile(false);
    }
  };

  const handleBookClick = (book: BookData) => {
    if (book.levels.length === 0) return;

    if (unlockedBookIds.includes(book.id) || !book.isLocked) {
      setSelectedBook(book);
      setScreen(ScreenState.LEVEL_SELECT);
    } else {
      setAdTargetBook(book);
      setAdContext('UNLOCK_BOOK');
      setPendingAdAction(() => () => {
        setUnlockedBookIds(prev => [...prev, book.id]);
        setSelectedBook(book);
        setScreen(ScreenState.LEVEL_SELECT);
      });
      setAdTimer(30); // Shorter for demo
      setIsAdPlaying(false);
      setShowAdModal(true);
    }
  };

  const handleWatchAd = () => {
    setIsAdPlaying(true);
    const interval = setInterval(() => {
      setAdTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          completeAd();
          return 0;
        }
        return prev - 1;
      });
    }, 100); 
  };

  const completeAd = () => {
    setShowAdModal(false);
    setIsAdPlaying(false);
    setAdTargetBook(null);
    if (pendingAdAction) {
      pendingAdAction();
      setPendingAdAction(null);
    }
  };

  // Called when clicking a level in Level Select
  const handleLevelPreSelect = (level: LevelData, index: number) => {
    setPendingLevel({ level, index });
    // The modal will now be shown because pendingLevel is not null
  };

  const startGameWithMode = (mode: GameMode) => {
    if (!pendingLevel) return;
    
    try {
      const newGrid = generateGrid(pendingLevel.level.words);
      setGridState(newGrid);
      setFoundWordIndices([]);
      setFoundCoordinates([]);
      setCurrentLevel(pendingLevel.level);
      setCurrentLevelIndex(pendingLevel.index);
      setGameMode(mode);
      
      // Reset Accessibility Defaults
      setViewState({ x: 0, y: 0, scale: mode === GameMode.ACCESSIBLE ? 1.0 : 1.0 });
      setInteractionMode('SELECT');
      
      setPendingLevel(null);
      setScreen(ScreenState.GAME);
    } catch (e) {
      console.error("Failed to start level", e);
      alert("Erro ao carregar fase. Tente novamente.");
    }
  };

  const handleLevelComplete = () => {
    if (currentLevel) {
      if (!completedLevels.includes(currentLevel.id)) {
        setCompletedLevels(prev => [...prev, currentLevel.id]);
      }
      // Increment session counter for ads
      setLevelsCompletedSessionCount(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (currentLevel && foundWordIndices.length > 0 && foundWordIndices.length === currentLevel.words.length) {
      handleLevelComplete();
    }
  }, [foundWordIndices]);

  const handleWordAttempt = (coords: Coordinate[]) => {
    if (!currentLevel || !gridState) return;

    const selectedLetters = coords.map(c => gridState.cells[c.r][c.c].letter).join('');
    const reversedLetters = selectedLetters.split('').reverse().join('');

    const matchedIndex = currentLevel.words.findIndex((w, idx) => {
      if (foundWordIndices.includes(idx)) return false;
      const target = w.word;
      return target === selectedLetters || target === reversedLetters;
    });

    if (matchedIndex !== -1) {
      const wordConfig = currentLevel.words[matchedIndex];
      const correctCoords = gridState.solutions[wordConfig.word];
      setFoundWordIndices(prev => [...prev, matchedIndex]);
      setFoundCoordinates(prev => [...prev, correctCoords || coords]);
    }
  };

  const executeHint = () => {
    if (!currentLevel || !gridState) return;
    const availableIndices = currentLevel.words
      .map((_, idx) => idx)
      .filter(idx => !foundWordIndices.includes(idx));
      
    if (availableIndices.length === 0) return;
    const nextIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    const wordConfig = currentLevel.words[nextIndex];
    const solution = gridState.solutions[wordConfig.word];
    if (solution) {
      setFoundWordIndices(prev => [...prev, nextIndex]);
      setFoundCoordinates(prev => [...prev, solution]);
      // Only increment count if the hint is successfully executed/delivered
      setHintUsageCount(prev => prev + 1);
    }
  };

  const handleHint = () => {
    if ((hintUsageCount + 1) % 2 === 0) {
      setAdContext('HINT');
      setPendingAdAction(() => () => {
        executeHint();
      });
      setAdTimer(15);
      setIsAdPlaying(false);
      setShowAdModal(true);
    } else {
      executeHint();
    }
  };

  const nextLevel = () => {
    const countToCheck = levelsCompletedSessionCount; 
    const shouldShowAd = countToCheck > 0 && (countToCheck % 3 === 0 || countToCheck % 5 === 0);

    const proceedToNextLevel = () => {
      if (selectedBook && selectedBook.levels[currentLevelIndex + 1]) {
         const nextLvl = selectedBook.levels[currentLevelIndex + 1];
         const nextIndex = currentLevelIndex + 1;
         
         try {
          const newGrid = generateGrid(nextLvl.words);
          setGridState(newGrid);
          setFoundWordIndices([]);
          setFoundCoordinates([]);
          setCurrentLevel(nextLvl);
          setCurrentLevelIndex(nextIndex);
          // Reset view
          setViewState({ x: 0, y: 0, scale: gameMode === GameMode.ACCESSIBLE ? 1.0 : 1.0 });
        } catch (e) {
          console.error("Failed to start next level", e);
        }
      }
    };

    if (shouldShowAd) {
      setAdContext('INTERSTITIAL');
      setPendingAdAction(() => () => {
        proceedToNextLevel();
      });
      setAdTimer(30);
      setIsAdPlaying(false);
      setShowAdModal(true);
    } else {
      proceedToNextLevel();
    }
  };

  // --- GESTURE HANDLING FOR ACCESSIBLE MODE (PAN/ZOOM) ---

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (gameMode !== GameMode.ACCESSIBLE || interactionMode !== 'PAN') return;
    
    e.currentTarget.setPointerCapture(e.pointerId);
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // If 1 pointer, setup for PAN
    if (pointersRef.current.size === 1) {
      lastPanPointRef.current = { x: e.clientX, y: e.clientY };
    }
    // If 2 pointers, setup for PINCH
    else if (pointersRef.current.size === 2) {
      const points = Array.from(pointersRef.current.values()) as { x: number; y: number }[];
      const dist = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
      prevPinchDistRef.current = dist;
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (gameMode !== GameMode.ACCESSIBLE || interactionMode !== 'PAN') return;
    if (!pointersRef.current.has(e.pointerId)) return;

    // Update current pointer position
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // Handle Pan (1 Finger)
    if (pointersRef.current.size === 1 && lastPanPointRef.current) {
      const dx = e.clientX - lastPanPointRef.current.x;
      const dy = e.clientY - lastPanPointRef.current.y;
      
      setViewState(prev => ({
        ...prev,
        x: prev.x + dx,
        y: prev.y + dy
      }));
      
      lastPanPointRef.current = { x: e.clientX, y: e.clientY };
    }
    // Handle Pinch Zoom (2 Fingers)
    else if (pointersRef.current.size === 2) {
      const points = Array.from(pointersRef.current.values()) as { x: number; y: number }[];
      const dist = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);

      if (prevPinchDistRef.current !== null) {
        const delta = dist - prevPinchDistRef.current;
        // Sensitivity factor
        const scaleDelta = delta * 0.005; 
        
        setViewState(prev => ({
          ...prev,
          scale: Math.max(0.5, Math.min(prev.scale + scaleDelta, 3.0)) // Limit scale between 0.5x and 3x
        }));
      }
      prevPinchDistRef.current = dist;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (gameMode !== GameMode.ACCESSIBLE || interactionMode !== 'PAN') return;
    
    pointersRef.current.delete(e.pointerId);
    e.currentTarget.releasePointerCapture(e.pointerId);

    // Reset interaction states if pointers drop
    if (pointersRef.current.size < 2) {
      prevPinchDistRef.current = null;
    }
    if (pointersRef.current.size === 1) {
      // If we dropped from 2 to 1, reset the pan reference to avoid jumps
      const remainingPoint = pointersRef.current.values().next().value;
      lastPanPointRef.current = remainingPoint;
    } else {
      lastPanPointRef.current = null;
    }
  };

  const isLevelComplete = currentLevel && foundWordIndices.length === currentLevel.words.length;

  // --- RENDERERS ---

  const renderAvatar = (id: number, sizeClass: string = "w-10 h-10", iconSize: number = 20) => {
    const avatar = AVATARS.find(a => a.id === id) || AVATARS[0];
    const IconComponent = avatar.icon;
    return (
      <div className={`${sizeClass} rounded-full ${avatar.color} flex items-center justify-center text-white shadow-sm border-2 border-white/20`}>
        <IconComponent size={iconSize} />
      </div>
    );
  };

  const renderVerseText = (text: string, words: WordConfig[]) => {
    // Create a regex to match any of the words (case insensitive)
    const sortedWords = [...words].sort((a, b) => b.display.length - a.display.length); 
    const pattern = `(${sortedWords.map(w => w.display.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`;
    const regex = new RegExp(pattern, 'gi');
    
    const parts = text.split(regex);
    
    return (
      <span className="leading-relaxed">
        {parts.map((part, i) => {
          const isMatch = words.some(w => w.display.toLowerCase() === part.toLowerCase());
          const isFound = isMatch && currentLevel && words.findIndex(w => w.display.toLowerCase() === part.toLowerCase()) !== -1 && foundWordIndices.includes(words.findIndex(w => w.display.toLowerCase() === part.toLowerCase()));

          if (isMatch) {
            return (
              <span 
                key={i} 
                className={`
                  inline-block px-1 rounded mx-0.5 font-bold transition-all duration-300
                  ${gameMode === GameMode.ACCESSIBLE 
                    ? isFound 
                      ? 'bg-nature text-white shadow-sm' 
                      : 'bg-wood/20 text-wood-darker border border-wood/30'
                    : isFound
                      ? 'text-nature-dark underline'
                      : 'text-nature-dark'}
                `}
              >
                {part}
              </span>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </span>
    );
  };

  const renderAdModal = () => {
    if (!showAdModal) return null;

    let title = "";
    let message = "";
    let icon = null;

    if (adContext === 'UNLOCK_BOOK' && adTargetBook) {
      title = "Desbloquear Livro";
      message = `O livro ${adTargetBook.name} está bloqueado. Assista a um vídeo curto para liberar todas as fases.`;
      icon = <BookOpen className="w-10 h-10 text-wood" />;
    } else if (adContext === 'HINT') {
      title = "Dica Bloqueada";
      message = "Assista a um vídeo curto para revelar uma palavra escondida no versículo.";
      icon = <Lightbulb className="w-10 h-10 text-yellow-500" />;
    } else if (adContext === 'INTERSTITIAL') {
      title = "Intervalo";
      message = "Assista a um breve anúncio para continuar sua jornada de aprendizado.";
      icon = <Coffee className="w-10 h-10 text-wood-dark" />;
    }

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
        <div className="bg-parchment-100 rounded-xl shadow-2xl max-w-sm w-full overflow-hidden border-4 border-wood relative">
           {!isAdPlaying && (
             <button 
               onClick={() => {
                 setShowAdModal(false);
                 setAdTargetBook(null);
                 setPendingAdAction(null); // Explicitly clear pending action on cancel
               }}
               className="absolute top-2 right-2 text-wood-dark hover:bg-wood/10 p-2 rounded-full transition"
             >
               <LogOut className="w-5 h-5" /> 
             </button>
           )}

           <div className="bg-wood p-4 text-center">
             <h3 className="text-xl font-display font-bold text-parchment-100">{title}</h3>
           </div>
           
           <div className="p-6 flex flex-col items-center text-center space-y-6">
              <div className="relative">
                 <div className="w-20 h-20 bg-wood/10 rounded-full flex items-center justify-center">
                    {icon}
                 </div>
                 {adContext === 'UNLOCK_BOOK' && (
                   <div className="absolute -bottom-2 -right-2 bg-nature text-white p-2 rounded-full shadow border-2 border-parchment-100">
                      <Unlock className="w-4 h-4" />
                   </div>
                 )}
              </div>
              
              <div>
                <p className="text-wood-dark font-serif text-lg mb-2 leading-tight">
                   {message}
                </p>
                <p className="text-xs text-wood opacity-60">
                   Ajude-nos a manter o jogo gratuito.
                </p>
              </div>

              {isAdPlaying ? (
                <div className="w-full bg-black/5 rounded-xl p-4 flex flex-col items-center border border-black/5">
                   <div className="mb-2 text-wood-dark font-bold text-3xl tabular-nums">{adTimer}s</div>
                   <div className="w-full h-3 bg-wood/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-nature transition-all duration-1000 ease-linear"
                        style={{ width: `${((60 - adTimer) / 60) * 100}%` }}
                      ></div>
                   </div>
                   <p className="text-xs mt-3 text-wood-dark/60 font-bold uppercase tracking-wider">Exibindo Anúncio...</p>
                </div>
              ) : (
                <button 
                  onClick={handleWatchAd}
                  className="w-full bg-nature hover:bg-nature-dark text-white font-bold py-3.5 px-6 rounded-xl shadow-lg flex items-center justify-center gap-3 transform active:scale-95 transition border-b-4 border-nature-dark"
                >
                  <MonitorPlay className="w-5 h-5" /> Assistir Anúncio
                </button>
              )}
           </div>
        </div>
      </div>
    );
  };

  // ... (Keep existing renderLogin, renderMenu, renderProfile, renderBookSelection, renderLevelSelect logic)
  const renderLogin = () => (
    <div className="flex flex-col items-center justify-center h-full px-8 animate-fade-in relative">
       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] pointer-events-none"></div>
       
       <div className="text-center space-y-6 mb-12 relative z-10">
        <div className="relative inline-block mb-2">
          <BookOpen className="w-20 h-20 text-wood-darker mx-auto drop-shadow-md" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-400/30 blur-2xl rounded-full -z-10"></div>
        </div>
        <div>
          <h1 className="text-4xl font-display font-bold text-wood-darker drop-shadow-sm leading-tight">
            CAÇA-PALAVRA<br/><span className="text-nature-dark">BÍBLICO</span>
          </h1>
          <p className="text-wood-dark mt-2 font-serif italic">Aprenda as escrituras brincando</p>
        </div>
      </div>

      <div className="w-full max-w-xs space-y-4 relative z-10">
        {isLoggingIn ? (
          <div className="w-full py-4 flex flex-col items-center justify-center text-wood-darker animate-pulse">
            <Loader2 className="w-8 h-8 animate-spin mb-2" />
            <span className="text-sm font-bold">Conectando...</span>
          </div>
        ) : (
          <>
            <button 
              onClick={handleGoogleLogin}
              className="w-full bg-white hover:bg-gray-50 text-gray-700 font-bold py-3.5 px-6 rounded-xl shadow-md transform transition active:scale-95 flex items-center justify-center text-base border border-gray-300"
            >
              <div className="mr-3 w-5 h-5 relative flex items-center justify-center">
                 <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                 </svg>
              </div>
              Entrar com Google
            </button>

            <div className="relative py-2 flex items-center justify-center">
              <div className="h-px bg-wood/20 w-full absolute"></div>
              <span className="bg-parchment-200 px-2 text-xs text-wood/50 font-bold uppercase relative z-10">ou</span>
            </div>

            <button 
              onClick={handleGuestLogin}
              className="w-full bg-wood hover:bg-wood-light text-parchment-100 font-serif font-bold py-3.5 px-6 rounded-xl shadow opacity-90 hover:opacity-100 flex items-center justify-center border-b-4 border-wood-dark transition active:scale-95 active:border-b-0 active:translate-y-1"
            >
              <User className="mr-2 w-5 h-5 opacity-80" /> Entrar sem conta
            </button>
          </>
        )}
      </div>

      <div className="mt-auto pb-6 text-center opacity-60">
        <p className="text-xs text-wood-dark font-bold mb-2">Tradução: Bíblia Almeida Corrigida Fiel (ACF)</p>
        <p className="text-[10px] text-wood-dark max-w-[250px] mx-auto leading-relaxed opacity-80">
          Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade.
        </p>
      </div>
    </div>
  );

  const renderMenu = () => (
    <div className="flex flex-col items-center justify-center h-full space-y-8 animate-fade-in px-6 relative">
      <button 
        onClick={() => {
          startEditingProfile();
          setIsEditingProfile(false); 
          setScreen(ScreenState.PROFILE);
        }}
        className="absolute top-4 right-4 flex items-center space-x-2 bg-parchment-100/50 hover:bg-parchment-100 px-3 py-1.5 rounded-full shadow-sm transition-all border border-wood/10"
      >
        {userProfile && renderAvatar(userProfile.avatarId, "w-6 h-6", 14)}
        <span className="text-xs font-bold text-wood-darker truncate max-w-[100px]">{userProfile?.name || 'Visitante'}</span>
      </button>

      <div className="text-center space-y-2">
        <div className="relative inline-block">
          <BookOpen className="w-16 h-16 text-wood mx-auto mb-4" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-yellow-400/20 blur-xl rounded-full -z-10"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-display text-wood-darker drop-shadow-sm">
          CAÇA-PALAVRA<br/>BÍBLICO
        </h1>
      </div>

      <div className="w-full max-w-xs space-y-4">
        <button 
          onClick={() => setScreen(ScreenState.BOOKS)}
          className="w-full bg-nature hover:bg-nature-dark text-white font-serif font-bold py-4 px-6 rounded-xl shadow-lg transform transition active:scale-95 flex items-center justify-center text-xl border-b-4 border-nature-dark"
        >
          <Play className="mr-3 w-6 h-6" /> JOGAR
        </button>

        <button disabled className="w-full bg-wood hover:bg-wood-light text-parchment-100 font-serif font-bold py-3 px-6 rounded-xl shadow opacity-80 cursor-not-allowed flex items-center justify-center border-b-4 border-wood-dark">
          <Calendar className="mr-3 w-5 h-5" /> DIÁRIOS
        </button>

        <button disabled className="w-full bg-blue-600 hover:bg-blue-700 text-white font-serif font-bold py-3 px-6 rounded-xl shadow opacity-80 cursor-not-allowed flex items-center justify-center border-b-4 border-blue-800">
          <Award className="mr-3 w-5 h-5" /> DESAFIOS BÍBLICOS
        </button>
      </div>
      
      <div className="mt-auto text-wood/60 text-sm italic pt-8 pb-4 text-center">
        <p className="mb-2">"Lâmpada para os meus pés é a tua palavra"</p>
        <p className="text-[10px] uppercase tracking-wider opacity-70">Tradução: Almeida Corrigida Fiel (ACF)</p>
      </div>
    </div>
  );

  const renderProfile = () => {
    if (!userProfile) return null;
    return (
      <div className="flex flex-col h-full animate-fade-in bg-parchment-200">
        <div className="p-4 bg-wood shadow-md text-parchment-100 flex items-center shrink-0 z-10">
           <button 
             onClick={() => {
               setIsEditingProfile(false);
               setScreen(ScreenState.MENU);
             }}
             className="flex items-center font-bold hover:bg-white/10 p-2 rounded transition"
           >
             <ChevronLeft className="w-6 h-6" />
           </button>
           <h2 className="text-xl font-display font-bold ml-4">Meu Perfil</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center">
          <div className="relative mb-8 mt-4">
             {renderAvatar(isEditingProfile ? tempAvatarId : userProfile.avatarId, "w-32 h-32", 64)}
             {isEditingProfile && (
               <div className="absolute bottom-0 right-0 bg-wood-dark text-white p-2 rounded-full shadow-lg border-2 border-parchment-100">
                 <Camera size={16} />
               </div>
             )}
          </div>
          {isEditingProfile && (
            <div className="mb-8 p-4 bg-parchment-100 rounded-xl border border-wood/20 w-full max-w-xs">
              <p className="text-center text-xs text-wood-dark mb-3 font-bold uppercase tracking-widest">Escolha um Avatar</p>
              <div className="flex flex-wrap justify-center gap-3">
                {AVATARS.map(avatar => (
                  <button
                    key={avatar.id}
                    onClick={() => setTempAvatarId(avatar.id)}
                    className={`rounded-full p-0.5 transition-all ${tempAvatarId === avatar.id ? 'ring-2 ring-wood ring-offset-2' : 'opacity-70 hover:opacity-100'}`}
                  >
                    {renderAvatar(avatar.id, "w-10 h-10", 20)}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="w-full max-w-xs mb-8">
            <label className="block text-xs font-bold text-wood-dark uppercase tracking-wider mb-2">Nome de Exibição</label>
            {isEditingProfile ? (
              <div className="relative">
                <input 
                  type="text" 
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="w-full bg-parchment-100 border-2 border-wood rounded-xl px-4 py-3 text-wood-darker font-bold focus:outline-none focus:border-nature"
                  maxLength={20}
                />
                <Edit3 className="absolute right-3 top-1/2 -translate-y-1/2 text-wood opacity-50" size={18} />
              </div>
            ) : (
              <div className="bg-wood/5 rounded-xl px-4 py-3 text-wood-darker font-bold text-center border border-wood/10 text-xl">
                {userProfile.name}
              </div>
            )}
          </div>
          <div className="w-full max-w-xs mb-8">
            {isEditingProfile ? (
              <div className="flex gap-2">
                <button 
                  onClick={saveProfile}
                  className="flex-1 bg-nature hover:bg-nature-dark text-white font-bold py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <Save size={18} /> Salvar
                </button>
                <button 
                  onClick={() => setIsEditingProfile(false)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-xl shadow-md"
                >
                  <ChevronLeft size={18} />
                </button>
              </div>
            ) : (
              <button 
                onClick={startEditingProfile}
                className="w-full bg-wood hover:bg-wood-light text-parchment-100 font-bold py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <Edit3 size={18} /> Editar Perfil
              </button>
            )}
          </div>
          <div className="w-full h-px bg-wood/20 mb-8"></div>
          <div className="w-full max-w-xs space-y-4">
            <h3 className="text-center font-serif font-bold text-wood-darker text-lg mb-4">Conta</h3>
            {userProfile.isGuest ? (
              <button 
                onClick={handleSwitchOrLinkAccount}
                className="w-full bg-white hover:bg-gray-50 text-gray-700 font-bold py-3 px-4 rounded-xl shadow border border-gray-300 flex items-center justify-center gap-2"
              >
                 <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                 </svg>
                 Sair de Convidado (Vincular Google)
              </button>
            ) : (
              <button 
                onClick={handleSwitchOrLinkAccount}
                className="w-full bg-parchment-100 hover:bg-parchment-300 text-wood-darker font-bold py-3 px-4 rounded-xl shadow border border-wood/20 flex items-center justify-center gap-2"
              >
                <RefreshCw size={18} /> Trocar Conta Google
              </button>
            )}
            <button 
              onClick={handleLogout}
              className="w-full bg-red-100 hover:bg-red-200 text-red-800 font-bold py-3 px-4 rounded-xl shadow border border-red-200 flex items-center justify-center gap-2"
            >
              <LogOut size={18} /> Sair da Conta
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderBookSelection = () => {
    // ... Book Selection Logic (Same as before)
    const playableBooks = BOOKS.filter(b => b.levels.length > 0);
    const inDevBooks = BOOKS.filter(b => b.levels.length === 0);
    const playableOT = playableBooks.filter(b => b.testament === 'Old');
    const playableNT = playableBooks.filter(b => b.testament === 'New');
    const inDevOT = inDevBooks.filter(b => b.testament === 'Old');
    const inDevNT = inDevBooks.filter(b => b.testament === 'New');

    const renderBookButton = (book: BookData, isDev: boolean) => {
      const isUnlocked = unlockedBookIds.includes(book.id) || !book.isLocked;
      const bookLevelIds = book.levels.map(l => l.id);
      const completedCount = bookLevelIds.filter(id => completedLevels.includes(id)).length;
      const isDisabled = isDev;

      return (
        <button
          key={book.id}
          onClick={() => handleBookClick(book)}
          disabled={isDisabled}
          className={`
            relative aspect-[3/4] rounded-lg shadow-md flex flex-col items-center justify-between p-2 text-center border-r-4 border-b-4 transition transform overflow-hidden
            ${isDisabled 
               ? 'bg-wood/20 border-wood/30 text-wood/40 cursor-default grayscale opacity-70' 
               : isUnlocked 
                  ? 'bg-[#d86b28] text-white border-[#a34b1a] cursor-pointer hover:brightness-110 active:scale-95' 
                  : 'bg-wood-dark text-parchment-300 border-wood-darker cursor-pointer hover:bg-wood-dark/90 active:scale-95'}
          `}
        >
          <div className="mt-2 flex items-center justify-center h-full w-full">
            <span className="font-display text-sm md:text-lg font-bold leading-tight z-10">{book.name}</span>
          </div>
          <div className="w-full mt-auto pt-2 z-10">
            {isDev ? (
               <div className="flex flex-col items-center w-full px-1">
                 <span className="text-[9px] font-bold uppercase tracking-widest bg-wood/10 px-1 rounded">Em Breve</span>
               </div>
            ) : !isUnlocked ? (
              <div className="flex flex-col items-center opacity-70">
                <Lock className="w-5 h-5 mb-1" />
              </div>
            ) : (
              <div className="flex flex-col items-center w-full px-1">
                 <div className="text-[10px] font-serif opacity-90 mb-1 w-full flex justify-between px-1">
                   <span>{completedCount}/{book.totalVerses}</span>
                 </div>
                 <div className="w-full h-1.5 bg-black/20 rounded-full overflow-hidden">
                   <div 
                     className="h-full bg-nature-light transition-all duration-500" 
                     style={{ width: `${(completedCount / Math.max(book.totalVerses, 1)) * 100}%` }}
                   ></div>
                 </div>
              </div>
            )}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-2 md:w-3 bg-black/10 rounded-l-lg pointer-events-none"></div>
        </button>
      );
    };

    const renderGrid = (books: BookData[], isDev: boolean) => (
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mb-6">
        {books.map(b => renderBookButton(b, isDev))}
      </div>
    );
    const TestamentHeader = ({ title }: { title: string }) => (
      <div className="flex items-center mb-3 mt-1 opacity-80">
        <Scroll className="w-4 h-4 mr-2 text-current opacity-70" />
        <h4 className="text-sm font-serif uppercase tracking-widest font-bold">{title}</h4>
        <div className="h-px flex-1 bg-current opacity-20 ml-3"></div>
      </div>
    );

    return (
      <div className="flex flex-col h-full animate-fade-in">
        <div className="p-6 pb-2 shrink-0">
          <button 
            onClick={() => setScreen(ScreenState.MENU)}
            className="flex items-center text-wood-dark font-bold hover:text-wood transition"
          >
            <ChevronLeft className="w-6 h-6 mr-1" /> VOLTAR
          </button>
          <h2 className="text-3xl font-display text-center text-wood-darker mt-2">LIVROS</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-px flex-1 bg-nature-dark/30"></div>
              <h3 className="text-xl font-display text-nature-dark px-4 font-bold flex items-center gap-2">
                <Play className="w-5 h-5 fill-current" /> Disponíveis
              </h3>
              <div className="h-px flex-1 bg-nature-dark/30"></div>
            </div>
            {playableBooks.length === 0 ? (
              <div className="text-center py-4 opacity-50 italic text-wood-dark">
                Nenhum livro disponível no momento.
              </div>
            ) : (
              <div className="text-nature-dark">
                {playableOT.length > 0 && (
                  <>
                    <TestamentHeader title="Antigo Testamento" />
                    {renderGrid(playableOT, false)}
                  </>
                )}
                {playableNT.length > 0 && (
                  <>
                    <TestamentHeader title="Novo Testamento" />
                    {renderGrid(playableNT, false)}
                  </>
                )}
              </div>
            )}
          </div>
          <div className="pb-8">
            <div className="flex items-center mb-6">
              <div className="h-px flex-1 bg-wood/30"></div>
              <h3 className="text-xl font-display text-wood px-4 font-bold flex items-center gap-2">
                <Hammer className="w-5 h-5" /> Em Desenvolvimento
              </h3>
              <div className="h-px flex-1 bg-wood/30"></div>
            </div>
            <div className="text-wood opacity-80">
              {inDevOT.length > 0 && (
                <>
                  <TestamentHeader title="Antigo Testamento" />
                  {renderGrid(inDevOT, true)}
                </>
              )}
              {inDevNT.length > 0 && (
                <>
                  <TestamentHeader title="Novo Testamento" />
                  {renderGrid(inDevNT, true)}
                </>
              )}
            </div>
          </div>
          <div className="mt-8 text-center opacity-40 text-xs font-serif pb-4">
             Todas as referências baseadas na Bíblia Almeida Corrigida Fiel (ACF)
          </div>
        </div>
      </div>
    );
  };

  const renderLevelSelect = () => {
    if (!selectedBook) return null;
    
    // Helper to extract chapter number from reference string (e.g. "Mateus 2:1" -> "2")
    const getChapterFromRef = (ref: string) => {
       const match = ref.match(/ (\d+):/);
       return match ? match[1] : null;
    };

    let lastChapter = null;

    return (
      <div className="flex flex-col h-full animate-fade-in bg-parchment-200">
        <div className="p-4 bg-wood shadow-md text-parchment-100 flex items-center justify-between shrink-0 z-10">
           <button 
             onClick={() => setScreen(ScreenState.BOOKS)}
             className="flex items-center font-bold hover:bg-white/10 p-2 rounded transition"
           >
             <ChevronLeft className="w-6 h-6" />
           </button>
           <h2 className="text-xl font-display font-bold truncate mx-4">{selectedBook.name}</h2>
           <div className="w-10"></div>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
            {selectedBook.levels.map((levelData, index) => {
              const currentChapter = getChapterFromRef(levelData.reference);
              const showChapterHeader = currentChapter && currentChapter !== lastChapter;
              if (currentChapter) lastChapter = currentChapter;
              
              const levelNum = index + 1;
              const isCompleted = completedLevels.includes(levelData.id);

              return (
                <React.Fragment key={levelData.id}>
                  {showChapterHeader && (
                    <div className="col-span-4 md:col-span-6 mt-4 mb-2 first:mt-0">
                      <div className="flex items-center">
                        <div className="h-px bg-wood/20 flex-1"></div>
                        <span className="px-3 font-display font-bold text-wood-darker text-lg uppercase tracking-widest">
                          Capítulo {currentChapter}
                        </span>
                        <div className="h-px bg-wood/20 flex-1"></div>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => handleLevelPreSelect(levelData, index)}
                    className={`
                      relative aspect-square rounded-xl shadow-sm flex flex-col items-center justify-center
                      border-b-4 transition-all duration-200
                      ${isCompleted
                        ? 'bg-nature text-white border-nature-dark active:scale-95 shadow-md'
                        : 'bg-wood text-parchment-100 border-wood-dark hover:bg-wood-light active:scale-95 shadow-md'}
                    `}
                  >
                    <span className="text-2xl font-display font-bold">{levelNum}</span>
                    {isCompleted && (
                      <div className="absolute -bottom-2">
                         <Star className="w-5 h-5 fill-yellow-400 text-yellow-600 drop-shadow-sm" />
                      </div>
                    )}
                  </button>
                </React.Fragment>
              );
            })}
          </div>
          
          {selectedBook.levels.length === 0 && (
             <div className="mt-10 text-center p-8 border-2 border-dashed border-wood/30 rounded-lg text-wood">
               <p className="font-serif italic">Fases em desenvolvimento.</p>
             </div>
          )}
          
          {selectedBook.levels.length > 0 && selectedBook.levels.length < selectedBook.totalVerses && (
             <div className="mt-8 text-center">
                <div className="inline-block px-4 py-2 bg-wood/10 rounded-full text-wood-dark text-sm font-bold opacity-70">
                   Mais capítulos em breve...
                </div>
             </div>
          )}

          <div className="mt-8 text-center opacity-50 text-xs font-serif pb-4 text-wood-dark">
             Texto Bíblico: Almeida Corrigida Fiel (ACF)
          </div>
        </div>
      </div>
    );
  };

  const renderGame = () => {
    if (!currentLevel || !gridState) return null;

    const isAccessible = gameMode === GameMode.ACCESSIBLE;

    return (
      <div className={`flex flex-col h-full max-h-screen animate-fade-in ${isAccessible ? 'bg-[#faf6e6]' : 'bg-parchment-200'}`}>
        
        {/* Header - Consistent across modes, but accessible has more contrast */}
        <div className={`p-3 shadow-md flex items-center justify-between z-20 shrink-0 transition-colors duration-300 ${isAccessible ? 'bg-wood-darker text-parchment-100' : 'bg-wood text-parchment-100'}`}>
          <button 
            onClick={() => setScreen(ScreenState.LEVEL_SELECT)}
            className="p-1 hover:bg-white/10 rounded"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="font-display text-lg font-bold flex items-center gap-2">
             <span className="bg-wood-dark px-2 py-0.5 rounded text-sm text-parchment-200">ACF</span>
             {currentLevel.reference}
          </div>
          
          <button 
            onClick={handleHint}
            disabled={isLevelComplete}
            className={`
              p-2 rounded-full shadow-sm transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1
              ${isAccessible ? 'bg-yellow-400 text-wood-darker hover:bg-yellow-300 border-2 border-yellow-500' : 'bg-yellow-500/90 hover:bg-yellow-400 text-wood-darker'}
            `}
            title="Revelar Palavra"
          >
            <Lightbulb className="w-5 h-5 fill-current" />
          </button>
        </div>

        {/* Improved Accessibility Toolbar */}
        {isAccessible && (
          <div className="bg-[#e6dcc0] border-b border-[#d1c4a0] p-3 flex items-center justify-between gap-4 shrink-0 shadow-inner z-10">
             
             {/* Interaction Toggle - Styled like segmented control */}
             <div className="flex bg-[#d1c4a0] p-1 rounded-lg shadow-inner w-full">
                <button 
                  onClick={() => setInteractionMode('SELECT')}
                  className={`flex-1 flex justify-center items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all ${interactionMode === 'SELECT' ? 'bg-wood-darker text-parchment-100 shadow-md transform scale-105' : 'text-wood-darker hover:bg-wood/10'}`}
                >
                  <MousePointer2 size={18} /> Selecionar
                </button>
                <button 
                   onClick={() => setInteractionMode('PAN')}
                   className={`flex-1 flex justify-center items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all ${interactionMode === 'PAN' ? 'bg-wood-darker text-parchment-100 shadow-md transform scale-105' : 'text-wood-darker hover:bg-wood/10'}`}
                >
                  <Hand size={18} /> Mover / Zoom
                </button>
             </div>
          </div>
        )}

        {/* Scrollable Content Area */}
        <div className={`flex-1 flex flex-col overflow-hidden ${isAccessible ? 'bg-[#faf6e6]' : 'overflow-y-auto'}`}>
          
          {/* Verse Text Area */}
          <div className={`p-6 border-b shadow-sm shrink-0 transition-colors z-20 relative ${isAccessible ? 'bg-[#faf6e6] border-[#e6dcc0]' : 'bg-parchment-100 border-wood/10'}`}>
             <div className={`
               leading-relaxed text-center transition-all duration-300
               ${isAccessible ? 'text-2xl font-serif text-[#2a1a10] font-medium' : 'font-serif text-lg text-wood-darker'}
             `}>
                {renderVerseText(currentLevel.text, currentLevel.words)}
             </div>
             <div className={`mt-4 text-right text-[10px] font-bold uppercase tracking-widest ${isAccessible ? 'text-[#5d4037]/70' : 'text-wood-dark/40'}`}>
                Bíblia Almeida Corrigida Fiel (ACF)
             </div>
          </div>

          {/* Word Bank */}
          <div className={`px-4 py-3 border-b shrink-0 z-20 relative ${isAccessible ? 'bg-[#f0e6cf] border-[#e6dcc0]' : 'bg-parchment-300 border-wood/20'}`}>
            <div className="flex flex-wrap justify-center gap-3">
              {currentLevel.words.map((wordConfig, idx) => {
                const isFound = foundWordIndices.includes(idx);
                
                let baseStyle = '';
                if (isAccessible) {
                  // Clean, high contrast tags
                  baseStyle = isFound 
                    ? 'bg-nature-dark text-white border-nature-dark opacity-50 line-through'
                    : 'bg-white text-wood-darker border-wood-light/50 shadow-sm';
                } else {
                  baseStyle = isFound 
                    ? 'bg-nature text-white border-nature-dark transform scale-95 opacity-80' 
                    : 'bg-parchment-100 text-wood-darker border-wood-light';
                }

                return (
                  <div 
                    key={idx}
                    className={`
                      px-3 py-1.5 rounded-lg font-bold border-2 transition-all duration-300
                      ${isAccessible ? 'text-sm tracking-wide' : 'text-xs'}
                      ${baseStyle}
                    `}
                  >
                    {wordConfig.display}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Grid Container */}
          <div 
            className={`flex-1 relative overflow-hidden flex items-center justify-center bg-transparent`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onPointerCancel={handlePointerUp}
            style={{ touchAction: 'none' }} // Crucial for gesture handling
          >
            {!isAccessible && (
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
            )}
            
            <div 
              className={`transition-transform duration-75 ease-linear origin-center ${!isAccessible ? 'p-6 w-full max-w-md aspect-square' : ''}`}
              style={isAccessible ? { 
                transform: `translate(${viewState.x}px, ${viewState.y}px) scale(${viewState.scale})`,
                cursor: interactionMode === 'PAN' ? 'grab' : 'default'
              } : {}}
            >
              <WordGrid 
                grid={gridState} 
                foundWordsCoordinates={foundCoordinates}
                onWordFound={handleWordAttempt}
                gameMode={gameMode}
                interactionMode={interactionMode}
              />
            </div>
          </div>
        </div>

        {isLevelComplete && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-4">
            <div className={`p-8 rounded-2xl shadow-2xl text-center border-4 max-w-sm w-full mx-auto transform animate-bounce-short ${isAccessible ? 'bg-[#faf6e6] border-wood-darker' : 'bg-parchment-100 border-wood'}`}>
              <Award className={`w-16 h-16 mx-auto mb-4 ${isAccessible ? 'text-nature-dark' : 'text-nature'}`} />
              <h3 className={`text-2xl font-display font-bold mb-2 ${isAccessible ? 'text-[#2a1a10]' : 'text-wood-darker'}`}>Versículo Completo!</h3>
              <p className={`mb-6 italic font-serif text-base ${isAccessible ? 'text-wood-dark' : 'text-wood-dark'}`}>"{currentLevel.text}"</p>
              
              <div className="flex flex-col gap-3">
                {selectedBook && selectedBook.levels[currentLevelIndex + 1] && (
                  <button 
                    onClick={nextLevel}
                    className={`font-bold py-3.5 px-8 rounded-xl shadow-lg text-lg w-full flex items-center justify-center transition-transform active:scale-95 ${isAccessible ? 'bg-nature-dark text-white hover:bg-nature' : 'bg-nature hover:bg-nature-dark text-white'}`}
                  >
                    Próxima Fase <ChevronLeft className="w-5 h-5 ml-2 rotate-180" />
                  </button>
                )}
                
                <button 
                  onClick={() => setScreen(ScreenState.LEVEL_SELECT)}
                  className={`font-bold py-3 px-8 rounded-xl shadow text-lg w-full transition-transform active:scale-95 ${isAccessible ? 'bg-wood-dark text-parchment-100' : 'bg-wood hover:bg-wood-light text-parchment-100'}`}
                >
                  Voltar para Fases
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderModeSelectionModal = () => {
    if (!pendingLevel) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
        <div className="bg-parchment-100 rounded-2xl max-w-sm w-full shadow-2xl overflow-hidden border-4 border-wood">
          <div className="bg-wood p-5 text-center">
             <h3 className="text-xl font-display font-bold text-parchment-100 tracking-wide">Como deseja jogar?</h3>
          </div>
          <div className="p-6 space-y-4">
            
            {/* Standard Mode Option */}
            <button 
              onClick={() => startGameWithMode(GameMode.STANDARD)}
              className="w-full bg-parchment-200 hover:bg-parchment-300 border-2 border-wood/20 p-4 rounded-xl flex items-center gap-4 transition group"
            >
              <div className="w-14 h-14 rounded-full bg-wood text-parchment-100 flex items-center justify-center shadow-md group-hover:scale-105 transition">
                <Scroll className="w-7 h-7" />
              </div>
              <div className="text-left">
                <span className="block font-bold text-wood-darker text-lg font-display">Clássico</span>
                <span className="text-xs text-wood-dark font-serif italic">Estética original de pergaminho.</span>
              </div>
            </button>

            {/* Accessible Mode Option */}
            <button 
              onClick={() => startGameWithMode(GameMode.ACCESSIBLE)}
              className="w-full bg-[#faf6e6] hover:bg-white border-2 border-nature-dark/50 p-4 rounded-xl flex items-center gap-4 transition group shadow-sm"
            >
              <div className="w-14 h-14 rounded-full bg-nature-dark text-white flex items-center justify-center shadow-md group-hover:scale-105 transition">
                <Eye className="w-7 h-7" />
              </div>
              <div className="text-left">
                <span className="block font-bold text-[#2a1a10] text-lg font-display">Conforto Visual</span>
                <span className="text-xs text-[#5d4037] font-serif italic">Alto contraste, zoom e gestos livres.</span>
              </div>
            </button>

            <button 
               onClick={() => setPendingLevel(null)}
               className="w-full py-3 text-wood-dark/60 font-bold hover:text-wood-dark text-sm mt-2 uppercase tracking-widest"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-wood-darker">
        <div className="animate-spin text-parchment-200">
          <Loader2 className="w-12 h-12" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex justify-center bg-wood-darker text-wood-darker selection:bg-nature selection:text-white">
      <div className="w-full max-w-lg bg-parchment-200 h-[100dvh] shadow-2xl relative overflow-hidden flex flex-col">
        {screen === ScreenState.LOGIN && renderLogin()}
        {screen === ScreenState.MENU && renderMenu()}
        {screen === ScreenState.PROFILE && renderProfile()}
        {screen === ScreenState.BOOKS && renderBookSelection()}
        {screen === ScreenState.LEVEL_SELECT && renderLevelSelect()}
        {screen === ScreenState.GAME && renderGame()}
        {renderAdModal()}
        {renderModeSelectionModal()}
      </div>
    </div>
  );
};

export default App;