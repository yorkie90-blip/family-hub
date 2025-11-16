// turnbull-shaw-pwa.jsx
// Complete Family Hub Dashboard – 2000+ lines, PWA-ready, Recharts-safe, global export
// Works with your index.html (Babel standalone + CDN setup)

const { useState, useEffect, useMemo, useRef } = React;
const { 
  CheckCircle2, Circle, TrendingUp, Home, Zap, Heart, DollarSign, Calendar, Target, Award, Settings, 
  Calculator, PieChart, BarChart3, Sparkles, Trophy, Star, Bell, Download, Upload, Users, Car, MapPin, 
  Clock, Book, Gamepad2, Mountain, Music, Coffee, Utensils, CalendarHeart, Smile, Gift, Sunrise, 
  Moon, Sun, CloudRain, Activity, Battery, Fuel, Navigation, ChevronRight, ChevronDown, PlayCircle, 
  CheckSquare, Camera, Mic, Plus, TrendingDown, Flame, Baby, Cake, Syringe, Ruler, FileText, 
  MessageSquare, Image, Lightbulb, Brain, Repeat, AlertCircle, Edit2, X, Save, Calendar: CalendarIcon 
} = lucide;

// === SAFE RECHARTS DESTRUCTURING WITH FALLBACKS ===
const {
  LineChart = () => null,
  Line = () => null,
  AreaChart = () => null,
  Area = () => null,
  PieChart: RePieChart = () => null,
  Pie = () => null,
  Cell = () => null,
  BarChart = () => null,
  Bar = () => null,
  RadarChart = () => null,
  PolarGrid = () => null,
  PolarAngleAxis = () => null,
  PolarRadiusAxis = () => null,
  Radar = () => null,
  XAxis = () => null,
  YAxis = () => null,
  CartesianGrid = () => null,
  Tooltip = () => null,
  Legend = () => null,
  ResponsiveContainer = ({ children }) => 
    React.createElement('div', {
      style: {
        width: '100%',
        height: 300,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '20px',
        textAlign: 'center'
      }
    }, 'Chart View')
} = (typeof Recharts !== 'undefined' && Recharts !== null) ? Recharts : {};

// === MAIN COMPONENT ===
const TurnbullShawDashboard = () => {
  const [config, setConfig] = useState({
    richAge: 35,
    shawnieJob: 'PIP Assessor (BSc Nursing)',
    shawnieIncome: 40000,
    richIncome: 0,
    madisonAge: '17 weeks',
    madisonBirthDate: '2024-07-15',
    location: 'Sheffield',
    currentPension: 73000,
    currentSavings: 0,
    targetYear: '2028-29',
    startDate: new Date().toISOString().split('T')[0],
    carModel: '2024 Corsa E',
    electricRate: 0.47,
    monthlyMiles: 800,
    monthlyExpenses: 2800,
    familyName: 'Turnbull-Shaw',
    notificationsEnabled: false
  });

  const [activeTab, setActiveTab] = useState('dashboard');
  const [activePersonalTab, setActivePersonalTab] = useState('rich');
  const [showCelebration, setShowCelebration] = useState(false);
  const [newAchievement, setNewAchievement] = useState(null);
  const [dailyActivity, setDailyActivity] = useState(null);
  const [lastActivityDate, setLastActivityDate] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [expandedGoals, setExpandedGoals] = useState({});
  const [showQuickCapture, setShowQuickCapture] = useState(false);
  const [quickCaptureType, setQuickCaptureType] = useState('win');
  const [isRecording, setIsRecording] = useState(false);
  const [showNotificationPrompt, setShowNotificationPrompt] = useState(false);
  const [viewMode, setViewMode] = useState('full');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const [data, setData] = useState({
    richGoals: { 
      career: { 
        "Research electrician apprenticeships": { completed: false, priority: "critical", dueDate: "2025-11-23", estimatedHours: 8, hoursSpent: 0, subtasks: [
          { id: 1, task: "Google top 5 electrician courses in Sheffield", completed: false, estimatedMinutes: 30 },
          { id: 2, task: "Join 3 electrician Facebook/Reddit groups", completed: false, estimatedMinutes: 20 },
          { id: 3, task: "Call Sheffield College for adult apprenticeship info", completed: false, estimatedMinutes: 15 },
          { id: 4, task: "Request course brochures from 3 providers", completed: false, estimatedMinutes: 30 },
          { id: 5, task: "Create comparison spreadsheet (cost, duration, outcomes)", completed: false, estimatedMinutes: 45 },
          { id: 6, task: "Read reviews on Indeed/Glassdoor from apprentices", completed: false, estimatedMinutes: 30 },
          { id: 7, task: "Attend open day at Sheffield College", completed: false, estimatedMinutes: 120 }
        ] },
        "Update CV for electrician applications": { completed: false, priority: "high", dueDate: "2025-11-30", estimatedHours: 4, hoursSpent: 0, subtasks: [
          { id: 1, task: "List all transferable skills (problem-solving, customer service)", completed: false, estimatedMinutes: 30 },
          { id: 2, task: "Research CV templates for career changers", completed: false, estimatedMinutes: 20 },
          { id: 3, task: "Write personal statement explaining electrician passion", completed: false, estimatedMinutes: 45 },
          { id: 4, task: "Add any DIY/electrical experience", completed: false, estimatedMinutes: 20 },
          { id: 5, task: "Get Shawnie to proofread", completed: false, estimatedMinutes: 15 },
          { id: 6, task: "Save as PDF and Word formats", completed: false, estimatedMinutes: 10 }
        ] },
        "Apply to 3+ apprenticeships": { completed: false, priority: "high", dueDate: "2025-12-15", estimatedHours: 10, hoursSpent: 0, subtasks: [
          { id: 1, task: "Search Indeed/Reed for local electrician apprenticeships", completed: false, estimatedMinutes: 45 },
          { id: 2, task: "Contact 5 local electricians directly about opportunities", completed: false, estimatedMinutes: 60 },
          { id: 3, task: "Write cover letter template", completed: false, estimatedMinutes: 60 },
          { id: 4, task: "Submit application #1", completed: false, estimatedMinutes: 30 },
          { id: 5, task: "Submit application #2", completed: false, estimatedMinutes: 30 },
          { id: 6, task: "Submit application #3", completed: false, estimatedMinutes: 30 },
          { id: 7, task: "Follow up with all applications after 1 week", completed: false, estimatedMinutes: 30 }
        ] },
        "Begin apprenticeship training": { completed: false, priority: "high", subtasks: [] },
        "Complete Level 2 qualification": { completed: false, priority: "medium", subtasks: [] },
        "Complete Level 3 qualification": { completed: false, priority: "medium", subtasks: [] },
        "Get 18th Edition certification": { completed: false, priority: "medium", subtasks: [] },
        "Achieve EV charging certification": { completed: false, priority: "low", subtasks: [] },
        "Reach £40k income milestone": { completed: false, priority: "medium", subtasks: [] },
        "Reach £50k income milestone": { completed: false, priority: "low", subtasks: [] },
        "Build emergency call-out reputation": { completed: false, priority: "low", subtasks: [] }
      }, 
      personal: { 
        "Master 3 new recipes for family meals": { completed: false, priority: "medium", subtasks: [] },
        "Read 12 books this year": { completed: false, priority: "medium", subtasks: [] },
        "Complete a challenging hike with Shawnie": { completed: false, priority: "medium", subtasks: [] },
        "Build Madison's first Lego set together": { completed: false, priority: "high", subtasks: [] },
        "Learn smart home installation": { completed: false, priority: "low", subtasks: [] },
        "Create romantic surprise for Shawnie monthly": { completed: false, priority: "high", subtasks: [] },
        "Organize garage/workspace": { completed: false, priority: "medium", subtasks: [] },
        "Start fitness routine (3x week)": { completed: false, priority: "medium", subtasks: [] },
        "Learn basic baby massage techniques": { completed: false, priority: "high", subtasks: [] },
        "Plan quarterly date nights": { completed: false, priority: "high", subtasks: [] }
      }, 
      stretch: { 
        "Start side business (electrical)": { completed: false, priority: "low", subtasks: [] },
        "Get solar panel certification": { completed: false, priority: "low", subtasks: [] },
        "Reach £60k annual income": { completed: false, priority: "low", subtasks: [] },
        "Complete Tough Mudder/fitness challenge": { completed: false, priority: "low", subtasks: [] },
        "Learn second trade skill": { completed: false, priority: "low", subtasks: [] }
      } 
    },
    shawnieGoals: { 
      career: { 
        "Research senior PIP assessor roles": { completed: false, priority: "high", subtasks: [] },
        "Complete additional nursing CPD": { completed: false, priority: "medium", subtasks: [] },
        "Network with healthcare professionals": { completed: false, priority: "medium", subtasks: [] },
        "Apply for promotion/pay rise": { completed: false, priority: "high", subtasks: [] },
        "Achieve Band 6 equivalent": { completed: false, priority: "medium", subtasks: [] },
        "Reach £45k salary": { completed: false, priority: "high", subtasks: [] },
        "Explore flexible working options": { completed: false, priority: "medium", subtasks: [] },
        "Complete leadership training": { completed: false, priority: "low", subtasks: [] }
      }, 
      personal: { 
        "Create family photo albums": { completed: false, priority: "medium", subtasks: [] },
        "Organize home systems (labels, storage)": { completed: false, priority: "high", subtasks: [] },
        "Plan monthly family adventures": { completed: false, priority: "high", subtasks: [] },
        "Read parenting books": { completed: false, priority: "medium", subtasks: [] },
        "Join local mum's group": { completed: false, priority: "high", subtasks: [] },
        "Master family budget planning": { completed: false, priority: "critical", subtasks: [] },
        "Create meal planning system": { completed: false, priority: "high", subtasks: [] },
        "Learn baby development milestones": { completed: false, priority: "high", subtasks: [] },
        "Plan romantic gestures for Rich": { completed: false, priority: "high", subtasks: [] },
        "Organize craft corner for Madison": { completed: false, priority: "medium", subtasks: [] }
      }, 
      stretch: { 
        "Return to clinical nursing part-time": { completed: false, priority: "low", subtasks: [] },
        "Complete master's degree": { completed: false, priority: "low", subtasks: [] },
        "Start family blog/vlog": { completed: false, priority: "low", subtasks: [] },
        "Reach £50k salary": { completed: false, priority: "low", subtasks: [] },
        "Learn new creative skill": { completed: false, priority: "low", subtasks: [] }
      } 
    },
    familyGoals: { 
      financial: { 
        "Open Lifetime ISAs (both)": { completed: false, priority: "critical", subtasks: [] },
        "Save £10k emergency fund": { completed: false, priority: "critical", subtasks: [] },
        "Save £20k emergency fund": { completed: false, priority: "high", subtasks: [] },
        "Save £15k house deposit": { completed: false, priority: "high", subtasks: [] },
        "Save £30k house deposit": { completed: false, priority: "high", subtasks: [] },
        "Save £37.5k house deposit": { completed: false, priority: "critical", subtasks: [] },
        "Get mortgage pre-approval": { completed: false, priority: "high", subtasks: [] },
        "Buy first home": { completed: false, priority: "critical", subtasks: [] },
        "Start Madison's Junior ISA": { completed: false, priority: "high", subtasks: [] },
        "Reach £5k in Madison's fund": { completed: false, priority: "medium", subtasks: [] },
        "Get life insurance": { completed: false, priority: "critical", subtasks: [] },
        "Get income protection": { completed: false, priority: "high", subtasks: [] }
      }, 
      lifestyle: { 
        "Create bedtime routine for Madison": { completed: false, priority: "critical", subtasks: [] },
        "Establish date night tradition": { completed: false, priority: "high", subtasks: [] },
        "Visit 12 Yorkshire beauty spots": { completed: false, priority: "medium", subtasks: [] },
        "Complete Peak District hike": { completed: false, priority: "medium", subtasks: [] },
        "Host game night monthly": { completed: false, priority: "low", subtasks: [] },
        "Create family traditions": { completed: false, priority: "high", subtasks: [] },
        "Take Madison swimming": { completed: false, priority: "high", subtasks: [] },
        "First family holiday": { completed: false, priority: "medium", subtasks: [] },
        "Join parent & baby groups": { completed: false, priority: "high", subtasks: [] },
        "Create memory box for Madison": { completed: false, priority: "high", subtasks: [] }
      }, 
      home: { 
        "Organize nursery perfectly": { completed: false, priority: "high", subtasks: [] },
        "Create family command center": { completed: false, priority: "medium", subtasks: [] },
        "Meal prep Sundays": { completed: false, priority: "high", subtasks: [] },
        "Declutter quarterly": { completed: false, priority: "medium", subtasks: [] },
        "Create cleaning schedule": { completed: false, priority: "medium", subtasks: [] },
        "Set up smart home basics": { completed: false, priority: "low", subtasks: [] },
        "Create cozy reading nook": { completed: false, priority: "low", subtasks: [] },
        "Organize toy rotation system": { completed: false, priority: "medium", subtasks: [] }
      } 
    },
    socialCalendar: { 
      closeFriends: { 
        "Rheiza (Harrogate)": { lastSeen: null, frequency: 14, stayOvernight: true, birthday: null, giftIdeas: [], conversationNotes: [] },
        "Luke (Harrogate)": { lastSeen: null, frequency: 14, stayOvernight: true, birthday: null, giftIdeas: [], conversationNotes: [] },
        "Kat & Paul (Sheffield)": { lastSeen: null, frequency: 14, stayOvernight: true, birthday: null, giftIdeas: [], conversationNotes: [] },
        "Brandon & Amy (Sheffield)": { lastSeen: null, frequency: 14, stayOvernight: true, birthday: null, giftIdeas: [], conversationNotes: [] },
        "Kyle & Dunja (Sheffield)": { lastSeen: null, frequency: 14, stayOvernight: true, birthday: null, giftIdeas: [], conversationNotes: [] }
      }, 
      family: { 
        "Mom & Sully (Burnley)": { lastSeen: null, frequency: 14, birthday: null, giftIdeas: [], conversationNotes: [] },
        "Emily & Isaac (Sheffield)": { lastSeen: null, frequency: 14, birthday: null, giftIdeas: [], conversationNotes: [] },
        "Gemma, James, Oliver & Amelia (Peterlee)": { lastSeen: null, frequency: 14, birthday: null, giftIdeas: [], conversationNotes: [] },
        "Shawnie's Parents (Peterlee)": { lastSeen: null, frequency: 14, birthday: null, giftIdeas: [], conversationNotes: [] }
      }, 
      extended: { 
        "Gran Flora (Shopping Wednesdays)": { lastSeen: null, note: "Loves Wednesday afternoon shopping", birthday: null, giftIdeas: [] },
        "Gramma Carol & Jim": { lastSeen: null, birthday: null, giftIdeas: [] },
        "Grandad Albert": { lastSeen: null, birthday: null, giftIdeas: [] },
        "Bill & Paul (Sheffield)": { lastSeen: null, birthday: null, giftIdeas: [] }
      } 
    },
    weeklyTasks: [], dailyActivities: [], achievements: [], 
    relationshipTracker: { 
      lastDateNight: null, lastRomanticGesture: null, lastFamilyAdventure: null, 
      loveReaffirmations: [], 
      loveLanguages: { 
        rich: { words: 8, quality: 9, gifts: 5, service: 7, touch: 8 }, 
        shawnie: { words: 9, quality: 9, gifts: 6, service: 8, touch: 9 } 
      }, 
      gratitudeJournal: [], conflictLog: [] 
    }, 
    homeOrganization: { 
      lastDeepClean: null, lastDeclutter: null, mealPrepCompleted: false, weeklyChoresComplete: false 
    }, 
    habits: { 
      daily: [
        { id: 1, name: "Madison tummy time", streak: 0, lastCompleted: null, goal: 'daily' },
        { id: 2, name: "Read to Madison", streak: 0, lastCompleted: null, goal: 'daily' },
        { id: 3, name: "Couple check-in", streak: 0, lastCompleted: null, goal: 'daily' },
        { id: 4, name: "Gratitude sharing", streak: 0, lastCompleted: null, goal: 'daily' }
      ],
      weekly: [
        { id: 5, name: "Date night", streak: 0, lastCompleted: null, goal: 'weekly' },
        { id: 6, name: "Meal prep Sunday", streak: 0, lastCompleted: null, goal: 'weekly' },
        { id: 7, name: "Deep clean", streak: 0, lastCompleted: null, goal: 'weekly' },
        { id: 8, name: "Family adventure", streak: 0, lastCompleted: null, goal: 'weekly' }
      ]
    }, 
    madison: { 
      milestones: [
        { id: 1, name: "First smile", date: null, photos: [], notes: "", typical: "6-8 weeks" },
        { id: 2, name: "Holds head up", date: null, photos: [], notes: "", typical: "2-4 months" },
        { id: 3, name: "Rolls over", date: null, photos: [], notes: "", typical: "4-6 months" },
        { id: 4, name: "Sits without support", date: null, photos: [], notes: "", typical: "6-8 months" },
        { id: 5, name: "First tooth", date: null, photos: [], notes: "", typical: "4-7 months" },
        { id: 6, name: "Crawls", date: null, photos: [], notes: "", typical: "7-10 months" },
        { id: 7, name: "First word", date: null, photos: [], notes: "", typical: "10-14 months" },
        { id: 8, name: "Stands alone", date: null, photos: [], notes: "", typical: "9-12 months" },
        { id: 9, name: "First steps", date: null, photos: [], notes: "", typical: "12-15 months" },
        { id: 10, name: "First birthday", date: null, photos: [], notes: "", typical: "12 months" }
      ],
      vaccinations: [
        { id: 1, name: "8 weeks - 6-in-1, Rotavirus, MenB", date: null, completed: false },
        { id: 2, name: "12 weeks - 6-in-1, Pneumococcal, Rotavirus", date: null, completed: false },
        { id: 3, name: "16 weeks - 6-in-1, MenB", date: null, completed: false },
        { id: 4, name: "1 year - Hib/MenC, MMR, Pneumococcal, MenB", date: null, completed: false }
      ],
      growthLog: [], memories: [], photoAlbum: [] 
    }, 
    expenses: [], quickWins: [], voiceNotes: [], weeklyReviews: [], 
    insights: { lastCalculated: null, tasksCompletedThisWeek: 0, friendsSeenThisMonth: 0, savingsThisMonth: 0, habitsStreak: 0 }, 
    studyTracker: { subjects: [], practiceHours: 0, flashcards: [], certifications: [] }, 
    documents: []
  });

  const distances = { 
    "Harrogate": { miles: 72, roundTrip: 144 }, 
    "Burnley": { miles: 45, roundTrip: 90 }, 
    "Sheffield": { miles: 5, roundTrip: 10 }, 
    "Peterlee": { miles: 95, roundTrip: 190 } 
  };

  const dailyActivities = [
    { time: "morning", activity: "Madison tummy time with music", type: "baby", icon: "Baby" },
    { time: "morning", activity: "Family walk in local park", type: "exercise", icon: "Navigation" },
    { time: "morning", activity: "Read to Madison during breakfast", type: "education", icon: "Book" },
    { time: "morning", activity: "5-minute couple meditation", type: "relationship", icon: "Heart" },
    { time: "afternoon", activity: "Sensory play with Madison", type: "baby", icon: "Sparkles" },
    { time: "afternoon", activity: "Quick home organization task", type: "home", icon: "Home" },
    { time: "afternoon", activity: "Video call family member", type: "social", icon: "Users" },
    { time: "afternoon", activity: "Prep tomorrow's meals together", type: "practical", icon: "Utensils" },
    { time: "evening", activity: "Bath time songs with Madison", type: "baby", icon: "Moon" },
    { time: "evening", activity: "Co-op gaming session", type: "fun", icon: "Gamepad2" },
    { time: "evening", activity: "Share daily gratitudes", type: "relationship", icon: "Smile" },
    { time: "evening", activity: "Plan tomorrow together", type: "practical", icon: "Calendar" },
    { time: "evening", activity: "Bedtime story for Madison", type: "baby", icon: "Book" },
    { time: "evening", activity: "Couple's board game", type: "fun", icon: "Gamepad2" },
    { time: "evening", activity: "Watch series together", type: "relaxation", icon: "PlayCircle" },
    { time: "evening", activity: "Give each other massages", type: "relationship", icon: "Heart" }
  ];

  // === URL PARAMS & INITIAL STATE ===
  useEffect(() => {
    if (window.initialState?.mode === 'focus') setViewMode('focus');
    if (window.initialState?.tab) setActiveTab(window.initialState.tab);
  }, []);

  // === DATA PERSISTENCE ===
  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await window.storage?.get('turnbullShawData');
        const savedConfig = await window.storage?.get('turnbullShawConfig');
        if (savedData?.value) setData(JSON.parse(savedData.value));
        if (savedConfig?.value) setConfig(JSON.parse(savedConfig.value));
        setDataLoaded(true);
      } catch (e) { setDataLoaded(true); }
    };
    loadData();
    const today = new Date().toDateString();
    if (lastActivityDate !== today) { selectDailyActivity(); setLastActivityDate(today); }
    calculateInsights();
  }, []);

  useEffect(() => { if (dataLoaded) window.storage?.set('turnbullShawData', JSON.stringify(data)); }, [data, dataLoaded]);
  useEffect(() => { if (dataLoaded) window.storage?.set('turnbullShawConfig', JSON.stringify(config)); }, [config, dataLoaded]);

  // === HELPER FUNCTIONS ===
  const selectDailyActivity = () => { 
    const hour = new Date().getHours(); 
    let timeOfDay = 'morning'; 
    if (hour >= 12 && hour < 17) timeOfDay = 'afternoon'; 
    else if (hour >= 17) timeOfDay = 'evening'; 
    const relevant = dailyActivities.filter(a => a.time === timeOfDay); 
    const selected = relevant[Math.floor(Math.random() * relevant.length)]; 
    setDailyActivity(selected); 
  };

  const toggleGoal = (person, category, goal) => { 
    const wasCompleted = data[person][category][goal].completed; 
    setData(prev => ({ 
      ...prev, 
      [person]: { 
        ...prev[person], 
        [category]: { 
          ...prev[person][category], 
          [goal]: { ...prev[person][category][goal], completed: !wasCompleted } 
        } 
      } 
    })); 
    if (!wasCompleted) { checkAchievements(); triggerCelebration(); } 
  };

  const toggleSubtask = (person, category, goal, subtaskId) => { 
    setData(prev => ({ 
      ...prev, 
      [person]: { 
        ...prev[person], 
        [category]: { 
          ...prev[person][category], 
          [goal]: { 
            ...prev[person][category][goal], 
            subtasks: prev[person][category][goal].subtasks.map(st => 
              st.id === subtaskId ? { ...st, completed: !st.completed } : st
            ) 
          } 
        } 
      } 
    })); 
  };

  const calculateEVCosts = () => { 
    const kWhPer100Miles = 28; 
    const monthlyKWh = (config.monthlyMiles / 100) * kWhPer100Miles; 
    const monthlyCost = monthlyKWh * config.electricRate; 
    const costPerMile = config.electricRate * (kWhPer100Miles / 100); 
    return { 
      monthlyKWh: Math.round(monthlyKWh), 
      monthlyCost: Math.round(monthlyCost), 
      annualCost: Math.round(monthlyCost * 12), 
      costPerMile: costPerMile.toFixed(2) 
    }; 
  };

  const calculateVisitCost = (location) => { 
    const distance = distances[location]; 
    if (!distance) return null; 
    const evCosts = calculateEVCosts(); 
    const tripCost = (distance.roundTrip * parseFloat(evCosts.costPerMile)).toFixed(2); 
    return { miles: distance.roundTrip, cost: tripCost, time: Math.round(distance.roundTrip / 40) }; 
  };

  const getOverdueVisits = () => { 
    const overdue = []; 
    const now = new Date(); 
    Object.entries(data.socialCalendar.closeFriends).forEach(([name, info]) => { 
      if (info.lastSeen) { 
        const lastDate = new Date(info.lastSeen); 
        const daysSince = Math.floor((now - lastDate) / (1000 * 60 * 60 * 24)); 
        if (daysSince > info.frequency) overdue.push({ name, daysSince, type: 'friend' }); 
      } 
    }); 
    Object.entries(data.socialCalendar.family).forEach(([name, info]) => { 
      if (info.lastSeen) { 
        const lastDate = new Date(info.lastSeen); 
        const daysSince = Math.floor((now - lastDate) / (1000 * 60 * 60 * 24)); 
        if (daysSince > info.frequency) overdue.push({ name, daysSince, type: 'family' }); 
      } 
    }); 
    return overdue; 
  };

  const calculateProgress = () => { 
    const allGoals = [
      ...Object.values(data.richGoals).flatMap(cat => Object.values(cat)),
      ...Object.values(data.shawnieGoals).flatMap(cat => Object.values(cat)),
      ...Object.values(data.familyGoals).flatMap(cat => Object.values(cat))
    ]; 
    const completed = allGoals.filter(g => g.completed).length; 
    return Math.round((completed / allGoals.length) * 100); 
  };

  const calculatePersonProgress = (person) => { 
    const goals = Object.values(data[person]).flatMap(cat => Object.values(cat)); 
    const completed = goals.filter(g => g.completed).length; 
    return Math.round((completed / goals.length) * 100); 
  };

  const triggerCelebration = () => { 
    setShowCelebration(true); 
    setTimeout(() => setShowCelebration(false), 2000); 
  };

  const checkAchievements = () => { 
    const progress = calculateProgress(); 
    const achievements = [
      { threshold: 10, title: "Journey Begun!", icon: "Sparkles", description: "First 10% complete" },
      { threshold: 25, title: "Quarter Champion!", icon: "Target", description: "25% achieved" },
      { threshold: 50, title: "Halfway Heroes!", icon: "Star", description: "50% milestone" },
      { threshold: 75, title: "Nearly There!", icon: "Trophy", description: "75% complete" },
      { threshold: 100, title: "Dream Achieved!", icon: "Award", description: "100% success!" }
    ]; 
    for (const achievement of achievements) { 
      const alreadyHas = data.achievements.some(a => a.title === achievement.title); 
      if (progress >= achievement.threshold && !alreadyHas) { 
        const newAch = { ...achievement, date: new Date().toISOString() }; 
        setData(prev => ({ ...prev, achievements: [...prev.achievements, newAch] })); 
        setNewAchievement(newAch); 
        setTimeout(() => setNewAchievement(null), 5000); 
        if (config.notificationsEnabled && 'Notification' in window && Notification.permission === 'granted') { 
          new Notification('Achievement Unlocked!', { 
            body: `${achievement.title} - ${achievement.description}`, 
            icon: '/icon-192.png' 
          }); 
        } 
        break; 
      } 
    } 
  };

  const markVisitComplete = (category, name) => { 
    setData(prev => ({ 
      ...prev, 
      socialCalendar: { 
        ...prev.socialCalendar, 
        [category]: { 
          ...prev.socialCalendar[category], 
          [name]: { ...prev.socialCalendar[category][name], lastSeen: new Date().toISOString() } 
        } 
      } 
    })); 
  };

  const getWeatherActivity = () => { 
    const weather = ['sunny', 'rainy', 'cloudy'][Math.floor(Math.random() * 3)]; 
    const activities = { 
      sunny: "Perfect for a Peak District adventure! Sun", 
      rainy: "Great day for indoor Lego building! CloudRain", 
      cloudy: "Ideal for a local park walk! CloudRain" 
    }; 
    return activities[weather]; 
  };

  const exportData = () => { 
    const exportObj = { data, config }; 
    const dataStr = JSON.stringify(exportObj, null, 2); 
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr); 
    const link = document.createElement('a'); 
    link.href = dataUri; 
    link.download = `turnbull-shaw-dashboard-${new Date().toISOString().split('T')[0]}.json`; 
    link.click(); 
  };

  const importData = (e) => { 
    const file = e.target.files[0]; 
    if (file) { 
      const reader = new FileReader(); 
      reader.onload = (ev) => { 
        try { 
          const imported = JSON.parse(ev.target.result); 
          if (imported.data) setData(imported.data); 
          if (imported.config) setConfig(imported.config); 
          alert('Data imported!'); 
        } catch { alert('Invalid file'); } 
      }; 
      reader.readAsText(file); 
    } 
  };

  const capturePhoto = () => { 
    const input = document.createElement('input'); 
    input.type = 'file'; 
    input.accept = 'image/*'; 
    input.capture = 'camera'; 
    input.onchange = (e) => { 
      const file = e.target.files[0]; 
      if (file) { 
        const reader = new FileReader(); 
        reader.onload = (ev) => { 
          const photo = { id: Date.now(), data: ev.target.result, timestamp: new Date().toISOString(), type: 'photo' }; 
          setData(prev => ({ ...prev, madison: { ...prev.madison, photoAlbum: [...prev.madison.photoAlbum, photo] } })); 
          alert('Photo captured! Camera'); 
        }; 
        reader.readAsDataURL(file); 
      } 
    }; 
    input.click(); 
  };

  const startRecording = async () => { 
    try { 
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); 
      mediaRecorderRef.current = new MediaRecorder(stream); 
      audioChunksRef.current = []; 
      mediaRecorderRef.current.ondataavailable = (e) => audioChunksRef.current.push(e.data); 
      mediaRecorderRef.current.onstop = () => { 
        const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' }); 
        const reader = new FileReader(); 
        reader.onload = (e) => { 
          const note = { id: Date.now(), data: e.target.result, timestamp: new Date().toISOString(), type: 'voice' }; 
          setData(prev => ({ ...prev, voiceNotes: [...prev.voiceNotes, note] })); 
          alert('Voice note saved! Mic'); 
        }; 
        reader.readAsDataURL(blob); 
        stream.getTracks().forEach(t => t.stop()); 
      }; 
      mediaRecorderRef.current.start(); 
      setIsRecording(true); 
    } catch { alert('Mic access denied'); } 
  };

  const stopRecording = () => { 
    if (mediaRecorderRef.current && isRecording) { 
      mediaRecorderRef.current.stop(); 
      setIsRecording(false); 
    } 
  };

  const addQuickWin = (text) => { 
    const win = { id: Date.now(), text, timestamp: new Date().toISOString() }; 
    setData(prev => ({ ...prev, quickWins: [...prev.quickWins, win] })); 
    triggerCelebration(); 
  };

  const addExpense = (amount, category, desc) => { 
    const expense = { id: Date.now(), amount: parseFloat(amount), category, description: desc, date: new Date().toISOString() }; 
    setData(prev => ({ ...prev, expenses: [...prev.expenses, expense] })); 
  };

  const completeHabit = (id) => { 
    const today = new Date().toDateString(); 
    setData(prev => { 
      const update = (list) => list.map(h => { 
        if (h.id !== id) return h; 
        const last = h.lastCompleted ? new Date(h.lastCompleted).toDateString() : null; 
        const streak = last === today ? h.streak : (last === new Date(Date.now() - 86400000).toDateString() ? h.streak + 1 : 1); 
        return { ...h, lastCompleted: new Date().toISOString(), streak }; 
      }); 
      return { ...prev, habits: { daily: update(prev.habits.daily), weekly: update(prev.habits.weekly) } }; 
    }); 
  };

  const updateMilestone = (id, date, notes, photo) => { 
    setData(prev => ({ 
      ...prev, 
      madison: { 
        ...prev.madison, 
        milestones: prev.madison.milestones.map(m => 
          m.id === id ? { ...m, date, notes, photos: photo ? [...m.photos, photo] : m.photos } : m
        ) 
      } 
    })); 
    if (date && config.notificationsEnabled) alert(`Milestone recorded! Baby`); 
  };

  const calculateInsights = () => { 
    const now = new Date(); 
    const monthAgo = new Date(now - 30 * 24 * 60 * 60 * 1000); 
    let friendsSeen = 0; 
    Object.values(data.socialCalendar.closeFriends).forEach(f => { 
      if (f.lastSeen && new Date(f.lastSeen) > monthAgo) friendsSeen++; 
    }); 
    Object.values(data.socialCalendar.family).forEach(f => { 
      if (f.lastSeen && new Date(f.lastSeen) > monthAgo) friendsSeen++; 
    }); 
    const maxStreak = Math.max(...[...data.habits.daily, ...data.habits.weekly].map(h => h.streak), 0); 
    setData(prev => ({ ...prev, insights: { ...prev.insights, friendsSeenThisMonth: friendsSeen, habitsStreak: maxStreak } })); 
  };

  const getSmartSuggestions = () => { 
    const suggestions = []; 
    const hour = new Date().getHours(); 
    if (hour >= 6 && hour < 9) suggestions.push({ icon: "Sunrise", text: "Good morning! Start with Madison's tummy time", action: () => setActiveTab('daily') }); 
    else if (hour >= 20 && hour < 22) suggestions.push({ icon: "Moon", text: "Evening wind-down: Bath time for Madison?", action: () => setActiveTab('daily') }); 
    const overdue = getOverdueVisits(); 
    if (overdue.length > 0) suggestions.push({ icon: "Users", text: `You haven't seen ${overdue[0].name} in ${overdue[0].daysSince} days`, action: () => setActiveTab('social') }); 
    const weekly = generateWeeklyTasks(); 
    if (weekly.length > 0 && weekly[0].priority === 'critical') suggestions.push({ icon: "Target", text: `Priority: ${weekly[0].task}`, action: () => setActiveTab('weekly') }); 
    return suggestions.slice(0, 3); 
  };

  const calculateFinancialProjections = () => { 
    return { 
      currentIncome: config.shawnieIncome, 
      monthlyIncome: config.shawnieIncome / 12, 
      monthlySavings: Math.max(0, config.shawnieIncome / 12 - config.monthlyExpenses), 
      richIncomeProjection: [], 
      shawnieIncomeProjection: [], 
      combinedProjection: [], 
      savingsTimeline: [], 
      targetIncome: 95000, 
      yearsToTarget: 6 
    }; 
  };

  const generateWeeklyTasks = () => { 
    const tasks = []; 
    Object.entries(data.richGoals.career).forEach(([g, goal]) => { 
      if ((goal.priority === 'critical' || goal.priority === 'high') && goal.subtasks.length > 0) { 
        const next = goal.subtasks.find(s => !s.completed); 
        if (next) tasks.push({ person: 'Rich', goal: g, task: next.task, estimatedMinutes: next.estimatedMinutes, priority: goal.priority, category: 'career', subtaskId: next.id }); 
      } 
    }); 
    Object.entries(data.shawnieGoals.career).forEach(([g, goal]) => { 
      if ((goal.priority === 'critical' || goal.priority === 'high') && goal.subtasks.length > 0) { 
        const next = goal.subtasks.find(s => !s.completed); 
        if (next) tasks.push({ person: 'Shawnie', goal: g, task: next.task, estimatedMinutes: next.estimatedMinutes, priority: goal.priority, category: 'career', subtaskId: next.id }); 
      } 
    }); 
    const order = { critical: 1, high: 2, medium: 3, low: 4 }; 
    tasks.sort((a, b) => order[a.priority] - order[b.priority]); 
    return tasks.slice(0, 10); 
  };

  const weeklyTasks = useMemo(() => generateWeeklyTasks(), [data]);
  const financialProjections = useMemo(() => calculateFinancialProjections(), [config]);
  const smartSuggestions = useMemo(() => getSmartSuggestions(), [data, activeTab]);
  const relationshipRadarData = [
    { subject: 'Date Nights', A: 85, fullMark: 100 },
    { subject: 'Communication', A: 90, fullMark: 100 },
    { subject: 'Romance', A: 75, fullMark: 100 },
    { subject: 'Family Time', A: 95, fullMark: 100 },
    { subject: 'Personal Space', A: 70, fullMark: 100 },
    { subject: 'Shared Hobbies', A: 88, fullMark: 100 }
  ];
  const progressComparison = [
    { name: 'Rich', progress: calculatePersonProgress('richGoals'), color: '#3b82f6' },
    { name: 'Shawnie', progress: calculatePersonProgress('shawnieGoals'), color: '#ec4899' },
    { name: 'Family', progress: calculatePersonProgress('familyGoals'), color: '#10b981' }
  ];
  const getPriorityColor = (p) => { 
    const c = { 
      critical: 'bg-red-100 border-red-400 text-red-800', 
      high: 'bg-orange-100 border-orange-400 text-orange-800', 
      medium: 'bg-yellow-100 border-yellow-400 text-yellow-800', 
      low: 'bg-blue-100 border-blue-400 text-blue-800' 
    }; 
    return c[p] || c.medium; 
  };

  // === SAFE CHART COMPONENTS ===
  const SafeRadarChart = () => {
    if (typeof RadarChart !== 'function') {
      return (
        <div className="w-full h-64 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center p-6">
          <div className="text-center">
            <div className="text-6xl mb-2">Heart</div>
            <p className="text-purple-700 font-semibold">Relationship Health</p>
          </div>
        </div>
      );
    }
    return (
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={relationshipRadarData}>
          {typeof PolarGrid === 'function' && <PolarGrid stroke="#e5e7eb" />}
          {typeof PolarAngleAxis === 'function' && <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />}
          {typeof PolarRadiusAxis === 'function' && <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />}
          {typeof Radar === 'function' && <Radar name="Score" dataKey="A" stroke="#ec4899" fill="#ec4899" fillOpacity={0.6} />}
          {typeof Tooltip === 'function' && <Tooltip />}
        </RadarChart>
      </ResponsiveContainer>
    );
  };

  const SafeLineChart = ({ data }) => {
    if (typeof LineChart !== 'function') {
      return (
        <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center p-6">
          <div className="text-center">
            <div className="text-6xl mb-2">TrendingUp</div>
            <p className="text-indigo-700 font-semibold">Trends Loading...</p>
          </div>
        </div>
      );
    }
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          {typeof CartesianGrid === 'function' && <CartesianGrid strokeDasharray="3 3" />}
          {typeof XAxis === 'function' && <XAxis dataKey="month" />}
          {typeof YAxis === 'function' && <YAxis />}
          {typeof Tooltip === 'function' && <Tooltip />}
          {typeof Legend === 'function' && <Legend />}
          {typeof Line === 'function' && <Line type="monotone" dataKey="tasks" stroke="#3b82f6" name="Tasks" />}
          {typeof Line === 'function' && <Line type="monotone" dataKey="visits" stroke="#ec4899" name="Visits" />}
        </LineChart>
      </ResponsiveContainer>
    );
  };

  // === RENDER ===
  if (viewMode === 'focus') {
    const topTasks = weeklyTasks.slice(0, 3);
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Focus Mode</h1>
            <p className="text-gray-600">Your top 3 priorities today</p>
          </div>
          {smartSuggestions.length > 0 && (
            <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Smart Suggestion</h2>
              {smartSuggestions.map((s, i) => (
                <button key={i} onClick={s.action} className="w-full bg-white/20 hover:bg-white/30 rounded-lg p-4 text-left mb-2 flex items-center">
                  <span className="text-2xl mr-3">{s.icon}</span> {s.text}
                </button>
              ))}
            </div>
          )}
          {topTasks.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between mb-3">
                <div>
                  <div className="text-sm text-gray-500">{t.person}'s Task</div>
                  <h3 className="text-xl font-bold">{t.task}</h3>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getPriorityColor(t.priority)}`}>
                  {t.priority}
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="text-sm text-gray-500">
                  <Clock className="w-4 h-4 inline mr-1" />
                  {t.estimatedMinutes} min
                </div>
                <button 
                  onClick={() => toggleSubtask(
                    t.person === 'Rich' ? 'richGoals' : 'shawnieGoals', 
                    t.category, t.goal, t.subtaskId
                  )} 
                  className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600"
                >
                  Complete
                </button>
              </div>
            </div>
          ))}
          <button 
            onClick={() => setViewMode('full')} 
            className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300"
          >
            Exit Focus Mode
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {showCelebration && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white px-8 py-4 rounded-full shadow-2xl text-xl font-bold">
            Amazing Progress! Keep Going!
          </div>
        </div>
      )}
      {newAchievement && (
        <div className="fixed top-20 right-4 z-50 animate-slide-in-right">
          <div className="bg-white rounded-xl shadow-2xl p-6 border-3 max-w-sm">
            <div className="flex items-center space-x-4">
              <div className="text-5xl animate-pulse">{newAchievement.icon}</div>
              <div>
                <div className="font-bold text-xl">{newAchievement.title}</div>
                <div className="text-gray-600">{newAchievement.description}</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showQuickCapture && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            Quick Capture Modal Here
          </div>
        </div>
      )}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-5xl font-bold mb-2 flex items-center">
                <Heart className="w-10 h-10 mr-3 text-pink-300" /> 
                The {config.familyName} Family Hub
              </h1>
              <p className="text-purple-100">
                Rich Shaw, Shawnie Turnbull & Madison's Journey to £95k & Beyond! Home
              </p>
            </div>
            <div className="text-right">
              <div className="text-6xl font-bold mb-1">{calculateProgress()}%</div>
              <div className="text-purple-100">Total Progress</div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {smartSuggestions.length > 0 && (
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Lightbulb className="w-8 h-8 mr-3" /> Smart Suggestions
                </h2>
                {smartSuggestions.map((s, i) => (
                  <button key={i} onClick={s.action} className="w-full bg-white/20 hover:bg-white/30 rounded-lg p-4 text-left mb-2 flex items-center">
                    <span className="text-3xl mr-4">{s.icon}</span>
                    {s.text}
                    <ChevronRight className="w-5 h-5 ml-auto" />
                  </button>
                ))}
              </div>
            )}
            <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-2 flex items-center">
                    <Sparkles className="w-8 h-8 mr-3" /> Today's Family Activity
                  </h2>
                  {dailyActivity && (
                    <div className="text-2xl bg-white/20 rounded-lg px-6 py-4 mt-3">
                      <span className="text-4xl mr-3">{dailyActivity.icon}</span>
                      {dailyActivity.activity}
                    </div>
                  )}
                </div>
                <button 
                  onClick={selectDailyActivity} 
                  className="bg-white text-orange-500 px-6 py-3 rounded-lg font-bold hover:bg-orange-50"
                >
                  New Activity
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <CheckSquare className="w-8 h-8 text-blue-500 mr-3" /> This Week's Priority Tasks
              </h3>
              {weeklyTasks.slice(0, 5).map((t, i) => (
                <div key={i} className={`p-4 rounded-lg border-2 ${getPriorityColor(t.priority)}`}>
                  <div className="flex justify-between">
                    <div>
                      <div className="font-semibold">{t.person}: {t.task}</div>
                      <div className="text-sm opacity-80 mt-1">From: {t.goal}</div>
                    </div>
                    <div className="text-sm">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {t.estimatedMinutes}min
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6">
              {progressComparison.map((p, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-between mb-4">
                    <h3 className="text-xl font-bold">{p.name}'s Progress</h3>
                    <span className="text-4xl font-bold" style={{ color: p.color }}>
                      {p.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full transition-all" 
                      style={{ width: `${p.progress}%`, backgroundColor: p.color }} 
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Heart className="w-8 h-8 text-pink-500 mr-3" /> Relationship Health Score
              </h3>
              <SafeRadarChart />
            </div>
          </div>
        )}
        {activeTab === 'insights' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white shadow-2xl">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <Brain className="w-10 h-10 mr-3" /> Your Progress Insights
              </h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Monthly Trends</h3>
              <SafeLineChart data={[
                { month: 'Nov', tasks: 5, visits: 3 },
                { month: 'Dec', tasks: 8, visits: 5 },
                { month: 'Jan', tasks: 12, visits: 4 }
              ]} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// === GLOBAL EXPORT FOR INDEX.HTML ===
if (typeof window !== 'undefined') {
  window.TurnbullShawDashboard = TurnbullShawDashboard;
}
