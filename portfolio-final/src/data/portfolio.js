import aaryaaImg from "../assets/aaryaa.png";
import turfImg from "../assets/turf1.png";
import mtrmImg from "../assets/mtrm.png";
import foodImg from "../assets/food1.png";

export const personal = {
  name: "Sanjay Kumar S",
  role: "Java Full Stack Developer",
  tagline: "Building scalable systems from backend to frontend.",
  bio: "Final-year Computer Science student specializing in Cyber Security at Sri Krishana College of Engineering and Technology. I architect production-grade full stack applications with Spring Boot and React, write efficient algorithms, and care deeply about clean code and system design.",
  email: "sanjay413607@gmail.com",
  github: "https://github.com/SANJAYKUMAR-05",
  linkedin: "https://www.linkedin.com/in/sanjay4136",
  leetcode: "https://leetcode.com/u/kumar413607/",
  cgpa: "8.34",
  college: "Sri Krishna College of Engineering and Technology",
  degree: "B.E. Computer Science and Engineering (Cyber Security)",
  batch: "2023 – 2027",
  phone: "+91 82480 16475"
};

export const stats = [
  { value: "650+", label: "DSA Problems Solved" },
  { value: "4", label: "Enterprise Projects" },
  { value: "20+", label: "REST APIs Built" },
  { value: "15+", label: "Certifications" },
];

export const skills = [
  {
    category: "Frontend Development",
    color: "#2563eb",
    bg: "#eff6ff",
    items: ["React JS", "JavaScript", "HTML5", "CSS3","Figma"],
  },
  {
    category: "Backend Engineering",
    color: "#7c3aed",
    bg: "#f5f3ff",
    items: ["Java", "Spring Boot", "REST APIs", "Microservices","System Design"],
  },
  {
    category: "Auth & Security",
    color: "#0369a1",
    bg: "#f0f9ff",
    items: ["JWT Authentication", "Role-Based Access", "Cyber Security"],
  },
  {
    category: "Database Systems",
    color: "#15803d",
    bg: "#f0fdf4",
    items: ["MySQL", "JPA / Hibernate", "Query Optimization"],
  },
  {
    category: "Developer Tools",
    color: "#b45309",
    bg: "#fffbeb",
    items: ["Git", "GitHub", "VS Code", "Postman", "IntelliJ IDEA"],
  },
  {
    category: "Problem Solving & DSA",
    color: "#be185d",
    bg: "#fdf2f8",
    items: ["C++", "Java", "Data Structures", "Algorithms", "Competitive Programming"],
  },
];

export const dsaAlgorithms = [
  {
    name: "Binary Search",
    tag: "O(log n)",
    color: "#2563eb",
    code: `// Binary Search — O(log n)
int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
  },
  {
    name: "BFS / Graph Traversal",
    tag: "O(V + E)",
    color: "#7c3aed",
    code: `// BFS — O(V + E)
void bfs(int start, List<List<Integer>> adj) {
    boolean[] visited = new boolean[adj.size()];
    Queue<Integer> queue = new LinkedList<>();
    visited[start] = true;
    queue.offer(start);
    while (!queue.isEmpty()) {
        int node = queue.poll();
        for (int neighbor : adj.get(node)) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.offer(neighbor);
            }
        }
    }
}`,
  },
  {
    name: "Dynamic Programming",
    tag: "Memoization",
    color: "#0369a1",
    code: `// Longest Common Subsequence — DP
int lcs(String s1, String s2) {
    int m = s1.length(), n = s2.length();
    int[][] dp = new int[m + 1][n + 1];
    for (int i = 1; i <= m; i++)
        for (int j = 1; j <= n; j++)
            dp[i][j] = s1.charAt(i-1) == s2.charAt(j-1)
                ? dp[i-1][j-1] + 1
                : Math.max(dp[i-1][j], dp[i][j-1]);
    return dp[m][n];
}`,
  },
];

export const dsaStats = [
  { value: "650+", label: "Problems Solved" },
  { value: "LeetCode", label: "Primary Platform" },
  { value: "Trees & DP", label: "Core Strengths" },
  { value: "C++ / Java", label: "Languages" },
];

export const projects = [
    {
  id: 1,
  title: "Aaryaa Network",
  image: aaryaaImg,
  subtitle: "Best Internet Provider Agency in Town",
  description:
    "Production-ready React.js website for a fiber broadband ISP serving 2,000+ customers across homes, businesses, hotels, and public venues. Engineered with component-based architecture, client-side routing, and REST API integration — ensuring seamless cross-device compatibility and fast load performance.",
  tech: ["React.js", "REST APIs", "HTML", "CSS", "Figma"],
  features: [
    "Ultra-Fast Fiber Internet Plans",
    "OTT Entertainment & IPTV",
    "Component-Based Architecture",
    "REST API Integration",
    "Cross-Device Compatibility",
    "Production Deployment",
  ],
  // color: "#0369a1",
  color: "#651e1efa",
  // accent: "#f0f9ff",
  accent: "#651e1efa",
  github: null,
  demo: "https://www.aaryaanetwork.com",
  type: "Freelance Project",   // ← this drives the highlight badge
},
  {
  id: 2,
  title: "Turf Booking System",
  image: turfImg,
  subtitle: "Web-Based Slot Reservation Platform",
  description:
    "Web-based turf reservation platform with real-time slot availability and conflict-free online booking. Exposes RESTful APIs for booking, scheduling, and user management — secured with JWT authentication to ensure only authorized users can reserve and manage slots.",
  tech: ["Java", "Spring Boot", "MySQL", "REST APIs", "JWT", "HTML", "CSS"],
  features: [
    "Real-Time Slot Availability",
    "Online Booking & Scheduling",
    "JWT Authentication",
    "Conflict Prevention Logic",
    "RESTful API Design",
    "User Management System",
  ],
  color: "#0dfd0d",
  accent: "#14532D",
  github: null,
  demo: "#",
  type: "Backend Project",
},
   {
    id: 3,
    title: "MAATRAM KK360",
      image: mtrmImg,
    subtitle: "Enterprise Placement Management Platform",
    description:
      "Production-grade placement management system serving students and administrators. Features a role-based architecture with JWT-secured endpoints, a real-time analytics dashboard, assessment engine, and comprehensive placement drive management — built to handle enterprise-scale data.",
    tech: ["React.js", "Spring Boot", "JWT", "MySQL"],
    features: [
      "JWT Authentication & RBAC",
      "Admin & Student Dashboards",
      "Assessment Engine",
      "Analytics Dashboard",
      "Placement Drive Management",
      "Resume & Resource System",
    ],
    // color: "#393939",
    color: "#be8d0e",
    accent: "#FFD54A",
    // accent: "#FAC610",
    github: null,
    demo: "#",
    type: "Hackathon Project",
  },
  {
  id: 4,
  title: "FOOD DELIVERY SYSTEM",
  image: foodImg,
  subtitle: "Secure Food Ordering & Restaurant Management API",
  description:
    "Scalable backend system designed for food ordering and restaurant management operations. Built with secure JWT authentication, role-based authorization, and optimized REST APIs to manage users, restaurants, menus, and orders efficiently using Spring Boot and MySQL.",
  tech: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL"],
  features: [
    "JWT Authentication & Authorization",
    "Role-Based Access Control",
    "Restaurant & Menu Management",
    "Order Processing APIs",
    "Secure User Management",
    "MySQL Database Integration",
  ],
  color: "#b9490d",
  accent: "#FF9F1C",
  github: null,
  demo: "#",
  type: "Backend API System",
}
];

export const achievements = [
  {
    icon: "code",
    title: "600+ DSA Problems",
    desc: "Consistent problem solving across LeetCode covering arrays, trees, graphs, DP, and more.",
    tag: "Competitive Programming",
  },
  {
    icon: "azure",
    title: "Microsoft Azure Fundamentals",
    desc: "Certified in cloud computing fundamentals, services, and Azure ecosystem.",
    tag: "Cloud Certification",
  },
  {
    icon: "google",
    title: "Google Cybersecurity Foundations",
    desc: "Completed Google's professional cybersecurity certification program.",
    tag: "Security",
  },
{
  icon: "lightbulb",
  title: "Participant – Smart India Hackathon (SIH)",
  desc: "Collaborated on innovative real-world problem solving during India’s premier national hackathon.",
  tag: "Hackathon",
},
  {
    icon: "cisco",
    title: "Cisco Cybersecurity Certification",
    desc: "Earned Cisco certification in network security and cybersecurity principles.",
    tag: "Networking",
  },
  {
    icon: "trophy",
    title: "Runner-Up – Neo Codeathon",
    desc: "Secured second place in a competitive coding event among top engineering students.",
    tag: "Competition",
  },
  {
    icon: "patent",
    title: "Indian Patent Filed",
    desc: "Filed an innovation patent for a novel technical contribution in computer science.",
    tag: "Innovation",
  },
  {
    icon: "teach",
    title: "Teaching Experience",
    desc: "Mentored peers in DSA, Java, and full stack development concepts.",
    tag: "Leadership",
  }
];

export const timeline = [
{
  year: "2022 - 2023",
  title: "TNGR Memorial Higher Secondary School",
  desc: "Completed higher secondary education with 94% marks, scoring 564/600 while building a strong academic foundation.",
  type: "edu",
},
  {
    year: "2023",
    title: "Joined Sri Krishna College of Engineering",
    desc: "Began B.E. in Computer Science with Cyber Security specialization. Started exploring Java and data structures systematically.",
    type: "edu",
  },
  {
    year: "2023-2024",
    title: "Full Stack Development Journey",
    desc: "Learned Spring Boot and React.js in parallel. Built first REST APIs and integrated JWT authentication into production applications.",
    type: "dev",
  },
  {
    year: "2024",
    title: "Freelance Project: Aaryaa Network",
    desc: "Designed and developed a production-ready broadband service platform for an ISP serving 2,000+ customers with responsive UI and scalable architecture.",
    type: "dev",
  },
  {
    year: "2024–25",
    title: "Certifications & Recognition",
    desc: "Earned Microsoft Azure Fundamentals, Google Cybersecurity, Cisco certifications. Filed an Indian Patent. Won Runner-Up at Neo Codeathon.",
    type: "achieve",
  },
  {
    year: "2025",
    title: "DSA Foundation & Competitive Programming",
    desc: "Dedicated hundreds of hours to mastering data structures and algorithms in Jav a and C++. Reached 400+ problems on LeetCode.",
    type: "skill",
  },
  {
    year: "2027",
    title: "Expected Graduation",
    desc: "Graduating with B.E. CSE (Cyber Security) with strong full stack and backend engineering expertise, ready for product engineering roles.",
    type: "edu",
  },
];
