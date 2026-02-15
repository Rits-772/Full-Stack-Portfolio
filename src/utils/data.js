import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart, 
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
    Palette,
    Cpu,
} from "lucide-react";

import {FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/portfolio1.jpg";
import PROJECT_IMG_2 from "../assets/images/portfolio2.jpg";
import PROJECT_IMG_3 from "../assets/images/portfolio3.jpg";
import PROJECT_IMG_4 from "../assets/images/portfolio4.jpg";
import PROJECT_IMG_5 from "../assets/images/portfolio5.jpg";
import PROJECT_IMG_6 from "../assets/images/portfolio6.jpg";
import PROFILE_IMAGE from "../assets/images/profile-img.jpg";

export const PROFILE_INFO = {
    name: "Ritvik Sharma",
    image: PROFILE_IMAGE,
    title: "Backend & Web Developer",
    subTitle: "Crafting efficient, scalable, and distinctive digital solutions.",
    description: "I'm a passionate developer with a focus on building efficient and scalable web applications. I enjoy solving complex problems and continuously learning new technologies to enhance my skills.",
};

export const SKILLS_CATEGORY = [
    {
        title: "Coding Skills",
        icon: Code2,
        description: "Core programming languages and engineering fundamentals",
        skills: [
            {name: "Python", level: 90, color: "bg-blue-500"},
            {name: "Java", level: 88, color: "bg-yellow-500"},
            {name: "JavaScript", level: 85, color: "bg-yellow-400"},
            {name: "Node.js", level: 85, color: "bg-green-500"},
            {name: "React", level: 90, color: "bg-cyan-400"},
        ],
    },
    {
        title: "Backend & Infra",
        icon: Server,
        description: "Building robust and scalable server-side architectures",
        skills: [
            {name: "REST APIs", level: 90, color: "bg-orange-500"},
            {name: "MongoDB", level: 88, color: "bg-green-600"},
            {name: "PostgreSQL", level: 78, color: "bg-blue-700"},
            {name: "Docker", level: 82, color: "bg-blue-600"},
            {name: "GraphQL", level: 75, color: "bg-pink-600"},
        ],
    },
    {
        title: "Professional",
        icon: Cpu,
        description: "Specialized expertise in modern computing domains",
        skills: [
            {name: "Backend Architecture", level: 89, color: "bg-indigo-500"},
            {name: "Web Development", level: 76, color: "bg-blue-400"},
            {name: "AI & ML", level: 70, color: "bg-purple-500"},
            {name: "Web Designing", level: 77, color: "bg-pink-400"},
            {name: "Graphic Design", level: 59, color: "bg-orange-400"},
        ],
    },
    {
        title: "Toolchain",
        icon: Cloud,
        description: "Essential tools for the modern development workflow",
        skills: [
            {name: "Git", level: 95, color: "bg-purple-600"},
            {name: "Tailwind CSS", level: 87, color: "bg-cyan-500"},
            {name: "Vite", level: 86, color: "bg-purple-400"},
            {name: "Figma", level: 80, color: "bg-pink-500"},
            {name: "Vercel", level: 90, color: "bg-orange-600"},
        ],
    },
];

export const TECH_STACK = [
    "JavaScript", "HTML5", "CSS3", "Sass", "Webpack", "Vite", "Jest", "Cypress", "Figma", "Adobe XD", "Notion", "Slack",
];

export const STATS = [
    {number: "50+", label: "Projects Completed" },
    {number: "3+", label: "Years Experience" },
    {number: "20+", label: "Technologies" },
    {number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
        image: PROJECT_IMG_1,
        tags: ["React", "Tailwind", "Framer Motion"],
        liveUrl: "https://github.com/Rits-772",
        githubUrl: "https://github.com/Rits-772",
        githubRepo: "E-commerce-Platform",
        featured: false,
        category: "Full Stack"
    },
    {
        id: 2,
        title: "Blog App with AI post Generator",
        description: "A modern blog application with AI-powered post generation and user-friendly interface.",
        image: PROJECT_IMG_2,
        tags: ["React", "Node.js", "Tailwind", "MongoDB"],
        liveUrl: "https://github.com/Rits-772",
        githubUrl: "https://github.com/Rits-772",
        githubRepo: "AI-Blog-App",
        featured: true,
        category: "Full Stack"
    },
    {
        id: 3,
        title: "Task Management App",
        description: "A productivity app to manage tasks, set deadlines, and track progress with a sleek UI.",
        image: PROJECT_IMG_3,
        tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
        liveUrl: "https://github.com/Rits-772",
        githubUrl: "https://github.com/Rits-772",
        githubRepo: "Task-Manager",
        featured: true,
        category: "Web App",
    },
    {
        id: 4,
        title: "AI Powered Interview Prep App",
        description: "An AI-powered interview preparation app that generates questions and evaluates answers.",
        image: PROJECT_IMG_4,
        tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
        liveUrl: "https://github.com/Rits-772",
        githubUrl: "https://github.com/Rits-772",
        githubRepo: "AI-Interview-Prep",
        featured: false,
        category: "Web App",
    },
    {
        id: 5,
        title: "Resume Builder App",
        description: "A user-friendly resume builder app with customizable templates and real-time preview.",
        image: PROJECT_IMG_5,
        tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
        liveUrl: "https://github.com/Rits-772",
        githubUrl: "https://github.com/Rits-772",
        githubRepo: "Resume-Builder",
        featured: false,
        category: "Web App",
    },
    {
        id: 6,
        title: "Expense Tracker App",
        description: "A simple and effective expense tracker app to manage personal finances and budgets.",
        image: PROJECT_IMG_6,
        tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
        liveUrl: "https://github.com/Rits-772",
        githubUrl: "https://github.com/Rits-772",
        githubRepo: "Expense-Tracker",
        featured: false,
        category: "Web App",
    },
];

export const JOURNEY_STEPS = [
    {
        year: "2021",
        title: "Started My Journey",
        company: "Self-taught",
        description: "During Covid, Began my journey into the world of programming, learning Java and Python basics.",
        icon: Code2,
        color: "bg-blue-500",
    },
    {
        year: "2023",
        title: "First Website Developed",
        company: "Freelance",
        description: "Developed my first website using Python and Streamlit for a local business.",
        icon: Briefcase,
        color: "bg-green-500",
    },
    {
        year: "2024",
        title: "First Web App Released",
        company: "Freelance",
        description: "Released my first full-stack web application using React, Node.js, and MongoDB.",
        icon: Rocket,
        color: "bg-purple-500",
    },
    {
        year: "2025",
        title: "Ongoing Learning",
        company: "Self-taught",
        description: "Continuously learning new technologies and improving my skills in web development.",
        icon: BookOpen,
        color: "bg-yellow-500",
    },
];
    
export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Passionate about creating intuitive and engaging user experiences that delight users.",
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Enjoy tackling complex problems and finding elegant solutions through code.",
    },
    {
        icon: Zap,
        title: "Continuous Learning",
        description: "Committed to lifelong learning and staying updated with the latest industry trends.",
    },
];

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com/Rits-772",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "Instagram",
        icon: FiInstagram,
        url: "https://www.instagram.com/Ritviks772/",
        color: "hover:text-pink-400",
        bgColor: "hover:bg-pink-500/10",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10",
    },
    {
        name: "Email",
        icon: Mail,
        url: "mailto:shub7r2@gmail.com",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-500/10",
    },
];

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "Gorakhpur, UP, India",
    },
    {
        icon: Mail,
        label: "Email",
        value: "shub7r2@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 9125122440",
    },
];
